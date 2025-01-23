import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";
import HeaderSection from "@/components/home/HeaderSection";
import OurServicesSection from "@/components/home/OurServicesSection";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <OurServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
