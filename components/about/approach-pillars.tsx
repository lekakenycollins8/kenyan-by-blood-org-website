"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { pillarsData } from "@/data/about/pillars"
import { BookOpen, Megaphone, Users, Handshake, X } from "lucide-react"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function ApproachPillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [openModal, setOpenModal] = useState(false)
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null)

  type IconName = "book-open" | "megaphone" | "users" | "handshake";

  interface Pillar {
    id: number;
    title: string;
    description: string;
    icon: IconName;
    keyPoints?: string[];
  }

  const handleOpenModal = (pillar: Pillar): void => {
    setSelectedPillar(pillar)
    setOpenModal(true)
  }

  interface IconProps {
    className: string;
  }



  const getIcon = (iconName: IconName): JSX.Element => {
    switch (iconName) {
      case "book-open":
        return <BookOpen className="h-8 w-8 text-white" />
      case "megaphone":
        return <Megaphone className="h-8 w-8 text-white" />
      case "users":
        return <Users className="h-8 w-8 text-white" />
      case "handshake":
        return <Handshake className="h-8 w-8 text-white" />
      default:
        return <BookOpen className="h-8 w-8 text-white" />
    }
  }

  interface ColorGradient {
    from: string;
    to: string;
  }

  const getColor = (id: number): string => {
    switch (id) {
      case 1:
        return "from-[#DC241f] to-[#b01c19]"
      case 2:
        return "from-[#006600] to-[#004d00]"
      case 3:
        return "from-black to-[#333333]"
      case 4:
        return "from-[#DC241f] to-[#b01c19]"
      default:
        return "from-[#DC241f] to-[#b01c19]"
    }
  }

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{pillarsData.title}</h2>
          <p className="text-lg text-gray-700 mb-4">{pillarsData.introduction}</p>
          <p className="text-lg font-medium text-gray-800">{pillarsData.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillarsData.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className={`bg-gradient-to-r ${getColor(pillar.id)} p-4`}>
                <div className="flex items-center">
                  <div className="bg-white/20 w-10 h-10 flex items-center justify-center rounded-full mr-3">
                    {getIcon(pillar.icon as IconName)}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {pillar.id}. {pillar.title}
                  </h3>
                </div>
              </div>
              <div className="p-4 flex-grow">
                <p className="text-gray-700 text-sm line-clamp-3">{pillar.description}</p>
              </div>
              <div className="p-4 pt-0">
                <Button 
                  variant="outline" 
                  className="w-full text-sm"
                  onClick={() => handleOpenModal(pillar as Pillar)}
                >
                  Read More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 shadow-md border-l-4 border-[#006600]"
        >
          <div className="flex items-center mb-4">
            <Handshake className="h-6 w-6 text-[#006600] mr-3" />
            <h3 className="text-xl font-bold">Strategic Partnerships</h3>
          </div>
          <p className="text-gray-700">{pillarsData.partnershipNote}</p>
        </motion.div>
      </div>

      {/* Modal Dialog for Pillar Details */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        {selectedPillar && (
          <DialogContent className="w-[95vw] p-4 sm:p-6 sm:max-w-md md:max-w-lg">
            <DialogHeader>
              <div className={`bg-gradient-to-r ${getColor(selectedPillar.id)} p-3 sm:p-4 -mt-4 sm:-mt-6 -mx-4 sm:-mx-6 rounded-t-lg mb-4 flex items-center flex-wrap sm:flex-nowrap`}>
                <div className="bg-white/20 w-10 h-10 flex items-center justify-center rounded-full mr-3">
                  {getIcon(selectedPillar.icon as IconName)}
                </div>
                <DialogTitle className="text-xl font-bold text-white">
                  {selectedPillar.id}. {selectedPillar.title}
                </DialogTitle>
              </div>
              <DialogDescription className="text-gray-500 pt-2">
                Learn more about this core pillar of our approach
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <p className="text-gray-700">{selectedPillar.description}</p>
              
              {/* Additional content could be added here */}
              {selectedPillar.keyPoints && (
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Points:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedPillar.keyPoints.map((point, idx) => (
                      <li key={idx} className="text-gray-700">{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <DialogFooter>
              <Button onClick={() => setOpenModal(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}