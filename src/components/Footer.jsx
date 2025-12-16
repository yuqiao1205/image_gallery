import Link from 'next/link';

import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.topCta} aria-label="Get in touch">
          <div className={styles.topCtaText}>
            <p className={styles.kicker}>Commission / collaboration</p>
            <h2 className={styles.ctaTitle}>Let’s build something beautiful.</h2>
            <p className={styles.ctaSubtitle}>
              Available for cover art, editorial illustration, and small brand launches.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <a className={styles.primaryBtn} href="mailto:laurenpy1226@gmail.com">
              Email me
            </a>
            <Link className={styles.secondaryBtn} href="/#gallery">
              Browse latest
            </Link>
          </div>
        </section>

        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandName}>
              Lauren&apos;s Art Gallery
            </Link>
            <p className={styles.brandDesc}>
              A living archive of hand-drawn artworks, digital experiments, and creative
              illustrations.
            </p>

            <div className={styles.socialRow} aria-label="Quick actions">
              <a
                className={styles.iconBtn}
                href="mailto:laurenpy1226@gmail.com"
                aria-label="Email"
                title="Email"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25V6.75Zm2.38-.25 5.13 3.42a1 1 0 0 0 1.1 0l5.13-3.42a.75.75 0 0 0-.49-.18H6.75a.75.75 0 0 0-.37.18Zm12.12 2.2-4.57 3.05a2.5 2.5 0 0 1-2.78 0L6.6 8.7a.75.75 0 0 0-1.1.66v7.89c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75V9.36a.75.75 0 0 0-1.1-.66Z"
                  />
                </svg>
              </a>

              <a
                className={styles.iconBtn}
                href="https://yuqiao1205.github.io/portfolio/"
                target="_blank"
                rel="noreferrer"
                aria-label="Portfolio site"
                title="Portfolio"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M14 3a1 1 0 0 0 0 2h3.59l-6.3 6.29a1 1 0 1 0 1.42 1.42L19 6.41V10a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-6ZM5 7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a1 1 0 1 0-2 0v5H5V9h5a1 1 0 1 0 0-2H5Z"
                  />
                </svg>
              </a>

              <Link
                className={styles.iconBtn}
                href="/admin/login"
                aria-label="Admin login"
                title="Admin"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-8a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm-3 8V6a3 3 0 1 1 6 0v3H9Zm3 4a1.75 1.75 0 0 0-.75 3.33V18a.75.75 0 0 0 1.5 0v-1.67A1.75 1.75 0 0 0 12 13Z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <nav className={styles.col} aria-label="Footer navigation">
            <h3 className={styles.colTitle}>Explore</h3>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href="/#gallery">
                  Latest work
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/about">
                  Artist statement
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/admin/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact</h3>
            <ul className={styles.list}>
              <li>
                <a className={styles.link} href="mailto:laurenpy1226@gmail.com">
                  laurenpy1226@gmail.com
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://yuqiao1205.github.io/portfolio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio site
                </a>
              </li>
              <li>
                <span className={styles.muted}>San Francisco, CA</span>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Updates</h3>
            <p className={styles.small}>
              Want occasional new-work drops? Send a quick email and I’ll add you to the list.
            </p>
            <a
              className={styles.subscribe}
              href="mailto:laurenpy1226@gmail.com?subject=Newsletter%20signup"
            >
              Subscribe via email →
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>© {year} Lauren&apos;s Art Gallery • All rights reserved</div>
          <div className={styles.bottomRight}>
            <Link className={styles.bottomLink} href="/">
              Gallery
            </Link>
            <span className={styles.dot} aria-hidden="true">
              •
            </span>
            <Link className={styles.bottomLink} href="/about">
              About
            </Link>
            <span className={styles.dot} aria-hidden="true">
              •
            </span>
            <a className={styles.bottomLink} href="mailto:laurenpy1226@gmail.com">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
