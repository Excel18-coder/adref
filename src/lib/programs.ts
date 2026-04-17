import disasterImg from "@/assets/program-disaster.webp";
import climateImg from "@/assets/program-climate.webp";
import foodImg from "@/assets/program-food.webp";
import waterImg from "@/assets/program-water.webp";
import genderImg from "@/assets/program-gender.webp";
import educationImg from "@/assets/program-education.webp";
import {
  ShieldAlert,
  Leaf,
  Wheat,
  Droplets,
  Users,
  GraduationCap,
} from "lucide-react";

export const programs = [
  {
    slug: "disaster-management",
    title: "Disaster Management",
    icon: ShieldAlert,
    image: disasterImg,
    short: "Rapid response when crisis strikes — from floods to displacement.",
    long: "We coordinate emergency relief, provide shelter, distribute essentials, and help communities prepare with early-warning systems and trained first responders.",
    stats: "84 emergencies responded",
  },
  {
    slug: "climate-action",
    title: "Climate Change Action",
    icon: Leaf,
    image: climateImg,
    short: "Reforestation, climate-smart farming, and community-led adaptation.",
    long: "Together with local communities we plant indigenous trees, restore degraded land, and train smallholders in climate-resilient agriculture.",
    stats: "1.2M trees planted",
  },
  {
    slug: "food-security",
    title: "Food Security",
    icon: Wheat,
    image: foodImg,
    short: "Sustainable agriculture and nutrition programs that end hunger.",
    long: "Seed banks, women-led cooperatives, and school feeding initiatives that turn food insecurity into self-reliance.",
    stats: "320 cooperatives supported",
  },
  {
    slug: "water-sanitation",
    title: "Water & Sanitation",
    icon: Droplets,
    image: waterImg,
    short: "Clean water, dignified sanitation — a basic right made real.",
    long: "We drill boreholes, build latrines, and run hygiene education in the most underserved villages.",
    stats: "210 wells installed",
  },
  {
    slug: "gender-inclusivity",
    title: "Gender Inclusivity",
    icon: Users,
    image: genderImg,
    short: "Centering women and girls in every decision we make.",
    long: "From entrepreneurship grants to safe spaces, we invest in women leaders driving lasting change.",
    stats: "5,400 women empowered",
  },
  {
    slug: "education-empowerment",
    title: "Education & Empowerment",
    icon: GraduationCap,
    image: educationImg,
    short: "Schools, scholarships, and skills training for the next generation.",
    long: "We rebuild schools, equip teachers, and offer scholarships so no child's future is dictated by a disaster.",
    stats: "12,800 children in school",
  },
] as const;

export type Program = (typeof programs)[number];
