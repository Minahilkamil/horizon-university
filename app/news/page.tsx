
import Link from "next/link";
import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import { newsItems } from "@/data/news";

export default function NewsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20">
            <Newspaper className="w-3.5 h-3.5" /> News & Updates
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            Latest from Horizon
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            Stay updated with the latest news, achievements, and announcements from the university.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Link href={`/news/${item.slug}`} key={item.id} className="group">
                <div className="rounded-3xl overflow-hidden h-full bg-gray-50 border border-gray-200">
                  <div className="aspect-video overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {item.date}
                      </span>
                    </div>
                    <h3 className="text-base font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-sm leading-relaxed mb-4 text-gray-600">{item.excerpt}</p>
                    <span className="text-sm font-semibold inline-flex items-center gap-2 text-blue-600">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
