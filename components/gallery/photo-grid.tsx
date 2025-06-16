"use client";
import { useState } from "react";
import Image from "next/image";
import { Photo } from "@/data/gallery";
import PhotoModal from "./photo-modal";
import { Calendar, MapPin, Tag } from "lucide-react";

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="relative h-56 w-full">
              <Image
                src={photo.imageUrl}
                alt={photo.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-lg mb-2">{photo.title}</h3>
              {photo.description && (
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{photo.description}</p>
              )}
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{photo.date}</span>
                </div>
                
                {photo.location && (
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{photo.location}</span>
                  </div>
                )}
                
                {photo.tags && photo.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {photo.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedPhoto && (
        <PhotoModal 
          photo={selectedPhoto} 
          onClose={() => setSelectedPhoto(null)} 
        />
      )}
    </>
  );
}
