import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer className="p-10 md:px-10 text-sm w-full rounded-3xl border border-[var(--fg)] flex flex-row justify-between items-center">
      <div>
        <FooterLogo />
      </div>

      {/* line break */}
      <div className="w-0.5 h-22 bg-[var(--fg)]" />

      <div className="flex flex-col text-[var(--fg)] text-2xl font-medium">
        <Link to='/components' className="hover:underline underline-offset-4">components</Link>
      </div>

      {/* line break */}
      <div className="w-0.5 h-22 bg-[var(--fg)]" />

      {/* small info */}
      <div className="grid grid-cols-2 gap-4 text-[var(--fg)] text-2xl font-medium">
        <a href="https://swarajdev.vercel.app" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">Portfolio</a>
        <a href="https://github.com/Alaalawara" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">Github</a>
        <a href="https://x.com/loops_infinity" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">X</a>
        <a href="https://demo.com" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">Demo</a>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <div className='flex flex-row'>

      <svg xmlns="http://www.w3.org/2000/svg" width="160" height="87" viewBox="0 0 160 87" fill="none">
        <g clipPath="url(#clip0_9_48)">
          <rect width="160" height="87" fill="none" />
          <path d="M5 5H35V25.3077H5V5Z" className='fill-[var(--fg)]' />
          <ellipse cx="20" cy="24.3846" rx="15" ry="16.6154" className='fill-[var(--fg)]' />
          <path d="M40 5H70V41H40V5Z" className='fill-[var(--fg)]' />
          <mask id="mask0_9_48" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="60" y="45" width="36" height="35">
            <path d="M96 80H60V60.2564H96V80Z" className='fill-[var(--fg)]' />
            <ellipse cx="78" cy="61.1538" rx="18" ry="16.1538" transform="rotate(-180 78 61.1538)" className='fill-[var(--fg)]' />
          </mask>
          <g mask="url(#mask0_9_48)">
            <rect x="78" y="80" width="35" height="26" transform="rotate(-90 78 80)" className='fill-[var(--fg)]' />
          </g>
          <mask id="mask1_9_48" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="97" y="45" width="34" height="35">
            <path d="M97 45L131 45V64.7436H97V45Z" className='fill-[var(--fg)]' />
            <ellipse cx="114" cy="63.8461" rx="17" ry="16.1538" className='fill-[var(--fg)]' />
          </mask>
          <g mask="url(#mask1_9_48)">
            <rect x="114" y="45" width="35" height="24.5556" transform="rotate(90 114 45)" className='fill-[var(--fg)]' />
          </g>
          <mask id="mask2_9_48" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="101" y="45" width="36" height="35">
            <path d="M137 80H101V60.2564H137V80Z" className='fill-[var(--fg)]' />
            <ellipse cx="119" cy="61.1538" rx="18" ry="16.1538" transform="rotate(-180 119 61.1538)" className='fill-[var(--fg)]' />
          </mask>
          <g mask="url(#mask2_9_48)">
            <rect x="119" y="80" width="35" height="26" transform="rotate(-90 119 80)" className='fill-[var(--fg)]' />
          </g>
          <mask id="mask3_9_48" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="138" y="45" width="34" height="35">
            <path d="M138 45L172 45V64.7436H138V45Z" className='fill-[var(--fg)]' />
            <ellipse cx="155" cy="63.8461" rx="17" ry="16.1538" className='fill-[var(--fg)]' />
          </mask>
          <g mask="url(#mask3_9_48)">
            <rect x="155" y="45" width="35" height="24.5556" transform="rotate(90 155 45)" className='fill-[var(--fg)]' />
          </g>
          <mask id="mask4_9_48" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="1" y="63" width="37" height="36">
            <path d="M37.5 63L37.5 99H17.1923L17.1923 63L37.5 63Z" className='fill-[var(--fg)]' />
            <ellipse cx="18.1154" cy="81" rx="18" ry="16.6154" transform="rotate(90 18.1154 81)" className='fill-[var(--fg)]' />
          </mask>
          <g mask="url(#mask4_9_48)">
            <rect x="31" y="81" width="30" height="26" transform="rotate(-180 31 81)" className='fill-[var(--fg)]' />
          </g>
          <mask id="mask5_9_48" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="1" y="26" width="37" height="36">
            <path d="M1.5 62L1.5 26L21.8077 26L21.8077 62L1.5 62Z" className='fill-[var(--fg)]' />
            <ellipse cx="20.8846" cy="44" rx="18" ry="16.6154" transform="rotate(-90 20.8846 44)" className='fill-[var(--fg)]' />
          </mask>
          <g mask="url(#mask5_9_48)">
            <rect x="8" y="44" width="30" height="26" className='fill-[var(--fg)]' />
          </g>
          <path d="M55.5 46C63.1196 46 69.6005 50.8701 72.0029 57.667H49.667V61.5557H72.8916C72.9622 62.1941 73 62.8427 73 63.5C73 64.8366 72.8492 66.138 72.5654 67.3887H49.667V71.2773H71.1797C68.3161 77.0395 62.3711 81 55.5 81C45.835 81 38 73.165 38 63.5C38 53.835 45.835 46 55.5 46Z" className='fill-[var(--fg)]' />
        </g>
        <defs>
          <clipPath id="clip0_9_48">
            <rect width="160" height="87" fill="white" />
          </clipPath>
        </defs>
      </svg>

    </div>
  )
}