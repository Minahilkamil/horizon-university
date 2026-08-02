
import Link from "next/link";
import {
  GraduationCap, Users, Award, Globe, Target, BookOpen,
  Microscope, TrendingUp, ArrowRight, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const timeline = [
  { year: "1998", title: "Founded", desc: "Horizon University was established with a vision to deliver world-class education in Pakistan." },
  { year: "2005", title: "Research Expansion", desc: "Launched dedicated research centers and secured our first international research grants." },
  { year: "2010", title: "International Accreditation", desc: "Received accreditation from global bodies, opening doors for exchange programs." },
  { year: "2015", title: "Digital Campus", desc: "Completed full digital transformation — smart classrooms, online learning, and AI labs." },
  { year: "2020", title: "AI & Innovation Hub", desc: "Inaugurated the Center for Artificial Intelligence and Innovation with $10M in funding." },
  { year: "2026", title: "Ranked #1", desc: "Achieved top national ranking for the fifth consecutive year across all disciplines." },
];

const leadership = [
  { name: "Prof. Dr. Kamran Mirza", role: "Vice Chancellor", image: "https://i.pravatar.cc/150?img=60", desc: "25 years in academia, former advisor to the Ministry of Education." },
  { name: "Dr. Farah Siddiqui", role: "Pro-Vice Chancellor", image: "https://i.pravatar.cc/150?img=47", desc: "Leading academic quality and faculty development initiatives." },
  { name: "Dr. Omar Qureshi", role: "Dean of Engineering", image: "https://i.pravatar.cc/150?img=52", desc: "Pioneer in applied engineering research with 150+ published papers." },
  { name: "Dr. Nadia Hassan", role: "Dean of Sciences", image: "https://i.pravatar.cc/150?img=45", desc: "Internationally recognized researcher in biotechnology and genomics." },
];

const values = [
  { icon: <Target className="w-6 h-6" />, title: "Excellence", desc: "We hold ourselves and our students to the highest academic and professional standards." },
  { icon: <Users className="w-6 h-6" />, title: "Inclusivity", desc: "A welcoming community where every student, regardless of background, can thrive." },
  { icon: <Microscope className="w-6 h-6" />, title: "Innovation", desc: "Challenging conventional thinking and pushing the boundaries of knowledge." },
  { icon: <Globe className="w-6 h-6" />, title: "Global Outlook", desc: "Preparing graduates to lead and contribute in an interconnected world." },
  { icon: <BookOpen className="w-6 h-6" />, title: "Integrity", desc: "Academic honesty and ethical conduct are non-negotiable at every level." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Impact", desc: "Everything we do is driven by the goal of creating meaningful change in society." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20">
            <GraduationCap className="w-3.5 h-3.5" /> About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            More Than a University
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            For over 25 years, Horizon University has been more than an institution — it's a launchpad for ideas, careers, and the change-makers of tomorrow.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 border border-gray-200">
            {[
              { icon: <GraduationCap className="w-5 h-5" />, value: 25, suffix: "+", label: "Years of Excellence" },
              { icon: <Users className="w-5 h-5" />, value: 20000, suffix: "+", label: "Alumni Worldwide" },
              { icon: <Award className="w-5 h-5" />, value: 200, suffix: "+", label: "Faculty Members" },
              { icon: <TrendingUp className="w-5 h-5" />, value: 50, suffix: "+", label: "National Awards" },
            ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center bg-blue-100 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    {stat.value}{stat.suffix}
                  </div>
                  <p className="text-xs mt-1 text-gray-500">{stat.label}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4 inline-block bg-blue-100 text-blue-600 border border-blue-200">
                  Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Empowering Minds, <br />Building Futures
                </h2>
                <p className="text-base leading-relaxed text-gray-600">
                  Our mission is to provide accessible, high-quality education that equips graduates with the skills, values, and global perspective needed to lead meaningful lives and contribute positively to society.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Our Vision</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  To be recognized as South Asia's most innovative and impactful university by 2030, producing graduates who are globally competitive and locally committed.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-video">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop"
                alt="University campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 px-4 py-2 rounded-xl text-white text-sm font-semibold bg-gray-900/80">
                  Est. 1998 · Islamabad, Pakistan
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Six principles that guide every decision we make as an institution.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
                <div key={v.title} className="p-7 rounded-2xl h-full bg-white border border-gray-200">
                  <div className="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center bg-blue-100 text-blue-600">
                    {v.icon}
                  </div>
                  <h3 className="text-base font-bold mb-2 text-gray-900">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{v.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Our History</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">25 Years of Impact</h2>
            <p className="text-gray-600">A journey of growth, innovation, and academic excellence.</p>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-2 bottom-2 w-0.5 md:left-1/2 md:-translate-x-px bg-blue-500" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                  <div key={item.year} className={`flex gap-6 items-start md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Content */}
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 inline-block w-full">
                        <span className="text-xs font-bold text-blue-600">{item.year}</span>
                        <h3 className="text-base font-bold mt-1 text-gray-900">{item.title}</h3>
                        <p className="text-sm mt-1 text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold bg-blue-600">
                      {item.year.slice(2)}
                    </div>
                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-gray-600">Visionary leaders dedicated to academic excellence and student success.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
                <div key={person.name} className="p-6 rounded-2xl text-center bg-white border border-gray-200">
                  <img src={person.image} alt={person.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4" />
                  <h3 className="text-base font-bold text-gray-900">{person.name}</h3>
                  <p className="text-xs font-semibold mt-1 mb-2 text-blue-600">{person.role}</p>
                  <p className="text-xs leading-relaxed text-gray-600">{person.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-base text-white/60 mb-8 max-w-xl mx-auto">
            Join 20,000+ students and alumni who chose Horizon University to shape their futures.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="primary" size="lg">
              <Link href="/admissions">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white/20 hover:text-white hover:bg-white/10 active:bg-white/20 focus-visible:ring-white/50 focus-visible:ring-offset-0">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

