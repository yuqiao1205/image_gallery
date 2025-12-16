
'use server'

import { v2 as cloudinary } from 'cloudinary';
import { ObjectId } from 'mongodb';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { clientPromise } from './mongodb.js';
import { authenticate } from './auth.js';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(formData) {
  const file = formData.get('file');
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({ folder: 'image_gallery' }, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    }).end(buffer);
  });

  const client = await clientPromise;
  const db = client.db('image_gallery');
  const collection = db.collection('images');
  await collection.insertOne({
    url: result.secure_url,
    title: formData.get('title'),
    description: formData.get('description'),
    time: new Date(),
  });

  redirect('/admin/dashboard');
}

export async function getImages() {
  const client = await clientPromise;
  const db = client.db('image_gallery');
  const collection = db.collection('images');
  const images = await collection.find({}).sort({ time: -1 }).toArray();
  return images.map(img => ({ ...img, _id: img._id.toString() }));
}

export async function getImagesCount() {
  const client = await clientPromise;
  const db = client.db('image_gallery');
  const collection = db.collection('images');
  return collection.countDocuments({});
}

export async function updateImage(formData) {
  const id = formData.get('id');
  const title = formData.get('title');
  const description = formData.get('description');
  const file = formData.get('file');

  if (!id) throw new Error('Missing image id');
  if (!title) throw new Error('Missing title');

  const patch = {
    title,
    description,
    updatedAt: new Date(),
  };

  // Optional file replacement
  if (file && typeof file.arrayBuffer === 'function' && file.size > 0) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: 'image_gallery' }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(buffer);
    });

    patch.url = result.secure_url;
  }

  const client = await clientPromise;
  const db = client.db('image_gallery');
  const collection = db.collection('images');
  await collection.updateOne({ _id: new ObjectId(id) }, { $set: patch });

  redirect('/admin/dashboard');
}

export async function deleteImage(formData) {
  const id = formData.get('id');
  const client = await clientPromise;
  const db = client.db('image_gallery');
  const collection = db.collection('images');
  await collection.deleteOne({ _id: new ObjectId(id) });
  redirect('/admin/dashboard');
}

export async function getImage(id) {
  const client = await clientPromise;
  const db = client.db('image_gallery');
  const collection = db.collection('images');
  const image = await collection.findOne({ _id: new ObjectId(id) });
  return image ? { ...image, _id: image._id.toString() } : null;
}

export async function login(formData) {
  const username = formData.get('username');
  const password = formData.get('password');

  if (authenticate(username, password)) {
    const cookieStore = await cookies();
    cookieStore.set('admin', 'true', { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    redirect('/admin/dashboard');
  } else {
    // For simplicity, redirect back or handle error
    redirect('/admin/login?error=1');
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin');
  redirect('/admin/login');
}
