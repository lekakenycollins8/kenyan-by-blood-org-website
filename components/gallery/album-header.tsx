"use client";
import Image from "next/image";
import Link from "next/link";
import { Album } from "@/data/gallery";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";

export default function AlbumHeader({ album }: { album: Album }) {
  return (
    <section className="relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 h-96">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
        <div className="relative w-full h-full">
          <Image
            src={album.coverImage}
            alt={album.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 pt-32 pb-24">
        <Link 
          href="/gallery" 
          className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to Gallery</span>
        </Link>
        
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {album.title}
          </h1>
          
          <p className="text-white/80 mb-6">
            {album.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center text-white/80">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{album.date}</span>
            </div>
            
            {album.location && (
              <div className="flex items-center text-white/80">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{album.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
