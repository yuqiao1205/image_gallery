import Link from "next/link";
import { getImages, getImagesCount } from "../lib/actions";
import styles from "./page.module.css";

export const dynamic = 'force-dynamic';

interface Image {
  _id: string;
  url: string;
  title: string;
  description?: string;
  time: Date | string;
}

export default async function Home() {
  const images = await getImages() as Image[];
  const imagesCount = await getImagesCount();

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className={styles.kicker}>Personal portfolio</p>
              <h1 className={styles.title}>Lauren&apos;s Art Gallery</h1>
              <p className={styles.subtitle}>
                An evolving collection of hand-drawn artworks, digital experiments, and creative
                illustrations.
              </p>

              <div className={styles.ctaRow}>
                <a className={styles.primaryBtn} href="#gallery">
                  Browse latest
                </a>
                <Link className={styles.secondaryBtn} href="/about">
                  About
                </Link>
              </div>
            </div>

            <div className={styles.statsCard}>
              <div className={styles.stat}>
                <div className={styles.statValue}>{imagesCount}</div>
                <div className={styles.statLabel}>Pieces</div>
              </div>
              <div className={styles.statDivider} aria-hidden="true" />
              <div className={styles.stat}>
                <div className={styles.statValue}>2025</div>
                <div className={styles.statLabel}>Now</div>
              </div>
              <div className={styles.statDivider} aria-hidden="true" />
              <div className={styles.stat}>
                <div className={styles.statValue}>Mixed</div>
                <div className={styles.statLabel}>Media</div>
              </div>

              <p className={styles.statsNote}>
                New uploads appear at the top. Click any piece to view details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.galleryHeader}>
            <div>
              <h2 className={styles.h2}>Latest work</h2>
              <p className={styles.lede}>A curated grid of recent uploads and highlights.</p>
            </div>

            <Link className={styles.smallLink} href="/about">
              Artist statement →
            </Link>
          </div>

          {images.length === 0 ? (
            <div className={styles.empty}>
              <h3 className={styles.emptyTitle}>No images yet</h3>
              <p className={styles.emptyText}>
                Once you upload from the admin dashboard, your latest pieces will appear here.
              </p>
              <Link className={styles.secondaryBtn} href="/admin/login">
                Go to admin
              </Link>
            </div>
          ) : (
            <div className={styles.galleryGrid}>
              {images.map((img) => (
                <Link key={img._id} href={`/imageblog/${img._id}`} className={styles.card}>
                  <div className={styles.thumb}>
                    {/* Keep <img> to avoid requiring next/image remotePatterns for Cloudinary */}
                    <img src={img.url} alt={img.title} loading="lazy" />
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardTitle}>{img.title}</div>
                    <div className={styles.cardMeta}>
                      {new Date(img.time).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                      })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
