import AboutComponent from "@/components/sections/AboutComponent";
import CatalogSwiperSection from "@/components/sections/CatalogSwiperCection";
import CatalogueSection from "@/components/sections/CatalogueSection";
import CompanySection from "@/components/sections/CompanySection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import ThreeDViewer from "@/components/3D/ThreeDViewer";
import OurServices from "@/components/sections/OurServices";

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
      <ThreeDViewer />
    </>
  );
}
