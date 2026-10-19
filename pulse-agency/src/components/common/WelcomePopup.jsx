import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

let popupDismissed = false;

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (popupDismissed || pathname === "/contact") return undefined;
    const timer = window.setTimeout(() => setIsOpen(true), 3000);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const dismissPopup = () => {
    popupDismissed = true;
    setIsOpen(false);
  };

  const handleContactClick = (event) => {
    event.preventDefault();
    dismissPopup();
    navigate("/contact");
  };

  useEffect(() => {
    if (pathname !== previousPathname.current && pathname === "/contact") {
      dismissPopup();
    }
    previousPathname.current = pathname;
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previouslyFocused = document.activeElement;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") dismissPopup();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [isOpen]);

  return (
    isOpen && pathname !== "/contact" ? (
      <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/55 px-4 py-8 backdrop-blur-sm sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) dismissPopup();
          }}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-popup-title"
            aria-describedby="welcome-popup-description"
            className="relative my-auto w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/70 bg-white px-6 py-10 text-center shadow-[0_30px_100px_-25px_rgba(24,3,8,.55)] sm:px-12 sm:py-14"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div aria-hidden="true" className="absolute -right-20 -top-24 h-52 w-52 rounded-full bg-coral/25 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-28 -left-20 h-52 w-52 rounded-full bg-violet-soft blur-3xl" />

            <button
              ref={closeButtonRef}
              type="button"
              onClick={dismissPopup}
              aria-label="Close popup"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-ink/60 transition hover:bg-violet hover:text-white sm:right-5 sm:top-5"
            >
              <X size={19} aria-hidden="true" />
            </button>

            <div className="relative">
              <span className="mx-auto inline-flex rounded-full bg-coral/35 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-ink">
                Frame Theory Socials
              </span>
              <h2 id="welcome-popup-title" className="mx-auto mt-5 max-w-xl font-display text-3xl font-bold leading-tight text-violet sm:text-4xl">
                Your brand deserves to stand out.
              </h2>
              <p id="welcome-popup-description" className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
                We bring creative storytelling and thoughtful strategy together to help ambitious brands grow. Let’s make something meaningful.
              </p>
              <a
                href="/contact"
                onClick={handleContactClick}
                className="group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-coral px-8 py-3 font-bold text-ink shadow-[0_10px_25px_-15px_rgba(64,3,13,.55)] transition hover:-translate-y-0.5 hover:bg-[#f3d85f]"
              >
                Let’s Talk
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
              <p className="mt-4 text-xs text-ink/45">Creative minds. Measurable growth.</p>
            </div>
          </motion.section>
      </motion.div>
    ) : null
  );
}
