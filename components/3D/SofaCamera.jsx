import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const SofaCamera = ({ children }) => {
  const sofaRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [rotationVelocity, setRotationVelocity] = useState(0);
  const [previousPosition, setPreviousPosition] = useState(null);

  // Sensitivity factor: Higher for touch devices
  const sensitivity = window.innerWidth < 768 ? 0.002 : 0.0001;

  const getClientX = (event) => {
    if (event.touches) {
      // For touch events
      return event.touches[0].clientX;
    }
    // For mouse events
    return event.clientX;
  };

  const handlePointerDown = (event) => {
    setIsDragging(true);
    setPreviousPosition(getClientX(event));
  };

  const handlePointerMove = (event) => {
    if (!isDragging || !sofaRef.current) return;

    const currentPosition = getClientX(event);
    const deltaX = currentPosition - previousPosition;

    // Adjust rotation velocity based on movement and sensitivity
    setRotationVelocity((prev) => prev + deltaX * sensitivity);

    setPreviousPosition(currentPosition);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setPreviousPosition(null);
  };

  useFrame((_, delta) => {
    if (sofaRef.current) {
      // Smooth rotation update
      sofaRef.current.rotation.y += rotationVelocity;

      // Gradual deceleration when not dragging
      if (!isDragging) {
        setRotationVelocity((prev) => {
          const reduced = prev * 0.86;
          return Math.abs(reduced) < 0.0001 ? 0 : reduced;
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
      onPointerOut={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
      {children}
    </group>
  );
};

export default SofaCamera;
