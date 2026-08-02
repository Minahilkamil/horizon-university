import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold bg-blue-600">
                H
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight leading-none text-white">
                  Horizon
                </span>
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase leading-none mt-1 text-gray-400">
                  University
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Building the future, one student at a time. Horizon University is committed to excellence in education, research, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Programs", "Admissions", "Faculty", "Contact", "Departments"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {["Student Portal", "Library", "Careers", "Scholarships", "International", "Gallery"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Info</h4>
            <ul className="space-y-3">
              {["News", "Events", "Blog", "FAQ", "Testimonials"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Privacy Policy"
                        ? "/privacy-policy"
                        : item === "Terms of Service"
                        ? "/terms"
                        : "/sitemap"
                    }
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-500">
            © 2026 Horizon University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
