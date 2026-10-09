// The heartbeat line used across the site: drawn once in the intro, scanning in the hero card.
type Props = { className?: string; id: string };

const PATH = "M0 60 H200 L222 60 L236 34 L252 92 L270 8 L288 86 L302 60 H420 L432 60 L440 48 L448 66 L456 60 H600";

export default function Pulse({ className, id }: Props) {
  return (
    <svg className={className} viewBox="0 0 600 120" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="var(--teal-2)" stopOpacity="0.15" />
          <stop offset="45%" stopColor="var(--teal-2)" />
          <stop offset="70%" stopColor="var(--coral)" />
          <stop offset="100%" stopColor="var(--coral)" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path className="pulse-base" d={PATH} pathLength={1} />
      <path className="pulse-line" d={PATH} pathLength={1} stroke={`url(#${id})`} />
    </svg>
  );
}
