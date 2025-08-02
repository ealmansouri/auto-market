import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Gauge } from "lucide-react";
import heroImage from "@/assets/hero-cars.jpg";

const HeroSection = () => {
  const quickStats = [
    { label: "Active Listings", value: "50,000+" },
    { label: "Happy Customers", value: "25,000+" },
    { label: "Trusted Dealers", value: "1,200+" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 66, 146, 0.8), rgba(33, 66, 146, 0.6)), url(${heroImage})`
        }}
      />
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            #1 Auto Marketplace
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Find Your Perfect
            <span className="block text-automotive-orange">Vehicle Today</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in">
            Browse thousands of cars, trucks, and SUVs from trusted dealers nationwide. 
            Your next ride is just a click away.
          </p>

          {/* Quick Search Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 animate-slide-up">
            {[
              { icon: MapPin, title: "Search by Location", desc: "Find cars near you" },
              { icon: Calendar, title: "Browse by Year", desc: "2020-2024 models" },
              { icon: Gauge, title: "Filter by Mileage", desc: "Low mileage options" }
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                <item.icon className="h-8 w-8 text-automotive-orange mb-3 mx-auto" />
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Browse All Vehicles
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
              Sell Your Car
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-center">
            {quickStats.map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-3xl font-bold text-automotive-orange">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;