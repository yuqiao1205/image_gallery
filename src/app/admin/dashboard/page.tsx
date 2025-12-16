import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getImages, uploadImage, updateImage, deleteImage, logout } from '../../../lib/actions';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

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
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Admin Dashboard</h1>
        <form action={logout}>
          <button className={styles.logoutButton}>Logout</button>
        </form>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Upload New Image</h2>
        <form action={uploadImage} className={styles.uploadForm}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Image File</label>
            <input name="file" type="file" required className={styles.fileInput} accept="image/*" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Title</label>
            <input name="title" placeholder="Enter image title" required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Description (Optional)</label>
            <input name="description" placeholder="Enter image description" className={styles.input} />
          </div>
          <button type="submit" className={styles.uploadButton}>Upload Image</button>
        </form>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Manage Images ({images.length})</h2>
        {images.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>No images uploaded yet</h3>
            <p>Upload your first image to get started!</p>
          </div>
        ) : (
          <div className={styles.imageGrid}>
            {images.map((img) => (
              <div key={img._id} className={styles.imageCard}>
                <img src={img.url} alt={img.title} className={styles.imagePreview} />
                <div className={styles.imageInfo}>
                  <h3 className={styles.imageTitle}>{img.title}</h3>
                  {img.description && (
                    <p className={styles.imageDescription}>{img.description}</p>
                  )}
                  <div className={styles.imageActions}>
                    <form action={deleteImage}>
                      <input name="id" value={img._id} type="hidden" />
                      <button className={styles.deleteButton}>Delete</button>
                    </form>
                  </div>

                  <details className={styles.editDetails}>
                    <summary className={styles.editSummary}>Edit details</summary>
                    <form action={updateImage} className={styles.editForm}>
                      <input name="id" value={img._id} type="hidden" />

                      <div className={styles.editGrid}>
                        <div className={styles.formGroup}>
                          <label className={styles.label}>Title</label>
                          <input
                            name="title"
                            required
                            defaultValue={img.title}
                            className={styles.input}
                          />
                        </div>

                        <div className={styles.formGroup}>
                          <label className={styles.label}>Description</label>
                          <textarea
                            name="description"
                            defaultValue={img.description || ''}
                            className={styles.textarea}
                            rows={3}
                          />
                        </div>

                        <div className={styles.formGroup}>
                          <label className={styles.label}>Replace image (optional)</label>
                          <input name="file" type="file" className={styles.fileInput} accept="image/*" />
                          <div className={styles.hint}>
                            If you choose a new file, the image URL will be replaced.
                          </div>
                        </div>
                      </div>

                      <div className={styles.editActions}>
                        <button className={styles.saveButton} type="submit">
                          Save changes
                        </button>
                      </div>
                    </form>
                  </details>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
