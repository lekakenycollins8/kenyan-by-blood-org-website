
"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { problemStatsData } from "@/data/about/problem-stats"
import { 
  AlertCircle, TrendingUp, Droplets, Heart, Users, Quote, 
  ArrowRight, Calendar, MapPin, Activity, Award, Landmark
} from "lucide-react"

// Impact data - would normally be in external file
const impactData = {
  title: "KBBF's Impact in One Year",
  subtitle: "Since its inception in September 2023, KBBF has made significant strides in raising awareness and increasing blood donations.",
  description: "Through organized blood drives across various counties, KBBF has collected over 73,000 pints of blood, impacting the lives of an estimated 200,000 individuals. While this is a substantial achievement, it's essential to acknowledge that Kenya's blood needs remain significant.",
  hashtag: "#iamkenyanbyblood",
  achievements: {
    title: "SNAPSHOT OF OUR ACHIEVEMENTS IN 2024",
    stats: [
      {
        title: "Number of Blood Donors",
        value: 3274,
        icon: "users"
      },
      {
        title: "Number of Blood Drives",
        value: 21,
        icon: "calendar"
      },
      {
        title: "Number of Regional Locations",
        value: 6,
        icon: "map-pin"
      }
    ]
  },
  impactVisuals: [
    {
      icon: "droplets",
      title: "73,000+ Pints Collected",
      description: "Each donation can save up to 3 lives"
    },
    {
      icon: "heart",
      title: "200,000+ Lives Impacted",
      description: "Mothers, children, accident victims, and more"
    },
    {
      icon: "landmark",
      title: "6 Counties Reached",
      description: "Expanding our reach across Kenya"
    },
    {
      icon: "award",
      title: "Youth Engagement",
      description: "70% of donors are under 35 years old"
    }
  ]
}

