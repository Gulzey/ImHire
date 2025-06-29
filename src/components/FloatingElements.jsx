import React, { useMemo } from 'react'

const FloatingElements = () => {
  const sparkleCount = 12;
  const sparkles = useMemo(() => Array.from({ length: sparkleCount }).map((_, i) => ({
    top: Math.random() * 90 + 2,
    left: Math.random() * 90 + 2,
    color: 'emerald', // All sparkles are green
  })), []);
  // Draw lines only between close sparkles
  const lines = [];
  for (let i = 0; i < sparkleCount; i++) {
    for (let j = i + 1; j < sparkleCount; j++) {
      const dx = sparkles[i].left - sparkles[j].left;
      const dy = sparkles[i].top - sparkles[j].top;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 18) {
        lines.push(
          <svg
            key={`line-${i}-${j}`}
            className="absolute pointer-events-none z-0"
            style={{
              top: `${Math.min(sparkles[i].top, sparkles[j].top)}%`,
              left: `${Math.min(sparkles[i].left, sparkles[j].left)}%`,
              width: `${Math.abs(sparkles[i].left - sparkles[j].left)}vw`,
              height: `${Math.abs(sparkles[i].top - sparkles[j].top)}vh`,
            }}
          >
            <line
              x1={sparkles[i].left > sparkles[j].left ? `${Math.abs(sparkles[i].left - sparkles[j].left)}vw` : '0'}
              y1={sparkles[i].top > sparkles[j].top ? `${Math.abs(sparkles[i].top - sparkles[j].top)}vh` : '0'}
              x2={sparkles[i].left > sparkles[j].left ? '0' : `${Math.abs(sparkles[i].left - sparkles[j].left)}vw`}
              y2={sparkles[i].top > sparkles[j].top ? '0' : `${Math.abs(sparkles[i].top - sparkles[j].top)}vh`}
              stroke="#34d399" // Green
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity="0.45"
            />
          </svg>
        );
      }
    }
  }
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Vibrant Blurred Blobs - now with blue and pink gradients too */}
      <svg className="absolute top-[-10%] left-[-10%] w-[160vw] h-[110vw] sm:w-[60vw] sm:h-[40vw] md:w-[38vw] md:h-[28vw] opacity-35 mix-blend-lighten animate-float" style={{ filter: 'blur(40px)' }} viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="blob1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </radialGradient>
        </defs>
        <path fill="url(#blob1)" d="M90.8,-97.2C120.7,-85.2,143.7,-63.2,153.2,-37.2C162.7,-11.2,158.7,18.8,146.2,44.7C133.7,70.6,112.7,92.4,87.2,108.2C61.7,124,31.8,133.8,2.3,131.1C-27.2,128.4,-54.3,113.2,-77.2,94.2C-100.1,75.2,-118.7,52.4,-127.2,25.2C-135.7,-2,-134.1,-33.6,-121.2,-60.2C-108.3,-86.8,-84.1,-108.4,-56.7,-120.2C-29.3,-132,1.3,-134,29.8,-128.2C58.3,-122.4,116.7,-109.2,90.8,-97.2Z" transform="translate(150 100)" />
      </svg>
      <svg className="absolute bottom-[-20%] right-[-20%] w-[200vw] h-[140vw] sm:w-[90vw] sm:h-[60vw] md:w-[65vw] md:h-[50vw] opacity-50 mix-blend-lighten animate-float" style={{ filter: 'blur(70px)', animationDelay: '2s' }} viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="blob2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#16a34a" />
          </radialGradient>
        </defs>
        <path fill="url(#blob2)" d="M120.8,-97.2C150.7,-85.2,173.7,-63.2,183.2,-37.2C192.7,-11.2,188.7,18.8,176.2,44.7C163.7,70.6,142.7,92.4,117.2,108.2C91.7,124,61.8,133.8,32.3,131.1C1.8,128.4,-25.3,113.2,-48.2,94.2C-71.1,75.2,-89.7,52.4,-98.2,25.2C-106.7,-2,-105.1,-33.6,-92.2,-60.2C-79.3,-86.8,-55.1,-108.4,-27.7,-120.2C-0.3,-132,30.3,-134,58.8,-128.2C87.3,-122.4,145.7,-109.2,120.8,-97.2Z" transform="translate(150 100)" />
      </svg>
      {/* Blue Gradient Blob (top right, now wider) */}
      <svg className="absolute top-[-12%] right-[-10%] w-[120vw] h-[70vw] sm:w-[64vw] sm:h-[38vw] md:w-[54vw] md:h-[32vw] opacity-30 mix-blend-lighten animate-float" style={{ filter: 'blur(48px)', animationDelay: '1.5s' }} viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="blobBlue" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#6366f1" />
          </radialGradient>
        </defs>
        <path fill="url(#blobBlue)" d="M90.8,-97.2C120.7,-85.2,143.7,-63.2,153.2,-37.2C162.7,-11.2,158.7,18.8,146.2,44.7C133.7,70.6,112.7,92.4,87.2,108.2C61.7,124,31.8,133.8,2.3,131.1C-27.2,128.4,-54.3,113.2,-77.2,94.2C-100.1,75.2,-118.7,52.4,-127.2,25.2C-135.7,-2,-134.1,-33.6,-121.2,-60.2C-108.3,-86.8,-84.1,-108.4,-56.7,-120.2C-29.3,-132,1.3,-134,29.8,-128.2C58.3,-122.4,116.7,-109.2,90.8,-97.2Z" transform="translate(150 100)" />
      </svg>
      {/* Blue Gradient Blob (bottom left) */}
      <svg className="absolute bottom-[-10%] left-[-10%] w-[100vw] h-[60vw] sm:w-[44vw] sm:h-[28vw] md:w-[36vw] md:h-[22vw] opacity-30 mix-blend-lighten animate-float" style={{ filter: 'blur(36px)', animationDelay: '2.2s' }} viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="blobBlueLeft" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#a5b4fc" />
          </radialGradient>
        </defs>
        <path fill="url(#blobBlueLeft)" d="M90.8,-97.2C120.7,-85.2,143.7,-63.2,153.2,-37.2C162.7,-11.2,158.7,18.8,146.2,44.7C133.7,70.6,112.7,92.4,87.2,108.2C61.7,124,31.8,133.8,2.3,131.1C-27.2,128.4,-54.3,113.2,-77.2,94.2C-100.1,75.2,-118.7,52.4,-127.2,25.2C-135.7,-2,-134.1,-33.6,-121.2,-60.2C-108.3,-86.8,-84.1,-108.4,-56.7,-120.2C-29.3,-132,1.3,-134,29.8,-128.2C58.3,-122.4,116.7,-109.2,90.8,-97.2Z" transform="translate(150 100)" />
      </svg>

      {/* Neon Gradient Green Circle (smaller, slow float) */}
      <div className="absolute top-1/3 left-1/2 w-32 h-32 sm:w-20 sm:h-20 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-emerald-400 via-green-400 to-cyan-400 opacity-70 shadow-2xl animate-green-float"
        style={{ boxShadow: '0 0 40px 6px #4ade80, 0 0 80px 20px #22d3ee', transform: 'translateX(-50%)' }}></div>

      {/* Subtle Glassmorphism Rectangle (left only) */}
      <div className="absolute bottom-10 left-1/4 w-36 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-lg -rotate-6 animate-float" style={{ animationDelay: '1.5s' }}></div>

      {/* Dots and Lines for Depth */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-emerald-300/80 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-emerald-300/80 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/6 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-emerald-200/80 to-transparent animate-slide-right"></div>
      <div className="absolute bottom-1/6 right-1/2 w-24 h-px bg-gradient-to-l from-transparent via-emerald-200/60 to-transparent animate-slide-left"></div>

      {/* Green, Blue, and Pink Sparkles (animated, glowing, with constellation lines) */}
      {lines}
      {sparkles.map((s, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute rounded-full pointer-events-none animate-sparkle-slow z-10"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${s.top}%`,
            left: `${s.left}%`,
            boxShadow: '0 0 6px 2px #34d39988, 0 0 12px 4px #10b98122',
            backgroundColor: 'rgba(52,211,153,0.8)',
            animationDelay: `${Math.random() * 8}s`,
            opacity: 0.8,
          }}
        ></div>
      ))}
    </div>
  )
}

export default FloatingElements;