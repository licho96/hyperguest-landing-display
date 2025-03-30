
import { useState, useEffect, useRef } from "react";

interface InteractiveBackgroundProps {
  children: React.ReactNode;
}

const InteractiveBackground = ({ children }: InteractiveBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden">
      {/* Enhanced dynamic background gradient that follows cursor */}
      <div
        className="absolute inset-0 bg-primary/5 transition-all duration-300 ease-out pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 1200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 164, 0.15) 0%, rgba(0, 185, 193, 0.08) 40%, rgba(0, 0, 0, 0) 80%)`,
        }}
      />
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      {/* Animated blobs */}
      <div 
        className="absolute w-72 h-72 rounded-full filter blur-3xl opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, rgba(0, 212, 164, 0.6) 0%, rgba(0, 185, 193, 0.3) 50%, rgba(0, 0, 0, 0) 80%)`,
          top: `calc(20% + ${mousePosition.y * 0.02}px)`,
          right: `calc(20% + ${mousePosition.x * 0.02}px)`,
          transition: "all 0.8s ease-out",
        }}
      />
      
      <div 
        className="absolute w-64 h-64 rounded-full filter blur-3xl opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, rgba(0, 212, 164, 0.6) 0%, rgba(0, 185, 193, 0.3) 50%, rgba(0, 0, 0, 0) 80%)`,
          bottom: `calc(10% - ${mousePosition.y * 0.01}px)`,
          left: `calc(10% - ${mousePosition.x * 0.01}px)`,
          transition: "all 1s ease-out",
        }}
      />
      
      {/* Cursor spotlight effect - enhanced and more visible */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle, rgba(0, 212, 164, 0.3) 0%, rgba(0, 212, 164, 0.15) 30%, rgba(0, 212, 164, 0.0) 70%)`,
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
          transition: "transform 0.1s ease-out",
          opacity: 0.9,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default InteractiveBackground;
