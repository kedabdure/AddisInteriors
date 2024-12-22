import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const LampModel = (props) => {
  const { nodes, materials } = useGLTF('/models/lamp.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.re_lamp_02}
        position={[0, 0.09, -0.24]}
      />
    </group>
  )
}

useGLTF.preload('/models/lamp.glb')

export default LampModel