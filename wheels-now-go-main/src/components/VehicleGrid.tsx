import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import VehicleCard from "./VehicleCard";
import FilterSidebar from "./FilterSidebar";
import { Vehicle } from "@/data/mockVehicles";

interface VehicleGridProps {
  vehicles: Vehicle[];
}

const VehicleGrid = ({ vehicles }: VehicleGridProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<string>('featured');

  const featuredVehicles = vehicles.filter(v => v.isFeatured);
  const regularVehicles = vehicles.filter(v => !v.isFeatured);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Browse Our Inventory
          </h2>
          <p className="text-muted-foreground">
            {vehicles.length} vehicles available
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>

          <div className="flex items-center border rounded-lg p-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          <select 
            className="px-3 py-2 border rounded-lg text-sm bg-background"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="year-new">Year: Newest First</option>
            <option value="mileage-low">Mileage: Low to High</option>
          </select>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-80 flex-shrink-0 hidden lg:block">
          <FilterSidebar isOpen={true} onClose={() => {}} />
        </div>

        {/* Mobile Filter Sidebar */}
        <FilterSidebar isOpen={showFilters} onClose={() => setShowFilters(false)} />

        {/* Main Content */}
        <div className="flex-1">
          {/* Featured Section */}
          {featuredVehicles.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-bold text-foreground">Featured Vehicles</h3>
                <Badge variant="secondary" className="bg-gradient-featured text-white">
                  Premium Selection
                </Badge>
              </div>
              
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {featuredVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            </div>
          )}

          {/* All Vehicles */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">All Vehicles</h3>
            
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {regularVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Vehicles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleGrid;