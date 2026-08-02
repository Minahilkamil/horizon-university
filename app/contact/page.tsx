
"use client";

import { useState } from "react";
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle2,
  Globe, MessageSquare, Users, Home,
} from "lucide-react";
import { Card } from "@/components/ui/Card";

const offices = [
  {
    title: "Admissions Office",
    email: "admissions@horizon.edu.pk",
    phone: "+92 42 111 123 456",
    hours: "Mon - Fri, 9:00 AM - 5:00 PM",
  },
  {
    title: "Student Affairs",
    email: "student.affairs@horizon.edu.pk",
    phone: "+92 42 111 123 457",
    hours: "Mon - Sat, 8:00 AM - 8:00 PM",
  },
  {
    title: "Research & Sponsorships",
    email: "research@horizon.edu.pk",
    phone: "+92 42 111 123 458",
    hours: "Mon - Fri, 10:00 AM - 6:00 PM",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20">
            <Mail className="w-3.5 h-3.5" /> Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            Let's Start a Conversation
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            Whether you're a prospective student, parent, or industry partner — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h2>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-blue-100 text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1 text-gray-900">Address</h3>
                    <p className="text-sm text-gray-600">Horizon University<br />Main Boulevard, Gulberg III<br />Lahore, Punjab 54660<br />Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-12">
                {offices.map((office, i) => (
                  <Card key={office.title} className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                    <h3 className="font-bold text-sm mb-3 text-gray-900">{office.title}</h3>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-3.5 h-3.5" /> {office.email}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-3.5 h-3.5" /> {office.phone}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-3.5 h-3.5" /> {office.hours}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div>
                <h3 className="font-bold text-sm mb-4 text-gray-900">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white">
                    <Globe className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white">
                    <MessageSquare className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white">
                    <Users className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white">
                    <Home className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <Card className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
                {status === "sent" ? (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-blue-100 text-blue-600">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">Message Sent!</h2>
                    <p className="text-sm mb-6 text-gray-600">
                      Thank you for reaching out. We typically respond within 24-48 business hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl text-sm outline-none bg-white border border-gray-300 focus:border-blue-500 text-gray-900 placeholder:text-gray-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl text-sm outline-none bg-white border border-gray-300 focus:border-blue-500 text-gray-900 placeholder:text-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Subject</label>
                      <input
                        required
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl text-sm outline-none bg-white border border-gray-300 focus:border-blue-500 text-gray-900 placeholder:text-gray-500"
                        placeholder="Admissions Query"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl text-sm outline-none bg-white border border-gray-300 focus:border-blue-500 text-gray-900 placeholder:text-gray-500"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-4 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 text-white bg-blue-600 disabled:opacity-70"
                    >
                      {status === "sending" ? "Sending..." : "Send Message"}
                      {status !== "sending" && <Send className="w-4 h-4" />}
                    </button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
