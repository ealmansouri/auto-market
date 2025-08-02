import { Search, Menu, User, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Find dealers near you
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-foreground transition-colors">Sell Your Car</button>
            <button className="hover:text-foreground transition-colors">Sign In</button>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Auto<span className="text-automotive-orange">Market</span>
            </h1>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by make, model, or keyword..."
                className="pl-10 h-12 text-base border-2 focus:border-primary"
              />
              <Button 
                variant="automotive" 
                className="absolute right-1 top-1 h-10"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <Heart className="h-4 w-4" />
              Saved
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              Account
            </Button>
            <Button variant="featured" size="sm">
              Sell My Car
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 py-3 border-t border-border/50">
          <button className="text-foreground hover:text-primary transition-colors font-medium">
            All Vehicles
          </button>
          <button className="text-muted-foreground hover:text-primary transition-colors">
            Cars
          </button>
          <button className="text-muted-foreground hover:text-primary transition-colors">
            Trucks
          </button>
          <button className="text-muted-foreground hover:text-primary transition-colors">
            SUVs
          </button>
          <button className="text-muted-foreground hover:text-primary transition-colors">
            Motorcycles
          </button>
          <button className="text-muted-foreground hover:text-primary transition-colors">
            Certified Pre-Owned
          </button>
          <button className="text-muted-foreground hover:text-primary transition-colors">
            New Cars
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;