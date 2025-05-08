import { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Earbuds",
    price: 129.99,
    features: [
      "Active Noise Cancellation",
      "30-hour Battery Life",
      "Waterproof IPX7",
      "Touch Controls"
    ],
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
    videoUrl: "https://player.vimeo.com/external/410092125.sd.mp4?s=02a43600e0855de11f316e688aa49271903cc5ed&profile_id=164&oauth2_token_id=57447761",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    features: [
      "Heart Rate Monitor",
      "Sleep Tracking",
      "GPS Integration",
      "7-day Battery Life"
    ],
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    features: [
      "360° Sound",
      "12-hour Battery Life",
      "Waterproof Design",
      "Built-in Microphone"
    ],
    image: "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg",
    videoUrl: "https://player.vimeo.com/external/386041672.sd.mp4?s=a3488c2c71fd26e3d38b87f4f02d8240dac0c350&profile_id=164&oauth2_token_id=57447761",
    category: "Electronics"
  },
  {
    id: 4,
    name: "Ultra-thin Laptop Stand",
    price: 49.99,
    features: [
      "Adjustable Height",
      "Foldable Design",
      "Heat Dissipation",
      "Anti-slip Base"
    ],
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg",
    category: "Accessories"
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 34.99,
    features: [
      "Fast Charging",
      "Multiple Device Support",
      "LED Indicator",
      "Slim Design"
    ],
    image: "https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg",
    category: "Electronics"
  },
  {
    id: 6,
    name: "Ergonomic Office Chair",
    price: 249.99,
    features: [
      "Lumbar Support",
      "Adjustable Height",
      "Breathable Mesh",
      "360° Swivel"
    ],
    image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg",
    videoUrl: "https://player.vimeo.com/external/371852074.sd.mp4?s=2c7eaa56396a71e616c49b32a1dad0f93f1fa0d4&profile_id=164&oauth2_token_id=57447761",
    category: "Furniture"
  }
];

export const categories = [...new Set(products.map(product => product.category))];