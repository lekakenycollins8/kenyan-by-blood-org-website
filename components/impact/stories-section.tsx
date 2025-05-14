"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { SUCCESS_STORIES } from "@/data/impact";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StoriesSection() {
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real stories of lives changed through the power of blood donation.
              Each donation creates a ripple effect of positive impact in our
              communities.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {SUCCESS_STORIES.map((story, index) => (
            <motion.div
              key={story.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#DC241f] text-white px-3 py-1 rounded-full text-sm">
                  {story.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{story.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <Button
                  variant="link"
                  className="text-[#DC241f] hover:text-[#DC241f]/80 p-0 h-auto font-medium group"
                >
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline_primary"
            size="lg"
            className="rounded-full"
          >
            View All Stories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}