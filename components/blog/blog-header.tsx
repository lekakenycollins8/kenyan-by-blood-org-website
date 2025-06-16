import { BRAND_COLORS } from "@/lib/constants";

export default function BlogHeader() {
  return (
    <section className="relative h-[400px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-black/50 z-10"
          aria-hidden="true"
        ></div>
        <img 
          src="/images/blog-hero.svg" 
          alt="Blood donation event" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-white mb-8">
            Stories, updates, and insights from our blood donation community across Kenya.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[#DC241f]"></span>
            <span className="inline-block w-12 h-1 bg-white"></span>
            <span className="inline-block w-3 h-3 rounded-full bg-[#006600]"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
