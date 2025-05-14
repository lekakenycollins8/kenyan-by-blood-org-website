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
                    variant="outline_primary"
                    size="sm"
                    className="rounded-full"
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
            variant="outline_primary"
            size="lg"
            className="rounded-full"
          >
            View All Events
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        {/* Map Section */}
        <motion.div 
          className="mt-24 bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid md:grid-cols-2 min-h-[500px]">
            <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <div className="inline-flex items-center justify-center space-x-2 bg-[#DC241f]/10 text-[#DC241f] px-4 py-2 rounded-full mb-4 w-fit">
                <MapPin className="h-4 w-4" />
                <span className="font-semibold text-sm">Find Nearest Center</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Donation Centers Near You
              </h3>
              <p className="text-gray-600 mb-8">
                We have over 100 donation centers across Kenya. Find the nearest one
                to you and schedule your donation today.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="flex-1 p-3 outline-none border border-gray-300 rounded-l-lg focus:border-[#DC241f]"
                  />
                  <button className="bg-[#DC241f] text-white px-4 py-3 rounded-r-lg hover:bg-[#DC241f]/90 transition-colors">
                    Search
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#DC241f]">
                  <div className="font-bold">Kenyatta National Hospital</div>
                  <div className="text-gray-600 text-sm">Open 24/7</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#006600]">
                  <div className="font-bold">Nairobi Blood Transfusion Center</div>
                  <div className="text-gray-600 text-sm">8:00 AM - 6:00 PM</div>
                </div>
              </div>
              <Button
                variant="primary"
                size="lg"
                className="rounded-full mt-8 w-full md:w-auto"
              >
                View All Centers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative md:order-2">
              <img 
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Map of donation centers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}