import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VehicleGrid from "@/components/VehicleGrid";
import Footer from "@/components/Footer";
import { mockVehicles } from "@/data/mockVehicles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <VehicleGrid vehicles={mockVehicles} />
      <Footer />
    </div>
  );
};

export default Index;
