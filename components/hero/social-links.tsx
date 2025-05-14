"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { Twitter as TwitterIcon } from "lucide-react"
import { SOCIAL_LINKS } from "@/lib/constants"

export default function SocialLinks() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.5 },
    }),
  }

  return (
    <motion.div className="flex space-x-4 mb-6" initial="hidden" animate="visible" custom={0} variants={fadeIn}>
      {SOCIAL_LINKS.map((social) => {
        let IconComponent;
        
        switch(social.icon) {
          case 'facebook':
            IconComponent = Facebook;
            break;
          case 'twitter':
            IconComponent = TwitterIcon;
            break;
          case 'instagram':
            IconComponent = Instagram;
            break;
          case 'linkedin':
            IconComponent = Linkedin;
            break;
          default:
            IconComponent = Facebook; // Fallback icon
        }

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-2 rounded-full hover:bg-[#DC241f] transition-colors"
            aria-label={social.name}
          >
            {IconComponent && <IconComponent size={18} />}
          </a>
        )
      })}
    </motion.div>
  )
}
