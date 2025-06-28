import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, FileText, Shield, Users, CreditCard } from 'lucide-react'

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "I've been in a non-fault accident in Bristol - how quickly can I get a courtesy car?",
      answer: "We provide courtesy cars within 24 hours for non-fault accident victims in Bristol. In most cases, we can arrange delivery the same day if you contact us early enough."
    },
    {
      question: "Do I need to pay anything for the end-to-end accident management service?",
      answer: "No, you don't pay anything. The at-fault party's insurance covers all costs including courtesy cars, repairs, and post-repair satisfaction - from FNOL to completion."
    },
    {
      question: "What documents do I need to provide for the accident management process?",
      answer: "You'll need your driver's license, accident report, and details of the at-fault party's insurance. We handle all the paperwork and claims process with the insurance company."
    },
    {
      question: "How long does the complete accident management process take?",
      answer: "From FNOL to post-repair satisfaction, the process typically takes 2-4 weeks depending on repair complexity. We keep you updated throughout and ensure complete satisfaction."
    },
    {
      question: "What happens if the at-fault party's insurance refuses to pay?",
      answer: "We have extensive experience dealing with insurance companies in Bristol. If there are any issues, our legal team will handle the dispute while you continue using the courtesy car."
    },
    {
      question: "Do you provide accident management services outside Bristol?",
      answer: "We primarily serve Bristol and surrounding areas. Our local expertise and quick response times are optimized for the Bristol region."
    }
  ]

  const legalSections = [
    {
      icon: <FileText size={24} />,
      title: "End-to-End Claims Process",
      content: "We handle the entire accident management process from FNOL to post-repair satisfaction, ensuring you get the compensation you deserve."
    },
    {
      icon: <Shield size={24} />,
      title: "Non-Fault Victim Rights",
      content: "As a non-fault accident victim in Bristol, you have the right to complete accident management services. We ensure your rights are protected throughout."
    },
    {
      icon: <Users size={24} />,
      title: "Bristol Customer Support",
      content: "Our dedicated Bristol team provides 24/7 support to help you through the complete accident management process and ensure you're never without transport."
    },
    {
      icon: <CreditCard size={24} />,
      title: "100% At-Fault Insurer Coverage",
      content: "Complete transparency with no upfront fees, deposits, or hidden charges. Everything from FNOL to post-repair satisfaction is covered by the at-fault insurance."
    }
  ]

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked
            <span className="block gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our car rental services and policies.
          </p>
        </motion.div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-emerald-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-emerald-600 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legal Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
          id="legal"
        >
          <h3 className="text-3xl font-bold mb-6">
            Legal
            <span className="block gradient-text">Information</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {legalSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-emerald-100"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {section.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">
                    {section.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Our customer service team is here to help you with any questions or concerns.
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 