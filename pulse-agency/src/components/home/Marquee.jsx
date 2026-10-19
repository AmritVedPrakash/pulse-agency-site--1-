import kaufi from '../../assets/marquee/kaufi.jpeg'
import kimirica from '../../assets/marquee/kimirica.png'
import luxe from '../../assets/marquee/luxe.png'
import neesh from '../../assets/marquee/neesh.png'
import rasa from '../../assets/marquee/rasa.jpeg'
import rus from '../../assets/marquee/rus.png'
import jaipur from '../../assets/marquee/jaipur.png'
import srisri from '../../assets/marquee/srisri.png'
import inspice from '../../assets/marquee/inspice.png'
import auuatar from '../../assets/marquee/auuatar.png'

const brandLogos = [
  { name: 'KauFi', src: kaufi },
  { name: 'Kimirica', src: kimirica },
  { name: 'Luxe & Kan', src: luxe },
  { name: 'Neesh Perfumes', src: neesh },
  { name: 'Rasa Cafeteria', src: rasa },
  { name: 'RüS Organic', src: rus },
  { name: 'Jaipur Kurti', src: jaipur },
  { name: 'Sri Sri Tattva', src: srisri },
  { name: 'Inspice Herbal Spices', src: inspice },
  { name: 'Auuatar', src: auuatar },
]

function JumpingMascot() {
  return (
    <svg viewBox="0 0 80 72" className="h-12 w-auto overflow-visible sm:h-14" xmlns="http://www.w3.org/2000/svg">
      {/* ground line (hawa mein chhoti ho jaati hai) */}
      <ellipse className="mascot-ground" cx="40" cy="70" rx="18" ry="1.2" fill="#6b6232" />

      <g className="mascot-hop">
        {/* back arm */}
        <g className="mascot-arm-back">
          <path d="M32 40 L24 46 L26 53" stroke="#6b6232" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* back leg */}
        <g className="mascot-leg-back">
          <path d="M36 52 L34 62 L29 67" stroke="#6b6232" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* leaf */}
        <g transform="rotate(-20 42 10)">
          <ellipse cx="44" cy="9" rx="9" ry="4" fill="#8a8f4a" />
          <path d="M37 9 L51 9" stroke="#5c6030" strokeWidth="0.8" />
        </g>
        <path d="M41 14 L41 18" stroke="#6b6232" strokeWidth="2" strokeLinecap="round" />

        {/* fruit */}
        <circle cx="40" cy="36" r="22" fill="#f7d94c" />
        <path d="M40 14 A22 22 0 0 0 40 58 A14 22 0 0 1 40 14 Z" fill="#e8c53a" opacity="0.75" />

        {/* face */}
        <circle cx="46" cy="30" r="2.2" fill="#3b3720" />
        <circle cx="54" cy="30" r="2.2" fill="#3b3720" />
        <path d="M44 30 L56 30" stroke="#3b3720" strokeWidth="0.8" />
        <path d="M48 38 Q52 42 56 38 Z" fill="#fff" stroke="#3b3720" strokeWidth="1" strokeLinejoin="round" />

        {/* front leg */}
        <g className="mascot-leg-front">
          <path d="M44 52 L46 62 L51 66" stroke="#6b6232" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* front arm */}
        <g className="mascot-arm-front">
          <path d="M50 42 L58 46 L62 41" stroke="#6b6232" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      </g>
    </svg>
  )
}

export default function Marquee() {
  const row = [...brandLogos, ...brandLogos]

  return (
    <section aria-label="Brands we have worked with" className="relative border-y border-ink/10 bg-white py-6 pb-16 sm:pb-20">
      <p className="sr-only">KauFi, Kimirica, Luxe &amp; Kan, Neesh Perfumes, Rasa Cafeteria, RüS Organic, Jaipur Kurti, Sri Sri Tattva, Inspice Herbal Spices, and Auuatar</p>

      <div className="overflow-hidden">
        <div aria-hidden="true" className="flex w-max animate-marquee items-center gap-12 motion-reduce:animate-none sm:gap-14">
          {row.map((brand, i) => (
            <div key={`${brand.name}-${i}`} className="flex h-16 w-36 shrink-0 items-center justify-center sm:w-44">
              <img src={brand.src} alt="" loading="lazy" decoding="async" className="max-h-12 max-w-full object-contain sm:max-h-14" />
            </div>
          ))}
        </div>
      </div>

      {/* Jumping mascot on the bottom border */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2">
        <JumpingMascot />
      </div>

      <style>{`
        /* ek hop = 0.8s */
        .mascot-hop {
          transform-origin: 40px 60px;
          animation: mascot-hop 0.8s infinite;
        }
        .mascot-ground {
          transform-origin: 40px 70px;
          animation: mascot-ground 0.8s infinite;
        }

        .mascot-leg-front  { transform-origin: 44px 52px; animation: mascot-leg-front 0.8s ease-in-out infinite; }
        .mascot-leg-back   { transform-origin: 36px 52px; animation: mascot-leg-back 0.8s ease-in-out infinite; }
        .mascot-arm-front  { transform-origin: 50px 42px; animation: mascot-arm-front 0.8s ease-in-out infinite; }
        .mascot-arm-back   { transform-origin: 32px 40px; animation: mascot-arm-back 0.8s ease-in-out infinite; }

        @keyframes mascot-hop {
          0%   { transform: translateY(0) scale(1.06, 0.92); animation-timing-function: ease-out; }
          50%  { transform: translateY(-16px) scale(1.12);   animation-timing-function: ease-in; }
          88%  { transform: translateY(0) scale(1);          animation-timing-function: ease-out; }
          100% { transform: translateY(0) scale(1.06, 0.92); }
        }
        @keyframes mascot-ground {
          0%, 100% { transform: scaleX(1);    opacity: 0.55; }
          50%      { transform: scaleX(0.55); opacity: 0.25; }
        }
        @keyframes mascot-leg-front {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(-38deg); }
        }
        @keyframes mascot-leg-back {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(38deg); }
        }
        @keyframes mascot-arm-front {
          0%, 100% { transform: rotate(10deg); }
          50%      { transform: rotate(-45deg); }
        }
        @keyframes mascot-arm-back {
          0%, 100% { transform: rotate(-10deg); }
          50%      { transform: rotate(45deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .mascot-hop, .mascot-ground,
          .mascot-leg-front, .mascot-leg-back,
          .mascot-arm-front, .mascot-arm-back {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}