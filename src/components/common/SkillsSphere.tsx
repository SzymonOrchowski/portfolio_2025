'use client';

import React, { useRef, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

// Import skill icons from the new path
import CSSLogo from '@/img/techIcons/CSS.png';
import DOMLogo from '@/img/techIcons/DOM.png';
import ExpressLogo from '@/img/techIcons/Express.png';
import FirebaseLogo from '@/img/techIcons/FirebaseLogo.png';
import GitHubLogo from '@/img/techIcons/GitHub.png';
import HerokuLogo from '@/img/techIcons/Heroku.png';
import HTMLLogo from '@/img/techIcons/HTML.png';
import JestLogo from '@/img/techIcons/Jest.png';
import JSLogo from '@/img/techIcons/JS.png';
import NodeJSLogo from '@/img/techIcons/NodeJS.png';
import npmLogo from '@/img/techIcons/npm.png';
import PostgreSQLLogo from '@/img/techIcons/PostgreSQL.png';
import ReactLogo from '@/img/techIcons/React.png';
import SQLLogo from '@/img/techIcons/SQL.png';

const skillIcons = [
  CSSLogo, DOMLogo, ExpressLogo, FirebaseLogo,
  GitHubLogo, HerokuLogo, HTMLLogo, JestLogo,
  JSLogo, NodeJSLogo, npmLogo, PostgreSQLLogo,
  ReactLogo, SQLLogo
];

function SkillIcon(props: any) {
  const mesh = useRef<THREE.Mesh>(null!);
  const texture = useTexture(props.texture as string);

  return (
    <mesh {...props} ref={mesh}>
      <planeGeometry args={[1, 1]} />
      <meshLambertMaterial map={texture} transparent={true} side={THREE.DoubleSide} />
    </mesh>
  );
}

const LogosGroup = () => {
  const group = useRef<THREE.Group>(null!);
  useFrame((_state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.2;
    }
  });

  // This layout places icons somewhat spherically. 
  // You could use more complex math for a perfect sphere if desired.
  const positions = [
    [-2, 0, 0], [2, 0, 0],
    [0, -2, 0], [0, 2, 0],
    [0, 0, -2], [0, 0, 2],
    [-1.4, -1.4, 0], [1.4, -1.4, 0],
    [-1.4, 1.4, 0], [1.4, 1.4, 0],
    [0, -1.4, -1.4], [0, 1.4, -1.4],
    [0, -1.4, 1.4], [0, 1.4, 1.4]
  ];

  return (
    <group ref={group} dispose={null}>
      {skillIcons.map((icon, i) => (
        <SkillIcon key={i} position={positions[i % positions.length]} texture={icon.src} />
      ))}
    </group>
  );
};

const SkillsSphere = () => {
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Canvas camera={{ position: [0, 0, 3.5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <LogosGroup />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SkillsSphere; 