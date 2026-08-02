import Link from 'next/link';
import { 
  Award, CheckCircle, DollarSign, GraduationCap, ArrowRight 
} from 'lucide-react';
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const scholarships = [
  {
    title: 'Merit Scholarship',
    amount: '25% to 100% Tuition Fee Waiver',
    criteria: 'Based on intermediate marks and entry test performance',
    deadline: 'June 30, 2026',
  },
  {
    title: 'Need-Based Financial Aid',
    amount: 'Partial to full fee support',
    criteria: 'Based on family income and academic standing',
    deadline: 'Rolling Admissions',
  },
  {
    title: 'Sports Scholarship',
    amount: '50% to 100% Tuition Fee Waiver',
    criteria: 'Outstanding performance in sports at national or international level',
    deadline: 'June 15, 2026',
  },
  {
    title: 'Alumni Scholarship',
    amount: '25% Tuition Fee Waiver',
    criteria: 'Children of Horizon University alumni',
    deadline: 'Rolling Admissions',
  },
];

export default function ScholarshipsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Scholarships & Financial Aid</h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              We believe in making quality education accessible to all talented students, regardless of their financial situation.
            </p>
          </div>
        </div>
      </section>

      {/* Available Scholarships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900">Available Scholarships</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {scholarships.map((scholarship, idx) => (
              <Card key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-100 text-blue-600 flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{scholarship.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{scholarship.criteria}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 mb-2">
                      <DollarSign className="w-4 h-4" />
                      {scholarship.amount}
                    </div>
                    <p className="text-xs text-gray-500">Deadline: {scholarship.deadline}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">How to Apply</h2>
          <div className="space-y-6">
            {['1. Fill out the scholarship application form', '2. Submit required documents', '3. Appear for interview (if shortlisted)', '4. Receive decision'].map((step, idx) => (
              <Card key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-blue-600 flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-base text-gray-700">{step}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="primary" size="lg">
              <Link href="/contact">
                Contact Admissions Office
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
