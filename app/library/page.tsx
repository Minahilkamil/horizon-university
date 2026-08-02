import Link from 'next/link';
import { 
  BookOpen, Clock, Search, Users, Wifi, BookCheck 
} from 'lucide-react';
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function LibraryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Horizon University Library</h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Access to thousands of books, journals, and digital resources for your research and studies.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">100,000+ Books</h3>
              <p className="text-sm text-gray-600">Physical and digital books available.</p>
            </Card>
            <Card className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <Wifi className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Digital Archives</h3>
              <p className="text-sm text-gray-600">Online journals and research databases.</p>
            </Card>
            <Card className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Study Spaces</h3>
              <p className="text-sm text-gray-600">Quiet zones and group study rooms.</p>
            </Card>
            <Card className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Long Hours</h3>
              <p className="text-sm text-gray-600">Open 7 days a week from 8AM to 10PM.</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Services</h2>
              <ul className="space-y-4">
                <Card className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200">
                  <BookCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Book borrowing and returns</span>
                </Card>
                <Card className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200">
                  <BookCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Inter-library loans</span>
                </Card>
                <Card className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200">
                  <BookCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Research assistance</span>
                </Card>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Search the Catalog</h2>
              <Card className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
                <div className="flex gap-3">
                  <input 
                    type="text" 
                    placeholder="Search for books, journals, authors..." 
                    className="flex-1 px-5 py-3 rounded-xl text-sm outline-none bg-white border border-gray-300 text-gray-900 placeholder:text-gray-500" 
                  />
                  <Button variant="primary">
                    <Search className="w-4 h-4" /> Search
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
