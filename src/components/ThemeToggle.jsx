import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Toggle Theme
    </button>
  );
}