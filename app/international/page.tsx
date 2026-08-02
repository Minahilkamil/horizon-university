import Link from 'next/link';
import { 
  Globe, Users, Home, ArrowRight, BookOpen, Calendar, 
  MapPin, Phone, Mail 
} from 'lucide-react';

export default function InternationalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">International Students</h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Welcome to Horizon University! We are excited to have students from all over the world.
            </p>
          </div>
        </div>
      </section>

      {/* Why Horizon */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900">Why Study at Horizon?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Diverse Community</h3>
              <p className="text-sm text-gray-600">Students from 50+ countries.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Top Programs</h3>
              <p className="text-sm text-gray-600">Ranked #1 in CS and Engineering.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <Home className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">On-Campus Housing</h3>
              <p className="text-sm text-gray-600">Safe and comfortable dorms available.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Student Support</h3>
              <p className="text-sm text-gray-600">Dedicated international student office.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Visa Information</h2>
          <div className="p-8 rounded-3xl bg-white border border-gray-200">
            <ul className="space-y-4">
              <li className="text-base text-gray-700">
                1. Acceptance letter from Horizon University
              </li>
              <li className="text-base text-gray-700">
                2. Proof of sufficient funds
              </li>
              <li className="text-base text-gray-700">
                3. Valid passport
              </li>
              <li className="text-base text-gray-700">
                4. Student visa application form
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-6">
              Our international office will assist you with the visa process step by step.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
          <p className="text-base text-gray-600 mb-8">
            For any questions about admissions, scholarships, or visa, please contact our international office.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="px-10 py-4 rounded-2xl text-sm font-semibold inline-flex items-center gap-2 text-white bg-blue-600">
              Contact International Office
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
