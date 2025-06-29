import React from 'react'

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle Geometric Shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-emerald-200/30 rounded-lg animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-emerald-50/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 border border-green-200/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Professional Sliding Elements */}
      <div className="absolute top-1/4 left-0 w-24 h-24 bg-gradient-to-r from-emerald-50/30 to-green-50/30 rounded-lg animate-slide-right"></div>
      <div className="absolute top-3/4 right-0 w-32 h-32 bg-gradient-to-r from-green-50/20 to-emerald-50/20 rounded-lg animate-slide-left"></div>
      
      {/* Subtle Spinning Elements */}
      <div className="absolute top-1/3 left-1/4 w-6 h-6 border border-emerald-300/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 border border-green-300/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      
      {/* Professional Bouncing Elements */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-emerald-100/40 rounded-full animate-bounce-slow"></div>
      <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-green-100/40 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
      
      {/* Elegant Geometric Shapes */}
      <div className="absolute top-10 right-1/3 w-12 h-12 bg-gradient-to-r from-emerald-50/30 to-green-50/30 rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-green-50/20 to-emerald-50/20 rotate-12 animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Subtle Wave-like Elements */}
      <div className="absolute top-1/2 left-0 w-48 h-16 bg-gradient-to-r from-transparent via-emerald-50/20 to-transparent rounded-full animate-slide-right"></div>
      <div className="absolute bottom-1/4 right-0 w-36 h-12 bg-gradient-to-l from-transparent via-green-50/20 to-transparent rounded-full animate-slide-left"></div>
      
      {/* Professional Lines */}
      <div className="absolute top-1/6 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-emerald-200/30 to-transparent animate-slide-right"></div>
      <div className="absolute bottom-1/6 right-1/2 w-24 h-px bg-gradient-to-l from-transparent via-green-200/30 to-transparent animate-slide-left"></div>
      
      {/* Subtle Dots */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-emerald-300/30 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-green-300/30 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>
  )
}

export default FloatingElements 