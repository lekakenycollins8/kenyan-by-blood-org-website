import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import GalleryHeader from "@/components/gallery/gallery-header";
import GalleryGrid from "@/components/gallery/gallery-grid";
import { GALLERY_ALBUMS } from "@/data/gallery";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Photo Gallery | Kenyan By Blood Foundation",
  description: "View photos from our blood donation drives and events across Kenya. See the impact of our work and the community coming together to save lives.",
  keywords: ["blood donation photos", "Kenya blood drives", "Kenyan By Blood gallery", "donation events", "blood donation awareness"],
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <GalleryHeader />
      <section className="container mx-auto px-4 py-12">
        <GalleryGrid albums={GALLERY_ALBUMS} />
      </section>
      <Footer />
    </main>
  );
}
