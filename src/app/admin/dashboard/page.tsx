import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getImages, uploadImage, deleteImage, logout } from '../../../lib/actions';

interface Image {
  _id: string;
  url: string;
  title: string;
  description?: string;
  time: Date;
}

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const admin = cookieStore.get('admin');
  if (!admin) redirect('/admin/login');

  const images = await getImages() as Image[];

  return (
    <main style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <form action={logout}>
        <button>Logout</button>
      </form>

      <h2>Upload New Image</h2>
      <form action={uploadImage} encType="multipart/form-data">
        <div>
          <input name="file" type="file" required />
        </div>
        <div>
          <input name="title" placeholder="Title" required />
        </div>
        <div>
          <input name="description" placeholder="Description" />
        </div>
        <button>Upload</button>
      </form>

      <h2>Manage Images</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {images.map((img) => (
          <li key={img._id} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <img src={img.url} alt={img.title} style={{ width: '100px', marginRight: '10px' }} />
            <div>
              <p><strong>{img.title}</strong></p>
              <p>{img.description}</p>
              <form action={deleteImage} method="post" style={{ display: 'inline' }}>
                <input name="id" value={img._id} type="hidden" />
                <button>Delete</button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}