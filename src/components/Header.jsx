import { Link } from 'react-router-dom';
import daynight from '../assets/daynight.svg'


export default function Header() {
  return (
    <header className="w-full flex py-2 border-b-1 border-[#e8e8e8e2] visible justify-between">
      <Link>
        <h2 className='text-black dark:bg-[var(--bg)] dark:text-[var(--fg)]' style={{ fontFamily: "Pixelify Sans"}}>uizenn</h2>
      </Link>
      <ThemeToggle/>
    </header>
  );
}
// src/components/ThemeToggle.jsx
function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  };
  return (
    <button
      onClick={toggle}
      className="bg-white border-2 rounded-lg border-foreground dark:bg-white dark:border-2 dark:border-foreground cursor-pointer"
      aria-label="dark-light mode"
    >
      <img src={daynight} width={30} height={30} className='bg-white rounded-lg'/>
    </button>
  );
}
