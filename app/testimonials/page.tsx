
import { Quote, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Software Engineer at Google",
    year: "Class of 2020",
    quote: "My time at Horizon gave me the technical foundation and the confidence to pursue my dreams. The professors genuinely care about your success.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Ahmed Qureshi",
    role: "Founder, TechStart Inc.",
    year: "Class of 2017",
    quote: "From my first year, I had access to labs, mentors, and a community that believed in my idea. That's the difference at Horizon.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sara Ahmed",
    role: "Graduate Student at MIT",
    year: "Class of 2023",
    quote: "The research opportunities I got as an undergraduate set me apart in grad school. I was doing cutting-edge work from year two.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
];

export default function TestimonialsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20">
            <Users className="w-3.5 h-3.5" /> Our Alumni
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            Success Stories
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            Hear from our graduates about how Horizon shaped their journeys and careers.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
                <Quote className="w-8 h-8 mb-6 text-blue-600" />
                <p className="text-base leading-relaxed mb-6 text-gray-600">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role} • {t.year}</div>
                  </div>
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
            Be Part of the Story
          </h2>
          <p className="text-base text-white/60 mb-8">
            Join a community of innovators, leaders, and change-makers.
          </p>
          <Button asChild variant="primary" size="lg">
            <Link href="/admissions">
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
