import Link from 'next/link';
import { 
  BookOpen, Calendar, CheckCircle, Award, User, 
  DollarSign, ArrowRight 
} from 'lucide-react';
import { Button } from "@/components/ui/Button";

export default function StudentPortal() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Student Portal</h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Access your courses, grades, schedule, and more all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <User className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Profile</h3>
              <p className="text-sm text-gray-600">View and edit your personal information.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Courses</h3>
              <p className="text-sm text-gray-600">View your enrolled courses and materials.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Grades</h3>
              <p className="text-sm text-gray-600">Check your academic performance.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Schedule</h3>
              <p className="text-sm text-gray-600">View your timetable and class schedule.</p>
            </div>
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg">
              Login to Portal
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
