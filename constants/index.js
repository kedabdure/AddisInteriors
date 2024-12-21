export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    sofaScale: isSmall ? 8 : isMobile ? 10 : isTablet ? 4.5 : 5,
    sofaRotation: isMobile ? [.08, 0, 0] : [-0.19, -0.6, -.01],
    sofaPosition: isSmall ? [0, 0, 0] : isMobile ? [0, 5, 0] : isTablet ? [7.5, -5, 0] : [0, -5, 0],
    carpetPosition: isSmall ? [5, -9.2, 0] : isMobile ? [7, -5, 0] : isTablet ? [7.5, -5, 0] : [12, -6, 0],
  };
};
