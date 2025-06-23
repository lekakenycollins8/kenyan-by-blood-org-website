"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

type HeroData = {
  headline: string;
  subheading: string;
  ctaLabel: string;
  backgroundImage: string;
}

export default function Hero({ data, scrollToForm }: { data: HeroData; scrollToForm: () => void; }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-32 bg-white"
      aria-label="Donate Hero Section"
    >
      {/* Diagonal clipped image panel */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 hidden lg:block">
          <div className="h-full relative clip-path-diagonal">
            <Image
              src={data.backgroundImage}
              alt={data.headline}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="relative container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Column */}
        <motion.div
          className="max-w-lg lg:ml-auto text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 rounded-full bg-[#DC241f]/20 px-4 py-2">
            <span className="text-[#DC241f] font-semibold uppercase text-sm">
              Donate Today
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            {data.headline}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            {data.subheading}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <Button
              onClick={() => {
                  const donationForm = document.getElementById("waystosupport")
                  if (donationForm) {
                    donationForm.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              className="group flex items-center justify-center bg-[#DC241f] hover:bg-[#b01c19] text-white px-6 py-4 rounded-full text-lg font-medium shadow-lg"
            >
              {data.ctaLabel}
              <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Button>
            
          </div>
        </motion.div>

        {/* Mobile/Tablet Image */}
        <motion.div
          className="lg:hidden mt-12 w-full relative h-64"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src={data.backgroundImage}
            alt={data.headline}
            fill
            className="object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        </motion.div>
      </div>

      {/* Pulsing Blood Drop */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
      >
        <div className="w-8 h-12 bg-[#DC241f] rounded-full clip-path-drop animate-pulse-slow"></div>
      </motion.div>
    </section>
  );
}