'use client';
import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const ShinyText = ({
  text,
  disabled = false,
  speed = 2,
  className = '',
  color = '#b5b5b5',
  shineColor = '#FFFFFF40',
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = 'left',
  delay = 0,
}) => {
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Server-side / pre-mount render (simple version)
  if (!mounted) {
    return (
      <span className={className} style={{ color }}>
        {text}
      </span>
    );
  }

  // Client-side full animation
  const gradientStyle = {
    backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <motion.span
      className={`shiny-text ${className}`}
      style={gradientStyle}
      animate={
        disabled
          ? {}
          : {
              backgroundPosition: direction === 'left' 
                ? ['150% center', '-50% center'] 
                : ['-50% center', '150% center'],
            }
      }
      transition={{
        duration: speed,
        repeat: yoyo ? Infinity : 0,
        repeatType: yoyo ? 'reverse' : 'loop',
        delay: delay,
        ease: 'linear',
      }}
      onHoverStart={() => pauseOnHover && setIsPaused(true)}
      onHoverEnd={() => pauseOnHover && setIsPaused(false)}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;