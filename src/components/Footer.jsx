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
        <a href="https://x.com/loops_infinity" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">X</a>      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <div className='flex flex-col'>
      <h1 className="text-[var(--fg)]" style={{ fontFamily: "MADE GoodTime Script" }}>uizenn</h1>
    </div>
  )
}