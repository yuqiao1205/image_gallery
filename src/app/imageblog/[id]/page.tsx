import Link from "next/link";
import { getImage } from "../../../lib/actions";
import styles from "./page.module.css";

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ImageBlog({ params }: PageProps) {
  const { id } = await params;
  const image = await getImage(id);

  const createdAt = image?.time ? new Date(image.time) : null;

  if (!image) {
    return (
      <main className={styles.notFoundPage}>
        <div className={styles.notFoundCard}>
          <h1 className={styles.notFoundTitle}>Image not found</h1>
          <p className={styles.notFoundText}>
            The image you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link href="/" className={styles.backButton}>
            ← Back to gallery
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <div className={styles.headerRow}>
          <Link href="/" className={styles.backButton}>
            ← Back to gallery
          </Link>
          <a className={styles.openOriginal} href={image.url} target="_blank" rel="noreferrer">
            Open original
          </a>
        </div>

        <div className={styles.grid}>
          <div className={styles.imageColumn}>
            <div className={styles.imageCard}>
              <img src={image.url} alt={image.title} className={styles.mainImage} />
            </div>

            <div className={styles.descriptionPanel}>
              <h2 className={styles.descriptionHeading}>Description</h2>
              {image.description ? (
                <p className={styles.descriptionText}>{image.description}</p>
              ) : (
                <p className={styles.descriptionMuted}>No description provided for this piece.</p>
              )}
            </div>
          </div>

          <aside className={styles.infoCard}>
            <h1 className={styles.imageTitle}>{image.title}</h1>

            <dl className={styles.meta}>
              <div className={styles.metaItem}>
                <dt>Created</dt>
                <dd>
                  {createdAt
                    ? createdAt.toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                      })
                    : '—'}
                </dd>
              </div>
              <div className={styles.metaItem}>
                <dt>Type</dt>
                <dd>Artwork</dd>
              </div>
            </dl>

            <div className={styles.actions}>
              <Link href="/" className={styles.secondaryBtn}>
                Browse more
              </Link>
              <Link href="/about" className={styles.secondaryBtn}>
                About the artist
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
