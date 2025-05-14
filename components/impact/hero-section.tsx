"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ImpactHero() {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-black opacity-50 z-10"
          aria-hidden="true"
        ></div>
        <img
          src="https://images.pexels.com/photos/6823776/pexels-photo-6823776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Blood donation impact"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Making a Real
              <span className="text-[#DC241f]"> Impact </span>
              in Our Communities
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Through the power of blood donation, we're transforming healthcare
              outcomes and saving lives across Kenya. See the real difference
              we're making together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="xl"
                className="rounded-full group"
              >
                View Impact Report
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline_primary"
                size="xl"
                className="rounded-full border-white text-white hover:bg-white/20"
              >
                Support Our Mission
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}