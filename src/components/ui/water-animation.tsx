'use client';

import { useEffect, useRef } from 'react';

interface WaterDroplet {
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
}

export function WaterAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create droplets - reduced to 5 for subtlety
    const droplets: WaterDroplet[] = [];
    const dropletCount = 5;

    for (let i = 0; i < dropletCount; i++) {
      droplets.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random() * 0.5, // Much slower
        size: 15 + Math.random() * 25, // Smaller droplets
        opacity: 0.03 + Math.random() * 0.05 // Very subtle opacity
      });
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      droplets.forEach((droplet) => {
        // Move droplet down
        droplet.y += droplet.speed;

        // Reset to top when it goes off screen
        if (droplet.y > canvas.height + droplet.size) {
          droplet.y = -droplet.size;
          droplet.x = Math.random() * canvas.width;
        }

        // Draw water droplet shape
        ctx.save();
        ctx.translate(droplet.x, droplet.y);

        // Create gradient for 3D effect - much more subtle
        const gradient = ctx.createRadialGradient(0, -droplet.size * 0.3, 0, 0, 0, droplet.size);
        gradient.addColorStop(0, `rgba(0, 163, 217, ${droplet.opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(0, 163, 217, ${droplet.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(0, 163, 217, 0)`);

        ctx.fillStyle = gradient;

        // Draw teardrop shape
        ctx.beginPath();
        ctx.arc(0, 0, droplet.size * 0.7, 0, Math.PI * 2);
        ctx.fill();

        // Add highlight for shine effect - very subtle
        ctx.fillStyle = `rgba(255, 255, 255, ${droplet.opacity * 0.2})`;
        ctx.beginPath();
        ctx.arc(-droplet.size * 0.2, -droplet.size * 0.2, droplet.size * 0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.25 }} // Much more subtle overall opacity
    />
  );
}

export function WaterRipples() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      opacity: number;
    }

    const ripples: Ripple[] = [];

    const createRipple = (x: number, y: number) => {
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: 150 + Math.random() * 150,
        speed: 2 + Math.random() * 2,
        opacity: 0.6
      });
    };

    // Create initial ripples
    const intervalId = setInterval(() => {
      createRipple(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      );
    }, 1500);

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        
        ripple.radius += ripple.speed;
        ripple.opacity = Math.max(0, ripple.opacity - 0.003);

        if (ripple.radius > ripple.maxRadius || ripple.opacity <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        // Draw ripple
        ctx.strokeStyle = `rgba(0, 163, 217, ${ripple.opacity})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner ripple for depth
        ctx.strokeStyle = `rgba(0, 163, 217, ${ripple.opacity * 0.6})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius * 0.8, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}

export function WaterWaves() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      <div className="absolute inset-0 water-waves">
        <svg
          className="absolute bottom-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#00A3D9"
            fillOpacity="0.3"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,112C672,107,768,149,864,160C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
              "
            />
          </path>
        </svg>
        
        <svg
          className="absolute bottom-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#00A3D9"
            fillOpacity="0.2"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,224C672,224,768,192,864,165.3C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,224C672,224,768,192,864,165.3C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,224C672,224,768,192,864,165.3C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
              "
            />
          </path>
        </svg>
      </div>
    </div>
  );
}

// Subtle background effect - best for most pages
export function WaterGradientFlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 water-gradient-flow">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-transparent animate-water-flow" />
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-100/20 via-transparent to-cyan-50/30 animate-water-flow-reverse" />
      </div>
      
      <style jsx>{`
        @keyframes water-flow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(10px, -10px) scale(1.05);
            opacity: 0.5;
          }
        }
        
        @keyframes water-flow-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(-10px, 10px) scale(1.05);
            opacity: 0.4;
          }
        }
        
        .animate-water-flow {
          animation: water-flow 20s ease-in-out infinite;
        }
        
        .animate-water-flow-reverse {
          animation: water-flow-reverse 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Medium visibility gradient flow - more noticeable than subtle version
export function WaterGradientFlowMedium() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 water-gradient-flow-medium">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-cyan-100/40 to-transparent animate-water-flow-medium" />
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-200/40 via-transparent to-cyan-100/50 animate-water-flow-medium-reverse" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-cyan/10 to-transparent animate-water-flow-medium-horizontal" />
      </div>
      
      <style jsx>{`
        @keyframes water-flow-medium {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(15px, -15px) scale(1.08);
            opacity: 0.8;
          }
        }
        
        @keyframes water-flow-medium-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-15px, 15px) scale(1.08);
            opacity: 0.7;
          }
        }
        
        @keyframes water-flow-medium-horizontal {
          0%, 100% {
            transform: translateX(-20px);
            opacity: 0.3;
          }
          50% {
            transform: translateX(20px);
            opacity: 0.6;
          }
        }
        
        .animate-water-flow-medium {
          animation: water-flow-medium 18s ease-in-out infinite;
        }
        
        .animate-water-flow-medium-reverse {
          animation: water-flow-medium-reverse 22s ease-in-out infinite;
        }
        
        .animate-water-flow-medium-horizontal {
          animation: water-flow-medium-horizontal 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
