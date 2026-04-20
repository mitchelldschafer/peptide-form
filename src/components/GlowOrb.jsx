"use client";
const GlowOrb = ({ size = 600, opacity = 0.2, className = '', animated = false, color = 'primary' }) => {
  const rgb = color === 'secondary' ? '26, 158, 122' : '45, 212, 168';
  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none ${animated ? 'glow-animated' : ''} ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(${rgb}, ${opacity}) 0%, rgba(${rgb}, ${opacity * 0.45}) 40%, rgba(${rgb}, ${opacity * 0.12}) 70%, transparent 100%)`,
        filter: 'blur(80px)',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default GlowOrb;
