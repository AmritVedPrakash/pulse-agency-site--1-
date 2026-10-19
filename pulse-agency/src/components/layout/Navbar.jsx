import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../common/Logo";
import Button from "../common/Button";

const links = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/services", "Our Services"],
  // ["/blog", "Blog"],
  ["/contact", "Contact Us"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? "py-2" : "py-4"}`}
    >
      <div className="container-x">
        <nav
          aria-label="Main"
          className="flex items-center justify-between rounded-full border border-ink/10 bg-white px-4 py-2 shadow-[0_8px_30px_-12px_rgba(64,3,13,.22)] transition-all"
        >
          <div className="ml-3 shrink-0">
            <Logo iconOnly />
          </div>
          <ul className="hidden items-center gap-1 md:flex">
            {links.map(([to, label]) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  className={({ isActive }) =>
                    `relative block rounded-full px-4 py-2 text-sm font-medium ${isActive ? "text-violet" : "text-ink/70 hover:text-ink"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-dot"
                          className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded bg-violet"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <Button
              to="/contact"
              variant="dark"
              arrow
              className="!py-2 text-sm"
            >
              Let’s Talk
            </Button>
          </div>
          <button
            className="grid h-11 w-11 place-items-center rounded-full bg-ink text-cream md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={20} />
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute inset-0 bg-ink/50"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              tabIndex={-1}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-cream p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
            >
              <div className="flex items-center justify-between">
                <Logo iconOnly />
                <button
                  className="grid h-11 w-11 place-items-center rounded-full bg-ink text-cream"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <ul className="mt-12 space-y-2">
                {links.map(([to, label], i) => (
                  <motion.li
                    key={to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i + 0.1 }}
                  >
                    <NavLink
                      to={to}
                      end
                      className={({ isActive }) =>
                        `block font-display text-4xl font-extrabold ${isActive ? "text-violet" : "text-ink"}`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button to="/contact" arrow className="w-full">
                  Let’s Talk
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
