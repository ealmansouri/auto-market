import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { X, Filter } from "lucide-react";
import { useState } from "react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar = ({ isOpen, onClose }: FilterSidebarProps) => {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [mileageRange, setMileageRange] = useState([0, 150000]);

  const makes = [
    "Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes-Benz", 
    "Audi", "Nissan", "Hyundai", "Kia", "Volkswagen", "Subaru"
  ];

  const bodyTypes = [
    "Sedan", "SUV", "Truck", "Coupe", "Hatchback", "Convertible", "Wagon", "Minivan"
  ];

  const fuelTypes = ["Gasoline", "Hybrid", "Electric", "Diesel"];
  const transmissions = ["Automatic", "Manual", "CVT"];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
      {/* Mobile Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <Card className="fixed right-0 top-0 h-full w-80 lg:relative lg:w-full overflow-y-auto bg-background border-l lg:border-l-0 lg:border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Price Range */}
          <div>
            <Label className="text-sm font-semibold mb-3 block">Price Range</Label>
            <div className="space-y-3">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={200000}
                min={0}
                step={1000}
                className="w-full"
              />
              <div className="flex gap-2 text-sm">
                <span>${priceRange[0].toLocaleString()}</span>
                <span className="text-muted-foreground">-</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Make */}
          <div>
            <Label className="text-sm font-semibold mb-3 block">Make</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select make" />
              </SelectTrigger>
              <SelectContent>
                {makes.map((make) => (
                  <SelectItem key={make} value={make.toLowerCase()}>
                    {make}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Year Range */}
          <div>
            <Label className="text-sm font-semibold mb-3 block">Year</Label>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Min" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 25 }, (_, i) => 2024 - i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Max" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 25 }, (_, i) => 2024 - i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          {/* Mileage */}
          <div>
            <Label className="text-sm font-semibold mb-3 block">Mileage</Label>
            <div className="space-y-3">
              <Slider
                value={mileageRange}
                onValueChange={setMileageRange}
                max={200000}
                min={0}
                step={5000}
                className="w-full"
              />
              <div className="flex gap-2 text-sm">
                <span>{mileageRange[0].toLocaleString()} mi</span>
                <span className="text-muted-foreground">-</span>
                <span>{mileageRange[1].toLocaleString()} mi</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Body Type */}
          <div>
            <Label className="text-sm font-semibold mb-3 block">Body Type</Label>
            <div className="space-y-2">
              {bodyTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={type} />
                  <Label htmlFor={type} className="text-sm font-normal cursor-pointer">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Fuel Type */}
          <div>
            <Label className="text-sm font-semibold mb-3 block">Fuel Type</Label>
            <div className="space-y-2">
              {fuelTypes.map((fuel) => (
                <div key={fuel} className="flex items-center space-x-2">
                  <Checkbox id={fuel} />
                  <Label htmlFor={fuel} className="text-sm font-normal cursor-pointer">
                    {fuel}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Transmission */}
          <div>
            <Label className="text-sm font-semibold mb-3 block">Transmission</Label>
            <div className="space-y-2">
              {transmissions.map((trans) => (
                <div key={trans} className="flex items-center space-x-2">
                  <Checkbox id={trans} />
                  <Label htmlFor={trans} className="text-sm font-normal cursor-pointer">
                    {trans}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Actions */}
          <div className="space-y-2">
            <Button variant="automotive" className="w-full">
              Apply Filters
            </Button>
            <Button variant="outline" className="w-full">
              Clear All
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSidebar;