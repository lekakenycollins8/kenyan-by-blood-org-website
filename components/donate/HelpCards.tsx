"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type HelpCard = {
  icon: string;
  title: string;
  description: string;
}

export default function HelpCards({ cards }: { cards: HelpCard[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      role="region"
      aria-labelledby="help-cards-title"
      className="relative py-20 bg-gradient-to-b from-[#006600]/5 via-white to-[#DC241f]/5 overflow-hidden"
    >
      {/* Brand Accent Shapes */}
      <div className="absolute inset-x-0 top-0 h-24 bg-[#006600]/20 clip-path-wave-down -z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[#DC241f]/20 clip-path-wave-up -z-10"></div>

      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="help-cards-title" className="text-3xl md:text-4xl font-extrabold text-[#006600]">
            How Your Donation Helps
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Your support enables us to save lives across Kenya through these critical programs.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className="relative h-full bg-white border-0 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Icon Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#DC241f] w-14 h-14 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-2xl text-white">{card.icon}</span>
                </div>

                <CardHeader className="pt-10 pb-4 text-center">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pt-2 pb-8">
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
