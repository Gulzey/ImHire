import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone } from 'lucide-react'

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('whatsapp-chat-messages')
    if (savedMessages) {
      return JSON.parse(savedMessages).map(msg => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }))
    }
    return [
      {
        id: 1,
        type: 'bot',
        text: 'Hi! 👋 I\'m your Imhire assistant. How can I help you with your accident management today?',
        timestamp: new Date()
      }
    ]
  })
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem('whatsapp-chat-messages', JSON.stringify(messages))
  }, [messages])

  // Predefined responses for common questions
  const botResponses = {
    'hello': 'Hello! How can I assist you with your accident management needs today?',
    'hi': 'Hi there! Welcome to Imhire. How can I help you?',
    'accident': 'I\'m sorry to hear about your accident. We provide end-to-end accident management services. Would you like to know more about our process?',
    'courtesy car': 'We can arrange a courtesy car for you within 24 hours of your non-fault accident. All costs are covered by the at-fault insurer.',
    'insurance': 'We handle all communication with insurance companies. You don\'t need to worry about paperwork or negotiations.',
    'cost': 'Our services are completely free for non-fault accident victims. All costs are covered by the at-fault insurer.',
    'time': 'We typically respond within 24 hours and can arrange a courtesy car quickly. The repair process depends on the damage extent.',
    'contact': 'You can reach us at +44 7947 232334 or info@imhire.com. We\'re available 24/7 for emergencies.',
    'help': 'I can help you with: courtesy car arrangements, insurance claims, accident management, and general inquiries. What do you need?',
    'thanks': 'You\'re welcome! Is there anything else I can help you with?',
    'thank you': 'You\'re welcome! Is there anything else I can help you with?'
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate bot response delay
    setTimeout(() => {
      const response = generateBotResponse(inputMessage.toLowerCase())
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: response,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const generateBotResponse = (message) => {
    // Check for exact matches first
    for (const [key, response] of Object.entries(botResponses)) {
      if (message.includes(key)) {
        return response
      }
    }

    // Check for partial matches
    if (message.includes('car') || message.includes('vehicle')) {
      return 'We can arrange a courtesy car for you within 24 hours. Would you like to know more about our car replacement service?'
    }
    
    if (message.includes('repair') || message.includes('fix')) {
      return 'We handle the entire repair process from start to finish. Our approved repairers ensure quality workmanship and warranty.'
    }
    
    if (message.includes('claim') || message.includes('insurance')) {
      return 'We manage all insurance communications and claims on your behalf. You don\'t need to deal with the at-fault insurer directly.'
    }

    // Default response
    return 'I understand you\'re asking about accident management. For specific assistance, please call us at +44 7947 232334 or would you like me to connect you directly to our team via WhatsApp?'
  }

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+447947232334' // Business WhatsApp number
    const message = encodeURIComponent('Hi, I need help with accident management services.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        type: 'bot',
        text: 'Hi! 👋 I\'m your Imhire assistant. How can I help you with your accident management today?',
        timestamp: new Date()
      }
    ])
    localStorage.removeItem('whatsapp-chat-messages')
  }

  const handleOpen = () => {
    setIsOpen(true)
    setHasOpened(true)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={handleOpen}
        className="fixed w-16 h-16 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full shadow-lg flex items-center justify-center z-[9999] transition-all duration-300 hover:scale-110 relative"
        style={{ right: '1.5rem', bottom: '1.5rem', left: 'auto', top: 'auto', position: 'fixed', zIndex: 9999 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} />
        {/* Notification Badge */}
        {!hasOpened && (
          <>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">1</span>
            </div>
            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
          </>
        )}
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 h-96 sm:w-96 sm:h-[500px] md:bottom-24 md:right-6 md:w-80 md:h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-[9999] flex flex-col max-h-[80vh] sm:max-h-[80vh] md:max-h-[80vh]"
          >
            {/* Mobile Full Screen Overlay */}
            <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
            
            {/* Mobile Full Screen Container */}
            <div className="md:hidden fixed inset-0 z-50 flex flex-col bg-white">
              {/* Header */}
              <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-800/40 rounded-full flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Imhire Assistant</h3>
                    <p className="text-sm opacity-90">Online • 24/7 Support</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={clearChat}
                    className="hover:bg-emerald-800/30 rounded-full p-1 transition-colors text-xs"
                    title="Clear chat"
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-emerald-800/30 rounded-full p-1 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Messages - Mobile */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Quick Action Buttons - Show only after first message */}
                {messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap gap-2"
                  >
                    {[
                      { text: 'Courtesy Car', action: 'courtesy car' },
                      { text: 'Insurance Help', action: 'insurance' },
                      { text: 'Cost Info', action: 'cost' },
                      { text: 'Contact Us', action: 'contact' }
                    ].map((button) => (
                      <button
                        key={button.text}
                        onClick={() => {
                          setInputMessage(button.action)
                          handleSendMessage()
                        }}
                        className="px-3 py-1 bg-green-100 hover:bg-green-200 text-green-700 text-xs rounded-full transition-colors"
                      >
                        {button.text}
                      </button>
                    ))}
                  </motion.div>
                )}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Area - Mobile */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="w-10 h-10 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </div>
                
                {/* WhatsApp Direct Button - Mobile */}
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone size={16} />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Desktop Chat Container */}
            <div className="hidden md:flex md:flex-col md:w-full md:h-full">
              {/* Header */}
              <div className="bg-emerald-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-800/40 rounded-full flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Imhire Assistant</h3>
                    <p className="text-sm opacity-90">Online • 24/7 Support</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={clearChat}
                    className="hover:bg-emerald-800/30 rounded-full p-1 transition-colors text-xs"
                    title="Clear chat"
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-emerald-800/30 rounded-full p-1 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Messages - Desktop */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Quick Action Buttons - Show only after first message */}
                {messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap gap-2"
                  >
                    {[
                      { text: 'Courtesy Car', action: 'courtesy car' },
                      { text: 'Insurance Help', action: 'insurance' },
                      { text: 'Cost Info', action: 'cost' },
                      { text: 'Contact Us', action: 'contact' }
                    ].map((button) => (
                      <button
                        key={button.text}
                        onClick={() => {
                          setInputMessage(button.action)
                          handleSendMessage()
                        }}
                        className="px-3 py-1 bg-green-100 hover:bg-green-200 text-green-700 text-xs rounded-full transition-colors"
                      >
                        {button.text}
                      </button>
                    ))}
                  </motion.div>
                )}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Area - Desktop */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="w-10 h-10 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </div>
                
                {/* WhatsApp Direct Button - Desktop */}
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full mt-3 bg-emerald-700 hover:bg-emerald-800 text-white py-2 px-4 rounded-full flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone size={16} />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default WhatsAppChat
