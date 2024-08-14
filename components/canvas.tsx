"use client"

import { Canvas } from "@react-three/fiber"
import React, { useState } from "react"

interface Canvas3DProps {
    children?: React.ReactNode | React.ReactNode[]
}

const Canvas3D = ({children=null}: Canvas3DProps) => {
    const [width, setWidth] = useState<number>(200);
    const [height, setHeight] = useState<number>(200);

    return (  
        <Canvas 
            style={{ width: `${width}px`, height: `${height}px`}}
            className="bg-gray-500/25">
            <perspectiveCamera fov={75} aspect={width/height} near={0.1} far={1000}/>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            {children}
            {/*<Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />*/}
      </Canvas>
    )
}

export default Canvas3D;