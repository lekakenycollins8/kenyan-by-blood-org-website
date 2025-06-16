"use client";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_ALBUMS } from "@/data/gallery";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GalleryPreview() {
  // Get the latest 3 albums for the preview
  const previewAlbums = GALLERY_ALBUMS.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Photo Gallery</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore photos from our blood donation drives and community events across Kenya.
            </p>
          </div>
          <Link href="/gallery" className="mt-4 md:mt-0">
            <Button 
              variant="outline" 
              className="border-[#DC241f] text-[#DC241f] hover:bg-[#DC241f] hover:text-white"
            >
              View All Albums
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewAlbums.map((album) => (
            <Link key={album.id} href={`/gallery/${album.id}`} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="font-bold text-lg">{album.title}</h3>
                    <p className="text-sm text-white/80">{album.photos.length} photos</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
