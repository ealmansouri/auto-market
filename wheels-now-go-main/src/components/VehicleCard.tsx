import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Calendar, Gauge, Fuel, Phone } from "lucide-react";
import { useState } from "react";

interface VehicleCardProps {
  vehicle: {
    id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    location: string;
    image: string;
    fuelType: string;
    transmission: string;
    bodyType: string;
    dealerName: string;
    isFeatured?: boolean;
    isNew?: boolean;
  };
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };

  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-hover ${vehicle.isFeatured ? 'shadow-featured border-automotive-orange/20' : 'shadow-card'} overflow-hidden`}>
      <div className="relative">
        {/* Vehicle Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={vehicle.image}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {vehicle.isFeatured && (
            <Badge className="bg-gradient-featured text-white font-semibold">
              Featured
            </Badge>
          )}
          {vehicle.isNew && (
            <Badge variant="secondary" className="bg-automotive-success text-white">
              New
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 bg-white/90 hover:bg-white transition-all ${
            isFavorited ? 'text-red-500' : 'text-muted-foreground'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
        </Button>

        {/* Price */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="text-2xl font-bold text-primary">
              {formatPrice(vehicle.price)}
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Vehicle Title */}
        <div className="mb-3">
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h3>
          <p className="text-muted-foreground text-sm">{vehicle.bodyType}</p>
        </div>

        {/* Vehicle Details */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Gauge className="h-4 w-4" />
            <span>{formatMileage(vehicle.mileage)} mi</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Fuel className="h-4 w-4" />
            <span>{vehicle.fuelType}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{vehicle.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{vehicle.location}</span>
          </div>
        </div>

        {/* Dealer Info */}
        <div className="mb-4 p-3 bg-muted rounded-lg">
          <p className="text-sm font-medium text-foreground">{vehicle.dealerName}</p>
          <p className="text-xs text-muted-foreground">Certified Dealer</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button variant="automotive" className="flex-1" size="sm">
            View Details
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Phone className="h-4 w-4" />
            Call
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;