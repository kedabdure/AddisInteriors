import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const SofaModel = (props) => {
  const { nodes, materials } = useGLTF('/models/modern_sofa.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.333}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sofa_lambert1_0.geometry}
            material={materials.lambert1}
            scale={0.394}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/modern_sofa.glb')

export default SofaModel