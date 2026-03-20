export default function XYLogo({ size = 48 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 420 420"
      width={size}
      height={size}
      aria-label="X & Y Design"
      role="img"
    >
      {/* Background circle */}
      <circle cx="210" cy="210" r="200" fill="#1A56DB" opacity="0.06" />

      {/* X strokes — blue */}
      <line x1="70" y1="70" x2="350" y2="350" stroke="#1A56DB" strokeWidth="32" strokeLinecap="round" opacity="0.55" />
      <line x1="350" y1="70" x2="70" y2="350" stroke="#1A56DB" strokeWidth="32" strokeLinecap="round" opacity="0.55" />

      {/* Y strokes — gold */}
      <line x1="210" y1="210" x2="210" y2="370" stroke="#fab600" strokeWidth="26" strokeLinecap="round" opacity="0.95" />
      <line x1="120" y1="80" x2="210" y2="210" stroke="#fab600" strokeWidth="26" strokeLinecap="round" opacity="0.95" />
      <line x1="300" y1="80" x2="210" y2="210" stroke="#fab600" strokeWidth="26" strokeLinecap="round" opacity="0.95" />

      {/* Junction dot */}
      <circle cx="210" cy="210" r="20" fill="#1A56DB" />
      <circle cx="210" cy="210" r="9" fill="#fab600" />

      {/* Corner dots */}
      <circle cx="70" cy="70" r="10" fill="#fab600" opacity="0.8" />
      <circle cx="350" cy="350" r="10" fill="#fab600" opacity="0.8" />
      <circle cx="350" cy="70" r="10" fill="#1A56DB" opacity="0.7" />
      <circle cx="70" cy="350" r="10" fill="#1A56DB" opacity="0.7" />
    </svg>
  );
}
