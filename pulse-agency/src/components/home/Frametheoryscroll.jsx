import { useEffect, useLayoutEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const seg = (p, a, b) => clamp((p - a) / (b - a)); // 0..1 progress inside a scroll window
const lerp = (a, b, t) => a + (b - a) * t;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeInQuad = (t) => t * t;
const easeInOut = (t) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const easeOutBack = (t) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

/* Scroll windows (0 = top of the scene, 1 = end of the scene). */
const T = {
  wiggle: [0.02, 0.08], // O wordmark me hilta hai
  pop: [0.08, 0.22], // O bahar nikal ke FT ke upar aata hai
  limbs: [0.26, 0.4], // haath-pair ugte hain
  fall: [0.22, 0.56], // dheere dheere screen ke bottom tak aata hai
  cheer: [0.58, 0.67], // bottom par landing ke baad haath upar
  walk: [0.67, 1.0], // wahin se chal ke right side nikal jaata hai
};
const STEPS = 6; // walk me kitne full step-cycles (kam = dheema chalna)
const SWAP_AT = 0.08; // is point par wordmark ka O -> character ban jaata hai
const SMOOTHING = 1; // higher value = faster response while staying smooth

/* ------------------------------------------------------------------ */
/*  Smooth scroll progress (0 -> 1) for a tall container               */
/* ------------------------------------------------------------------ */
function useSmoothScrollProgress(ref) {
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    let target = 0;
    let current = 0;

    const readTarget = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      target = total > 0 ? clamp(-r.top / total) : 0;
    };

    const tick = () => {
      current += (target - current) * SMOOTHING;
      if (Math.abs(target - current) < 0.00005) current = target;
      setP(current);
      raf = current === target ? 0 : requestAnimationFrame(tick);
    };

    const onScroll = () => {
      readTarget();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    readTarget();
    current = target;
    setP(current);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);

  return p;
}

/* ------------------------------------------------------------------ */
/*  FT logo mark — golden bubble letters (inline SVG, 1280 x 1230)     */
/*  Image jaisa soft, blobby F aur T                                   */
/* ------------------------------------------------------------------ */
const F_PATH =
  "M150 150 C170 90 220 70 300 70 L560 68 C640 66 700 55 740 85 " +
  "C775 110 785 150 778 190 C770 245 730 292 670 292 " +
  "C620 292 560 265 480 262 C430 262 405 295 408 335 " +
  "C412 375 440 380 470 375 C510 368 540 352 575 352 " +
  "C625 352 655 395 648 430 C640 480 590 530 535 531 " +
  "C500 532 480 515 440 517 C415 520 405 545 405 580 " +
  "C408 640 440 700 455 735 C470 770 470 800 455 830 " +
  "C430 880 350 912 270 912 C190 912 125 880 106 815 " +
  "C98 770 115 740 130 705 C155 645 175 580 183 500 " +
  "C190 430 188 380 180 340 C172 300 150 260 142 215 " +
  "C138 185 142 165 150 150 Z";

const T_PATH =
  "M610 580 C620 500 680 455 760 447 C840 440 900 448 1000 445 " +
  "C1080 440 1150 432 1200 462 C1245 490 1258 540 1245 590 " +
  "C1232 635 1190 660 1140 650 C1100 642 1070 628 1035 633 " +
  "C1008 640 1005 670 1005 710 C1008 800 1020 870 1038 930 " +
  "C1052 985 1070 1020 1065 1075 C1055 1150 1000 1190 910 1192 " +
  "C820 1192 765 1150 757 1090 C752 1040 775 1000 790 950 " +
  "C810 880 820 810 818 720 C817 670 800 630 765 632 " +
  "C735 633 710 655 675 658 C635 660 605 625 610 580 Z";

