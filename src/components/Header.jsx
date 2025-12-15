'use client'

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header style={{ padding: '10px', borderBottom: '1px solid var(--foreground)' }}>
      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/admin/login">Admin</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}