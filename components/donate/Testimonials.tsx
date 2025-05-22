"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"
import Image from "next/image"

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stories from the Field</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from those whose lives have been touched by blood donation and our foundation's work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 relative h-full min-h-[200px]">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6 flex flex-col justify-center">
                  <Quote className="h-8 w-8 text-[#DC241f] mb-4 opacity-50" />
                  <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
