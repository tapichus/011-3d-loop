import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei"
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'

export default function Model() {
    const { nodes } = useGLTF("/medias/011.glb");
    const { viewport } = useThree()
    const torus = useRef(null);
    
    useFrame( () => {
        torus.current.rotation.x += 0.005
    })

    const materialProps = useControls({
        thickness: { value: 0.2 },
        roughness: { step: 0.1 },
        transmission: {value: 1},
        ior: { value: 1.2 },
        chromaticAberration: { value: 0.6},
        backside: { value: false},
    })
    
    return (
        <group scale={viewport.width / 3.75} >
            <Text font={'/fonts/PPNeueMontreal-Bold.otf'} position={[0, 0, -1]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
                ceroonce
            </Text>

            <mesh ref={torus} {...nodes.Curve}>
                <MeshTransmissionMaterial {...materialProps}/>
            </mesh>
        </group>
    )
}
