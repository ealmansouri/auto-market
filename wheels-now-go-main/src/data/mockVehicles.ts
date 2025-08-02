import featuredVehicle1 from "@/assets/featured-vehicle-1.jpg";
import featuredVehicle2 from "@/assets/featured-vehicle-2.jpg";
import featuredVehicle3 from "@/assets/featured-vehicle-3.jpg";

export interface Vehicle {
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
}

export const mockVehicles: Vehicle[] = [
  {
    id: "1",
    make: "BMW",
    model: "X5",
    year: 2023,
    price: 67500,
    mileage: 12000,
    location: "Los Angeles, CA",
    image: featuredVehicle2,
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "SUV",
    dealerName: "BMW of Beverly Hills",
    isFeatured: true,
    isNew: false
  },
  {
    id: "2",
    make: "Ferrari",
    model: "488 GTB",
    year: 2024,
    price: 285000,
    mileage: 500,
    location: "Miami, FL",
    image: featuredVehicle3,
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "Coupe",
    dealerName: "Ferrari of Miami",
    isFeatured: true,
    isNew: true
  },
  {
    id: "3",
    make: "Toyota",
    model: "Camry",
    year: 2022,
    price: 28500,
    mileage: 25000,
    location: "Chicago, IL",
    image: featuredVehicle1,
    fuelType: "Hybrid",
    transmission: "CVT",
    bodyType: "Sedan",
    dealerName: "Toyota of Chicago",
    isFeatured: false,
    isNew: false
  },
  {
    id: "4",
    make: "Ford",
    model: "F-150",
    year: 2023,
    price: 52000,
    mileage: 8000,
    location: "Dallas, TX",
    image: featuredVehicle1,
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "Truck",
    dealerName: "Ford Country",
    isFeatured: true,
    isNew: false
  },
  {
    id: "5",
    make: "Tesla",
    model: "Model S",
    year: 2024,
    price: 94990,
    mileage: 1200,
    location: "San Francisco, CA",
    image: featuredVehicle2,
    fuelType: "Electric",
    transmission: "Automatic",
    bodyType: "Sedan",
    dealerName: "Tesla San Francisco",
    isFeatured: false,
    isNew: true
  },
  {
    id: "6",
    make: "Mercedes-Benz",
    model: "G-Class",
    year: 2023,
    price: 139000,
    mileage: 5000,
    location: "New York, NY",
    image: featuredVehicle2,
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "SUV",
    dealerName: "Mercedes-Benz Manhattan",
    isFeatured: true,
    isNew: false
  },
  {
    id: "7",
    make: "Honda",
    model: "Civic",
    year: 2021,
    price: 22000,
    mileage: 35000,
    location: "Seattle, WA",
    image: featuredVehicle3,
    fuelType: "Gasoline",
    transmission: "Manual",
    bodyType: "Sedan",
    dealerName: "Honda of Seattle",
    isFeatured: false,
    isNew: false
  },
  {
    id: "8",
    make: "Audi",
    model: "Q7",
    year: 2024,
    price: 78000,
    mileage: 2000,
    location: "Atlanta, GA",
    image: featuredVehicle1,
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "SUV",
    dealerName: "Audi Atlanta",
    isFeatured: false,
    isNew: true
  }
];