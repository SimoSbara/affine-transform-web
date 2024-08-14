"use client"

import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Object3D, Object3DEventMap } from 'three'

interface QuadProps {
    angle?: number
}

const Quad = ({angle=0}: QuadProps) => {

    const meshRef = useRef<THREE.Mesh>(null);
    const [meshOrig, setMeshOrig] = useState(new THREE.Mesh);
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useEffect(() => {
    if(!meshRef)
        return;

    setMeshOrig((prev) => {
        prev.copy(meshRef.current!) 
        return prev;
    })

    }, [meshRef]);

    useFrame((state, delta) => {
        meshRef.current?.copy(meshOrig);

        const matrix = new THREE.Matrix4(
            Math.cos(angle), -Math.sin(angle), 0, 0,
            Math.sin(angle), Math.cos(angle), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1);

        meshRef.current?.applyMatrix4(matrix);
    })
    
    return (
      <mesh  
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )

}

export default Quad