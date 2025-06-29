import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Play, Star, Car } from 'lucide-react'
import taxiImage from '../assets/Taxi.png'
import FloatingElements from './FloatingElements'

const Hero = () => {
  const [flipped, setFlipped] = useState(false);

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
                className="absolute inset-0 flex items-center justify-center"
                style={{ perspective: '1200px' }}
              >
                <div
                  className={`relative w-full h-full rounded-3xl cursor-pointer transition-transform duration-700 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400`}
                  style={{
                    outline: 'none',
                    transformStyle: 'preserve-3d',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    width: '100%',
                    height: '100%',
                  }}
                  onClick={() => setFlipped(f => !f)}
                  tabIndex={0}
                  aria-label="Flip card for more info"
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-lg border-2 border-transparent hover:border-gradient-to-br hover:from-emerald-400 hover:via-blue-400 hover:to-pink-400 focus-visible:border-gradient-to-br focus-visible:from-emerald-400 focus-visible:via-blue-400 focus-visible:to-pink-400 shadow-2xl flex flex-col items-end justify-end p-8 transition-all duration-700 focus:outline-none focus-visible:outline-none"
                    style={{
                      backgroundImage: `url(${taxiImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                      borderImage: 'none',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="bg-black/50 rounded-xl px-6 py-3 mb-6 shadow-lg backdrop-blur-md">
                      <h3 className="text-3xl font-extrabold tracking-tight text-white mb-1 drop-shadow-lg">Imhire</h3>
                      <p className="text-lg text-emerald-200 font-medium">Keeping Taxi Drivers on the Road</p>
                    </div>
                    <span className="text-xs text-white/60">Click to learn more</span>
                  </div>
                  {/* Back Side */}
                  <div
                    className="absolute inset-0 rounded-3xl bg-black/60 backdrop-blur-lg border-2 border-gradient-to-br from-emerald-400 via-blue-400 to-pink-400 shadow-2xl flex flex-col items-start justify-center p-10 transition-all duration-700"
                    style={{
                      transform: 'rotateY(180deg)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <h3 className="text-2xl font-extrabold tracking-tight mb-1 text-white">Imhire: Premium Taxi Accident Management</h3>
                    <p className="text-sm text-emerald-200 mb-4 font-medium">Nationwide. Hassle-Free. For Taxi Drivers.</p>
                    <ul className="space-y-2 text-base">
                      <li className="flex items-center gap-2 font-semibold text-white/90"><span role='img' aria-label='taxi'>🚗</span> Replacement Taxi Delivered</li>
                      <li className="flex items-center gap-2 font-semibold text-white/90"><span role='img' aria-label='tools'>🛠️</span> Repairs & Claims Handled</li>
                      <li className="flex items-center gap-2 font-semibold text-white/90"><span role='img' aria-label='money'>💸</span> No Upfront Costs</li>
                    </ul>
                    <span className="text-xs text-white/60 mt-6">Click to go back</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements - Green Circles Pop Out on Flip */}
              <motion.div
                animate={{
                  x: [-20, 20, -20],
                  y: [-10, 10, -10],
                  scale: flipped ? 0 : 1,
                  opacity: flipped ? 0 : 0.8
                }}
                transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
                className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
                style={{ pointerEvents: 'none' }}
              ></motion.div>
              <motion.div
                animate={{
                  x: [20, -20, 20],
                  y: [10, -10, 10],
                  scale: flipped ? 0 : 1,
                  opacity: flipped ? 0 : 0.8
                }}
                transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
                className="absolute bottom-20 left-10 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                style={{ pointerEvents: 'none' }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 