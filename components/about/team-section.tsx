"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { TEAM_MEMBERS } from "@/data/about";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      ref={ref}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Our dedicated team of professionals works tirelessly to ensure a
              safe and sustainable blood supply for all Kenyans.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white/20 p-2 rounded-full hover:bg-[#DC241f] transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={18} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="bg-white/20 p-2 rounded-full hover:bg-[#DC241f] transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter size={18} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="bg-white/20 p-2 rounded-full hover:bg-[#DC241f] transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#DC241f] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in joining our team? We're always looking for passionate
            individuals who share our mission of saving lives through blood
            donation.
          </p>
          <a
            href="/careers"
            className="inline-block mt-6 bg-[#DC241f] text-white px-8 py-3 rounded-full hover:bg-[#DC241f]/90 transition-colors"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>
    </section>
  );
}