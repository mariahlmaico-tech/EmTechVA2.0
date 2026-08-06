import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const ClickRippleEffect: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev.slice(-8), newRipple]);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const handleAnimationComplete = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <React.Fragment key={ripple.id}>
            {/* Outer expanding ring */}
            <motion.span
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 2.2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              onAnimationComplete={() => handleAnimationComplete(ripple.id)}
              style={{
                left: ripple.x - 24,
                top: ripple.y - 24,
              }}
              className="absolute w-12 h-12 rounded-full border-2 border-indigo-400/80 shadow-[0_0_15px_rgba(99,102,241,0.6)]"
            />
            {/* Inner glowing pulse dot */}
            <motion.span
              initial={{ scale: 0.5, opacity: 0.9 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              style={{
                left: ripple.x - 10,
                top: ripple.y - 10,
              }}
              className="absolute w-5 h-5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]"
            />
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  );
};
