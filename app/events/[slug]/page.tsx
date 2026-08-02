import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, Calendar, Clock, MapPin, ArrowRight 
} from 'lucide-react';
import { events as allEvents } from '@/data/events';

export default function EventDetail({ params }: { params: { slug: string } }) {
  const event = allEvents.find(p => p.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 mb-8 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-blue-500/10 text-blue-300 border border-blue-400/20">
            {event.type}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{event.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {event.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {event.time}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {event.location}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full rounded-3xl aspect-video object-cover" 
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-gray-700 text-base leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: event.content }} />
          </div>
          
          <div className="mt-10">
            <button className="px-8 py-4 rounded-2xl text-sm font-semibold inline-flex items-center gap-2 text-white bg-blue-600">
              Register Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
