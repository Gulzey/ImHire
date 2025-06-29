import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Car, Shield, Clock, MapPin, Star, Award } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: <Car size={24} />,
      title: "Nationwide Taxi Delivery",
      description: "Replacement taxis delivered anywhere in the UK, fast."
    },
    {
      icon: <Shield size={24} />,
      title: "Taxi Drivers Fully Covered",
      description: "All costs for taxi drivers are handled by the at-fault insurer."
    },
    {
      icon: <Clock size={24} />,
      title: "Rapid Response for Taxis",
      description: "24/7 support and quick turnaround for every taxi claim."
    },
    {
      icon: <MapPin size={24} />,
      title: "Professional Taxi Team",
      description: "Specialists in taxi accident management."
    },
    {
      icon: <Star size={24} />,
      title: "Seamless Taxi Process",
      description: "From FNOL to completion, we have taxi drivers covered throughout."
    },
    {
      icon: <Award size={24} />,
      title: "Taxi Driver Focused",
      description: "Clear updates and dedicated care for every taxi driver."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-2 text-black">Why choose</h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="block gradient-text">Imhire?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Imhire is the top choice for taxi drivers. We're known for fast delivery, expert claims handling, and unmatched support—so you can stay on the road with total confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="professional-card p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 professional-card p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">10+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">24hrs</div>
              <div className="text-gray-600 font-medium">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-600 font-medium">Insurance Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Customer Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 