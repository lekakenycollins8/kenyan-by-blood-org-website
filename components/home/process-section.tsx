"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DONATION_PROCESS } from "@/data/home";
import { ClipboardList, Stethoscope, Heart, Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "clipboard-list":
        return <ClipboardList className="h-6 w-6" />;
      case "stethoscope":
        return <Stethoscope className="h-6 w-6" />;
      case "heart":
        return <Heart className="h-6 w-6" />;
      case "coffee":
        return <Coffee className="h-6 w-6" />;
      default:
        return <Heart className="h-6 w-6" />;
    }
  };
  
  return (
    <section 
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
      id="process"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-50 to-transparent"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -left-20 top-40 h-64 w-64 rounded-full bg-[#DC241f]/10"
        style={{ filter: "blur(100px)" }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute -right-20 bottom-40 h-64 w-64 rounded-full bg-[#006600]/10"
        style={{ filter: "blur(100px)" }}
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center space-x-2 bg-[#006600]/10 text-[#006600] px-4 py-2 rounded-full mb-4">
            <Heart className="h-4 w-4" />
            <span className="font-semibold text-sm">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Blood Donation Works</h2>
          <p className="text-gray-600 text-lg">
            Donating blood is a simple and safe process that takes just about an hour of your time.
            Here's what to expect when you donate with Kenyan By Blood Foundation.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div 
            className="absolute top-24 left-1/2 -translate-x-1/2 w-1 h-[calc(100%-120px)] bg-gray-200 hidden md:block"
            aria-hidden="true"
          ></div>
          
          <div className="space-y-16 md:space-y-0">
            {DONATION_PROCESS.map((step, index) => (
              <motion.div 
                key={step.id}
                className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 relative`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Content for all viewports */}
                <div className="md:w-1/2 mb-8 md:mb-0 md:text-center">
                  <div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-[${index % 2 === 0 ? '#DC241f' : '#006600'}] text-white shadow-lg mb-4 relative z-10`}
                  >
                    {getIcon(step.icon)}
                  </div>
                  <div className="md:max-w-xs md:mx-auto">
                    <h3 className="text-xl font-bold mb-3">
                      {step.id}. {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Image for desktop */}
                <div className="md:w-1/2 relative">
                  <div className="bg-gradient-to-br from-white to-gray-100 rounded-xl p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src={`https://images.pexels.com/photos/${3952238 + index}/pexels-photo-${3952238 + index}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={step.title}
                      className="w-full h-64 object-cover rounded-lg shadow-inner"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6">Ready to Make a Difference?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of Kenyans who donate blood regularly to help save lives.
            The process is simple, safe, and incredibly rewarding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-[#DC241f] hover:bg-[#b01c19] text-white rounded-full group"
            >
              Start Donating Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#006600] text-[#006600] hover:bg-[#006600]/10 rounded-full"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}