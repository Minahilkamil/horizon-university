
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search, GraduationCap, Clock, ArrowRight,
} from "lucide-react";
import { programs } from "@/data/programs";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

const departments = ["All Departments", "Computer Science", "Engineering", "Business", "Sciences", "Humanities"];
const levels = ["All Levels", "Bachelor", "Master", "PhD"];

export default function ProgramsPage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [level, setLevel] = useState("All Levels");

  const filtered = programs.filter((p) => {
    const matchesSearch = p.degree.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    const matchesDept = department === "All Departments" || p.name === department;
    const matchesLevel = level === "All Levels" || p.degree.toLowerCase().includes(level.toLowerCase());
    return matchesSearch && matchesDept && matchesLevel;
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20">
            <GraduationCap className="w-3.5 h-3.5" /> Academic Programs
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Find Your Path
          </h1>
          <p className="text-lg text-white/60 max-w-xl">
            Explore our wide range of undergraduate, graduate, and doctoral programs designed to shape the leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <Input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search programs..."
                className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900"
              />
            </div>
            <Select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="px-4 py-3 rounded-xl text-sm outline-none cursor-pointer bg-gray-50 border border-gray-200 text-gray-900"
            >
              {departments.map((d) => <option key={d} value={d}>{d}</option>)}
            </Select>
            <Select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="px-4 py-3 rounded-xl text-sm outline-none cursor-pointer bg-gray-50 border border-gray-200 text-gray-900"
            >
              {levels.map((l) => <option key={l} value={l}>{l}</option>)}
            </Select>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm mb-8 text-gray-500">
            Showing <span className="font-semibold text-gray-900">{filtered.length}</span> programs
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <Link key={p.id} href={`/programs/${p.slug}`} className="p-8 rounded-2xl h-full flex flex-col bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-600 text-white">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                    <Clock className="w-3 h-3" /> {p.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{p.degree}</h3>
                <p className="text-sm mb-5 flex-1 text-gray-600">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.courses.slice(0, 4).map((c) => (
                    <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-500">
                      {c}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold inline-flex items-center gap-1 text-blue-600">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-30 text-gray-500" />
              <p className="text-lg font-semibold mb-2 text-gray-900">No programs found</p>
              <p className="text-sm text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

