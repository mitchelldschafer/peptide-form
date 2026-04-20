"use client";
const GlowOrb = ({ size = 600, opacity = 0.2, className = '', animated = false, color = 'primary' }) => {
  const rgbVar = color === 'secondary' ? 'var(--glow-secondary-rgb)' : 'var(--glow-primary-rgb)';
  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none ${animated ? 'glow-animated' : ''} ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(${rgbVar}, ${opacity}) 0%, rgba(${rgbVar}, ${opacity * 0.45}) 40%, rgba(${rgbVar}, ${opacity * 0.12}) 70%, transparent 100%)`,
        filter: 'blur(80px)',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default GlowOrb;
