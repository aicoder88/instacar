import React, { useState } from "react";
import PackageCard from "./PackageCard";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Check, Info, X } from "lucide-react";

interface ServicePackagesProps {
  title?: string;
  description?: string;
  packages?: {
    name: string;
    price: string;
    features: string[];
    isPopular?: boolean;
    bestFor?: string;
    color?: string;
  }[];
}

const ServicePackages = ({
  title = "Elite Detailing Packages",
  description = "Don't settle for ordinary car washes that damage your finish. Our premium detailing packages use professional-grade products and techniques that protect your investment and maintain its value.",
  packages = [
    {
      name: "Exterior Revival",
      price: "$99",
      bestFor: "Monthly maintenance",
      color: "from-teal-500 to-teal-700",
      features: [
        "Hand wash with pH-neutral soap",
        "Professional wheel & tire treatment",
        "Paint decontamination",
        "UV-resistant tire dressing",
        "Hydrophobic spray sealant",
        "All exterior windows & mirrors",
      ],
    },
    {
      name: "Complete Refresh",
      price: "$179",
      bestFor: "Quarterly deep clean",
      color: "from-purple-500 to-indigo-700",
      features: [
        "Everything in Exterior Revival",
        "Interior vacuum & dust removal",
        "Dashboard & trim conditioning",
        "Leather/fabric treatment",
        "Interior glass cleaning",
        "Premium air freshener",
        "Door jambs & trunk cleaning",
      ],
      isPopular: true,
    },
    {
      name: "Ultimate Transformation",
      price: "$299",
      bestFor: "Seasonal protection",
      color: "from-indigo-500 to-purple-800",
      features: [
        "Everything in Complete Refresh",
        "Clay bar paint decontamination",
        "One-step paint correction",
        "Premium carnauba wax application",
        "Headlight restoration",
        "Engine bay detailing",
        "Carpet shampoo & extraction",
        "3-month ceramic coating",
      ],
    },
  ],
}: ServicePackagesProps) => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [showComparisonTable, setShowComparisonTable] = useState(false);

  // All possible features across all packages
  const allFeatures = [
    "Hand wash with pH-neutral soap",
    "Professional wheel & tire treatment",
    "Paint decontamination",
    "UV-resistant tire dressing",
    "Hydrophobic spray sealant",
    "All exterior windows & mirrors",
    "Interior vacuum & dust removal",
    "Dashboard & trim conditioning",
    "Leather/fabric treatment",
    "Interior glass cleaning",
    "Premium air freshener",
    "Door jambs & trunk cleaning",
    "Clay bar paint decontamination",
    "One-step paint correction",
    "Premium carnauba wax application",
    "Headlight restoration",
    "Engine bay detailing",
    "Carpet shampoo & extraction",
    "3-month ceramic coating",
  ];

  // Check if a package includes a feature
  const hasFeature = (packageObj: any, feature: string) => {
    return packageObj.features.includes(feature);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background elements for glassmorphic effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
            {title}
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            {description}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch flex-wrap">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="w-full md:w-auto flex-1 max-w-[350px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PackageCard
                name={pkg.name}
                price={pkg.price}
                features={pkg.features}
                isPopular={pkg.isPopular}
                onSelect={() => setSelectedPackage(pkg.name)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            onClick={() => setShowComparisonTable(!showComparisonTable)}
            className="mb-8 bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white font-bold px-8 py-3 h-auto rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 border-0"
          >
            <Info className="mr-2 h-4 w-4" />
            {showComparisonTable
              ? "Hide Comparison Table"
              : "Compare All Packages"}
          </Button>

          {showComparisonTable && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-x-auto mb-12"
            >
              <div className="inline-block min-w-full bg-black/30 backdrop-blur-xl rounded-xl border border-purple-500/20 shadow-xl overflow-hidden">
                <table className="min-w-full divide-y divide-purple-500/20">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Feature
                      </th>
                      {packages.map((pkg, index) => (
                        <th
                          key={index}
                          className="px-6 py-4 text-center text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                          <div className="flex flex-col items-center">
                            <span
                              className={`text-transparent bg-clip-text bg-gradient-to-r ${pkg.color || "from-teal-400 to-purple-400"}`}
                            >
                              {pkg.name}
                            </span>
                            <span className="text-white font-bold mt-1">
                              {pkg.price}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-500/10">
                    {allFeatures.map((feature, featureIndex) => (
                      <tr
                        key={featureIndex}
                        className={
                          featureIndex % 2 === 0 ? "bg-black/20" : "bg-black/10"
                        }
                      >
                        <td className="px-6 py-3 text-sm text-gray-200">
                          {feature}
                        </td>
                        {packages.map((pkg, packageIndex) => (
                          <td
                            key={packageIndex}
                            className="px-6 py-3 text-center"
                          >
                            {hasFeature(pkg, feature) ? (
                              <Check className="h-5 w-5 text-teal-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-500 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          <p className="text-gray-400 text-sm mb-4">
            All packages include complimentary premium coffee and refreshments
            while you wait
          </p>
          <p className="text-white font-medium">
            Not sure which package is right for your vehicle?{" "}
            <span className="text-teal-400 cursor-pointer hover:underline">
              Contact our specialists
            </span>{" "}
            for a personalized recommendation based on your car's condition and
            your goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePackages;
