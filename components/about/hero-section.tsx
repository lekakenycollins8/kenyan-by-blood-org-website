"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutHero() {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-black opacity-50 z-10"
          aria-hidden="true"
        ></div>
        <img
          src="https://images.pexels.com/photos/6823661/pexels-photo-6823661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Medical professionals at work"
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
              Saving Lives Across{" "}
              <span className="text-[#DC241f]">Kenya</span>,{" "}
              One Donation at a Time
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Since 2015, DonaKenya has been at the forefront of ensuring a safe
              and sustainable blood supply for all Kenyans in need. Our story is
              one of commitment, innovation, and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="xl"
                className="rounded-full group"
              >
                Join Our Mission
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline_primary"
                size="xl"
                className="rounded-full border-white text-white hover:bg-white/20"
              >
                Watch Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}