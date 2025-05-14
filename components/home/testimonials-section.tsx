"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TESTIMONIALS } from "@/data/home";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => 
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => 
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };
  
  return (
    <section 
      ref={ref}
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
      id="testimonials"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23DC241f' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        }}
      ></div>
      
      {/* Decorative element */}
      <div
        className="absolute -right-20 top-40 h-64 w-64 rounded-full bg-[#DC241f]/20"
        style={{ filter: "blur(100px)" }}
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full mb-4">
            <Quote className="h-4 w-4" />
            <span className="font-semibold text-sm">Donor Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Voices from Our Community</h2>
          <p className="text-gray-300 text-lg">
            Hear from the donors and recipients who are part of our mission 
            to ensure blood availability for all Kenyans in need.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-800 rounded-2xl p-8 md:p-10 shadow-xl">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <div className="relative">
                          <div className="w-20 h-20 bg-[#DC241f] rounded-full absolute -top-4 -left-4 -z-0"></div>
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-full h-72 md:h-80 object-cover rounded-xl relative z-10"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3 flex flex-col justify-center">
                        <Quote className="h-12 w-12 text-[#DC241f] mb-6 opacity-50" />
                        <blockquote className="text-xl md:text-2xl font-medium mb-6 text-gray-100 italic leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <p className="font-bold text-lg">{testimonial.author}</p>
                          <p className="text-gray-400">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-10">
            <button
              onClick={prevTestimonial}
              className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === activeIndex ? "bg-[#DC241f] w-6" : "bg-gray-600 hover:bg-gray-500"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* CTA */}
        <motion.div 
          className="mt-20 p-8 md:p-10 bg-gradient-to-r from-[#DC241f]/90 to-[#DC241f]/80 rounded-2xl max-w-5xl mx-auto shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Your Story Could Save Lives Too
              </h3>
              <p className="text-white/90 mb-6">
                Join our community of donors and share your own story about how blood donation
                has impacted your life or the lives of your loved ones.
              </p>
            </div>
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#DC241f] py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Share Your Story
              </button>
              <button className="bg-transparent text-white border-2 border-white py-3 px-6 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Read More Stories
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}