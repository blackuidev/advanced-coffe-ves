import { ThreeDCarouselItem } from "@/components/lightswind/3d-carousel";

export const blendsData: ThreeDCarouselItem[] = [
  {
    id: 1,
    title: "Midnight Espresso",
    brand: "Signature Blends",
    description: "A deep, intense espresso with notes of dark chocolate and a hint of smokiness. Perfect for late-night work sessions or a powerful morning start.",
    tags: ["Dark Roast", "Intense", "Chocolate"],
    imageUrl: "https://generated.vusercontent.net/placeholder.svg",
    link: "#",
  },
  {
    id: 2,
    title: "Aurora Brew",
    brand: "Exotic Series",
    description: "A magical, medium-roast blend with vibrant, fruity notes and a smooth, clean finish. Inspired by the ethereal beauty of the northern lights.",
    tags: ["Medium Roast", "Fruity", "Vibrant"],
    imageUrl: "https://generated.vusercontent.net/placeholder.svg",
    link: "#",
  },
  {
    id: 3,
    title: "Desert Bloom",
    brand: "Artisanal Collection",
    description: "A unique light roast with delicate floral notes and a sweet, honey-like aftertaste. Captures the subtle beauty of a desert flower in bloom.",
    tags: ["Light Roast", "Floral", "Sweet"],
    imageUrl: "https://generated.vusercontent.net/placeholder.svg",
    link: "#",
  },
  {
    id: 4,
    title: "Oceanic Mist",
    brand: "Coastal Series",
    description: "A refreshing cold brew concentrate with a crisp, clean taste and a hint of sea salt. As invigorating as a cool mist on a morning beach walk.",
    tags: ["Cold Brew", "Crisp", "Refreshing"],
    imageUrl: "https://generated.vusercontent.net/placeholder.svg",
    link: "#",
  },
];

export interface Product {
    id: number;
    name: string;
    category: "Beans" | "Gear";
    price: number;
    description: string;
    imageUrl: string;
}

export const productsData: Product[] = [
    {
        id: 1,
        name: "Sunrise Blend",
        category: "Beans",
        price: 18.99,
        description: "A bright, medium roast with citrus notes. The perfect way to start your day.",
        imageUrl: "https://generated.vusercontent.net/placeholder.svg",
    },
    {
        id: 2,
        name: "Mountain Roast",
        category: "Beans",
        price: 22.50,
        description: "A bold, dark roast with an earthy, full-bodied flavor. Sourced from high-altitude farms.",
        imageUrl: "https://generated.vusercontent.net/placeholder.svg",
    },
    {
        id: 3,
        name: "Gourmet Gold",
        category: "Beans",
        price: 29.99,
        description: "An exclusive, single-origin light roast with complex floral and fruity notes. A true luxury.",
        imageUrl: "https://generated.vusercontent.net/placeholder.svg",
    },
    {
        id: 4,
        name: "Hearthstone Blend",
        category: "Beans",
        price: 20.00,
        description: "A comforting, medium-dark roast with notes of chocolate and toasted nuts. Perfect for a cozy day in.",
        imageUrl: "https://generated.vusercontent.net/placeholder.svg",
    },
    {
        id: 5,
        name: "GrindMaster Pro",
        category: "Gear",
        price: 149.99,
        description: "A professional-grade conical burr grinder for the perfect, consistent grind every time.",
        imageUrl: "https://generated.vusercontent.net/placeholder.svg",
    },
    {
        id: 6,
        name: "Clarity Mugs (Set of 2)",
        category: "Gear",
        price: 35.00,
        description: "Elegant double-walled glass mugs that keep your coffee hot while staying cool to the touch.",
        imageUrl: "https://generated.vusercontent.net/placeholder.svg",
    },
    {
        id: 7,
        name: "The Barista's Choice",
        category: "Gear",
        price: 799.00,
        description: "A semi-automatic espresso machine for cafe-quality shots at home. Stainless steel construction.",
        imageUrl: "https://generated.vusercontent.net/placeholder.svg",
    },
    {
        id: 8,
        name: "Eco-Traveler Cup",
        category: "Gear",
        price: 25.00,
        description: "A stylish and sustainable reusable coffee cup for your daily commute. Keep your drink hot for hours.",
        imageUrl: "https://generated.vusercontent.net/placeholder.svg",
    },
];
