"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { PARTNERS } from "@/data/about";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PartnersSection() {
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
              Our Partners & Accreditations
            </h2>
            <p className="text-xl text-gray-600">
              We work with leading healthcare organizations and government bodies
              to ensure the highest standards of blood donation services.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="h-48 relative">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-4">
                    {partner.name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-[#DC241f] rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Partner With Us
              </h3>
              <p className="text-white/90 mb-6">
                Join our mission to ensure blood availability across Kenya. We
                welcome partnerships with healthcare providers, corporate
                organizations, and community groups.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full bg-white text-[#DC241f] hover:bg-white/90 group"
              >
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Partnership"
                className="rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}