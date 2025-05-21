"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { donatePageData } from "@/data/donate";

export default function HelpCards({ cards = donatePageData.howHelpCards }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-20 bg-white overflow-hidden"
      aria-labelledby="help-cards-title"
    >
      {/* Decorative Background Shape */}
      <div className="absolute top-0 left-1/2 w-[120%] h-[60%] bg-[#006600]/10 rounded-b-full -translate-x-1/2 -z-10"></div>

      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 id="help-cards-title" className="text-3xl md:text-4xl font-extrabold text-gray-900">
            How Your Donation Helps
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Your support enables us to save lives across Kenya through these critical programs.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <Card className="h-full border-0 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#DC241f]/20 rounded-full animate-pulse-slow"></div>
                <CardHeader className="relative pb-2 pt-8 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#DC241f] text-white rounded-full mb-4">
                    <span className="text-2xl">{card.icon}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8 pt-2">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}