
import { Building, ArrowRight } from "lucide-react";
import Link from "next/link";
import { departments } from "@/data/departments";
import { Button } from "@/components/ui/Button";

export default function DepartmentsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20">
            <Building className="w-3.5 h-3.5" /> Our Departments
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            Academic Departments
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            Explore our diverse academic departments, each dedicated to excellence in teaching and research.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept) => (
              <Link
                href={`/departments/${dept.slug}`}
                key={dept.id}
                className="group rounded-3xl p-8 bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all"
              >
                <div className="text-5xl mb-4">{dept.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{dept.name}</h3>
                <p className="text-base leading-relaxed mb-4 text-gray-600">
                  {dept.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {dept.programs.slice(0, 2).map((program, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-600"
                    >
                      {program}
                    </span>
                  ))}
                  {dept.programs.length > 2 && (
                    <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-gray-200 text-gray-600">
                      +{dept.programs.length - 2} more
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Find Your Path
          </h2>
          <p className="text-base text-white/60 mb-8">
            Choose the department that aligns with your passions and career goals.
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
