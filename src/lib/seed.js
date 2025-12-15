import clientPromise from './mongodb.js';
import { fakeImages, fakeUsers } from './fake-data.js';

async function seedDatabase() {
  try {
    const client = await clientPromise;
    const db = client.db('image_gallery');

    // Seed images
    const imagesCollection = db.collection('images');
    await imagesCollection.deleteMany({}); // Clear existing
    await imagesCollection.insertMany(fakeImages);
    console.log('Images seeded successfully');

    // Seed users
    const usersCollection = db.collection('users');
    await usersCollection.deleteMany({}); // Clear existing
    await usersCollection.insertMany(fakeUsers);
    console.log('Users seeded successfully');

    console.log('Database seeded!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }
}

seedDatabase();