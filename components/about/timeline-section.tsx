"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { HISTORY_TIMELINE } from "@/data/about";

export default function TimelineSection() {
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to becoming Kenya's leading blood donation
              organization, our journey has been marked by continuous growth and
              innovation.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"
            aria-hidden="true"
          ></div>

          {/* Timeline Events */}
          {HISTORY_TIMELINE.map((event, index) => (
            <motion.div
              key={event.year}
              className="relative mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#DC241f]">
                    <span className="text-[#DC241f] font-bold text-2xl mb-2 block">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>

                {/* Timeline Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#DC241f] rounded-full border-4 border-white shadow"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}