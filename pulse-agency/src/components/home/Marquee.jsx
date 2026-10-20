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

const LIMB = '#6b6232'

function RunningMascot() {
  return (
    <svg
      viewBox="0 0 80 72"
      className="h-12 w-auto overflow-visible sm:h-14"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ground shadow */}
      <ellipse
        className="runner-ground"
        cx="40"
        cy="69"
        rx="17"
        ry="1.5"
        fill={LIMB}
      />

      <g className="runner-body">
        {/* Back arm (far side) */}
        <g className="runner-arm-back">
          <path
            d="M32 39 L24 43 L19 37"
            stroke={LIMB}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Back leg: thigh + shin (knee bends) */}
        <g className="runner-thigh runner-thigh-back">
          <path
            d="M36 54 L36 61"
            stroke={LIMB}
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <g className="runner-shin runner-shin-back">
            <path
              d="M36 61 L36 67.5"
              stroke={LIMB}
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="38.5" cy="68.3" rx="3.6" ry="2" fill={LIMB} />
          </g>
        </g>

        {/* Leaf */}
        <g transform="rotate(-20 42 10)">
          <ellipse cx="44" cy="9" rx="9" ry="4" fill="#8a8f4a" />
          <path d="M37 9 L51 9" stroke="#5c6030" strokeWidth="0.8" />
        </g>

        {/* Stem */}
        <path
          d="M41 14 L41 18"
          stroke={LIMB}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Fruit body */}
        <g className="runner-fruit">
          <circle cx="40" cy="36" r="22" fill="#f7d94c" />

          <path
            d="M40 14 A22 22 0 0 0 40 58 A14 22 0 0 1 40 14 Z"
            fill="#e8c53a"
            opacity="0.75"
          />

          {/* Highlight */}
          <ellipse
            cx="32"
            cy="22"
            rx="6"
            ry="3"
            transform="rotate(-30 32 22)"
            fill="#fff6b0"
            opacity="0.8"
          />

          {/* Face */}
          <circle cx="46" cy="30" r="2.2" fill="#3b3720" />
          <circle cx="54" cy="30" r="2.2" fill="#3b3720" />

          <path d="M44 30 L56 30" stroke="#3b3720" strokeWidth="0.8" />

          <path
            d="M48 38 Q52 42 56 38 Z"
            fill="#fff"
            stroke="#3b3720"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </g>

        {/* Front leg: thigh + shin (knee bends) */}
        <g className="runner-thigh runner-thigh-front">
          <path
            d="M44 54 L44 61"
            stroke={LIMB}
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <g className="runner-shin runner-shin-front">
            <path
              d="M44 61 L44 67.5"
              stroke={LIMB}
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="46.5" cy="68.3" rx="3.6" ry="2" fill={LIMB} />
          </g>
        </g>

        {/* Front arm (near side) */}
        <g className="runner-arm-front">
          <path
            d="M50 41 L57 37 L61 31"
            stroke={LIMB}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </g>
    </svg>
  )
}

