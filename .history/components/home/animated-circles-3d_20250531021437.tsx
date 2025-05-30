"use client";

// ⚡️ Instant-show hero background – optimized for first paint
//   • Renders at half DPR while off-screen, upgrades when in view
//   • Uses IntersectionObserver to mount <Canvas> only on visibility
//   • Keeps all neon-plasma goodness from previous version
//   • Adds <AdaptiveDpr> + <AdaptiveEvents> from drei for perf
//   • Zero layout shift: a static fallback gradient covers until first frame

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, Suspense, useState, useEffect } from "react";
import { Environment, Stars, Sparkles, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

function RotatingRings() {
  const group = useRef<THREE.Group>(null);
  const ringRefs = useRef<THREE.Mesh[]>([]);
  
  // Phase 4: Advanced 3D motion path animations
  useFrame((state) => {
    if (group.current) {
      const time = state.clock.elapsedTime;
      
      // Primary group rotation with slower speeds
      group.current.rotation.y += 0.001; // Slower (was 0.003)
      group.current.rotation.x += 0.0005; // Slower (was 0.0015)
      group.current.rotation.z = Math.sin(time * 0.2) * 0.1; // Slower (was 0.5)
      
      // Individual ring motion paths
      ringRefs.current.forEach((ring, i) => {
        if (ring) {
          // Orbital motion with figure-8 patterns - slower
          const speed = 0.2 + i * 0.05; // Slower (was 0.5 + i * 0.1)
          const radius = 0.5 + i * 0.2;
          
          // Figure-8 motion path in 3D space
          ring.position.x = Math.sin(time * speed) * radius;
          ring.position.y = Math.sin(time * speed * 2) * radius * 0.5;
          ring.position.z = Math.cos(time * speed) * radius * 0.3;
          
          // Dynamic rotation based on position - slower
          ring.rotation.x = time * (0.2 + i * 0.05) + Math.sin(time * 1) * 0.2; // Slower
          ring.rotation.y = time * (0.1 + i * 0.02) + Math.cos(time * 0.8) * 0.3; // Slower
          ring.rotation.z = Math.sin(time * (0.5 + i * 0.1)) * 0.5; // Slower
          
          // Scale breathing effect - slower
          const scale = 1 + Math.sin(time * 1 + i) * 0.1; // Slower (was time * 2)
          ring.scale.setScalar(scale);
          
          // Color morphing based on motion - slower
          const material = ring.material as THREE.MeshBasicMaterial;
          const hue = (time * 0.05 + i * 0.2) % 1; // Slower color change (was 0.1)
          material.color.setHSL(hue, 0.8, 0.6);
        }
      });
    }
  });
  
  // Create several rings with motion path capabilities
  return (
    <group ref={group}>
      {[...Array(6)].map((_, i) => (
        <mesh 
          key={i} 
          ref={(el) => { if (el) ringRefs.current[i] = el; }}
          rotation={[0, 0, (i * Math.PI) / 6]}
        >
          <torusGeometry args={[2 + i * 0.18, 0.04 + i * 0.01, 16, 100]} />
          <meshBasicMaterial 
            color="#ffe347" 
            wireframe 
            opacity={0.7 - i * 0.1} 
            transparent 
          />
        </mesh>
      ))}
    </group>
  );
}

function PlasmaScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.9} />

      <RotatingRings />
      <Stars radius={8} depth={40} count={2000} factor={6} fade speed={0.5} /> {/* Slower stars (was 2) */}
      <Sparkles count={80} size={6} scale={8} speed={0.3} /> {/* Slower sparkles (was 0.8) */}
      <Environment preset="night" />

      <EffectComposer multisampling={0}>
        <Bloom intensity={1.2} mipmapBlur radius={0.75} luminanceThreshold={0.08} />
        <Noise opacity={0.04} />
        <Vignette eskil={false} offset={0.2} darkness={0.9} />
      </EffectComposer>

      {/* <ParallaxRig /> */}
      {/* Auto-scale DPR & suspend events when tab not focused */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </>
  );
}

/*──────────────────────────────────────────────────────────*/
interface AnimatedCircles3DProps {
  onAnimationStart?: () => void;
  triggerAnimation?: boolean;
}

export default function AnimatedCircles3D({ onAnimationStart, triggerAnimation = false }: AnimatedCircles3DProps) {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use triggerAnimation prop to synchronize with hero text animations
  useEffect(() => {
    if (triggerAnimation && !visible) {
      setVisible(true);
      onAnimationStart?.();
    }
  }, [triggerAnimation, visible, onAnimationStart]);

  // Fallback: IntersectionObserver for cases where prop isn't used
  useEffect(() => {
    if (triggerAnimation || !containerRef.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !visible) {
          setVisible(true);
          onAnimationStart?.();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, [visible, onAnimationStart, triggerAnimation]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-gradient-to-br from-[#121139] to-[#090822]"
    >
      {visible && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 58 }}
          gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
          dpr={Math.min(typeof window === "undefined" ? 1 : window.devicePixelRatio, 2)}
        >
          <Suspense fallback={null}>
            <PlasmaScene />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
