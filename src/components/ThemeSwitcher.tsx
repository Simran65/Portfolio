'use client';

import { useEffect, useState } from 'react';

interface Props { onSelect?: () => void }

const themes = ['light','dark'] as const;

export default function ThemeSwitcher({ onSelect }: Props) {
  const [current, setCurrent] = useState<string>('dark');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const initial = saved || 'dark';
    applyTheme(initial);
    setCurrent(initial);
  }, []);

  const applyTheme = (theme: string) => {
    if (theme === 'system') {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    if (theme !== 'system') localStorage.setItem('theme', theme);
    else localStorage.removeItem('theme');
  };

  const choose = (theme: string) => {
    setCurrent(theme);
    applyTheme(theme);
    onSelect?.();
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-sm" aria-label="Theme">
        🌙
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        {themes.map((t) => (
          <li key={t}>
            <button onClick={() => choose(t)} className={current===t? 'active' : ''}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


