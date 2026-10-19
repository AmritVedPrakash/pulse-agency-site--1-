import { Link } from "react-router-dom";
import { site } from "../../data/site";
export default function Logo({ light = false, full = false, iconOnly = false }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2 font-display text-xl font-extrabold sm:gap-3 sm:text-3xl ${light ? "text-cream" : "text-ink"}`}
      aria-label={`${site.name} home`}
    >
      {full ? (
        <img
          src="/logo.png"
          alt=""
          className="h-28 w-auto max-w-44 object-contain"
        />
      ) : (
        <>
          <img
            src="/logo.png"
            alt=""
            className="h-16 w-16 object-contain sm:h-20 sm:w-20"
          />
          {!iconOnly && site.name}
        </>
      )}
    </Link>
  );
}
