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
        <a href="https://github.com/Alaalawara" target="_blank" rel="noreferrer" className="rounded-lg border border-foreground/20 px-3 py-1.5 hover:bg-secondary transition-colors">
          GitHub
        </a>
        <a href="https://x.com/loops_infinity" target="_blank" rel="noreferrer" className="rounded-lg border border-foreground/20 px-3 py-1.5 hover:bg-secondary transition-colors">
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
      className="bg-white border-2 rounded-lg border-foreground/20 dark:bg-white dark:border-2 dark:border-foreground cursor-pointer"
      aria-label="dark-light mode"
    >
      <img src={daynight} width={30} height={30} className='bg-white rounded-lg' />
    </button>
  );
}

