export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    sofaScale: isSmall ? 9.5 : isMobile ? 10 : isTablet ? 4.5 : 5,
    sofaRotation: isMobile ? [.19, 0, 0] : [-0.19, -0.55, -.01],
    sofaPosition: isSmall ? [0, 0.8, 0] : isMobile ? [0, 5, 0] : isTablet ? [7.5, -5, 0] : [0.5, -5, -0.5],

    plantScale: isSmall ? 7 : isMobile ? 10 : isTablet ? 4.5 : 5,
    plantRotation: isSmall ? [-0.1, 1, 0] : [-0.15, 1, 0],
    plantPosition: isSmall ? [6.5, 0, 8] : isMobile ? [0, 0, 0] : [5.5, -2.5, 7],

    carpetScale: isSmall ? 12.8 : isMobile ? 11 : 10,
    carpetPosition: isSmall ? [0, 0, 3] : isMobile ? [7, 0, -5] : isTablet ? [7.5, -5, 0] : [.05, -7, -5],
    carpetRotation: isSmall ? [0.01, 0, 0] : isMobile ? [0, 0, 0] : [-0.2, -0.5, -0.01],
  };
};
