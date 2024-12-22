import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const VentilatorModel = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/ceiling_ventilator_animated.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="7d28da7a8b05494d880133475f186415fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Armature"
                  position={[0, -23.691, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={17.765}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/ceiling_ventilator_animated.glb')

export default VentilatorModel