import { NavLink } from 'react-router-dom';
import { useCatalog } from "../contexts/CatalogContext";

export default function Sidebar() {
  const { items } = useCatalog();

  // group by section
  const groups = items.reduce((acc, item) => {
    (acc[item.section] = acc[item.section] || []).push(item);
    return acc;
  }, {});

  const base = 'font-bold text-base w-fit px-2 py-1 rounded-lg';
  const hover = 'hover:bg-secondary hover:text-black';
  const active = 'bg-secondary text-black';

  return (
    <div className="sticky top-20">
      <nav>
        <ul className="list-none flex flex-col justify-center gap-10 overflow-hidden">
          <li className="flex flex-col gap-2">
            <p className="text-foreground/70 font-bold text-xl px-2">Follow for updates</p>
            <a href="https://github.com/Alaalawara" target="_blank" rel="noreferrer"
              className={`${base} ${hover}`}>
              Github
            </a>
            <a href="https://x.com/loops_infinity" target="_blank" rel="noreferrer"
              className={`${base} ${hover}`}>
              Twitter / X
            </a>
          </li>

          <li className="flex flex-col gap-2">
            {Object.entries(groups).map(([section, links]) => (
              <div key={section} className="mb-4">
                <div className="text-foreground/70 font-bold text-xl px-2">{section}</div>
                <div className="flex flex-col gap-1 py-2">
                  {links.map((l) => (
                    <NavLink
                      key={l.path}
                      to={l.path}
                     className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
                    >
                      {l.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </li>

        </ul>
      </nav>
    </div>
  );
}

