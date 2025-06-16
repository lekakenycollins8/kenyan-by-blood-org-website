import { BRAND_COLORS } from "@/lib/constants";

export default function GalleryHeader() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#006600]/90 to-[#DC241f]/90">
      {/* Kenyan pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15C26 9 22 5 18 5c-4 0-7 3-7 8 0 6 8 10 19 20 11-10 19-14 19-20 0-5-3-8-7-8-4 0-8 4-12 10z' fill='%23DC241f' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E\")",
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Media Gallery
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Explore photos from our blood donation drives, community events, and the
            impact we're making across Kenya.
          </p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
