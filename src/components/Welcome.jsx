import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./welcome.scss";

gsap.registerPlugin(useGSAP);

const LETTERS = [
  { ch: "p", w: 400 },
  { ch: "o", w: 400 },
  { ch: "r", w: 400 },
  { ch: "t", w: 500 },
  { ch: "f", w: 500 },
  { ch: "o", w: 500 },
  { ch: "l", w: 300 },
  { ch: "i", w: 300 },
  { ch: "o", w: 300 },
  { ch: ".", w: 300 },
];

export default function Welcome({ name = "Jawad" }) {
  const root = useRef(null);

  const greeting = `Hey, I'm ${name}! welcome to my`.split(" ");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Entrance
        gsap.set(".wc-word", { y: 22, opacity: 0, filter: "blur(8px)" });
        gsap.set(".wc-glyph", { yPercent: 115, skewX: -14 });

        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .to(".wc-word", {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.09,
          })
          .to(
            ".wc-glyph",
            {
              yPercent: 0,
              skewX: 0,
              duration: 1.1,
              stagger: 0.07,
              ease: "power4.out",
            },
            0.3
          );

        // Hover effect
        const glyphs = gsap.utils.toArray(".wc-glyph");

        const apply = (center) => {
          glyphs.forEach((g, i) => {
            const d = Math.abs(i - center);
            const k = center < 0 ? 0 : d === 0 ? 1 : d === 1 ? 0.4 : 0;
            gsap.to(g, {
              "--s": `${k * 0.05}em`,
              scaleX: 1 + k * 0.18,
              scaleY: 1 + k * 0.06,
              xPercent: center < 0 ? 0 : Math.sign(i - center) * k * 10,
              duration: 0.5,
              ease: "power3.out",
              overwrite: "auto",
            });
          });
        };

        const title = root.current.querySelector(".wc-title");

        const onOver = (e) => {
          const mask = e.target.closest(".wc-mask");
          if (!mask) return;
          apply([...title.children].indexOf(mask));
        };

        const hello = root.current.querySelector(".wc-hello");
        const opts = { duration: 0.9, ease: "power3.out" };
        const titleX = gsap.quickTo(title, "x", opts);
        const titleY = gsap.quickTo(title, "y", opts);
        const titleR = gsap.quickTo(title, "rotation", opts);
        const helloX = gsap.quickTo(hello, "x", opts);

        const onMove = (e) => {
          const r = title.getBoundingClientRect();
          const rel = (e.clientX - (r.left + r.width / 2)) / r.width; // -0.5 .. 0.5
          titleX(rel * 36);
          titleY(-8);
          titleR(rel * 1.2);
          helloX(-rel * 14);
        };

        const onLeave = () => {
          apply(-1);
          titleX(0);
          titleY(0);
          titleR(0);
          helloX(0);
        };

        title.addEventListener("pointerover", onOver);
        title.addEventListener("pointermove", onMove);
        title.addEventListener("pointerleave", onLeave);

        return () => {
          title.removeEventListener("pointerover", onOver);
          title.removeEventListener("pointermove", onMove);
          title.removeEventListener("pointerleave", onLeave);
        };
      });
    },
    { scope: root }
  );

  return (
    <section className="wc" ref={root} aria-label="Welcome">
      <div className="wc-content">
        <p className="wc-hello">
          {greeting.map((word, i) => (
            <span className="wc-word" key={i}>
              {word}
              {i < greeting.length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </p>

        <h1 className="wc-title" aria-label="portfolio.">
          {LETTERS.map(({ ch, w }, i) => (
            <span className="wc-mask" aria-hidden="true" key={i}>
              <span className="wc-glyph" style={{ fontWeight: w }}>
                {ch}
              </span>
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
