import AboutComponent from "@/components/hero/AboutComponent";
import CatalogSwiperSection from "@/components/hero/CatalogSwiperCection";
import CatalogueSection from "@/components/hero/CatalogueSection";
import CompanySection from "@/components/hero/CompanySection";
import ContactSection from "@/components/hero/ContactSection";
import HeroSection from "@/components/hero/HeroSection";
import OurServices from "@/components/hero/OurServices";
import Panorama from "@/components/3D/Panorama";
import TestGallery from "@/components/TestGallery";


export default function Home() {
  return (
    <>
      <HeroSection />
      <OurServices />
      {/* <CompanySection /> */}
      <AboutComponent />
      <CatalogueSection />
      <CatalogSwiperSection />
      <ContactSection />
      <Panorama />
      <TestGallery />
    </>
  );
}
