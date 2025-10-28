import { NavLink } from 'react-router-dom';

function Sidebar() {
  const base = 'font-bold text-base w-fit px-2 py-1 rounded-lg';
  const hover = 'hover:bg-secondary hover:text-black';
  const active = 'bg-secondary text-black';

  return (
    <div className="sticky top-20">
      <nav>
        <ul className="list-none flex flex-col justify-center gap-10 overflow-hidden">
          <li className="flex flex-col gap-2">
            <p className="text-foreground font-bold text-xl px-2">Follow for updates</p>
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
            <p className="text-foreground font-bold text-xl px-2">Badges</p>
            <NavLink
              to="/components/badge/simplebadge"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
              end
            >
              Simple Badge
            </NavLink>
             <NavLink
              to="/components/badge/animatedbadge"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
            >
              Animated Badge
            </NavLink>
          </li>

          <li className="flex flex-col gap-2">
            <p className="text-foreground font-bold text-xl px-2">Buttons</p>
             <NavLink
              to="/components/buttons/button"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
              end
            >
              button
            </NavLink>

            <NavLink
              to="/components/buttons/3d-button"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
              end
            >
              3d button
            </NavLink>

            <NavLink
              to="/components/buttons/ontapbutton"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
            >
              Ontap button
            </NavLink>
          </li>

          <li className="flex flex-col gap-2">
            <p className="text-foreground font-bold text-xl px-2">Cards</p>
            <NavLink
              to="/components/cards/simplecard"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
            >
              Simple Card
            </NavLink>

            <NavLink
              to="/components/cards/hovercard"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
            >
              Hover Card
            </NavLink>
            <NavLink
              to="/components/cards/blocktextCard"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
            >
              Block Text Card
            </NavLink>
            <NavLink
              to="/components/cards/stackcards"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
            >
              Stack Cards
            </NavLink>
          </li>

          <li className="flex flex-col gap-2">
            <p className="text-foreground font-bold text-xl px-2">Text Field</p>
            <NavLink
              to="/components/text/textbounce"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
              end
            >
              Text Bounce
            </NavLink>
             <NavLink
              to="/components/text/text-motion"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
            >
              Text motion
            </NavLink>
          </li>

          <li className="flex flex-col gap-2">
            <p className="text-foreground font-bold text-xl px-2">Input Field</p>
            <NavLink
              to="/components/input/inputfield"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
              end
            >
             Input Field
            </NavLink>
          </li>

           <li className="flex flex-col gap-2">
            <p className="text-foreground font-bold text-xl px-2">Animation</p>
            <NavLink
              to="/components/animation/hoveranimation"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
              end
            >
             Hover Animation
            </NavLink>
            <NavLink
              to="/components/animation/shapeanimation"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
              end
            >
             Shape Animation
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
