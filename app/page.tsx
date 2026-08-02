import Link from "next/link";
import {
  GraduationCap,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Star,
  CheckCircle2,
} from "lucide-react";

const programs = [
  {
    title: "Computer Science",
    desc: "AI, Machine Learning, Data Science, and Software Engineering for the digital age.",
    icon: <BookOpen className="w-6 h-6" />,
    link: "/programs",
  },
  {
    title: "Business Administration",
    desc: "Leadership, finance, marketing, and entrepreneurship for future CEOs.",
    icon: <TrendingUp className="w-6 h-6" />,
    link: "/programs",
  },
  {
    title: "Engineering",
    desc: "Mechanical, Electrical, Civil, and Chemical Engineering with hands-on labs.",
    icon: <Award className="w-6 h-6" />,
    link: "/programs",
  },
  {
    title: "Life Sciences",
    desc: "Biology, Biotechnology, and pre-med programs for healthcare innovators.",
    icon: <GraduationCap className="w-6 h-6" />,
    link: "/programs",
  },
];

const testimonials = [
  {
    name: "Sarah Khan",
    role: "Software Engineer, Google",
    text: "Horizon University gave me the skills and confidence to land my dream job at Google. The faculty is amazing!",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Ahmed Qureshi",
    role: "Founder, TechStart Inc.",
    text: "The entrepreneurship program at Horizon changed my life. I went from student to CEO in 3 years!",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Fatima Ali",
    role: "Research Scientist, MIT",
    text: "The research facilities and mentorship at Horizon are world-class. I'm now doing PhD at MIT!",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

const stats = [
  { icon: <GraduationCap className="w-5 h-5" />, value: 25, suffix: "+", label: "Years of Excellence" },
  { icon: <Users className="w-5 h-5" />, value: 20000, suffix: "+", label: "Alumni Worldwide" },
  { icon: <Award className="w-5 h-5" />, value: 200, suffix: "+", label: "Faculty Members" },
  { icon: <TrendingUp className="w-5 h-5" />, value: 95, suffix: "%", label: "Placement Rate" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2089&auto=format&fit=crop"
            alt="University Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-950/70 z-10" />
        </div>

        <div className="relative z-20 pt-24 pb-40">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Admissions Open 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-4xl mx-auto">
              Build Your Future
              <br />
              <span className="text-white">At Horizon</span>
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              For over 25 years, turning curious students into industry leaders with hands-on learning, world-class research, and a global perspective.
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/programs" className="px-10 py-4 rounded-xl text-sm font-semibold bg-blue-600 text-white inline-flex items-center gap-2">
                Explore Programs
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/admissions" className="px-10 py-4 rounded-xl text-sm font-semibold text-white inline-flex items-center gap-2 border border-white/30">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-50 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border border-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1 text-gray-900">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4 inline-block bg-blue-100 text-blue-600 border border-blue-200">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                A Legacy of Excellence in Education
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Horizon University has been a leader in higher education for over 25 years. We combine world-class faculty, state-of-the-art facilities, and a commitment to innovation to prepare our students for success in the global marketplace.
              </p>
              <ul className="space-y-4">
                {[
                  "Accredited by top international bodies",
                  "100+ student clubs and organizations",
                  "Strong industry partnerships and internships",
                  "Modern campus with smart classrooms and labs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-900">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/about" className="px-8 py-3 rounded-xl text-sm font-semibold bg-blue-600 text-white inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                alt="University Campus"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Our Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Discover Your Path</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of undergraduate and graduate programs designed to help you achieve your goals.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {programs.map((program) => (
              <div key={program.title} className="bg-gray-50 p-8 h-full rounded-2xl border border-gray-200">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-600 text-white">
                  <div>{program.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {program.title}
                </h3>
                <p className="text-sm mb-6 text-gray-600">
                  {program.desc}
                </p>
                <Link href={program.link} className="text-sm font-semibold inline-flex items-center gap-2 text-blue-600">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs" className="px-10 py-4 rounded-xl text-sm font-semibold bg-blue-600 text-white inline-flex items-center gap-2">
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it — hear from our students and alumni about their Horizon experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 h-full rounded-2xl border border-gray-200">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-base mb-6 leading-relaxed text-gray-900">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Applications are now open for Fall 2026. Join thousands of students who have chosen Horizon University to build their future.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/admissions" className="px-10 py-4 rounded-xl text-sm font-semibold bg-blue-600 text-white inline-flex items-center gap-2">
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-10 py-4 rounded-xl text-sm font-semibold text-white inline-flex items-center gap-2 border border-white/30">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
