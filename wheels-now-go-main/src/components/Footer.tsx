import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Auto<span className="text-automotive-orange">Market</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Your trusted partner in finding the perfect vehicle. Browse thousands of cars, trucks, and SUVs from certified dealers nationwide.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Browse Vehicles</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">All Vehicles</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">New Cars</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Used Cars</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Certified Pre-Owned</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Luxury Vehicles</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Electric Vehicles</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sell Your Car</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Trade-In Value</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Financing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Insurance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Extended Warranty</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Dealer Services</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Stay Connected</h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">1-800-AUTOMARKET</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@automarket.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Nationwide Coverage</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-3">
                Subscribe for the latest deals and inventory updates
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter email" 
                  className="text-sm"
                />
                <Button variant="automotive" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row gap-4">
            <p>&copy; {currentYear} AutoMarket. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
          <p className="text-xs">
            Powered by trusted dealers nationwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;