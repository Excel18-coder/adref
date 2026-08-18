import {
  ShieldAlert,
  Leaf,
  Wheat,
  Droplets,
  Users,
  GraduationCap,
} from "lucide-react";
import { programArtwork } from "@/lib/artwork";

export const programs = [
  {
    slug: "disaster-management",
    title: "Disaster Management",
    icon: ShieldAlert,
    image: programArtwork("Disaster Management", ["#2e6045", "#1a2b24", "#d6884d"]),
    short: "Rapid response when crisis strikes — from floods to displacement.",
    long: "We coordinate emergency relief, provide shelter, distribute essentials, and help communities prepare with early-warning systems and trained first responders.",
    stats: "84 emergencies responded",
  },
  {
    slug: "climate-action",
    title: "Climate Change Action",
    icon: Leaf,
    image: programArtwork("Climate Change Action", ["#3f6b42", "#264e3f", "#d5a45d"]),
    short: "Reforestation, climate-smart farming, and community-led adaptation.",
    long: "Together with local communities we plant indigenous trees, restore degraded land, and train smallholders in climate-resilient agriculture.",
    stats: "1.2M trees planted",
  },
  {
    slug: "food-security",
    title: "Food Security",
    icon: Wheat,
    image: programArtwork("Food Security", ["#4f6d38", "#233028", "#d39256"]),
    short: "Sustainable agriculture and nutrition programs that end hunger.",
    long: "Seed banks, women-led cooperatives, and school feeding initiatives that turn food insecurity into self-reliance.",
    stats: "320 cooperatives supported",
  },
  {
    slug: "water-sanitation",
    title: "Water & Sanitation",
    icon: Droplets,
    image: programArtwork("Water & Sanitation", ["#22655a", "#183130", "#d59b5b"]),
    short: "Clean water, dignified sanitation — a basic right made real.",
    long: "We drill boreholes, build latrines, and run hygiene education in the most underserved villages.",
    stats: "210 wells installed",
  },
  {
    slug: "gender-inclusivity",
    title: "Gender Inclusivity",
    icon: Users,
    image: programArtwork("Gender Inclusivity", ["#4d7d61", "#293320", "#d97e49"]),
    short: "Centering women and girls in every decision we make.",
    long: "From entrepreneurship grants to safe spaces, we invest in women leaders driving lasting change.",
    stats: "5,400 women empowered",
  },
  {
    slug: "education-empowerment",
    title: "Education & Empowerment",
    icon: GraduationCap,
    image: programArtwork("Education & Empowerment", ["#3d6e5b", "#1a2a2a", "#d7a45a"]),
    short: "Schools, scholarships, and skills training for the next generation.",
    long: "We rebuild schools, equip teachers, and offer scholarships so no child's future is dictated by a disaster.",
    stats: "12,800 children in school",
  },
] as const;

export type Program = (typeof programs)[number];
