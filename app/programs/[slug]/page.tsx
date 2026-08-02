
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, BookOpen, Clock, Award, GraduationCap, ArrowRight, DollarSign, CheckCircle,
} from "lucide-react";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/Button";

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  console.log("Params slug:", slug);
  console.log("Programs:", programs);
  const program = programs.find((p) => p.slug === slug);
  console.log("Found program:", program);

  if (!program) {
    notFound();
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 mb-8 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{program.degree}</h1>
          <p className="text-lg text-white/60 max-w-2xl">{program.description}</p>
        </div>
        <div className="absolute inset-0 opacity-30">
          <img src={program.image} alt={program.degree} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Program Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <img
                  src={program.image}
                  alt={program.degree}
                  className="rounded-3xl w-full aspect-video object-cover mb-8"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Curriculum</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {program.courses.map((course, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold mb-6 text-gray-900">Program Details</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600 flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Duration</p>
                      <p className="text-sm font-semibold text-gray-900">{program.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600 flex-shrink-0">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Tuition Fee</p>
                      <p className="text-sm font-semibold text-gray-900">{program.fee}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600 flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Eligibility</p>
                      <p className="text-sm font-semibold text-gray-900">{program.eligibility}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild variant="primary" size="lg" className="w-full">
                    <Link href="/admissions">
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
