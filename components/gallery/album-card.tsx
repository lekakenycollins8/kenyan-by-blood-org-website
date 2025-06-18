"use client";
import Image from "next/image";
import Link from "next/link";
import { Album } from "@/data/gallery";
import { Calendar, MapPin, Camera } from "lucide-react";

export default function AlbumCard({ album }: { album: Album }) {
  return (
    <Link href={`/gallery/${album.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
        src={album.coverImage}
        alt={album.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="font-bold text-lg">{album.title}</h3>
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <p className="text-gray-600 text-sm mb-4">{album.description}</p>
        
        <div className="space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{album.date}</span>
        </div>
        
        {album.location && (
          <div className="flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{album.location}</span>
          </div>
        )}
        
        <div className="flex items-center text-sm text-gray-500">
          <Camera className="h-4 w-4 mr-2" />
          <span>{album.photos.length} photos</span>
        </div>
        </div>
      </div>
      
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
        <span className="text-sm font-medium text-[#DC241f]">View Album</span>
      </div>
      </div>
    </Link>
  );
}
