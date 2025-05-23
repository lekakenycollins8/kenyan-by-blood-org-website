"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UPCOMING_EVENTS } from "@/data/home";
import { CalendarDays, MapPin, Clock, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section 
      ref={ref}
      className="py-20 bg-white"
      id="events"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-full mb-4">
            <Calendar className="h-4 w-4" />
            <span className="font-semibold text-sm">Upcoming Events</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us at a Blood Drive</h2>
          <p className="text-gray-600 text-lg">
            We organize regular blood drives across Kenya. Find an event near you
            and help us save lives in your community.
          </p>
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {UPCOMING_EVENTS.map((event, index) => (
            <motion.div 
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#DC241f] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Upcoming
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <CalendarDays className="h-4 w-4 mr-2 text-[#DC241f]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-[#DC241f]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-[#DC241f]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full text-[#DC241f] border-[#DC241f] hover:bg-[#DC241f]/10"
                  >
                    Register
                  </Button>
                  <Link 
                    href="/events"
                    className="text-[#DC241f] font-medium flex items-center hover:underline"
                  >
                    Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-[#DC241f] border-[#DC241f] hover:bg-[#DC241f]/10"
          >
            View All Events
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}