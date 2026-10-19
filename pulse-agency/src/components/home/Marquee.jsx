
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
        cy="68"
        rx="17"
        ry="1.5"
        fill="#6b6232"
      />

      <g className="runner-body">
        {/* Back arm */}
        <g className="runner-arm-back">
          <path
            d="M32 39 L24 43 L19 37"
            stroke="#6b6232"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Back leg */}
        <g className="runner-leg-back">
          <path
            d="M36 52 L30 59 L23 60"
            stroke="#6b6232"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <ellipse cx="21" cy="60" rx="4" ry="2.2" fill="#6b6232" />
        </g>

        {/* Leaf */}
        <g transform="rotate(-20 42 10)">
          <ellipse cx="44" cy="9" rx="9" ry="4" fill="#8a8f4a" />
          <path
            d="M37 9 L51 9"
            stroke="#5c6030"
            strokeWidth="0.8"
          />
        </g>

        {/* Stem */}
        <path
          d="M41 14 L41 18"
          stroke="#6b6232"
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

          <path
            d="M44 30 L56 30"
            stroke="#3b3720"
            strokeWidth="0.8"
          />

          <path
            d="M48 38 Q52 42 56 38 Z"
            fill="#fff"
            stroke="#3b3720"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </g>

        {/* Front leg */}
        <g className="runner-leg-front">
          <path
            d="M44 52 L49 59 L56 57"
            stroke="#6b6232"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <ellipse
            cx="58"
            cy="57"
            rx="4"
            ry="2.2"
            fill="#6b6232"
          />
        </g>

        {/* Front arm */}
        <g className="runner-arm-front">
          <path
            d="M50 41 L57 37 L61 31"
            stroke="#6b6232"
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

        .runner-character {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 64px;
          height: 60px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          animation: runner-move 5s linear infinite;
          will-change: transform;
        }

        .runner-body {
          transform-origin: 40px 60px;
          animation: runner-bounce 0.32s ease-in-out infinite;
        }

        .runner-fruit {
          transform-origin: 40px 36px;
          animation: runner-tilt 0.32s ease-in-out infinite;
        }

        .runner-leg-front {
          transform-box: view-box;
          transform-origin: 44px 52px;
          animation: runner-leg-front 0.32s ease-in-out infinite;
        }

        .runner-leg-back {
          transform-box: view-box;
          transform-origin: 36px 52px;
          animation: runner-leg-back 0.32s ease-in-out infinite;
        }

        .runner-arm-front {
          transform-box: view-box;
          transform-origin: 50px 41px;
          animation: runner-arm-front 0.32s ease-in-out infinite;
        }

        .runner-arm-back {
          transform-box: view-box;
          transform-origin: 32px 39px;
          animation: runner-arm-back 0.32s ease-in-out infinite;
        }

        .runner-ground {
          transform-box: view-box;
          transform-origin: center;
          animation: runner-shadow 0.32s ease-in-out infinite;
        }

        @keyframes runner-move {
          0% {
            transform: translateX(-70px);
          }
          100% {
            transform: translateX(calc(100vw + 70px));
          }
        }

        @keyframes runner-bounce {
          0%, 100% {
            transform: translateY(0) scaleY(0.97);
          }
          50% {
            transform: translateY(-5px) scaleY(1.03);
          }
        }

        @keyframes runner-tilt {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }

        @keyframes runner-leg-front {
          0%, 100% {
            transform: rotate(-35deg);
          }
          50% {
            transform: rotate(35deg);
          }
        }

        @keyframes runner-leg-back {
          0%, 100% {
            transform: rotate(35deg);
          }
          50% {
            transform: rotate(-35deg);
          }
        }

        @keyframes runner-arm-front {
          0%, 100% {
            transform: rotate(-30deg);
          }
          50% {
            transform: rotate(35deg);
          }
        }

        @keyframes runner-arm-back {
          0%, 100% {
            transform: rotate(35deg);
          }
          50% {
            transform: rotate(-30deg);
          }
        }

        @keyframes runner-shadow {
          0%, 100% {
            transform: scaleX(1);
            opacity: 0.5;
          }
          50% {
            transform: scaleX(0.65);
            opacity: 0.25;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .runner-character,
          .runner-body,
          .runner-fruit,
          .runner-leg-front,
          .runner-leg-back,
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
