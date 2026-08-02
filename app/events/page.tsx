
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { events as allEvents } from "@/data/events";

export default function EventsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20">
            <Calendar className="w-3.5 h-3.5" /> Events
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            What's Happening
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            From tech fests to cultural nights, there's always something exciting on campus.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8">
            {allEvents.map((event) => (
              <div key={event.id} className="grid md:grid-cols-[300px_1fr] gap-6 p-6 rounded-3xl bg-gray-50 border border-gray-200">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold px-3 py-1 rounded-full w-fit bg-blue-100 text-blue-600 inline-block mb-3">
                      {event.type}
                    </span>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{event.title}</h3>
                    <p className="text-sm leading-relaxed mb-4 text-gray-600">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" /> {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {event.location}
                      </div>
                    </div>
                  </div>
                  <Link href={`/events/${event.slug}`} className="mt-4 text-sm font-semibold inline-flex items-center gap-2 text-blue-600">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
