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
      
      // Draw connections
      connections.forEach(conn => {
        const fromNode = nodes.find(n => n.id === conn.from);
        const toNode = nodes.find(n => n.id === conn.to);
        
        if (fromNode && toNode) {
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
      
      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        
        // Different sizes for different node types
        let nodeRadius = 8;
        if (node.type === 'central') nodeRadius = 20;
        
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        
        // Create gradient for nodes
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, nodeRadius * 2
        );
        
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw node labels
        ctx.font = '10px Arial';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.textAlign = 'center';
        
        if (node.type === 'source') {
          ctx.textAlign = 'right';
          ctx.fillText(node.name, node.x - nodeRadius - 5, node.y + 4);
        } else if (node.type === 'demand') {
          ctx.textAlign = 'left';
          ctx.fillText(node.name, node.x + nodeRadius + 5, node.y + 4);
        } else {
          ctx.fillText(node.name, node.x, node.y + nodeRadius + 15);
        }
      });
      
      // Randomly create new data packets
      if (Math.random() < 0.05) {
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
              speed: 0.03 + Math.random() * 0.02,
              progress: 0,
              size: 3 + Math.random() * 2
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
              speed: 0.03 + Math.random() * 0.02,
              progress: 0,
              size: 3 + Math.random() * 2
            });
          }
        }
      }
      
      // Update and draw packets
      const updatedPackets = [];
      
      for (const packet of packets.current) {
        // Calculate position based on progress
        packet.progress += packet.speed;
        
        // Interpolate position
        packet.x = packet.x + (packet.targetX - packet.x) * packet.speed;
        packet.y = packet.y + (packet.targetY - packet.y) * packet.speed;
        
        // Check if packet reached central node
        if (packet.progress >= 0.9 && packet.nextTarget) {
          // Switch to next target
          packet.x = packet.targetX;
          packet.y = packet.targetY;
          packet.targetX = packet.nextTarget.x;
          packet.targetY = packet.nextTarget.y;
          packet.nextTarget = null;
          packet.progress = 0;
        }
        
        // Draw the packet
        ctx.beginPath();
        ctx.arc(packet.x, packet.y, packet.size, 0, Math.PI * 2);
        ctx.fillStyle = packet.color;
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
