"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Heart, ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhyDonateProps {
  title: string
  paragraphs: string[]
  image: string
  alt?: string
  quote?: string
}

export default function WhyDonate({ data }: { data: WhyDonateProps }) {
  // Destructure data
  const { title, paragraphs, image, alt, quote } = data

  // State for "Read More" functionality
  const [expanded, setExpanded] = useState(false)

  // State for sticky CTA bar
  const [showStickyCta, setShowStickyCta] = useState(false)

  // Refs for scroll detection
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  // Handle scroll for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom
      const windowHeight = window.innerHeight

      // Show sticky CTA when section bottom is above viewport
      if (sectionBottom < windowHeight * 0.5) {
        setShowStickyCta(true)
      } else {
        setShowStickyCta(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const stickyCTAVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="why-donate-title"
      className="relative py-24 md:py-32 overflow-hidden bg-white"
    >
      {/* Organic Background Shape */}
      <div
        className="absolute right-0 top-1/4 w-[70%] h-[70%] bg-[#006600]/10 rounded-[40%_60%_70%_30%/30%_40%_70%_60%] -z-10"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative">
        <div className="relative min-h-[600px] lg:min-h-[700px]">
          {/* Diagonal Split Layout */}
          <div className="absolute inset-0 w-full h-full">
            {/* Image Panel with diagonal clip */}
            <motion.div
              className="absolute top-0 left-0 w-full md:w-[65%] h-[60%] md:h-full"
              style={{
                clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)", // Diagonal clip
              }}
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02, rotateY: 2, rotateX: -1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={alt || "Blood donation in Kenya"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 65vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent" />
              </div>

              {/* Emotional Quote Overlay - Moved higher up */}
              <div className="absolute bottom-[40%] left-[10%] max-w-md z-10">
                <motion.p
                  className="text-2xl md:text-3xl italic text-white drop-shadow-lg font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {quote || "Your gift is someone's second chance at life."}
                </motion.p>
              </div>
            </motion.div>

            {/* Text Content Panel */}
            <motion.div
              className="absolute top-0 md:top-[15%] right-0 w-full md:w-[55%] h-auto md:h-[70%] bg-white/95 md:bg-white/80 backdrop-blur-sm md:rounded-tl-3xl p-6 md:p-10 lg:p-16"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Badge */}
              <motion.div
              className="inline-flex items-center space-x-2 bg-[#DC241f]/10 text-[#DC241f] px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6"
              variants={paragraphVariants}
              >
              <Heart className="h-3 w-3 md:h-4 md:w-4" />
              <span className="font-semibold text-xs md:text-sm">Why It Matters</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
              id="why-donate-title"
              className="text-xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-8 text-gray-900 leading-tight"
              variants={paragraphVariants}
              >
              {title}
              </motion.h2>

              {/* Interactive "Reveal" Paragraphs */}
              <div className="space-y-3 md:space-y-6">
              <motion.p className="text-sm md:text-lg text-gray-700 leading-relaxed" variants={paragraphVariants}>
              {paragraphs[0]}
              </motion.p>

              <AnimatePresence>
              {expanded && (
              <motion.div
                className="space-y-3 md:space-y-6 max-h-[200px] md:max-h-[500px] overflow-y-auto"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {paragraphs.slice(1).map((paragraph, index) => (
                <p key={index} className="text-sm md:text-lg text-gray-700 leading-relaxed">
                {paragraph}
                </p>
                ))}
              </motion.div>
              )}
              </AnimatePresence>

              {paragraphs.length > 1 && (
              <button
              onClick={() => setExpanded(!expanded)}
              className="text-[#DC241f] text-xs md:text-base font-medium flex items-center hover:underline focus:outline-none focus:ring-2 focus:ring-[#DC241f] focus:ring-offset-2 rounded-md"
              aria-expanded={expanded}
              >
              {expanded ? (
                <>
                Read Less <ChevronUp className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                </>
              ) : (
                <>
                Read More <ChevronDown className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                </>
              )}
              </button>
              )}
              </div>

              {/* CTA Button */}
              <motion.div className="mt-6 md:mt-10" variants={paragraphVariants}>
              <Button
                className="bg-[#DC241f] hover:bg-[#b01c19] text-white rounded-full group text-sm md:text-base py-2 px-4 md:py-3 md:px-6"
                onClick={() => {
                const donationForm = document.getElementById("donation-form")
                if (donationForm) {
                  donationForm.scrollIntoView({ behavior: "smooth" })
                }
                }}
              >
                Donate Now
                <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Animated Icon Accent*/}
            <motion.div
            className="absolute left-[calc(68%-30px)] top-[calc(30%-30px)] z-20 hidden md:block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            >
            <div className="relative">
              <div className="absolute inset-0 bg-[#DC241f] rounded-full animate-ping opacity-30"></div>
              <div className="relative bg-[#DC241f] p-4 rounded-full shadow-lg">
              <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}