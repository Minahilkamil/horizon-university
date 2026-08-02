
import { FlaskConical, Award, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const stats = [
  { label: "Research Publications", value: "1500+" },
  { label: "Active Research Grants", value: "45" },
  { label: "Research Labs", value: "22" },
  { label: "Patents Filed", value: "85" },
];

const labs = [
  {
    name: "AI & Machine Learning Lab",
    focus: "Deep learning, computer vision, NLP, and AI for social good.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sustainable Energy Research Center",
    focus: "Solar energy, wind power, smart grids, and energy storage solutions.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Biosciences & Biotechnology Lab",
    focus: "Molecular biology, genetics, cancer research, and bioinformatics.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop",
  },
];

const researchAreas = [
  {
    title: "Artificial Intelligence & Data Science",
    description: "Machine learning, deep learning, natural language processing, and big data analytics with applications in healthcare, agriculture, and finance.",
  },
  {
    title: "Renewable & Sustainable Energy",
    description: "Developing next-generation solar, wind, and energy storage technologies to address Pakistan's energy challenges.",
  },
  {
    title: "Smart Cities & IoT",
    description: "Urban informatics, intelligent transportation, waste management, and IoT for sustainable urban development.",
  },
  {
    title: "Healthcare & Life Sciences",
    description: "Medical imaging, drug discovery, computational biology, and public health research.",
  },
];

export default function ResearchPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20">
            <FlaskConical className="w-3.5 h-3.5" /> Research
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            Innovation & Discovery
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            At Horizon, research isn't just an activity—it's a culture of curiosity, collaboration, and impact.
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

      {/* Research Areas */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Focus Areas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Research</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our research addresses real-world challenges with interdisciplinary collaboration.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area, i) => (
              <Card key={area.title} className="p-8 rounded-3xl bg-white border border-gray-200">
                <h3 className="text-base font-bold mb-3 text-gray-900">{area.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Labs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Our Facilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Labs & Centers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">State-of-the-art facilities equipped with cutting-edge technology.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {labs.map((lab, i) => (
              <Card key={lab.name} className="rounded-3xl overflow-hidden bg-gray-50 border border-gray-200">
                <div className="aspect-video overflow-hidden">
                  <img src={lab.image} alt={lab.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-7">
                  <h3 className="text-base font-bold mb-2 text-gray-900">{lab.name}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{lab.focus}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for Students */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Involved in Research
          </h2>
          <p className="text-base text-white/60 mb-8">
            Undergraduate and graduate students can participate in cutting-edge research projects from their first year.
          </p>
          <Button asChild variant="primary" size="lg">
            <Link href="/contact">
              Explore Opportunities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
