import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full py-4 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold bg-blue-600">
            H
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight leading-none text-gray-900">
              Horizon
            </span>
            <span className="text-[10px] font-medium tracking-[0.15em] uppercase leading-none mt-1 text-gray-500">
              University
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/programs", label: "Programs" },
            { href: "/admissions", label: "Admissions" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm xl:text-base font-medium text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/admissions"
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600"
          >
            Apply Now
          </Link>
        </div>

        <div className="lg:hidden text-gray-900">Menu</div>
      </div>
    </header>
  );
}
