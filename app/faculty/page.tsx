
import { Users, Award, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { faculty } from "@/data/faculty";
import { Card } from "@/components/ui/Card";

const stats = [
  { label: "Faculty Members", value: "250+" },
  { label: "PhDs from Top 100", value: "80%" },
  { label: "Industry Experience", value: "45%" },
  { label: "Research Publications", value: "1500+" },
];

export default function FacultyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20">
            <Users className="w-3.5 h-3.5" /> Our People
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            Leaders in Academia & Industry
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            Meet the distinguished faculty who are shaping minds, driving research, and transforming industries.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Meet Our Faculty</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Distinguished Academicians</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our faculty brings a perfect blend of academic excellence and real-world industry experience.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member) => (
              <Link key={member.id} href={`/faculty/${member.slug}`} className="rounded-3xl overflow-hidden bg-white border border-gray-200 hover:border-blue-300 transition-all">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-sm text-blue-600 mb-3">{member.designation}, {member.department}</p>
                  <p className="text-xs font-medium mb-4 text-gray-500">{member.subjects.join(", ")}</p>
                  <p className="text-sm leading-relaxed text-gray-600">{member.bio}</p>
                  <div className="mt-4 text-sm font-semibold inline-flex items-center gap-1 text-blue-600">
                    View Profile <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Faculty */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Teaching with Purpose</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-100 text-blue-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold mb-3 text-gray-900">Accessible Mentorship</h3>
              <p className="text-sm leading-relaxed text-gray-600">Open door policy ensures students have direct access to professors for guidance and research opportunities.</p>
            </Card>
            <Card className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-100 text-blue-600">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold mb-3 text-gray-900">Research Excellence</h3>
              <p className="text-sm leading-relaxed text-gray-600">Faculty actively publish in top journals and involve students in cutting-edge research projects.</p>
            </Card>
            <Card className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-100 text-blue-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold mb-3 text-gray-900">Industry Connections</h3>
              <p className="text-sm leading-relaxed text-gray-600">Strong industry partnerships ensure curriculum stays relevant and students get real-world exposure.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
