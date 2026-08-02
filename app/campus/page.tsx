
import Link from "next/link";
import {
  Dumbbell, Laptop, FlaskConical, Home, Coffee, Wifi,
  Users, Trophy, Music, Camera, ArrowRight, MapPin, Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const facilities = [
  {
    icon: <Laptop className="w-7 h-7" />,
    name: "Computer Labs",
    desc: "12 state-of-the-art labs with latest hardware, GPU clusters for AI workloads, and 24/7 access for enrolled students.",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: <Dumbbell className="w-7 h-7" />,
    name: "Sports Complex",
    desc: "Olympic-standard gym, indoor courts, swimming pool, cricket ground, and dedicated coaching staff.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: <FlaskConical className="w-7 h-7" />,
    name: "Research Labs",
    desc: "Advanced labs for nanotech, biotechnology, quantum computing, and AI — open to undergraduate researchers.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: <Home className="w-7 h-7" />,
    name: "Student Hostels",
    desc: "Modern air-conditioned rooms with high-speed WiFi, laundry, common rooms, and 24/7 security.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: <Coffee className="w-7 h-7" />,
    name: "Student Center",
    desc: "Multi-cuisine food court, café, retail shops, student services hub, and collaborative workspaces.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: <Wifi className="w-7 h-7" />,
    name: "Smart Campus",
    desc: "100% campus WiFi coverage, smart classrooms with interactive displays, and a digital learning management system.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop",
  },
];

const societies = [
  { icon: <Laptop className="w-5 h-5" />, name: "Robotics Club", members: 120 },
  { icon: <Users className="w-5 h-5" />, name: "Debate Society", members: 85 },
  { icon: <Music className="w-5 h-5" />, name: "Music Society", members: 95 },
  { icon: <Camera className="w-5 h-5" />, name: "Photography Club", members: 70 },
  { icon: <Trophy className="w-5 h-5" />, name: "Entrepreneurship Cell", members: 200 },
  { icon: <FlaskConical className="w-5 h-5" />, name: "Science Society", members: 110 },
  { icon: <Calendar className="w-5 h-5" />, name: "Drama Society", members: 65 },
  { icon: <Users className="w-5 h-5" />, name: "Community Service", members: 300 },
];

const events = [
  {
    title: "TechFest",
    type: "Annual",
    desc: "Pakistan's largest student-run tech festival with competitions, exhibitions, and industry talks.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Cultural Week",
    type: "Annual",
    desc: "A celebration of our diverse community with music, dance, art, and international cuisine.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Sports Gala",
    type: "Bi-annual",
    desc: "Inter-department and inter-university sports competitions across 15 disciplines.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop",
  },
];

const photos = [
  "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571260898932-7d4f6f832b7d?q=80&w=500&auto=format&fit=crop",
];

export default function CampusPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20">
            <MapPin className="w-3.5 h-3.5" /> Campus Life
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            Where Life Happens
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            Beyond lectures and exams, Horizon University is a place to grow, explore, and discover who you are.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Facilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">World-Class Infrastructure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Every facility on campus is designed to support learning, wellness, and community.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <Card key={f.name} className="rounded-2xl overflow-hidden h-full flex flex-col bg-gray-50 border border-gray-200">
                <div className="aspect-video overflow-hidden">
                  <img src={f.image} alt={f.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-100 text-blue-600">
                    {f.icon}
                  </div>
                  <h3 className="text-base font-bold mb-2 text-gray-900">{f.name}</h3>
                  <p className="text-sm leading-relaxed flex-1 text-gray-600">{f.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Societies */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Student Life</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">30+ Active Societies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find your tribe — every interest, skill, and passion has a home at Horizon.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {societies.map((s, i) => (
              <Card key={s.name} className="p-5 rounded-2xl text-center bg-white border border-gray-200">
                <div className="w-11 h-11 rounded-xl mx-auto mb-3 flex items-center justify-center bg-blue-100 text-blue-600">
                  {s.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900">{s.name}</h3>
                <p className="text-xs mt-1 text-gray-500">{s.members} members</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Events */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Events</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Always Something On</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A vibrant events calendar keeps campus buzzing all year round.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((ev, i) => (
              <Card key={ev.title} className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full w-fit mb-3 bg-blue-100 text-blue-600">
                    {ev.type}
                  </span>
                  <h3 className="text-base font-bold mb-2 text-gray-900">{ev.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 text-gray-600">{ev.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="primary" size="lg">
              <Link href="/events">
                View All Events
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Life in Pictures</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A snapshot of the vibrant, diverse, and dynamic campus experience.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((src, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
                <img src={src} alt={`Campus life ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience Campus For Yourself
          </h2>
          <p className="text-base text-white/60 mb-8">
            Book a campus tour or attend an open day and see why students love life at Horizon.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="primary" size="lg">
              <Link href="/contact">
                Book a Tour
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white/20 hover:text-white hover:bg-white/10 active:bg-white/20 focus-visible:ring-white/50 focus-visible:ring-offset-0">
              <Link href="/admissions">
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
