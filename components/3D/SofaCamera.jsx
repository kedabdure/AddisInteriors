import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const SofaCamera = ({ children }) => {
  const sofaRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [rotationVelocity, setRotationVelocity] = useState(0);
  const [previousMousePosition, setPreviousMousePosition] = useState(null);

  const handlePointerDown = (event) => {
    setIsDragging(true);
    setPreviousMousePosition(event.clientX); // Capture starting mouse position
  };

  const handlePointerMove = (event) => {
    if (!isDragging || !sofaRef.current) return;

    const deltaX = event.clientX - previousMousePosition;

    // Adjust rotation velocity based on drag
    setRotationVelocity((prev) => prev + deltaX * 0.00005);

    setPreviousMousePosition(event.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setPreviousMousePosition(null);
  };

  useFrame((_, delta) => {
    if (sofaRef.current) {
      // Smooth rotation update
      sofaRef.current.rotation.y += rotationVelocity;

      // Gradual deceleration when not dragging
      if (!isDragging) {
        setRotationVelocity((prev) => {
          const reduced = prev * 0.5; // Slow down gradually
          return Math.abs(reduced) < 0.0001 ? 0 : reduced; // Stop completely at a threshold
        });
      }
    }
  });

  return (
    <group
      ref={sofaRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerUp} // Stop dragging when pointer leaves the object
    >
      {children}
    </group>
  );
};

export default SofaCamera;
