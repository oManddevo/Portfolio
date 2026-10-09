"use client";

export default function ReplayIntro() {
  return (
    <button type="button" className="btn btn--ghost" onClick={() => window.dispatchEvent(new Event("intro:play"))}>
      <span className="play-icon" aria-hidden="true" />
      Play intro
    </button>
  );
}
