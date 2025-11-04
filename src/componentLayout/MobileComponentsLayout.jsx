import { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { componentsCatalog } from "../data/componentsCatalog";

export default function MobileComponentsLayout() {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Build a flat, ordered list of component routes
  const catalog = useMemo(() => componentsCatalog, []);
  const idx = useMemo(
    () => catalog.findIndex((c) => c.path === location.pathname),
    [catalog, location.pathname]
  );
  const prev = idx > 0 ? catalog[idx - 1] : null;
  const next = idx >= 0 && idx < catalog.length - 1 ? catalog[idx + 1] : null;

  // Close the mobile nav whenever the route changes
  useEffect(() => {
    setOpenNav(false);
  }, [location.pathname]);

  return (
    <>
      <div className="sticky top-0 z-30 border-b border-foreground/10 bg-[var(--bg)] px-4 py-2 md:hidden">
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            className="rounded-lg border border-foreground/20 px-3 py-1.5 text-sm"
            onClick={() => setOpenNav((v) => !v)}
            aria-expanded={openNav}
            aria-controls="components-left-nav"
          >
            {openNav ? "Close" : "Sections"}
          </button>

          {/* Prev / Next controls */}
          <div className="grid grid-cols-2 tracking-tighter gap-2">
            <button
              type="button"
              className="rounded-lg border border-foreground/20 px-2 py-1.5 text-sm disabled:opacity-40"
              onClick={() => prev && navigate(prev.path)}
              disabled={!prev}
              aria-label="Previous component"
              title={prev ? `Previous: ${prev.title}` : "No previous"}
            >
              prev
            </button>
            <button
              type="button"
              className="rounded-lg border border-foreground/20 px-2 py-1.5 text-sm disabled:opacity-40"
              onClick={() => next && navigate(next.path)}
              disabled={!next}
              aria-label="Next component"
              title={next ? `Next: ${next.title}` : "No next"}
            >
              next
            </button>
          </div>

        </div>

        {/* Collapsible sections panel */}
        {openNav && (
          <div id="components-left-nav" className="mt-2">
            <div
              className="rounded-xl border border-foreground/15"
              style={{
                maxHeight: "60vh",
                overflowY: "auto",
                overflowX: "auto",
              }}
            >
              <div className="p-3 min-w-0">
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-4 py-6 md:hidden">
        <Outlet />
      </div>
    </>
  );
}
