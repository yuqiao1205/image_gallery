import Link from "next/link";
import { login } from "../../../lib/actions";
import styles from "./page.module.css";

export const dynamic = 'force-dynamic';

interface PageProps {
  searchParams?: {
    error?: string;
  };
}

export default function AdminLogin({ searchParams }: PageProps) {
  const error = searchParams?.error;

  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <div className={styles.card}>
          <div className={styles.brand}>
            <div className={styles.badge} aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 1.8c-2.7 0-4.9 2.2-4.9 4.9v2.4H6c-1.4 0-2.5 1.1-2.5 2.5v6.1C3.5 21.9 4.6 23 6 23h12c1.4 0 2.5-1.1 2.5-2.5v-6.1c0-1.4-1.1-2.5-2.5-2.5h-1.1V6.7c0-2.7-2.2-4.9-4.9-4.9Zm-3.1 4.9c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1v2.4H8.9V6.7Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1 className={styles.title}>Admin sign in</h1>
            <p className={styles.subtitle}>Manage uploads, titles, and descriptions.</p>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.formArea}>
            {error && (
              <div className={styles.error} role="alert">
                Invalid credentials. Please try again.
              </div>
            )}

            <form action={login} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className={styles.input}
                  placeholder="Enter your username"
                  autoComplete="username"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className={styles.input}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Sign in
              </button>
            </form>

            <div className={styles.footerLinks}>
              <Link href="/" className={styles.backLink}>
                ← Back to gallery
              </Link>
              <span className={styles.dot} aria-hidden="true">
                •
              </span>
              <Link href="/about" className={styles.backLink}>
                About
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