function FTMark({ height }) {
  const width = (height * 1280) / 1230;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1280 1230"
      style={{
        display: "block",
        overflow: "visible",
        filter: "drop-shadow(0 10px 16px rgba(0,0,0,.35))",
      }}
      aria-label="FT"
      role="img"
    >
      <defs>
        {/* soft golden fill */}
        <linearGradient id="ftGold" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor="#f6d673" />
          <stop offset="0.55" stopColor="#efc85f" />
          <stop offset="1" stopColor="#e7b94d" />
        </linearGradient>
        {/* andar ki halki chamak */}
        <radialGradient id="ftShine" cx="0.3" cy="0.2" r="0.8">
          <stop offset="0" stopColor="#fff6c8" stopOpacity=".45" />
          <stop offset="1" stopColor="#fff6c8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {[F_PATH, T_PATH].map((d, i) => (
        <g key={i}>
          {/* base fill + dark-gold outline */}
          <path
            d={d}
            fill="url(#ftGold)"
            stroke="#b6800f"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          {/* soft shine */}
          <path d={d} fill="url(#ftShine)" />
          {/* inner light edge (bevel jaisa) */}
          <path
            d={d}
            fill="none"
            stroke="#fff3b8"
            strokeOpacity=".5"
            strokeWidth="3"
            strokeLinejoin="round"
            transform="translate(2 2)"
            style={{ mixBlendMode: "soft-light" }}
          />
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  The walking "O" character (inline SVG, 200 x 300 viewBox)          */
/* ------------------------------------------------------------------ */
function WalkingO({ limb, armL, armR, legL, legR, shadow }) {
  return (
    <svg
      width="200"
      height="300"
      viewBox="0 0 200 300"
      overflow="visible"
      style={{ filter: "drop-shadow(0 12px 14px rgba(0,0,0,.45))" }}
    >
      <defs>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbe6a0" />
          <stop offset="0.45" stopColor="#d9a93f" />
          <stop offset="1" stopColor="#f2d37c" />
        </linearGradient>
        <linearGradient id="goldDark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#b88726" />
          <stop offset="1" stopColor="#e8c25f" />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="100" cy="274" rx="62" ry="9" fill="#000" opacity={shadow} />

      {/* legs (behind the ring) */}
      {[
        { x: 82, a: legL },
        { x: 118, a: legR },
      ].map((leg, i) => (
        <g
          key={i}
          transform={`translate(${leg.x} 168) rotate(${leg.a}) scale(${limb})`}
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="58"
            stroke="url(#goldDark)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <ellipse cx="9" cy="64" rx="22" ry="10" fill="url(#gold)" />
          <ellipse cx="14" cy="61" rx="12" ry="4" fill="#fff" opacity=".25" />
        </g>
      ))}

      {/* arms */}
      <g transform={`translate(48 112) rotate(${armL}) scale(${limb})`}>
        <path
          d="M0 0 C -14 14 -18 34 -8 52"
          fill="none"
          stroke="url(#goldDark)"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <circle cx="-8" cy="54" r="10" fill="url(#gold)" />
      </g>
      <g transform={`translate(152 112) rotate(${armR}) scale(${limb})`}>
        <path
          d="M0 0 C 14 14 18 34 8 52"
          fill="none"
          stroke="url(#goldDark)"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <circle cx="8" cy="54" r="10" fill="url(#gold)" />
      </g>

      {/* the "O" body */}
      <ellipse
        cx="100"
        cy="100"
        rx="52"
        ry="70"
        fill="none"
        stroke="url(#gold)"
        strokeWidth="26"
      />
      <ellipse
        cx="100"
        cy="100"
        rx="43"
        ry="61"
        fill="none"
        stroke="#fff"
        strokeOpacity=".28"
        strokeWidth="3"
      />
      <ellipse
        cx="100"
        cy="100"
        rx="60"
        ry="78"
        fill="none"
        stroke="#8a5f12"
        strokeOpacity=".35"
        strokeWidth="2"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page component                                                */
/* ------------------------------------------------------------------ */
export default function FrameTheoryScroll() {
  const sceneRef = useRef(null);
  const stageRef = useRef(null);
  const ftRef = useRef(null);
  const wordRef = useRef(null);
  const slotRef = useRef(null);

  const p = useSmoothScrollProgress(sceneRef);

  // responsive scale factor
  const [k, setK] = useState(1);
  useLayoutEffect(() => {
    const onResize = () => setK(clamp(window.innerWidth / 760, 0.5, 1));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // measure where things are, so the character can start exactly on the "O"
  const [m, setM] = useState(null);
  useLayoutEffect(() => {
    const measure = () => {
      if (!stageRef.current || !slotRef.current) return;
      const s = stageRef.current.getBoundingClientRect();
      const o = slotRef.current.getBoundingClientRect();
      const f = ftRef.current.getBoundingClientRect();
      const w = wordRef.current.getBoundingClientRect();
      setM({
        vw: s.width,
        vh: s.height,
        slotX: o.left - s.left + o.width / 2,
        slotY: o.top - s.top + o.height / 2,
        ftX: f.left - s.left + f.width / 2,
        ftY: f.top - s.top + f.height / 2,
        wordBottom: w.bottom - s.top,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [k]);

  /* ---------------------------- animation maths ---------------------------- */
  const wordFont = 40 * k;
  const B = 1.45 * k;
  const s0 = (wordFont * 0.72) / 166;

  const wiggle = seg(p, ...T.wiggle);
  const pop = seg(p, ...T.pop);
  const fall = seg(p, ...T.fall);
  const cheer = Math.sin(seg(p, ...T.cheer) * Math.PI);
  const walk = seg(p, ...T.walk);
  const limb = easeOutBack(seg(p, ...T.limbs));
  const walkAmp = seg(p, T.walk[0], T.walk[0] + 0.06);
  const cycle = Math.sin(walk * STEPS * Math.PI * 2);

  let char = null;
  if (m) {
    const Bc = Math.min(B, (m.vh * 0.6) / 251);
    const popE = easeOutBack(pop);
    let sc = lerp(s0, Bc, popE);
    if (walk > 0) sc = lerp(Bc, Bc * 1.3, walk);

    const groundY = m.vh - 28 * k;
    const cyGround = groundY - 168 * sc;

    let x = lerp(m.slotX, m.ftX, easeOutCubic(pop));
    if (walk > 0) x = lerp(m.ftX, m.vw + 260 * k, walk);

    let y;
    if (p < T.fall[0]) {
      y =
        lerp(m.slotY, m.ftY, easeOutCubic(pop)) -
        Math.sin(pop * Math.PI) * 30 * k;
    } else {
      y = lerp(m.ftY, cyGround, easeInQuad(fall));
    }
    const bounce =
      Math.sin(seg(p, T.fall[1], T.fall[1] + 0.08) * Math.PI) * 26 * k;
    const bob = Math.abs(cycle) * 7 * k * walkAmp;
    y = y - bounce - bob;

    const rot =
      Math.sin(pop * Math.PI) * -14 +
      Math.sin(fall * Math.PI * 2) * 9 +
      cycle * 2.5 * walkAmp;
    const sq =
      Math.sin(seg(p, T.fall[1] - 0.01, T.fall[1] + 0.05) * Math.PI) * 0.16;

    const dangle =
      Math.sin(fall * Math.PI * 4) *
      18 *
      (1 - seg(p, T.fall[1] - 0.06, T.fall[1])) *
      (p < T.fall[1] ? 1 : 0);
    const legSwing = cycle * 30 * walkAmp;
    const legL = dangle + legSwing;
    const legR = -dangle - legSwing;

    const raise =
      0.85 *
        clamp(
          seg(p, T.limbs[0], T.limbs[0] + 0.05) -
            seg(p, T.fall[1] - 0.05, T.fall[1] + 0.03),
        ) +
      easeInOut(cheer);
    const shake = Math.sin(p * 110) * 7 * easeInOut(cheer);
    const armSwing = -cycle * 24 * walkAmp;
    const armL = 8 + raise * 155 + shake + armSwing;
    const armR = -(8 + raise * 155) + shake + armSwing;

    const shadowOpacity =
      seg(p, T.fall[1] - 0.07, T.fall[1]) *
      0.38 *
      (1 - clamp(bounce / (26 * k)));

    char = (
      <div
        className="absolute left-0 top-0 will-change-transform"
        style={{
          width: 200,
          height: 300,
          opacity: p > SWAP_AT ? 1 : 0,
          transformOrigin: "100px 100px",
          transform: `translate(${x - 100}px, ${y - 100}px) rotate(${rot}deg) scale(${sc * (1 + sq)}, ${sc * (1 - sq)})`,
        }}
      >
        <WalkingO
          limb={Math.max(0, limb)}
          armL={armL}
          armR={armR}
          legL={legL}
          legR={legR}
          shadow={shadowOpacity}
        />
      </div>
    );
  }

  const ftScale = 1 - Math.sin(pop * Math.PI) * 0.03; // FT halka sa dabta hai jab O nikalta hai

  /* ---------------------------------- JSX ---------------------------------- */
  return (
    <main className="bg-[#4a0e14] text-[#e9c46a]">
      {/* font loading (sirf wordmark ke liye Playfair) */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap');`}</style>

      <section ref={sceneRef} className="relative h-[650vh]">
        <div
          ref={stageRef}
          className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden pb-[14vh]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 35%, #5e1a21 0%, #4a0e14 55%, #3a0a10 100%)",
          }}
        >
          {/* ---- logo block ---- */}
          <div className="relative flex w-[min(92vw,640px)] flex-col items-center">
            {/* FT mark: golden bubble letters */}
            <div
              ref={ftRef}
              className="select-none"
              style={{ transform: `scale(${ftScale})` }}
            >
              <FTMark height={170 * k} />
            </div>

            {/* wordmark */}
            <div
              ref={wordRef}
              className="mt-6 flex flex-col items-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <div
                className="flex select-none items-baseline whitespace-pre"
                style={{ fontSize: wordFont, letterSpacing: "0.12em" }}
              >
                <span>FRAME THE</span>
                {/* yahi wo O hai jo character ban ke bahar nikalta hai */}
                <span
                  ref={slotRef}
                  className="inline-block"
                  style={{
                    opacity: p > SWAP_AT ? 0 : 1,
                    transform: `rotate(${Math.sin(wiggle * Math.PI * 4) * 8}deg) scale(${1 + wiggle * 0.12})`,
                  }}
                >
                  O
                </span>
                <span>RY</span>
              </div>

              <div className="mt-3 flex w-full items-center justify-center gap-4">
                <span className="h-px flex-1 bg-[#e9c46a]/60" />
                <span
                  className="select-none"
                  style={{ fontSize: 15 * k + 2, letterSpacing: "0.5em" }}
                >
                  SOCIALS
                </span>
                <span className="h-px flex-1 bg-[#e9c46a]/60" />
              </div>
            </div>
          </div>

          {/* ---- walking O ---- */}
          <div className="pointer-events-none absolute inset-0">{char}</div>

          {/* ---- scroll hint ---- */}
          <div
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-sm tracking-widest"
            style={{ opacity: 1 - seg(p, 0, 0.05) }}
          >
            <span>Scroll</span>
            <svg
              className="h-5 w-5 animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M6 9l6 6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* ---- progress bar ---- */}
          <div className="absolute right-4 top-1/2 h-32 w-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-[#e9c46a]/20">
            <div
              className="w-full rounded-full bg-[#e9c46a]"
              style={{ height: `${p * 100}%` }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}