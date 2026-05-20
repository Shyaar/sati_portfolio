interface CircuitLineProps {
  color: string;
}

export function CircuitLine({ color }: CircuitLineProps) {
  return (
    <div className="w-full h-px relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`,
          opacity: 0.3,
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}`,
        }}
      ></div>
    </div>
  );
}
