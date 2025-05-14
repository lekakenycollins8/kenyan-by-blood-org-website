"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Heart, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.5 }
    })
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-black opacity-40 z-10"
          aria-hidden="true"
        ></div>
        <img
          src="https://images.pexels.com/photos/6823539/pexels-photo-6823539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Blood donation"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Blood drop pattern overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15C26 9 22 5 18 5c-4 0-7 3-7 8 0 6 8 10 19 20 11-10 19-14 19-20 0-5-3-8-7-8-4 0-8 4-12 10z' fill='%23DC241f' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            {/* Social Links */}
            <motion.div 
              className="flex space-x-4 mb-6"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeIn}
            >
              {SOCIAL_LINKS.map((social, index) => {
                const IconComponent = {
                  facebook: Facebook,
                  twitter: Twitter,
                  instagram: Instagram,
                  linkedin: Linkedin,
                }[social.icon];
                
                return (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-[#DC241f] transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeIn}
            >
              <span className="text-[#DC241f]">Your Blood</span> Has The Power To Paint A Smile On Someone Else&apos;s <span className="text-[#DC241f]">Face</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl"
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeIn}
            >
              Donors provide identification and health information before donation. A brief health check ensures the donor is fit to give blood safely and the donation process is comfortable.
            </motion.p>
            
            {/* Search Box */}
            <motion.div 
              className="mb-8"
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeIn}
            >
              <div className="bg-white rounded-full p-2 flex items-center max-w-md shadow-lg">
                <div className="flex-1 flex items-center px-4">
                  <Search size={20} className="text-gray-400 mr-2" />
                  <Input
                    type="text"
                    placeholder="Search Needs & Blood Groups..."
                    className="border-0 focus:ring-0 text-black bg-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button 
                  variant="primary"
                  size="sm"
                  className="rounded-full whitespace-nowrap"
                >
                  Search
                </Button>
              </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeIn}
            >
              <Button
                variant="primary"
                size="xl"
                className="rounded-full group font-semibold"
              >
                <Heart className="mr-2 h-5 w-5" /> 
                Donate Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline_primary"
                size="xl"
                className="rounded-full font-semibold"
              >
                Register Now
              </Button>
            </motion.div>
          </div>
          
          {/* Right Column - Placeholder for mobile */}
          <div className="hidden lg:block">
            {/* This space is intentionally left empty as the background image serves as the visual element */}
          </div>
        </div>
      </div>
      
      {/* Bottom Cards */}
      <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              className="bg-black text-white p-6 rounded-lg shadow-lg flex items-center space-x-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-[#DC241f] p-3 rounded-full">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Donate Now</h3>
                <p className="text-sm text-gray-300">
                  Your donation helps save lives across Kenya every single day.
                </p>
              </div>
              <Button variant="primary" size="sm" className="rounded-full ml-auto">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div 
              className="bg-white text-black p-6 rounded-lg shadow-lg flex items-center space-x-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="bg-[#006600] p-3 rounded-full text-white">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Register Now</h3>
                <p className="text-sm text-gray-600">
                  Become a regular donor and be part of our lifesaving community.
                </p>
              </div>
              <Button variant="success" size="sm" className="rounded-full ml-auto">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}