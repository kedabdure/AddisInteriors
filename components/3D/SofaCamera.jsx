import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const SofaCamera = ({ children }) => {
  const sofaRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [rotationVelocity, setRotationVelocity] = useState(0);
  const [previousPosition, setPreviousPosition] = useState(null);

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
    setPreviousPosition(getClientX(event)); // Capture starting position
  };

  const handlePointerMove = (event) => {
    if (!isDragging || !sofaRef.current) return;

    const currentPosition = getClientX(event);
    const deltaX = currentPosition - previousPosition;

    // Adjust rotation velocity based on movement
    setRotationVelocity((prev) => prev + deltaX * 0.0001);

    setPreviousPosition(currentPosition); // Update position
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
          const reduced = prev * 0.95; // Slow down gradually
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
      onTouchStart={handlePointerDown} // Add touch support
      onTouchMove={handlePointerMove}  // Add touch support
      onTouchEnd={handlePointerUp}     // Add touch support
    >
      {children}
    </group>
  );
};

export default SofaCamera;
