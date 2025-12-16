'use client'

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="shadow" style={{
      background: 'var(--background)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div className="container flex justify-between items-center" style={{ padding: '16px 0' }}>
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold" style={{
            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Lauren&apos;s Art Gallery
          </Link>
        </div>
        <nav className="flex items-center" style={{ gap: '24px' }}>
          <Link href="/" className="font-medium hover:text-primary transition">
            Gallery
          </Link>
          <Link href="/about" className="font-medium hover:text-primary transition">
            About
          </Link>
          <Link href="/admin/login" className="font-medium hover:text-primary transition">
            Admin
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
