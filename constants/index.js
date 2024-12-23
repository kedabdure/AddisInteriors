export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    sofaScale: isSmall ? 7 : isMobile ? 8 : isTablet ? 9 : 5,
    sofaRotation: isMobile ? [.1, 0, 0] : isMobile ? [.1, 0, 0] : isTablet ? [.1, 0, 0] : [-0.19, -0.55, -.01],
    sofaPosition: isSmall ? [0, 0.8, 0.5] : isMobile ? [0, 0.6, 0] : isTablet ? [0, 0.8, 2] : [0.5, -5, -0.5],

    plantScale: isSmall ? 5.5 : isMobile ? 6 : isTablet ? 7.5 : 4.5,
    plantRotation: isSmall ? [-0.1, 1, 0] : [-0.15, 1, 0],
    plantPosition: isSmall ? [5, 0, 7] : isMobile ? [7.5, 0, 6.5] : isTablet ? [9, 0, 9] : [5, -2.5, 7],

    carpetScale: isSmall ? 11 : isMobile ? 13 : isTablet ? 14 : 10,
    carpetRotation: isSmall ? [0.01, 0, 0] : isMobile ? [0.01, 0, 0] : isTablet ? [0, 0, 0] : [-0.2, -0.5, -0.01],
    carpetPosition: isSmall ? [0, 0, 3] : isMobile ? [0, 0, 2] : isTablet ? [0, 0, 5] : [.05, -7, -5],

    lampScale: isSmall ? 0 : isMobile ? 0 : isTablet ? 0 : 3.5,
    lampPosition: isTablet ? [-2, 3.2, -4] : [-2, 7.5, -4],
  };
};
