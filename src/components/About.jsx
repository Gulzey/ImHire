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
      title: "End-to-End Management",
      description: "Complete accident management from First Notification of Loss (FNOL) through to post-repair satisfaction. We handle everything for non-fault accident victims in Bristol."
    },
    {
      icon: <Shield size={24} />,
      title: "At-Fault Insurer Coverage",
      description: "100% of costs covered by the at-fault party's insurance. From courtesy cars to repairs and post-repair satisfaction - you never pay a penny."
    },
    {
      icon: <Clock size={24} />,
      title: "24-Hour Bristol Response",
      description: "Accidents don't wait for business hours. Our Bristol-based team is available 24/7 to get non-fault victims back on the road immediately."
    },
    {
      icon: <MapPin size={24} />,
      title: "Bristol & Surrounding Areas",
      description: "Serving Bristol and surrounding areas with local expertise and quick response times for all non-fault accident victims."
    },
    {
      icon: <Star size={24} />,
      title: "Professional Bristol Service",
      description: "Experienced Bristol team specializing in non-fault accident management with exceptional customer care and local knowledge."
    },
    {
      icon: <Award size={24} />,
      title: "Complete Satisfaction Guarantee",
      description: "From FNOL to post-repair satisfaction, we ensure complete customer satisfaction throughout the entire accident management process."
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose
            <span className="block gradient-text">Imhire Bristol</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Been in a non-fault accident in Bristol? We provide complete end-to-end accident management from FNOL to post-repair satisfaction. 
            All costs covered by the at-fault insurer - you focus on recovery, we handle everything else.
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