"use client"; // Still needed for the 'useFrame' hook in the 3D components

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Stars, Torus, PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import ShimmerButton from "./ShimmerButton";
import { useIsMobile } from "@/hooks/useIsMobile";

// The Portal component remains, as it creates the ambient rotating ring.
function Portal({
  portalRef,
  shaderRef,
}: {
  portalRef: React.RefObject<THREE.Mesh>;
  shaderRef: React.RefObject<THREE.ShaderMaterial>;
}) {
  useFrame((state, delta) => {
    if (portalRef.current) {
      portalRef.current.rotation.z += delta * 0.1; // This creates the "wave" effect
    }
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value += delta;
    }
  });
  return (
    <Torus ref={portalRef} args={[3, 0.15, 32, 128]}>
      <shaderMaterial
        ref={shaderRef}
        transparent={true}
        uniforms={{
          uTime: { value: 0 },
          uColor: { value: new THREE.Color("#9D4EDD") },
        }}
        vertexShader={`
          uniform float uTime; varying vec3 vNormal;
          vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; } vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; } vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); } vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; } float snoise(vec3 v) { const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0); vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx); vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g; vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy); vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy; i = mod289(i); vec4 p = permute(permute(permute( i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0)); float n_ = 0.142857142857; vec3 ns = n_ * D.wyz - D.xzx; vec4 j = p - 49.0 * floor(p * ns.z * ns.z); vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_); vec4 x = x_ * ns.x + ns.yyyy; vec4 y = y_ * ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y); vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw); vec4 s0 = floor(b0) * 2.0 + 1.0; vec4 s1 = floor(b1) * 2.0 + 1.0; vec4 sh = -step(h, vec4(0.0)); vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww; vec3 p0 = vec3(a0.xy, h.x); vec3 p1 = vec3(a0.zw, h.y); vec3 p2 = vec3(a1.xy, h.z); vec3 p3 = vec3(a1.zw, h.w); vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3))); p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w; vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0); m = m * m; return 42.0 * dot(m*m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))); }
          void main() { vNormal = normal; float noise = snoise(position * 2.0 + uTime) * 0.3; vec3 newPosition = position + normal * noise; gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0); }
        `}
        fragmentShader={`
          uniform vec3 uColor; varying vec3 vNormal;
          void main() { float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0); gl_FragColor = vec4(uColor, 1.0) * intensity; }
        `}
      />
    </Torus>
  );
}

export default function HeroSection() {
  const portalRef = useRef<THREE.Mesh>(null!);
  const shaderRef = useRef<THREE.ShaderMaterial>(null!);
  const isMobile = useIsMobile();

  const handleScroll = () => {
    const showcaseSection = document.getElementById("showcase-section");
    if (showcaseSection) {
      showcaseSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen">
      {/* 3D Canvas */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
          <Stars
            radius={200}
            depth={50}
            count={5000}
            factor={7}
            saturation={0}
            fade
            speed={2}
          />
          <EffectComposer>
            <Bloom luminanceThreshold={0.1} intensity={0.25} mipmapBlur />
          </EffectComposer>
          <group position={isMobile ? [0, 1, 0] : [0, 0, 0]}>
            <Portal portalRef={portalRef} shaderRef={shaderRef} />
          </group>
        </Canvas>
      </div>

      {/* UI Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pb-20 md:pb-0">
        <div className="flex flex-col items-center text-center">
          <div className="pointer-events-none">
            <h1 className="text-5xl font-bold md:text-7xl text-white font-satoshi">
              Digital Experiences, <br /> Beyond Imagination.
            </h1>
            <p className="max-w-2xl mt-4 text-lg text-white/80 font-satoshi">
              A bespoke digital studio fusing meticulous design with intelligent
              AI to build products that captivate and perform.
            </p>
          </div>
          <div className="mt-12 md:mt-8 pointer-events-auto">
            <ShimmerButton onClick={handleScroll}>Explore Our Work</ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
}