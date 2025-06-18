export default function GalleryHeader() {
  return (
    <section className="relative min-h-[500px] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-black to-gray-800"></div>
        
        {/* Kenyan Flag Inspired Geometric Shapes */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-bl from-red-600 to-red-800 transform skew-y-6 translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-2/5 h-full bg-gradient-to-tr from-green-600 to-green-800 transform -skew-y-6 -translate-x-10"></div>
          
          {/* Photo Frame Elements */}
          <div className="absolute top-20 left-20 w-16 h-12 border-2 border-white rounded opacity-40 transform rotate-12"></div>
          <div className="absolute top-40 right-32 w-20 h-16 border-2 border-red-400 rounded opacity-30 transform -rotate-6"></div>
          <div className="absolute bottom-32 left-1/3 w-12 h-16 border-2 border-green-400 rounded opacity-40 transform rotate-45"></div>
        </div>
        
        {/* Floating Camera/Gallery Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-1/4 w-6 h-6 opacity-30 animate-pulse">
            <div className="w-full h-full bg-white rounded border-2 border-gray-300"></div>
            <div className="absolute top-1 left-1 w-4 h-3 bg-gray-300 rounded-sm"></div>
          </div>
          <div className="absolute top-60 right-1/4 w-5 h-5 opacity-40 animate-pulse" style={{animationDelay: '1s'}}>
            <div className="w-full h-full bg-red-400 rounded-full"></div>
          </div>
          <div className="absolute bottom-32 right-20 w-4 h-4 opacity-35 animate-pulse" style={{animationDelay: '2s'}}>
            <div className="w-full h-full bg-green-400 rounded"></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 flex items-center min-h-[500px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-white text-sm font-medium">Visual Stories</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Media
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-white to-green-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore photos from our blood donation drives, community events, and the
            impact we're making across Kenya.
          </p>
          
          {/* Enhanced Kenyan Flag Separator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-red-600 rounded-full mb-1 animate-pulse"></div>
                <div className="w-1 h-8 bg-red-600/50 rounded-full"></div>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 via-white to-green-600 rounded-full"></div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-green-600 rounded-full mb-1 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-1 h-8 bg-green-600/50 rounded-full"></div>
              </div>
            </div>
          </div>
          

        </div>
      </div>
      
      {/* Bottom Geometric Shape */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-12 sm:h-16 lg:h-20">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGradient)" d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,64C672,75,768,85,864,80C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V96Z"></path>
        </svg>
      </div>
    </section>
  );
}