"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { IMPACT_AREAS } from "@/data/impact";

export default function ImpactAreasSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      ref={ref}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Areas of Impact
            </h2>
            <p className="text-xl text-gray-600">
              Our work spans multiple healthcare areas, ensuring blood availability
              where it's needed most.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {IMPACT_AREAS.map((area, index) => (
            <motion.div
              key={area.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
              <div className="bg-gray-50 p-6">
                <div className="space-y-3">
                  {Object.entries(area.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-600 capitalize">
                        {key.replace(/_/g, ' ')}
                      </span>
                      <span className="font-bold text-[#DC241f]">{value}</span>
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
}