export default function BloodDonationImpact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState('need')
  
  // Animation counters
  const [needCount, setNeedCount] = useState(0)
  const [donorCount, setDonorCount] = useState(0)
  const [drivesCount, setDrivesCount] = useState(0)
  const [locationsCount, setLocationsCount] = useState(0)
  const [pintsCount, setPintsCount] = useState(0)
  const [livesCount, setLivesCount] = useState(0)
  
  const targetNeedNumber = parseInt(problemStatsData.mainStat.match(/\d+/)[0])
  
  useEffect(() => {
    if (isInView) {
      // Animate need counter
      animateCounter(0, targetNeedNumber, 2000, setNeedCount)
      
      // Animate impact counters when impact tab is active
      if (activeTab === 'impact') {
        animateCounter(0, impactData.achievements.stats[0].value, 2000, setDonorCount)
        animateCounter(0, impactData.achievements.stats[1].value, 1500, setDrivesCount)
        animateCounter(0, impactData.achievements.stats[2].value, 1000, setLocationsCount)
        animateCounter(0, 73000, 2500, setPintsCount)
        animateCounter(0, 200000, 2500, setLivesCount)
      }
    }
  }, [isInView, activeTab, targetNeedNumber])
  
  // Rerun animations when tab changes
  useEffect(() => {
    if (activeTab === 'impact' && isInView) {
      setDonorCount(0)
      setDrivesCount(0)
      setLocationsCount(0)
      setPintsCount(0)
      setLivesCount(0)
      
      // Short delay before starting animations
      setTimeout(() => {
        animateCounter(0, impactData.achievements.stats[0].value, 2000, setDonorCount)
        animateCounter(0, impactData.achievements.stats[1].value, 1500, setDrivesCount)
        animateCounter(0, impactData.achievements.stats[2].value, 1000, setLocationsCount)
        animateCounter(0, 73000, 2500, setPintsCount)
        animateCounter(0, 200000, 2500, setLivesCount)
      }, 200)
    }
  }, [activeTab, isInView])
  
  const animateCounter = (startValue, endValue, duration, setterFunction) => {
    const interval = 20 // ms
    const steps = duration / interval
    const increment = Math.ceil((endValue - startValue) / steps)
    
    const timer = setInterval(() => {
      setterFunction(prevCount => {
        const nextCount = prevCount + increment
        return nextCount >= endValue ? endValue : nextCount
      })
    }, interval)
    
    return () => clearInterval(timer)
  }

  const getIcon = (iconName) => {
    const iconProps = "h-8 w-8"
    const iconColor = "text-red-600" // Kenya's red
    
    switch (iconName) {
      case "alert-circle":
        return <AlertCircle className={`${iconProps} ${iconColor}`} />
      case "trending-up":
        return <TrendingUp className={`${iconProps} ${iconColor}`} />
      case "droplets":
        return <Droplets className={`${iconProps} ${iconColor}`} />
      case "heart":
        return <Heart className={`${iconProps} ${iconColor}`} />
      case "users":
        return <Users className={`${iconProps} ${iconColor}`} />
      case "calendar":
        return <Calendar className={`${iconProps} ${iconColor}`} />
      case "map-pin":
        return <MapPin className={`${iconProps} ${iconColor}`} />
      case "activity":
        return <Activity className={`${iconProps} ${iconColor}`} />
      case "award":
        return <Award className={`${iconProps} ${iconColor}`} />
      case "landmark":
        return <Landmark className={`${iconProps} ${iconColor}`} />
      default:
        return <Droplets className={`${iconProps} ${iconColor}`} />
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }
  
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.3
      }
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-6">
            <span className="font-semibold text-sm uppercase tracking-wider">
              {activeTab === 'need' ? "Kenya's Blood Challenge" : "Making a Difference"}
            </span>
          </div>
          
          <motion.h2 
            key={`title-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
          >
            {activeTab === 'need' ? problemStatsData.title : impactData.title}
          </motion.h2>
          
          <motion.p
            key={`subtitle-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-700 mb-6"
          >
            {activeTab === 'need' ? problemStatsData.subtitle : impactData.subtitle}
          </motion.p>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab('need')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'need' 
                    ? 'bg-white text-red-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                The Need
              </button>
              <button
                onClick={() => setActiveTab('impact')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'impact' 
                    ? 'bg-white text-red-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Our Impact
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'need' ? (
            <motion.div
              key="need-content"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                variants={fadeIn}
                custom={0}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 mb-12 max-w-2xl mx-auto"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="text-5xl md:text-6xl font-bold text-red-600 mb-4">
                    {isInView ? needCount.toLocaleString() : 0}
                    <span className="text-2xl ml-1">units</span>
                  </div>
                  <p className="text-xl font-medium text-gray-800">
                    {problemStatsData.mainStat.replace(/\d+/, '').trim()}
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {problemStatsData.stats.slice(0, 4).map((stat, index) => (
                  <motion.div
                    key={index}
                    custom={index + 1}
                    variants={fadeIn}
                    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all group"
                  >
                    <div className="bg-red-50 w-16 h-16 flex items-center justify-center rounded-full mb-5 group-hover:bg-red-100 transition-colors">
                      {getIcon(stat.icon)}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{stat.title}</h3>
                    <p className="text-gray-700">{stat.description}</p>
                    {stat.source && (
                      <p className="text-xs text-gray-500 mt-3 flex items-center">
                        Source: {stat.source}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeIn}
                custom={5}
                className="max-w-4xl mx-auto bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-md border border-gray-100"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-white p-3 shadow-sm">
                      <Quote className="h-8 w-8 text-red-600 opacity-80" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl italic text-gray-700 mb-6">{problemStatsData.quote.text}</p>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{problemStatsData.quote.source}</p>
                      <p className="text-sm text-gray-600">{problemStatsData.quote.position || "Blood Donor"}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="impact-content"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Impact Description */}
              <motion.div 
                variants={fadeIn}
                custom={0}
                className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white mb-12 max-w-3xl mx-auto shadow-lg"
              >
                <p className="text-lg mb-4">{impactData.description}</p>
                <div className="mt-6 flex justify-between items-center">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="font-bold text-4xl md:text-5xl mb-1">
                        {pintsCount.toLocaleString()}
                      </div>
                      <div className="text-sm text-red-100">Pints Collected</div>
                    </div>
                    <div className="w-px bg-red-400 opacity-30"></div>
                    <div className="text-center">
                      <div className="font-bold text-4xl md:text-5xl mb-1">
                        {livesCount.toLocaleString()}
                      </div>
                      <div className="text-sm text-red-100">Lives Impacted</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold opacity-80">{impactData.hashtag}</div>
                </div>
              </motion.div>
              
              {/* Achievement Header */}
              <motion.div 
                variants={fadeIn}
                custom={1}
                className="text-center mb-8"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 relative inline-block">
                  {impactData.achievements.title}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform -translate-y-1"></div>
                </h3>
              </motion.div>
              
              {/* Achievement Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {impactData.achievements.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    custom={index + 2}
                    className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all hover:shadow-lg group"
                  >
                    <div className="bg-gradient-to-r from-red-600 to-red-700 h-2"></div>
                    <div className="p-6">
                      <div className="bg-red-50 w-16 h-16 flex items-center justify-center rounded-full mb-5 group-hover:bg-red-100 transition-colors">
                        {getIcon(stat.icon)}
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">{stat.title}</h4>
                      <div className="text-3xl md:text-4xl font-bold text-red-600">
                        {index === 0 ? donorCount.toLocaleString() : 
                         index === 1 ? drivesCount.toLocaleString() : 
                         locationsCount.toLocaleString()}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Impact Visuals */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {impactData.impactVisuals.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    custom={index + 5}
                    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all group"
                  >
                    <div className="bg-red-50 w-16 h-16 flex items-center justify-center rounded-full mb-5 group-hover:bg-red-100 transition-colors">
                      {getIcon(item.icon)}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Call to action with hashtag */}
              <motion.div
                variants={fadeIn}
                custom={9}
                className="max-w-2xl mx-auto text-center bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 text-white shadow-lg"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4">Join the Movement</h3>
                <p className="mb-6">Every donation brings us closer to a Kenya where no one dies due to lack of blood.</p>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                  <div className="text-3xl font-bold text-red-500">{impactData.hashtag}</div>
                  <div className="h-8 w-px bg-gray-700 hidden md:block"></div>
                  <div className="flex gap-4">
                    <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="/donate" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full transition-colors">
              Donate Blood Today
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}