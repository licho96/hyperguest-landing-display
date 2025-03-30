
import React, { useEffect, useRef } from 'react';

const ConnectivityMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  
  // Define our system nodes
  const nodes = [
    // Supply side (ARI Sources)
    { id: 'pms1', type: 'source', name: 'PMS System', x: 0, y: 0, color: '#00d4a4' },
    { id: 'cm1', type: 'source', name: 'Channel Manager', x: 0, y: 0, color: '#00d4a4' },
    { id: 'rms1', type: 'source', name: 'Revenue System', x: 0, y: 0, color: '#00d4a4' },
    { id: 'hotel1', type: 'source', name: 'Hotel System', x: 0, y: 0, color: '#00d4a4' },
    
    // Central node (Hyperguest)
    { id: 'hyperguest', type: 'central', name: 'Hyperguest API', x: 0, y: 0, color: '#ffffff' },
    
    // Demand side (Distribution)
    { id: 'ota1', type: 'demand', name: 'OTA Partner', x: 0, y: 0, color: '#00b9c1' },
    { id: 'meta1', type: 'demand', name: 'Metasearch', x: 0, y: 0, color: '#00b9c1' },
    { id: 'be1', type: 'demand', name: 'Booking Engine', x: 0, y: 0, color: '#00b9c1' },
    { id: 'ta1', type: 'demand', name: 'Travel Agency', x: 0, y: 0, color: '#00b9c1' }
  ];
  
  // Define connections between nodes
  const connections = [
    { from: 'pms1', to: 'hyperguest', status: 'active' },
    { from: 'cm1', to: 'hyperguest', status: 'active' },
    { from: 'rms1', to: 'hyperguest', status: 'active' },
    { from: 'hotel1', to: 'hyperguest', status: 'active' },
    { from: 'hyperguest', to: 'ota1', status: 'active' },
    { from: 'hyperguest', to: 'meta1', status: 'active' },
    { from: 'hyperguest', to: 'be1', status: 'active' },
    { from: 'hyperguest', to: 'ta1', status: 'active' }
  ];
  
  // Data packet animation
  const packets = useRef<any[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      
      // Position nodes based on canvas size
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.3;
      
      // Position central node
      const centralNode = nodes.find(n => n.id === 'hyperguest');
      if (centralNode) {
        centralNode.x = centerX;
        centralNode.y = centerY;
      }
      
      // Position source nodes on left
      const sourceNodes = nodes.filter(n => n.type === 'source');
      sourceNodes.forEach((node, i) => {
        const angle = (Math.PI / (sourceNodes.length + 1)) * (i + 1) + Math.PI / 2;
        node.x = centerX - Math.cos(angle) * radius;
        node.y = centerY - Math.sin(angle) * radius;
      });
      
      // Position demand nodes on right
      const demandNodes = nodes.filter(n => n.type === 'demand');
      demandNodes.forEach((node, i) => {
        const angle = (Math.PI / (demandNodes.length + 1)) * (i + 1) - Math.PI / 2;
        node.x = centerX + Math.cos(angle) * radius;
        node.y = centerY - Math.sin(angle) * radius;
      });
    };
    
    // Initialize resizing and handle window resizes
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create dark gradient background
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      bgGradient.addColorStop(0, 'rgba(13, 18, 30, 0.3)');
      bgGradient.addColorStop(1, 'rgba(9, 14, 24, 0.8)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      
      const gridSize = 30;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw connections
      connections.forEach(conn => {
        const fromNode = nodes.find(n => n.id === conn.from);
        const toNode = nodes.find(n => n.id === conn.to);
        
        if (fromNode && toNode) {
          const gradient = ctx.createLinearGradient(
            fromNode.x, fromNode.y, 
            toNode.x, toNode.y
          );
          
          gradient.addColorStop(0, fromNode.color);
          gradient.addColorStop(1, toNode.color);
          
          // Draw glowing connection line
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
          ctx.lineWidth = 6;
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });
      
      // Draw nodes with glowing effect
      nodes.forEach(node => {
        ctx.beginPath();
        
        // Different sizes for different node types
        let nodeRadius = 6;
        if (node.type === 'central') nodeRadius = 16;
        
        // Draw node glow
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, nodeRadius * 3
        );
        
        glowGradient.addColorStop(0, node.color);
        glowGradient.addColorStop(0.5, `${node.color}60`);
        glowGradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = glowGradient;
        ctx.arc(node.x, node.y, nodeRadius * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        
        // Draw node labels with background for better readability
        ctx.font = node.type === 'central' ? 'bold 12px Arial' : '11px Arial';
        ctx.textAlign = 'center';
        
        const textY = node.y + nodeRadius + 18;
        let textX = node.x;
        
        if (node.type === 'source') {
          ctx.textAlign = 'right';
          textX = node.x - nodeRadius - 10;
        } else if (node.type === 'demand') {
          ctx.textAlign = 'left';
          textX = node.x + nodeRadius + 10;
        }
        
        // Text background for better readability
        const textWidth = ctx.measureText(node.name).width;
        const textPadding = 4;
        const textHeight = 16;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        if (node.type === 'source') {
          ctx.fillRect(
            textX - textWidth - textPadding, 
            textY - textHeight + textPadding, 
            textWidth + textPadding * 2, 
            textHeight
          );
        } else if (node.type === 'demand') {
          ctx.fillRect(
            textX - textPadding, 
            textY - textHeight + textPadding, 
            textWidth + textPadding * 2, 
            textHeight
          );
        } else {
          ctx.fillRect(
            textX - textWidth / 2 - textPadding, 
            textY - textHeight + textPadding, 
            textWidth + textPadding * 2, 
            textHeight
          );
        }
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillText(node.name, textX, textY);
      });
      
      // Randomly create new data packets (with lowered frequency)
      if (Math.random() < 0.03) {
        // Determine random source and target
        const sources = nodes.filter(n => n.type === 'source');
        const demands = nodes.filter(n => n.type === 'demand');
        const central = nodes.find(n => n.type === 'central');
        
        if (sources.length && demands.length && central) {
          // Randomly decide direction (source to demand or demand to source)
          const isSourceToDemand = Math.random() > 0.5;
          
          if (isSourceToDemand) {
            const source = sources[Math.floor(Math.random() * sources.length)];
            const demand = demands[Math.floor(Math.random() * demands.length)];
            
            // Create packet from source -> central
            packets.current.push({
              x: source.x,
              y: source.y,
              targetX: central.x,
              targetY: central.y,
              nextTarget: {
                x: demand.x,
                y: demand.y
              },
              color: source.color,
              speed: 0.02 + Math.random() * 0.01,
              progress: 0,
              size: 2 + Math.random() * 2,
              tail: []  // Array to store previous positions for trail effect
            });
          } else {
            const demand = demands[Math.floor(Math.random() * demands.length)];
            const source = sources[Math.floor(Math.random() * sources.length)];
            
            // Create packet from demand -> central
            packets.current.push({
              x: demand.x,
              y: demand.y,
              targetX: central.x,
              targetY: central.y,
              nextTarget: {
                x: source.x,
                y: source.y
              },
              color: demand.color,
              speed: 0.02 + Math.random() * 0.01,
              progress: 0,
              size: 2 + Math.random() * 2,
              tail: []  // Array to store previous positions for trail effect
            });
          }
        }
      }
      
      // Update and draw packets
      const updatedPackets = [];
      
      for (const packet of packets.current) {
        // Calculate position based on progress
        packet.progress += packet.speed;
        
        // Save previous position
        const prevX = packet.x;
        const prevY = packet.y;
        
        // Interpolate position
        packet.x = packet.x + (packet.targetX - packet.x) * packet.speed * 2;
        packet.y = packet.y + (packet.targetY - packet.y) * packet.speed * 2;
        
        // Update tail with current position (limit to 10 positions)
        packet.tail.push({ x: prevX, y: prevY });
        if (packet.tail.length > 10) {
          packet.tail.shift();
        }
        
        // Check if packet reached central node
        if (packet.progress >= 0.95 && packet.nextTarget) {
          // Switch to next target
          packet.x = packet.targetX;
          packet.y = packet.targetY;
          packet.targetX = packet.nextTarget.x;
          packet.targetY = packet.nextTarget.y;
          packet.nextTarget = null;
          packet.progress = 0;
          packet.tail = []; // Reset tail for new journey
        }
        
        // Draw packet trail (fading tail)
        if (packet.tail.length > 1) {
          for (let i = 0; i < packet.tail.length - 1; i++) {
            const alpha = i / packet.tail.length;
            ctx.beginPath();
            ctx.moveTo(packet.tail[i].x, packet.tail[i].y);
            ctx.lineTo(packet.tail[i+1].x, packet.tail[i+1].y);
            ctx.strokeStyle = `${packet.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = packet.size * alpha;
            ctx.stroke();
          }
          
          // Connect last tail point to current position
          const lastIndex = packet.tail.length - 1;
          if (lastIndex >= 0) {
            ctx.beginPath();
            ctx.moveTo(packet.tail[lastIndex].x, packet.tail[lastIndex].y);
            ctx.lineTo(packet.x, packet.y);
            ctx.strokeStyle = packet.color;
            ctx.lineWidth = packet.size * 0.8;
            ctx.stroke();
          }
        }
        
        // Draw the packet
        ctx.beginPath();
        ctx.arc(packet.x, packet.y, packet.size, 0, Math.PI * 2);
        ctx.fillStyle = packet.color;
        
        // Add glow effect to packet
        ctx.shadowColor = packet.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Keep packets that haven't reached final destination
        if (packet.progress < 0.98 || packet.nextTarget) {
          updatedPackets.push(packet);
        }
      }
      
      packets.current = updatedPackets;
      
      // Continue animation loop
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="w-full h-full bg-secondary/30 backdrop-blur-sm border border-white/10 shadow-xl rounded-lg overflow-hidden">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 z-10 flex items-center p-3">
          <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-xs text-muted-foreground">Hyperguest Connectivity Map</div>
        </div>
        
        <canvas ref={canvasRef} className="w-full h-full" />
        
        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground">
          Real-time ARI Synchronization
        </div>
      </div>
    </div>
  );
};

export default ConnectivityMap;
