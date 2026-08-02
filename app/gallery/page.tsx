
import { Image, ArrowRight } from "lucide-react";
import Link from "next/link";

const galleryImages = [
  {
    id: 1,
    title: "Main Campus",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Library Interior",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Computer Science Lab",
    category: "Labs",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Sports Complex",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Student Center",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Graduation Ceremony",
    category: "Events",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "TechFest 2024",
    category: "Events",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf87bb5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Engineering Lab",
    category: "Labs",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Hostel Common Room",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
  },
];

export default function GalleryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20">
            <Image className="w-3.5 h-3.5" /> Our Campus
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            Photo Gallery
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            Explore our campus through photos of our facilities, events, and student life.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className="group rounded-3xl overflow-hidden border border-gray-200 bg-gray-50"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img.image}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-2 inline-block">
                    {img.category}
                  </span>
                  <h3 className="text-base font-semibold text-gray-900">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See It for Yourself
          </h2>
          <p className="text-base text-white/60 mb-8">
            Schedule a campus tour and experience Horizon University in person.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold text-white bg-blue-600">
            Schedule a Tour
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
