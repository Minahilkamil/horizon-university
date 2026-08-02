
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  User, Book, Award, ArrowLeft, Mail, Calendar, Clock
} from 'lucide-react';
import { faculty } from '@/data/faculty';

export default async function FacultyProfile({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = faculty.find(p => p.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/faculty" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 mb-8 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            Back to Faculty
          </Link>
        </div>
      </section>

      {/* Profile */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden border border-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200">
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-500">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Office Hours: {member.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">{member.name}</h1>
                <p className="text-lg text-blue-600 mb-2">{member.designation}, {member.department}</p>
                <p className="text-sm text-gray-500 mb-6">{member.qualification} • {member.experience} Experience</p>
                <p className="text-base leading-relaxed text-gray-700">{member.bio}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                  <Book className="w-5 h-5" />
                  Courses Taught
                </h2>
                <div className="flex flex-wrap gap-3">
                  {member.subjects.map((course, index) => (
                    <div key={index} className="px-4 py-2 rounded-xl text-sm bg-gray-100 text-gray-800 border border-gray-200">
                      {course}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                  <Award className="w-5 h-5" />
                  Achievements
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200">
                    <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Teaching at Horizon University since 2015</span>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200">
                    <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Mentoring 50+ undergraduate and graduate students</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