export default function Marquee() {
  const row = [...brandLogos, ...brandLogos]

  return (
    <section
      aria-label="Brands we have worked with"
      className="relative border-y border-ink/10 bg-white py-6 pb-16 sm:pb-20"
    >
      <p className="sr-only">
        KauFi, Kimirica, Luxe &amp; Kan, Neesh Perfumes, Rasa Cafeteria,
        RüS Organic, Jaipur Kurti, Sri Sri Tattva, Inspice Herbal Spices,
        and Auuatar
      </p>

      {/* Brand logos marquee */}
      <div className="overflow-hidden">
        <div
          aria-hidden="true"
          className="flex w-max animate-marquee items-center gap-12 motion-reduce:animate-none sm:gap-14"
        >
          {row.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex h-16 w-36 shrink-0 items-center justify-center sm:w-44"
            >
              <img
                src={brand.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="max-h-12 max-w-full object-contain sm:max-h-14"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Running mascot: left to right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-full overflow-visible"
      >
        <div className="runner-track">
          <div className="runner-character">
            <RunningMascot />
          </div>
        </div>
      </div>

      <style>{`
        .runner-track {
          position: relative;
          width: 100%;
          height: 60px;
          overflow: hidden;
        }

        /*
          --stride = time for one full running cycle (both legs).
          Bada number = slow run. Speed badalni ho to sirf yahi change karo.
        */
        .runner-character {
          --stride: 0.85s;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 64px;
          height: 60px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          animation: runner-move 8s linear infinite;
          will-change: transform;
        }

        /* Body: ek stride me 2 chhote bounce (har kadam pe ek), bahut halka */
        .runner-body {
          animation: runner-bounce calc(var(--stride) / 2) ease-in-out infinite;
        }

        .runner-fruit {
          transform-box: view-box;
          transform-origin: 40px 36px;
          animation: runner-lean calc(var(--stride) / 2) ease-in-out infinite;
        }

        /* Legs: thigh hip se, shin knee se ghoomta hai */
        .runner-thigh,
        .runner-shin,
        .runner-arm-front,
        .runner-arm-back,
        .runner-ground {
          transform-box: view-box;
        }

        .runner-thigh {
          animation: runner-thigh var(--stride) ease-in-out infinite;
        }
        .runner-shin {
          animation: runner-shin var(--stride) ease-in-out infinite;
        }

        .runner-thigh-front { transform-origin: 44px 54px; }
        .runner-shin-front  { transform-origin: 44px 61px; }

        /* Back leg = front leg ka aadha cycle peeche */
        .runner-thigh-back {
          transform-origin: 36px 54px;
          animation-delay: calc(var(--stride) * -0.5);
        }
        .runner-shin-back {
          transform-origin: 36px 61px;
          animation-delay: calc(var(--stride) * -0.5);
        }

        /* Arms: legs ke opposite swing */
        .runner-arm-front {
          transform-origin: 50px 41px;
          animation: runner-arm-front var(--stride) ease-in-out infinite;
        }
        .runner-arm-back {
          transform-origin: 32px 39px;
          animation: runner-arm-back var(--stride) ease-in-out infinite;
        }

        .runner-ground {
          transform-origin: 40px 69px;
          animation: runner-shadow calc(var(--stride) / 2) ease-in-out infinite;
        }

        @keyframes runner-move {
          0%   { transform: translateX(-70px); }
          100% { transform: translateX(calc(100vw + 70px)); }
        }

        /* Sabse neeche = mid-stance, sabse upar = jab dono pair hawa me */
        @keyframes runner-bounce {
          0%, 100% { transform: translateY(-2px); }
          50%      { transform: translateY(0); }
        }

        @keyframes runner-lean {
          0%, 100% { transform: rotate(3deg); }
          50%      { transform: rotate(6deg); }
        }

        /* Thigh: aage (negative) se peeche (positive) aur wapas */
        @keyframes runner-thigh {
          0%, 100% { transform: rotate(-28deg); }
          50%      { transform: rotate(32deg); }
        }

        /* Knee: zameen pe seedha, push-off pe thoda mudta, swing me zor se mudta (heel peeche uthti hai) */
        @keyframes runner-shin {
          0%   { transform: rotate(4deg); }
          25%  { transform: rotate(14deg); }
          50%  { transform: rotate(30deg); }
          65%  { transform: rotate(85deg); }
          85%  { transform: rotate(55deg); }
          100% { transform: rotate(4deg); }
        }

        @keyframes runner-arm-front {
          0%, 100% { transform: rotate(-30deg); }
          50%      { transform: rotate(32deg); }
        }

        @keyframes runner-arm-back {
          0%, 100% { transform: rotate(32deg); }
          50%      { transform: rotate(-30deg); }
        }

        @keyframes runner-shadow {
          0%, 100% { transform: scaleX(0.8); opacity: 0.3; }
          50%      { transform: scaleX(1);   opacity: 0.5; }
        }

        @media (prefers-reduced-motion: reduce) {
          .runner-character,
          .runner-body,
          .runner-fruit,
          .runner-thigh,
          .runner-shin,
          .runner-arm-front,
          .runner-arm-back,
          .runner-ground {
            animation: none;
          }

          .runner-character {
            left: calc(50% - 32px);
          }
        }
      `}</style>
    </section>
  )
}