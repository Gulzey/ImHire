import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, FileText, Shield, Users, CreditCard } from 'lucide-react'

const FAQ = () => {
  // Separate refs for Legal and FAQ
  const [legalRef, legalInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "How quickly can I get a replacement taxi?",
      answer: "Most taxi drivers receive a replacement vehicle within 24 hours, often the same day. We prioritise getting you back on the road as fast as possible."
    },
    {
      question: "Do I pay anything for your service?",
      answer: "No, all costs are covered by the at-fault insurer. You won't pay a penny for your replacement taxi or our management service."
    },
    {
      question: "What do I need to provide?",
      answer: "Just your taxi license and accident details. We'll handle all paperwork, claims, and communication with insurers."
    },
    {
      question: "How long does the process take?",
      answer: "Most cases are resolved in 2-4 weeks. We keep you updated at every stage and ensure you have a taxi for work throughout."
    },
    {
      question: "What if the insurer refuses to pay?",
      answer: "Our expert team handles disputes and negotiations, so you're never left without a vehicle or support."
    },
    {
      question: "Do you cover all of the UK?",
      answer: "Yes, we deliver and support taxi drivers nationwide, wherever your business operates."
    }
  ]

  const legalSections = [
    {
      icon: <FileText size={24} />,
      title: "Complete Claims Support",
      content: "We manage your claim from FNOL to completion."
    },
    {
      icon: <Shield size={24} />,
      title: "Your Rights",
      content: "You're entitled to a replacement car and full support."
    },
    {
      icon: <Users size={24} />,
      title: "24/7 Customer Care",
      content: "Our team is always here to help, nationwide."
    },
    {
      icon: <CreditCard size={24} />,
      title: "No Upfront Costs",
      content: "No fees, no deposits, no hidden charges."
    }
  ]

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        {/* Legal Section (now first) */}
        <motion.div
          ref={legalRef}
          initial={{ opacity: 0, y: 50 }}
          animate={legalInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
          id="legal"
        >
          <h3 className="text-3xl font-bold mb-6">
            Legal
            <span className="block gradient-text">Information</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {legalSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={legalInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="legal-card p-8"
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

        {/* FAQ Section (now after Legal) */}
        <motion.div
          ref={faqRef}
          initial={{ opacity: 0, y: 50 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
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

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto mb-20">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="mb-6 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus:bg-emerald-50 hover:bg-emerald-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                aria-expanded={openFaq === index}
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <ChevronDown className={`ml-4 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
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