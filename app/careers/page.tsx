import Link from 'next/link';
import { 
  Briefcase, GraduationCap, Award, Users, Calendar, MapPin 
} from 'lucide-react';

export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Career Services & Placements</h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Helping students secure internships and full-time positions at top companies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl text-center bg-gray-50 border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-600">95%</div>
              <p className="text-sm font-medium text-gray-600">Placement Rate</p>
            </div>
            <div className="p-8 rounded-3xl text-center bg-gray-50 border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-600">150+</div>
              <p className="text-sm font-medium text-gray-600">Partner Companies</p>
            </div>
            <div className="p-8 rounded-3xl text-center bg-gray-50 border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-600">1000+</div>
              <p className="text-sm font-medium text-gray-600">Students Placed Annually</p>
            </div>
            <div className="p-8 rounded-3xl text-center bg-gray-50 border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-600">PKR 12L</div>
              <p className="text-sm font-medium text-gray-600">Average Salary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
              <div className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Resume Building</h3>
              <p className="text-sm text-gray-600">Workshops and one-on-one sessions to perfect your CV.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
              <div className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Interview Prep</h3>
              <p className="text-sm text-gray-600">Mock interviews and feedback sessions.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
              <div className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Career Counseling</h3>
              <p className="text-sm text-gray-600">Personal guidance to choose the right path.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900">Top Recruiters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['Google', 'Microsoft', 'Amazon', 'S&P Global'].map((company, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-gray-200">
                <p className="text-xl font-bold text-gray-900">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
