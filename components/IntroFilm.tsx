"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Pulse from "./Pulse";

// An ~11 second animated "film" about James that plays before the site, once per browser session.
// Skippable (button, Esc, Enter, Space), replayable from the hero, and never autoplays for
// visitors who prefer reduced motion or when the URL has ?nointro.

const SCENES = [0, 2300, 4600, 7000, 9200]; // start time of each scene, ms
const DURATION = 11600;
const CLOSE_MS = 900;
const SEEN_KEY = "intro-seen";
const CHIPS = ["Python", "Flask", "React", "NextJS", "PostgreSQL", "AWS", "Claude"];

type Phase = "idle" | "playing" | "closing";

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const time = (ms: number) => `0:${String(Math.floor(ms / 1000)).padStart(2, "0")}`;

export default function IntroFilm() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [run, setRun] = useState(0);
  const [scene, setScene] = useState(0);
  const sceneRef = useRef(0);
  const barRef = useRef<HTMLDivElement>(null);
  const clockRef = useRef<HTMLSpanElement>(null);
  const yearsRef = useRef<HTMLSpanElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const phaseRef = useRef<Phase>("idle");

  const unlock = () => document.documentElement.classList.remove("intro-pending", "intro-lock");

  const play = useCallback(() => {
    document.documentElement.classList.add("intro-lock");
    document.documentElement.classList.remove("intro-pending");
    sceneRef.current = 0;
    setScene(0);
    phaseRef.current = "playing";
    setPhase("playing");
    setRun((r) => r + 1);
  }, []);

  const finish = useCallback(() => {
    if (phaseRef.current !== "playing") return;
    phaseRef.current = "closing";
    setPhase("closing");
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}
    window.setTimeout(() => {
      phaseRef.current = "idle";
      setPhase("idle");
      unlock();
    }, CLOSE_MS);
  }, []);

  // Decide whether to autoplay, and listen for "Play intro" from the hero.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const skip = new URLSearchParams(window.location.search).has("nointro");
    if (!seen && !reduced && !skip) play();
    else unlock();

    window.addEventListener("intro:play", play);
    return () => window.removeEventListener("intro:play", play);
  }, [play]);

  // The playhead: progress bar, timecode, scene changes and the years counter.
  useEffect(() => {
    if (phase !== "playing") return;
    skipRef.current?.focus({ preventScroll: true });
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = now - start;
      if (barRef.current) barRef.current.style.transform = `scaleX(${clamp01(t / DURATION)})`;
      if (clockRef.current) clockRef.current.textContent = `${time(Math.min(t, DURATION))} / ${time(DURATION)}`;

      let s = 0;
      while (s + 1 < SCENES.length && t >= SCENES[s + 1]) s++;
      if (s !== sceneRef.current) {
        sceneRef.current = s;
        setScene(s);
      }
      if (s === 1 && yearsRef.current) {
        const p = clamp01((t - SCENES[1] - 250) / 1300);
        yearsRef.current.textContent = String(Math.round(12 * (1 - Math.pow(1 - p, 3))));
      }

      if (t >= DURATION) finish();
      else raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        finish();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
    };
  }, [phase, run, finish]);

  if (phase === "idle") return null;

  const sceneEnd = scene + 1 < SCENES.length ? SCENES[scene + 1] : DURATION + CLOSE_MS;
  const stageStyle = { "--dur": `${sceneEnd - SCENES[scene]}ms` } as CSSProperties;

  return (
    <div
      className={`film${phase === "closing" ? " film--closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Intro film: about James Stearns"
    >
      <div className="film__glow" aria-hidden="true" />
      <div className="film__grain" aria-hidden="true" />
      <div className="film__letterbox film__letterbox--top" aria-hidden="true" />
      <div className="film__letterbox film__letterbox--bottom" aria-hidden="true" />

      <p className="film__label">
        <span className="film__rec" aria-hidden="true" />
        James Stearns · intro
      </p>

      <div
        className={`film__stage film__stage--${scene}${scene === SCENES.length - 1 ? " film__stage--last" : ""}`}
        key={`${run}-${scene}`}
        style={stageStyle}
      >
        {scene === 0 && (
          <>
            <Pulse className="film__pulse" id={`film-pulse-${run}`} />
            <h2 className="film__hello">
              <span>Hi,</span> <span>I&rsquo;m</span> <span>James.</span>
            </h2>
          </>
        )}

        {scene === 1 && (
          <>
            <p className="film__count">
              <span ref={yearsRef}>0</span>
              <small>years</small>
            </p>
            <p className="film__caption">of professional software engineering</p>
          </>
        )}

        {scene === 2 && (
          <>
            <p className="film__kicker">Designing, building &amp; operating</p>
            <ul className="film__list">
              <li>unified patient portals.</li>
              <li>cloud-native healthcare systems.</li>
              <li>distributed data engines.</li>
            </ul>
          </>
        )}

        {scene === 3 && (
          <>
            <p className="film__kicker">Full-stack, end to end</p>
            <div className="film__chips">
              {CHIPS.map((chip, i) => (
                <span key={chip} style={{ "--i": i } as CSSProperties}>
                  {chip}
                </span>
              ))}
            </div>
            <p className="film__caption">Python &amp; Flask behind. React &amp; NextJS in front.</p>
          </>
        )}

        {scene === 4 && (
          <div className="film__title">
            <p className="film__kicker">Senior Software Engineer</p>
            <h2>
              James
              <br />
              <em>Stearns</em>
            </h2>
            <p className="film__caption">Health tech &amp; full-stack systems</p>
          </div>
        )}
      </div>

      <div className="film__controls">
        <span ref={clockRef} className="film__time">
          0:00 / {time(DURATION)}
        </span>
        <div className="film__progress" aria-hidden="true">
          <div ref={barRef} />
        </div>
        <button ref={skipRef} type="button" className="film__skip" onClick={finish}>
          Skip intro <kbd>Esc</kbd>
        </button>
      </div>
    </div>
  );
}
