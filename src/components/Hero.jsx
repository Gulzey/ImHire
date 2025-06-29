import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Play, Star, Car } from 'lucide-react'
import taxiImage from '../assets/Taxi.png'
import FloatingElements from './FloatingElements'

const Hero = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center relative overflow-hidden">
      <FloatingElements />
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Car size={16} />
                <span>Bristol Courtesy Car Service</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-5xl lg:text-6xl font-bold leading-tight"
              >
                Imhire
                <span className="block gradient-text">Reliable Taxi Hire</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Are you a taxi driver that has been in a non-fault accident? We provide end-to-end accident management to keep you on the road and on the job. All costs covered by the at-fault insurer.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Get Courtesy Car</span>
                <ArrowDown size={20} />
              </button>
              
              <button 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <ArrowDown size={20} />
                <span>Learn More</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24hrs</div>
                <div className="text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-gray-600">Insurance Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main Card */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-3xl backdrop-blur-sm border border-emerald-200/20 flex flex-col items-start"
                style={{
                  backgroundImage: `url(${taxiImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="text-left text-white p-4 mt-12 ml-8 bg-emerald-600/80 rounded-lg shadow-2xl">
                  <h3 className="text-2xl font-bold tracking-wide">Imhire • Nationwide</h3>
                </div>
                <div className="text-left text-white mt-6 ml-8">
                  <ul className="space-y-2 text-base">
                    <li className="font-bold bg-emerald-600/70 px-3 py-1 rounded">• End-to-End Accident Management</li>
                    <li className="font-bold bg-emerald-600/70 px-3 py-1 rounded">• FNOL to Post-Repair Satisfaction</li>
                    <li className="font-bold bg-emerald-600/70 px-3 py-1 rounded">• At-Fault Insurer Covers All Costs</li>
                  </ul>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full opacity-80"
              ></motion.div>
              
              <motion.div
                animate={{ x: [20, -20, 20], y: [10, -10, 10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-10 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-80"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 