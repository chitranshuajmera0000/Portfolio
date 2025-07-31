import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  prevZ: number;
}

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < 500; i++) {
        starsRef.current.push({
          x: Math.random() * 2000 - 1000,
          y: Math.random() * 1200 - 600,
          z: Math.random() * 1000,
          prevZ: Math.random() * 1000
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(11, 20, 38, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      starsRef.current.forEach(star => {
        star.prevZ = star.z;
        star.z -= 2;

        if (star.z <= 0) {
          star.x = Math.random() * 2000 - 1000;
          star.y = Math.random() * 1200 - 600;
          star.z = 1000;
          star.prevZ = 1000;
        }

        const k = 128 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        const prevK = 128 / star.prevZ;
        const prevPx = star.x * prevK + centerX;
        const prevPy = star.y * prevK + centerY;

        const opacity = 1 - star.z / 1000;
        const size = (1 - star.z / 1000) * 3;

        // Enhanced star trail effect
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(prevPx, prevPy);
        ctx.lineTo(px, py);
        ctx.stroke();

        // Multi-colored star cores
        const colors = [
          `rgba(147, 197, 253, ${opacity})`, // Blue
          `rgba(167, 243, 208, ${opacity})`, // Emerald
          `rgba(196, 181, 253, ${opacity})`, // Purple
          `rgba(252, 165, 165, ${opacity})`, // Red
          `rgba(254, 215, 170, ${opacity})`, // Orange
          `rgba(252, 211, 77, ${opacity})`,  // Yellow
        ];
        
        const colorIndex = Math.floor((star.x + star.y) % colors.length);
        ctx.fillStyle = colors[colorIndex];
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add sparkle effect for closer stars
        if (opacity > 0.7) {
          ctx.fillStyle = `rgba(255, 255, 255, ${(opacity - 0.7) * 3})`;
          ctx.beginPath();
          ctx.arc(px, py, size * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initStars();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ 
        background: `
          linear-gradient(to bottom, 
            #0B1426 0%,
            #1E1B4B 25%,
            #312E81 50%,
            #1E3A8A 75%,
            #0F172A 100%
          )
        `
      }}
    />
  );
};

export default StarField;