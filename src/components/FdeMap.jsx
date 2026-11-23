import { AREAS } from "../data/content.js";

const cx = 250, cy = 215, R = 150;
const pos = AREAS.map((_, i) => {
  const a = -Math.PI / 2 + i * ((2 * Math.PI) / 8);
  return [cx + R * Math.cos(a) * 1.15, cy + R * Math.sin(a) * 0.95];
});

export default function FdeMap({ active, onSelect }) {
  return (
    <svg id="map" viewBox="0 0 500 420" role="img" aria-label="FDE responsibility map">
      {pos.map(([x, y], i) => (
        <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={AREAS[i].c} strokeOpacity={active === i ? 0.9 : 0.35} />
      ))}
      <g style={{ cursor: "pointer" }} onClick={() => onSelect(-1)}>
        <circle cx={cx} cy={cy} r="34" fill="#0a0a24" stroke="oklch(60% .25 285)" strokeWidth="3" />
        <circle cx={cx} cy={cy} r="42" fill="none" stroke="oklch(85% .17 90)" strokeOpacity=".5" />
        <text x={cx} y={cy + 4} style={{ font: "700 14px Space Grotesk", fill: "#fff" }}>FDE</text>
      </g>
      {pos.map(([x, y], i) => {
        const ty = y < cy - 20 ? y - 20 : y + 28;
        return (
          <g key={i} className={"node" + (active === i ? " on" : "")} tabIndex={0} role="button" aria-label={AREAS[i].n}
            onClick={() => onSelect(i)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onSelect(i); } }}>
            <circle cx={x} cy={y} r={active === i ? 16 : 12} fill="#0a0a24" stroke={AREAS[i].c} strokeWidth="2.5" />
            <circle cx={x} cy={y} r="5" fill={AREAS[i].c} />
            <text x={x} y={ty}>{AREAS[i].n}</text>
          </g>
        );
      })}
    </svg>
  );
}
