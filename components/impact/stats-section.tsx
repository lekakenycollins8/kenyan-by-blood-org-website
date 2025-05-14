"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { IMPACT_STATS } from "@/data/impact";
import { Droplet, Heart, Map, CheckCircle } from "lucide-react";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "droplet":
        return <Droplet className="h-8 w-8" />;
      case "heart":
        return <Heart className="h-8 w-8" />;
      case "map":
        return <Map className="h-8 w-8" />;
      case "check-circle":
        return <CheckCircle className="h-8 w-8" />;
      default:
        return <Heart className="h-8 w-8" />;
    }
  };

  return (
    <section 
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Every donation counts. See how we're making a difference in
              communities across Kenya through the power of blood donation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {IMPACT_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#DC241f]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="bg-[#DC241f]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-[#DC241f]">
                {getIcon(stat.icon)}
              </div>
              <div className="text-4xl font-bold text-[#DC241f] mb-2">
                {stat.value}
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}