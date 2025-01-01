import AboutComponent from "@/components/hero/AboutComponent";
import CatalogSwiperSection from "@/components/hero/CatalogSwiperCection";
import CatalogueSection from "@/components/hero/CatalogueSection";
import ContactSection from "@/components/hero/ContactSection";
import HeroSection from "@/components/hero/HeroSection";
import OurServices from "@/components/hero/OurServices";
import Panorama from "@/components/3D/Panorama";


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
    </>
  );
}
