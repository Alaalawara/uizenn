import { Link } from 'react-router-dom';
import daynight from '../assets/daynight.svg'


export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-[var(--bg)] flex py-2 border-b-1 border-[#e8e8e8e2] justify-between">
      <Link>
        <h3 className="text-[var(--fg)]" style={{ fontFamily: "MADE GoodTime Script" }}>uizenn</h3>
      </Link>
      {/* Top bar */}
      <div className="flex items-center gap-3 text-sm">
        <a href="https://github.com/Alaalawara" target="_blank" rel="noreferrer" className="rounded-lg border border-foreground/20 px-3 py-1.5 dark:bg-[var(--bg)] dark:text-[var(--fg)] hover:bg-secondary dark:hover:text-[var(--bg)]">
          GitHub
        </a>
        <a href="https://x.com/loops_infinity" target="_blank" rel="noreferrer" className="rounded-lg border border-foreground/20 px-3 py-1.5 dark:bg-[var(--bg)] dark:text-[var(--fg)] hover:bg-secondary dark:hover:text-[var(--bg)]">
          X
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}

function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  };

  if (typeof document !== "undefined") {
    const stored = localStorage.getItem("theme");
    if (stored && document.documentElement.dataset.theme !== stored) {
      document.documentElement.dataset.theme = stored;
    }
  }
  return (
    <button
      onClick={toggle}
      className="border rounded-lg border-foreground/20 dark:border-foreground cursor-pointer hover:bg-secondary"
      aria-label="dark-light mode"
    >
      <svg xmlns="http://www.w3.org/2000/svg"  width={30} height={30} className='dark:fill-[var(--fg)] dark:hover:fill-[var(--bg)] hover:bg-secondary rounded-lg' viewBox="0 0 64 64">
      <defs></defs><g id="Layer_2" data-name="Layer 2">
        <path d="M28 59.71A1.74 1.74 0 0 0 30 58V6a1.75 1.75 0 0 0-2-1.75 28 28 0 0 0 0 55.42zM37.29 4.51a2.77 2.77 0 1 0-.52 5.49h4.37a2 2 0 0 1 .85.18h.07a2 2 0 0 1-.84 3.82H36a2 2 0 0 0 0 4h14.42a2 2 0 0 1 1.68.91 2 2 0 0 1-1.65 3H36a2 2 0 0 0 0 4h17.66a2 2 0 0 1 1.93 1.61 2 2 0 0 1-2 2.35H36a2 2 0 0 0 0 4h17.65a2 2 0 0 1 2 2.34A2 2 0 0 1 53.66 38H36a2 2 0 0 0 0 4h14.43a2 2 0 0 1 1.67 3.09 1.91 1.91 0 0 1-1.6.87H36a2 2 0 0 0 0 4h5.22a2 2 0 0 1 .83 3.79h-.07a2 2 0 0 1-.85.18h-4.36a2.77 2.77 0 1 0 .53 5.49 28 28 0 0 0 0-55z" /></g></svg>

    </button>
  );
}

