"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#DC241f]/95 to-[#8a1c1a] text-white">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full mb-4">
              <Heart className="h-4 w-4" />
              <span className="font-semibold text-sm">Save Lives Today</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Be a Hero in Someone's Story
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Your blood donation can be the lifeline that someone urgently needs. 
              Join our community of donors and make a difference today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Button
                variant="primary"
                size="xl"
                className="bg-white text-[#DC241f] hover:bg-gray-100 rounded-full shadow-lg group"
              >
                Donate Blood Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline_primary"
                size="xl"
                className="border-white text-white hover:bg-white/20 rounded-full shadow-lg"
              >
                Register as Volunteer
              </Button>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20"
            >
              <div className="bg-white/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Become a Donor</h3>
              <p className="text-white/80">
                Register to donate blood and join our community of lifesavers across Kenya.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20"
            >
              <div className="bg-white/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Host a Blood Drive</h3>
              <p className="text-white/80">
                Partner with us to organize a blood drive at your organization, school, or community.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20"
            >
              <div className="bg-white/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Corporate Partnerships</h3>
              <p className="text-white/80">
                Engage your employees in lifesaving activities through our corporate partnership program.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}