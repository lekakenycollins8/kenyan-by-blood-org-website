import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PhotoGrid from "@/components/gallery/photo-grid";
import AlbumHeader from "@/components/gallery/album-header";
import { GALLERY_ALBUMS } from "@/data/gallery";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { albumId: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { albumId } = await Promise.resolve(params);
  const album = GALLERY_ALBUMS.find(album => album.id === albumId);
  
  if (!album) {
    return {
      title: "Album Not Found | Kenyan By Blood Foundation",
    };
  }
  
  return {
    title: `${album.title} | Gallery | Kenyan By Blood Foundation`,
    description: album.description,
    openGraph: {
      images: [album.coverImage],
    },
  };
}

export default async function AlbumPage({ params }: Props) {
  const { albumId } = await Promise.resolve(params);
  const album = GALLERY_ALBUMS.find(album => album.id === albumId);
  
  if (!album) {
    notFound();
  }
  
  return (
    <main className="min-h-screen">
      <Header />
      <AlbumHeader album={album} />
      <section className="container mx-auto px-4 py-12">
        <PhotoGrid photos={album.photos} />
      </section>
      <Footer />
    </main>
  );
}
