"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { IMPACT_STATS } from "@/data/home";
import { Heart } from "lucide-react";

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section 
      ref={ref}
      className="py-32 bg-gray-50 relative overflow-hidden"
      id="impact"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23DC241f' fill-opacity='1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' opacity='.5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center space-x-2 bg-[#DC241f]/10 text-[#DC241f] px-4 py-2 rounded-full mb-4">
            <Heart className="h-4 w-4 fill-[#DC241f]" />
            <span className="font-semibold text-sm">Our Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Making a Difference Across Kenya</h2>
          <p className="text-gray-600 text-lg">
            Through the generosity of our donors, we've created a significant impact
            on healthcare across Kenya. Every donation counts in our mission to save lives.
          </p>
        </div>
        
        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {IMPACT_STATS.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-[#DC241f]"
              variants={itemVariants}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#DC241f] mb-2">
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {stat.label}
              </h3>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Impact Map */}
        <motion.div 
          className="mt-20 bg-white p-6 md:p-10 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our National Reach</h3>
              <p className="text-gray-600 mb-6">
                DonaKenya operates in 40 out of 47 counties in Kenya, ensuring that blood
                donation is accessible to most of the population. Our goal is to expand to
                all counties by 2026.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#DC241f]">40+</div>
                  <p className="text-gray-600">Counties Served</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#006600]">80%</div>
                  <p className="text-gray-600">Population Reach</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#DC241f]">12K+</div>
                  <p className="text-gray-600">Monthly Donations</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#006600]">98%</div>
                  <p className="text-gray-600">Donation Usage</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/269724/pexels-photo-269724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Map of Kenya showing DonaKenya locations" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="bg-[#DC241f] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#DC241f]/90 transition-colors">
                  Find Nearest Location
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}