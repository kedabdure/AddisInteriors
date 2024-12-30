export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    sofaScale: isSmall ? 9 : isMobile ? 8 : isTablet ? 9 : 5,
    sofaRotation: isMobile ? [.1, 0, 0] : isMobile ? [.1, 0, 0] : isTablet ? [.1, 0, 0] : [-0.19, -0.55, -.01],
    sofaPosition: isSmall ? [0, 0.8, -1] : isMobile ? [0, 0.6, 0] : isTablet ? [0, 0.8, 2] : [0.5, -5, -0.5],

    plantScale: isSmall ? 5.5 : isMobile ? 6 : isTablet ? 7.5 : 4,
    plantRotation: isSmall ? [-0.1, 1, 0] : [-0.15, 1, 0],
    plantPosition: isSmall ? [3, 0, 12] : isMobile ? [7.5, 0, 6.5] : isTablet ? [9, 0, 9] : [6, -2.5, 7],

    carpetScale: isSmall ? 13.5 : isMobile ? 13 : isTablet ? 14 : 10,
    carpetRotation: isSmall ? [0.01, 0, 0] : isMobile ? [0.01, 0, 0] : isTablet ? [0, 0, 0] : [-0.2, -0.5, -0.01],
    carpetPosition: isSmall ? [0, 0, 0] : isMobile ? [0, 0, 2] : isTablet ? [0, 0, 5] : [.05, -7, -5],

    lampScale: isSmall ? 0 : isMobile ? 0 : isTablet ? 0 : 3.5,
    lampPosition: isTablet ? [-2, 3.2, -4] : [-2, 7.5, -4],
  };
};

export const catalogs = [
  {
    id: "01",
    catagory: "BEDROOM SETUP",
    title: "Bedroom Setup",
    image: "/image/badroom.jpg",
    description: "family drowing room with a clean and comfortable design for your family.",
  },
  {
    id: "02",
    catagory: "KITCHING SETUP",
    title: "Neat & Clean Kitchen",
    image: "/image/kitchen1.jpg",
    description: "family drowing room with a clean and comfortable design for your family.",
  },
  {
    id: "03",
    catagory: "DROWING SETUP",
    title: "Family Drowing Room",
    image: "/image/drowing.jpg",
    description: "family drowing room with a clean and comfortable design for your family.",
  },
  {
    id: "04",
    catagory: "LIVING SETUP",
    title: "Clean Family Room",
    image: "/image/living.jpg",
    description: "family drowing room with a clean and comfortable design for your family.",
  },
]

export const projects = [
  {
    id: 1,
    name: 'Drowing room for family time ',
    description: 'Badroom with a clean and comfortable design for your family. charming whit a modern design. ',
    image: '/image/project3.jpg',
    link: '',
  },
  {
    id: 2,
    name: 'Kitchen look modern and clean',
    description: 'kitchen look modern and clean. charming whit a modern design. ',
    image: '/image/project2.jpg',
    link: '',
  },
  {
    id: 3,
    name: 'Perfect living room for family time',
    description: 'Drowing room with a clean and comfortable design for your family. charming whit a modern design. ',
    image: '/image/project4.png',
  },
];

