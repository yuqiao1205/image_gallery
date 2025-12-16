import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';

export default function About() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <p className={styles.kicker}>Artist • Visual storyteller</p>
              <h1 className={styles.title}>About</h1>
              <p className={styles.subtitle}>
                I create images that feel warm, curious, and a little surreal—mixing texture, light,
                and clean composition. This site is a living archive of recent work and ongoing
                experiments.
              </p>

              <div className={styles.ctaRow}>
                <Link className={styles.primaryBtn} href="/">
                  View gallery
                </Link>
                <a className={styles.secondaryBtn} href="mailto:artist@example.com">
                  Email me
                </a>
              </div>

              <dl className={styles.meta}>
                <div className={styles.metaItem}>
                  <dt>Focus</dt>
                  <dd>Acrylic · Watercolor · Impressionism · Design · Web Development</dd>
                </div>
                <div className={styles.metaItem}>
                  <dt>Based</dt>
                  <dd>San Francisco, CA</dd>
                </div>
              </dl>
            </div>

            <div className={styles.heroCard}>
              <div className={styles.photoWrapper}>
                <Image
                  src="/yandrinking.jpg"
                  alt="Portrait illustration"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 420px"
                  className={styles.photo}
                />
                <div className={styles.photoBadge} aria-hidden="true">
                  <Image src="/articon.png" alt="" width={44} height={44} />
                </div>
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>Artist statement</h2>
                <p className={styles.cardText}>
                  My work explores everyday symbols—windows, hands, plants, and small artifacts—and
                  re-contextualizes them into quiet narratives.
                </p>
                <ul className={styles.chips}>
                  <li>Texture</li>
                  <li>Color</li>
                  <li>Light</li>
                  <li>Typography</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionGrid}>
            <div>
              <h2 className={styles.h2}>What you’ll find here</h2>
              <p className={styles.p}>
                New uploads land in the gallery first, and I occasionally write short notes about
                process inside each piece.
              </p>
            </div>

            <div className={styles.panel}>
              <h3 className={styles.h3}>Commission / collaboration</h3>
              <p className={styles.p}>
                Available for cover art, editorial illustration, brand imagery, and small product
                launches.
              </p>
              <div className={styles.links}>
                <a className={styles.link} href="mailto:artist@example.com">
                  laurenpy1226@gmail.com
                </a>
                <span className={styles.dot} aria-hidden="true">
                  •
                </span>
                <a className={styles.link} href="https://yuqiao1205.github.io/portfolio/" rel="noreferrer">
                  Portfolio site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
