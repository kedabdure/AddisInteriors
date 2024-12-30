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


export const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Building Surveys",
    description: "Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.",
    image: "/image/profile2.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Interior Design Expert",
    description: "Expertise in designing interiors that reflect innovation, functionality, and aesthetic appeal.",
    image: "/image/profile1.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Architectural Consultant",
    description: "Specialized in crafting architectural solutions that integrate modern and timeless styles.",
    image: "/image/profile3.jpg",
  },
];

export const galleryImages = [
  { id: 1, src: "/image/badroom.jpg", alt: "Bedroom" },
  { id: 2, src: "/image/gallery2.jpg", alt: "Gallery 2" },
  { id: 3, src: "/image/gallery.jpg", alt: "Gallery" },
  { id: 4, src: "/image/swiper1.jpg", alt: "Swiper 1" },
  { id: 5, src: "/image/gallery11.jpg", alt: "Gallery 11" },
  { id: 6, src: "/image/living.jpg", alt: "Living Room" },
  { id: 7, src: "/image/gallery14.jpg", alt: "Gallery 14" },
  { id: 8, src: "/image/gallery15.jpg", alt: "Gallery 15" },
  { id: 9, src: "/image/gallery12.jpg", alt: "Gallery 12" },
  { id: 10, src: "/image/gallery7.jpg", alt: "Gallery 7" },
  { id: 11, src: "/image/gallery11.jpg", alt: "Gallery 11" },
  { id: 12, src: "/image/gallery3.jpg", alt: "Gallery 3" },
  { id: 13, src: "/image/living.jpg", alt: "Living Room" },
  { id: 14, src: "/image/gallery14.jpg", alt: "Gallery 14" },
  { id: 15, src: "/image/gallery15.jpg", alt: "Gallery 15" },
];
