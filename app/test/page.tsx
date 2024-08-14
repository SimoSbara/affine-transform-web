"use client"

import Button from "@/components/button";
import Canvas3D from "@/components/canvas";
import Quad from "@/components/quad";
import Slider from "@/components/slider";
import { useCallback, useState } from "react";

import 'katex/dist/katex.min.css';
import Latex from "react-latex-next";



const Fun = () => {
    const [angle, setAngle] = useState<number>(0);

    const renderMatrix = useCallback(() => {
        return `
            \\[
            \\begin{pmatrix}
            cos(${angle.toFixed(3)}) & -sin(${angle.toFixed(3)})\\\\
            sin(${angle.toFixed(3)}) & cos(${angle.toFixed(3)}) \\\\
            \\end{pmatrix}
            \\]
        `
    }, [angle]);

    return (
        <div className="flex space-x-4 justify-center items-center ">
            <Latex children={renderMatrix()}/>
            <div>
            <Canvas3D>
                <Quad angle={angle}></Quad>
            </Canvas3D>
            </div>
            <Slider min={0} max={100} type="range" onChange={(e) => {
                const rangeValue = parseInt(e.currentTarget.value);

                setAngle((rangeValue / 100) * 2 * Math.PI)
            }}/>
            <div className="w-4">
                <p>
                    {angle.toFixed(3)}
                </p>
            </div>
        </div>
    )
}

export default Fun;