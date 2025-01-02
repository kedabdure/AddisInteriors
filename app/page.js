import AboutComponent from "@/components/sections/AboutComponent";
import CatalogSwiperSection from "@/components/sections/CatalogSwiperCection";
import CatalogueSection from "@/components/sections/CatalogueSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import OurServices from "@/components/sections/OurServices";
import Panorama from "@/components/3D/Panorama";
import Testimonials from "@/components/sections/Testimonials"


export default function Home() {
  return (
    <>
      <HeroSection />
      <OurServices />
      <AboutComponent />
      <CatalogueSection />
      <CatalogSwiperSection />
      <ContactSection />
      <Panorama />
      <Testimonials />
    </>
  );
}
