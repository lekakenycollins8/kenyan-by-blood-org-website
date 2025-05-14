"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { CORE_VALUES } from "@/data/about";
import { Shield, Heart, Award, Lightbulb } from "lucide-react";

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "shield":
        return <Shield className="h-8 w-8" />;
      case "heart":
        return <Heart className="h-8 w-8" />;
      case "award":
        return <Award className="h-8 w-8" />;
      case "lightbulb":
        return <Lightbulb className="h-8 w-8" />;
      default:
        return <Heart className="h-8 w-8" />;
    }
  };

  return (
    <section 
      ref={ref}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600">
              We envision a Kenya where no life is lost due to blood shortage.
              Through innovation, dedication, and community engagement, we work
              tirelessly to make this vision a reality.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_VALUES.map((value, index) => (
            <motion.div
              key={value.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#DC241f]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="bg-[#DC241f]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-[#DC241f]">
                {getIcon(value.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-gray-600 mb-6">
                We are committed to maintaining the highest standards of safety,
                efficiency, and accessibility in blood donation. Our state-of-the-art
                facilities and trained professionals ensure that every donation
                is handled with the utmost care and precision.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="bg-[#DC241f]/10 p-1 rounded-full mr-3">
                    <Heart className="h-4 w-4 text-[#DC241f]" />
                  </span>
                  ISO 9001:2015 Certified Quality Management
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-[#DC241f]/10 p-1 rounded-full mr-3">
                    <Heart className="h-4 w-4 text-[#DC241f]" />
                  </span>
                  WHO Guidelines Compliant
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-[#DC241f]/10 p-1 rounded-full mr-3">
                    <Heart className="h-4 w-4 text-[#DC241f]" />
                  </span>
                  24/7 Emergency Response
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-96">
              <img
                src="https://images.pexels.com/photos/4226894/pexels-photo-4226894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Blood donation center"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}