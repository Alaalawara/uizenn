import { Link } from 'react-router-dom';
import daynight from '../assets/daynight.svg'


export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-[var(--bg)] flex py-2 border-b-1 border-[#e8e8e8e2] justify-between">
      <Link>
        <HeaderLogo className="text-[var(--fg)]" />
      </Link>
      <ThemeToggle />
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

  if (typeof document !== "undefined") {
    const stored = localStorage.getItem("theme");
    if (stored && document.documentElement.dataset.theme !== stored) {
      document.documentElement.dataset.theme = stored;
    }
  }
  return (
    <button
      onClick={toggle}
      className="bg-white border-2 rounded-lg border-foreground dark:bg-white dark:border-2 dark:border-foreground cursor-pointer"
      aria-label="dark-light mode"
    >
      <img src={daynight} width={30} height={30} className='bg-white rounded-lg' />
    </button>
  );
}

function HeaderLogo() {
  return (
    <div className='flex flex-row'>

      <svg xmlns="http://www.w3.org/2000/svg" width="122" height="25" viewBox="0 0 122 25" fill='none' >
        <g clipPath="url(#clip0_3_2)">
          <rect width="122" height="25" />
          <path d="M3 3H19V13.7179H3V3Z" className='fill-[var(--fg)]' />
          <ellipse cx="11" cy="13.2308" rx="8" ry="8.76923" className='fill-[var(--fg)]' />
          <path d="M21 3H37V22H21V3Z" className='fill-[var(--fg)]' />
          <mask id="mask0_3_2" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="72" y="2" width="18" height="19">
            <path d="M90 21L72 21V10.2821L90 10.2821V21Z" className='fill-[var(--fg)]' />
            <ellipse cx="81" cy="10.7692" rx="9" ry="8.76923" transform="rotate(-180 81 10.7692)" className='fill-[var(--fg)]' />
          </mask>
          <g mask="url(#mask0_3_2)">
            <rect x="81" y="21" width="19" height="9" transform="rotate(-90 81 21)" className='fill-[var(--fg)]' />
          </g>
          <mask id="mask1_3_2" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="91" y="2" width="18" height="19">
            <path d="M91 2L109 2V12.7179L91 12.7179V2Z" className='fill-[var(--fg)]'/>
            <ellipse cx="100" cy="12.2308" rx="9" ry="8.76923" className='fill-[var(--fg)]' />
          </mask>
          <g mask="url(#mask1_3_2)">
            <rect x="100" y="2" width="19" height="9" transform="rotate(90 100 2)" className='fill-[var(--fg)]' />
          </g>
          <mask id="mask2_3_2" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="93" y="2" width="18" height="19">
            <path d="M111 21L93 21V10.2821L111 10.2821V21Z" className='fill-[var(--fg)]' />
            <ellipse cx="102" cy="10.7692" rx="9" ry="8.76923" transform="rotate(-180 102 10.7692)" className='fill-[var(--fg)]' />
          </mask>
          <g mask="url(#mask2_3_2)">
            <rect x="102" y="21" width="19" height="13" transform="rotate(-90 102 21)" className='fill-[var(--fg)]' />
          </g>
          <mask id="mask3_3_2" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="112" y="2" width="18" height="19">
            <path d="M112 2L130 2V12.7179L112 12.7179V2Z" className='fill-[var(--fg)]' />
            <ellipse cx="121" cy="12.2308" rx="9" ry="8.76923" className='fill-[var(--fg)]' />
          </mask>
          <g mask="url(#mask3_3_2)">
            <rect x="121" y="2" width="19" height="13" transform="rotate(90 121 2)" className='fill-[var(--fg)]' />
          </g>
          <mask id="mask4_3_2" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="39" y="13" width="20" height="18">
            <path d="M59 13V31L47.7179 31V13L59 13Z" className='fill-[var(--fg)]' />
            <ellipse cx="48.2308" cy="22" rx="9" ry="9.23077" transform="rotate(90 48.2308 22)" className='fill-[var(--fg)]' />
          </mask>
          <g mask="url(#mask4_3_2)">
            <rect x="59" y="22" width="20" height="9" transform="rotate(-180 59 22)" className='fill-[var(--fg)]'/>
          </g>
          <mask id="mask5_3_2" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="39" y="-6" width="20" height="18">
            <path d="M39 12L39 -6L50.2821 -6L50.2821 12L39 12Z" className='fill-[var(--fg)]' />
            <ellipse cx="49.7692" cy="3" rx="9" ry="9.23077" transform="rotate(-90 49.7692 3)" className='fill-[var(--fg)]'/>
          </mask>
          <g mask="url(#mask5_3_2)">
            <rect x="39" y="3" width="20" height="9" className='fill-[var(--fg)]' />
            <rect x="39" y="3" width="20" height="9" className='fill-[var(--fg)]' />
          </g>
          <path d="M69.5 3C73.6361 3 77.1537 5.64362 78.458 9.33301H66.333V11.4443H78.9404C78.9788 11.791 79 12.1431 79 12.5C79 13.2259 78.9159 13.9321 78.7617 14.6113H66.333V16.7227H78.0098C76.455 19.8499 73.2295 22 69.5 22C64.2533 22 60 17.7467 60 12.5C60 7.25329 64.2533 3 69.5 3Z" className='fill-[var(--fg)]' />
        </g>
        <defs>
          <clipPath id="clip0_3_2">
            <rect width="122" height="25" className='fill-[var(--fg)]' />
          </clipPath>
        </defs>
      </svg>

    </div>
  )
}

