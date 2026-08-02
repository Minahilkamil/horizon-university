
"use client";

import { useState } from "react";
import { HelpCircle, Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "Admissions",
    questions: [
      {
        q: "What are the eligibility criteria for undergraduate programs?",
        a: "For most programs, you need at least 60% in Intermediate (FA/FSc/A-Levels). Engineering programs require 65% with Physics, Chemistry, and Math. Specific programs may have additional requirements.",
      },
      {
        q: "When do admissions open each year?",
        a: "Fall admissions (main intake) open in March/April, and Spring admissions open in October/November. Exact dates are published on our website and social media channels.",
      },
      {
        q: "Is there an entry test? How do I prepare?",
        a: "Yes, Horizon University conducts its own entrance test (HAT). We also accept SAT scores. Past papers and preparation guides are available on our admissions portal.",
      },
    ],
  },
  {
    category: "Academics",
    questions: [
      {
        q: "What is the medium of instruction?",
        a: "All programs are taught in English, with the exception of certain courses in the Department of Languages and Social Sciences.",
      },
      {
        q: "Can I transfer credits from another university?",
        a: "Yes, credit transfer is possible for courses with similar content and a minimum grade of 'C'. The transfer request must be submitted within the first semester.",
      },
      {
        q: "What is the attendance policy?",
        a: "Students must maintain 75% attendance in each course to be eligible for the final exams. Medical certificates are required for extended absences.",
      },
    ],
  },
  {
    category: "Financial Aid & Scholarships",
    questions: [
      {
        q: "Does Horizon offer merit scholarships?",
        a: "Yes, we offer generous merit-based scholarships covering 25% to 100% of tuition fees, awarded on the basis of entry test and intermediate results.",
      },
      {
        q: "Are there need-based scholarships available?",
        a: "Absolutely. We have a comprehensive financial aid program for students demonstrating financial need, including fee concessions and interest-free loans.",
      },
    ],
  },
  {
    category: "Campus Life",
    questions: [
      {
        q: "Is on-campus housing available?",
        a: "Yes, we have separate hostels for boys and girls with modern amenities, 24/7 security, and mess facilities. Rooms are allocated on a first-come, first-served basis.",
      },
      {
        q: "What sports and extracurricular activities are available?",
        a: "We have facilities for cricket, football, basketball, swimming, tennis, and more. There are also 30+ student societies covering tech, arts, debate, and community service.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (category: string, idx: number) => {
    const key = `${category}-${idx}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20">
            <HelpCircle className="w-3.5 h-3.5" /> FAQ
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            Find answers to the most common questions about admissions, academics, campus life, and more.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-16">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-2xl font-bold mb-8 text-gray-900">{section.category}</h2>
                <div className="space-y-4">
                  {section.questions.map((item, idx) => {
                    const key = `${section.category}-${idx}`;
                    const isOpen = openIndex === key;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-200"
                      >
                        <button
                          onClick={() => toggle(section.category, idx)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                        >
                          <span className="font-semibold text-sm text-gray-900">{item.q}</span>
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-blue-600 shrink-0" />
                          ) : (
                            <Plus className="w-5 h-5 text-gray-500 shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5 text-sm leading-relaxed text-gray-600">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-20 p-10 rounded-3xl text-center bg-gray-900">
            <h3 className="text-xl font-bold mb-3 text-white">Still have questions?</h3>
            <p className="text-sm mb-6 text-white/60">Our admissions team is here to help you with anything you need.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold text-white bg-blue-600">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
