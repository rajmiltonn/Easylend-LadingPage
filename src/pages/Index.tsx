import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhoneInput from "@/components/PhoneInput";
import PartnersSection from "@/components/PartnersSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main>
        <HeroSection />
        <PhoneInput />
        <PartnersSection />
      </main>
    </div>
  );
};

export default Index;