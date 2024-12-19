import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const PalmPlantModel = (props) => {
  const { nodes, materials } = useGLTF('/models/palm_plant.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.005}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-2.513, 42.562, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={42.387}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_FlowerPot_0.geometry}
              material={materials.FlowerPot}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_Soil_0.geometry}
              material={materials.Soil}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_plant_0.geometry}
            material={materials.plant}
            position={[-1.031, 99.853, -13.299]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_plant_0.geometry}
            material={materials.plant}
            position={[7.72, 99.853, 6.937]}
            rotation={[-Math.PI / 2, 0, -2.043]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_plant_0.geometry}
            material={materials.plant}
            position={[5.673, 85.129, 2.902]}
            rotation={[-Math.PI / 2, 0, 1.943]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/palm_plant.glb')

export default PalmPlantModel