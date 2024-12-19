import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const CarpetModel = (props) => {
  const { nodes, materials } = useGLTF('/models/carpet.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['19_ANTIQUE_HERIZ_SERAY_ORANGE_BOTTOM.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['19_ANTIQUE_HERIZ_SERAY_ORANGE_TOP.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['19_ANTIQUE_HERIZ_SERAY_ORANGE_BOTTOM.001']}
      />
    </group>
  )
}

useGLTF.preload('/models/carpet.glb')

export default CarpetModel