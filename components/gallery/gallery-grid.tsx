"use client";
import { useState } from "react";
import AlbumCard from "./album-card";
import { Album } from "@/data/gallery";
import { Search } from "lucide-react";

export default function GalleryGrid({ albums }: { albums: Album[] }) {
  const [filter, setFilter] = useState("");
  
  const filteredAlbums = filter 
    ? albums.filter(album => 
        album.title.toLowerCase().includes(filter.toLowerCase()) ||
        album.location?.toLowerCase().includes(filter.toLowerCase()) ||
        album.description.toLowerCase().includes(filter.toLowerCase())
      )
    : albums;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Photo Albums</h2>
        <div className="relative w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search albums by title or location..."
              className="pl-10 pr-4 py-2 border rounded-md w-full md:w-64"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            />
          </div>
        </div>
      </div>
      
      {filteredAlbums.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No albums found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlbums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}
