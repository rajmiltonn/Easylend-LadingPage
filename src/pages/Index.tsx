import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhoneInput from "@/components/PhoneInput";
import PartnersSection from "@/components/PartnersSection";
import EligibilitySection from "@/components/EligibilitySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main>
        <HeroSection />
        <PhoneInput />
        <PartnersSection />
        <EligibilitySection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;