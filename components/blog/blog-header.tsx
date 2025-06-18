
import React from 'react';

// Blog Header Component
export default function BlogHeader() {
  return (
    <section className="relative min-h-[500px] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Kenyan Flag Inspired Geometric Shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-red-600 to-red-700 transform -skew-x-12 -translate-x-20"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-green-600 to-green-700 transform skew-x-12 translate-x-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-white rounded-full opacity-30 animate-pulse"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-32 right-20 w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-20 flex items-center min-h-[500px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white text-sm font-medium">Latest Stories</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Our Blog
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stories, updates, and insights from our blood donation community across Kenya.
          </p>
          
          {/* Kenyan Flag Inspired Separator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-2 bg-red-600 rounded-full"></div>
              <div className="w-12 h-1 bg-white rounded-full"></div>
              <div className="w-8 h-2 bg-green-600 rounded-full"></div>
            </div>
          </div>
          
          {/* Call to Action */}
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-12 sm:h-16 lg:h-20 fill-white">
          <path d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,85.3C672,85,768,107,864,112C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V96Z"></path>
        </svg>
      </div>
    </section>
  );
}