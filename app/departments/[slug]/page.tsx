
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Building,
  Users,
  FlaskConical,
  Trophy,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { departments } from "@/data/departments";
import { Card } from "@/components/ui/Card";

export default async function DepartmentDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dept = departments.find((d) => d.slug === slug);

  if (!dept) {
    notFound();
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 mb-8 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Departments
          </Link>
          <span className="text-5xl mb-4 block">{dept.icon}</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            {dept.name}
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed">
            {dept.description}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Programs */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                  <BookOpen className="w-7 h-7 text-blue-600" />
                  Programs Offered
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {dept.programs.map((program, i) => (
                    <Card
                      key={i}
                      className="p-6 rounded-2xl bg-gray-50 border border-gray-200"
                    >
                      <div className="font-semibold text-base text-gray-900">
                        {program}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Labs */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                  <FlaskConical className="w-7 h-7 text-blue-600" />
                  Labs & Facilities
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {dept.labs.map((lab, i) => (
                    <Card
                      key={i}
                      className="p-6 rounded-2xl bg-gray-50 border border-gray-200"
                    >
                      <div className="font-semibold text-base text-gray-900">
                        {lab}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                  <Trophy className="w-7 h-7 text-blue-600" />
                  Achievements
                </h2>
                <ul className="space-y-4">
                  {dept.achievements.map((achievement, i) => (
                    <Card
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200"
                    >
                      <div className="mt-1 text-blue-600 font-bold">•</div>
                      <div className="text-base text-gray-600">{achievement}</div>
                    </Card>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Stats Card */}
              <Card className="p-8 rounded-3xl bg-gray-50 border border-gray-200 sticky top-32">
                <h3 className="text-lg font-bold mb-6 text-gray-900">
                  Department Stats
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Users className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        {dept.facultyCount}
                      </div>
                      <div className="text-sm text-gray-500">Faculty Members</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        {dept.programs.length}
                      </div>
                      <div className="text-sm text-gray-500">Programs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <FlaskConical className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        {dept.labs.length}
                      </div>
                      <div className="text-sm text-gray-500">Labs</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/admissions"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold text-white bg-blue-600"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
