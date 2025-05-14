"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { RESEARCH_PUBLICATIONS } from "@/data/impact";
import { FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResearchSection() {
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
              Research & Publications
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence extends to research and innovation in
              blood banking and healthcare delivery.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {RESEARCH_PUBLICATIONS.map((publication, index) => (
            <motion.div
              key={publication.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-[#DC241f]/10 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-[#DC241f]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{publication.title}</h3>
              <p className="text-gray-600 mb-2">{publication.authors}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>{publication.journal}</span>
                <span>{publication.year}</span>
              </div>
              <a
                href={publication.link}
                className="inline-flex items-center text-[#DC241f] hover:text-[#DC241f]/80 font-medium group"
              >
                Read Publication
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
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
                Support Our Research
              </h3>
              <p className="text-white/90 mb-6">
                Help us continue our research and innovation in blood banking and
                healthcare delivery. Your support makes a difference.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full bg-white text-[#DC241f] hover:bg-white/90 group"
              >
                Make a Donation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Research support"
                className="rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}