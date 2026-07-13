export function OrganicBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--bg)]">
      {/* Base soft layer */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[100px]" />

      {/* 1. Cream/White Blob (Top) */}
      <div
        className="absolute -top-[10%] left-[10%] h-[40vh] w-[60vw] bg-white opacity-60 blur-[100px] animate-morph"
        style={{ animationDuration: '18s' }}
      />
      
      {/* 2. Yellow/Amber Blob (Upper Middle) */}
      <div
        className="absolute top-[20%] right-[10%] h-[50vh] w-[70vw] bg-[var(--brand-3)] opacity-20 mix-blend-multiply blur-[120px] animate-morph"
        style={{ animationDuration: '22s', animationDirection: 'reverse' }}
      />

      {/* 3. Green Blob (Lower Middle) */}
      <div
        className="absolute top-[50%] -left-[10%] h-[50vh] w-[60vw] bg-[var(--brand)] opacity-20 mix-blend-multiply blur-[120px] animate-morph"
        style={{ animationDuration: '25s', animationDelay: '2s' }}
      />
      
      {/* 4. Purple Blob (Bottom) */}
      <div
        className="absolute -bottom-[20%] right-[5%] h-[60vh] w-[80vw] bg-[var(--brand-2)] opacity-20 mix-blend-multiply blur-[130px] animate-morph"
        style={{ animationDuration: '20s', animationDirection: 'reverse', animationDelay: '1s' }}
      />
      
      {/* Final frosted overlay for perfect UI clarity */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl" />
    </div>
  );
}
