import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Building,
  Car,
  Coffee,
  ShoppingBag,
  Landmark,
} from "lucide-react";

interface LocationInfo {
  id: string;
  name: string;
  description: string;
  address: string;
  landmarks: Array<{
    name: string;
    distance: string;
    icon: React.ReactNode;
  }>;
  image: string;
}

interface LocationsSectionProps {
  title?: string;
  subtitle?: string;
  locations?: LocationInfo[];
}

const LocationsSection = ({
  title = "Service Locations",
  subtitle = "We bring our premium detailing services directly to your building's parking garage at these prime Montreal locations.",
  locations = [
    {
      id: "downtown",
      name: "Downtown Montreal",
      description:
        "Heart of the city with easy access to major office buildings and luxury condominiums.",
      address: "Central Business District, Montreal, QC",
      landmarks: [
        {
          name: "Place Ville Marie",
          distance: "5 min",
          icon: <Building className="h-4 w-4" />,
        },
        {
          name: "McGill University",
          distance: "8 min",
          icon: <Landmark className="h-4 w-4" />,
        },
        {
          name: "Underground City",
          distance: "3 min",
          icon: <ShoppingBag className="h-4 w-4" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1519181258491-889c2b001485?w=800&q=80",
    },
    {
      id: "plateau",
      name: "Plateau Mont-Royal",
      description:
        "Vibrant neighborhood known for its artistic community, cafes, and beautiful residential streets.",
      address: "Plateau Mont-Royal, Montreal, QC",
      landmarks: [
        {
          name: "Mont-Royal Park",
          distance: "10 min",
          icon: <Landmark className="h-4 w-4" />,
        },
        {
          name: "La Fontaine Park",
          distance: "7 min",
          icon: <Car className="h-4 w-4" />,
        },
        {
          name: "Avenue Mont-Royal",
          distance: "2 min",
          icon: <Coffee className="h-4 w-4" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1588733103629-b77afe0425ce?w=800&q=80",
    },
    {
      id: "westmount",
      name: "Westmount",
      description:
        "Prestigious residential area with historic homes, lush parks, and upscale amenities.",
      address: "Westmount, Montreal, QC",
      landmarks: [
        {
          name: "Westmount Park",
          distance: "5 min",
          icon: <Car className="h-4 w-4" />,
        },
        {
          name: "Victoria Village",
          distance: "3 min",
          icon: <ShoppingBag className="h-4 w-4" />,
        },
        {
          name: "Greene Avenue",
          distance: "2 min",
          icon: <Coffee className="h-4 w-4" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80",
    },
    {
      id: "ndg",
      name: "Notre-Dame-de-Grâce",
      description:
        "Family-friendly neighborhood with tree-lined streets, diverse community, and convenient amenities.",
      address: "Notre-Dame-de-Grâce, Montreal, QC",
      landmarks: [
        {
          name: "Loyola Campus",
          distance: "8 min",
          icon: <Landmark className="h-4 w-4" />,
        },
        {
          name: "Monkland Village",
          distance: "5 min",
          icon: <Coffee className="h-4 w-4" />,
        },
        {
          name: "NDG Park",
          distance: "6 min",
          icon: <Car className="h-4 w-4" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    },
    {
      id: "griffintown",
      name: "Griffintown",
      description:
        "Trendy up-and-coming neighborhood with modern condos, art galleries, and innovative restaurants.",
      address: "Griffintown, Montreal, QC",
      landmarks: [
        {
          name: "Lachine Canal",
          distance: "3 min",
          icon: <Car className="h-4 w-4" />,
        },
        {
          name: "Atwater Market",
          distance: "7 min",
          icon: <ShoppingBag className="h-4 w-4" />,
        },
        {
          name: "Gallery Row",
          distance: "4 min",
          icon: <Landmark className="h-4 w-4" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80",
    },
    {
      id: "oldport",
      name: "Old Port",
      description:
        "Historic district with cobblestone streets, waterfront views, and iconic architecture.",
      address: "Old Port, Montreal, QC",
      landmarks: [
        {
          name: "Notre-Dame Basilica",
          distance: "5 min",
          icon: <Landmark className="h-4 w-4" />,
        },
        {
          name: "Old Port Waterfront",
          distance: "2 min",
          icon: <Car className="h-4 w-4" />,
        },
        {
          name: "Place Jacques-Cartier",
          distance: "4 min",
          icon: <Coffee className="h-4 w-4" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1558642692-9aedd729818d?w=800&q=80",
    },
  ],
}: LocationsSectionProps) => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-indigo-900/40 to-teal-900/40 relative overflow-hidden">
      {/* Glassmorphic background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full overflow-hidden rounded-xl bg-black/30 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {location.name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">{location.address}</p>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  {location.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">
                    Nearby Landmarks:
                  </h4>
                  {location.landmarks.map((landmark, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-gray-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center">
                        {landmark.icon}
                      </div>
                      <span>{landmark.name}</span>
                      <span className="text-purple-400 ml-auto">
                        {landmark.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
