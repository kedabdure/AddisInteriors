import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSection from "@/components/CatalogSwiperCection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ThreeDViewer from "@/components/panoramic/ThreeDViewer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <AboutComponent />
      <CatalogueSection />
      <CatalogSwiperSection />
      <ContactSection />
      <ThreeDViewer />
    </>
  );
}
