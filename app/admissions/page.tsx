
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  GraduationCap, CheckCircle, ArrowRight, ArrowLeft, Upload, BookOpen, AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";
import { Select } from "@/components/ui/Select";

type FormData = {
  firstName: string; lastName: string; email: string; phone: string;
  dob: string; gender: string; address: string; city: string; province: string;
  matricBoard: string; matricYear: string; matricMarks: string; matricTotal: string;
  interBoard: string; interYear: string; interMarks: string; interTotal: string;
  program: string; campus: string;
  notes: string;
};

const steps = ["Personal Info", "Academic Records", "Program Selection", "Review & Submit"];
const programs = ["BS Computer Science", "BS Software Engineering", "BS Electrical Engineering", "BS Data Science", "BBA", "MBA"];
const campuses = ["Main Campus - Islamabad", "North Campus - Rawalpindi", "Technology Park"];

const timeline = [
  { date: "Jan 15, 2026", title: "Applications Open", desc: "Online application portal goes live.", done: true },
  { date: "Mar 30, 2026", title: "Application Deadline", desc: "Last date to submit applications.", done: false },
  { date: "Apr 15, 2026", title: "Entrance Test", desc: "University entrance examination.", done: false },
  { date: "May 1, 2026", title: "Results Announced", desc: "Merit list published online.", done: false },
  { date: "Jun 1, 2026", title: "Classes Begin", desc: "Fall semester commencement.", done: false },
];

export default function AdmissionsPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();
  const onSubmit = () => setSubmitted(true);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-300 border border-blue-400/20">
            <GraduationCap className="w-3.5 h-3.5" /> Admissions 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Start Your Journey
          </h1>
          <p className="text-lg text-white/60 max-w-xl">
            Join Horizon University and begin a transformative educational experience. Applications are now open.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Admission Timeline</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Dates</h2>
            <p className="text-gray-600">Important dates for the 2026 admission cycle.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-blue-500" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                         style={{ background: item.done ? "#2563EB" : "#f3f4f6", border: `2px solid ${item.done ? "#2563EB" : "#e5e7eb"}` }}>
                      {item.done ? <CheckCircle className="w-5 h-5 text-white" /> : <span className="text-sm font-bold text-gray-500">{i + 1}</span>}
                    </div>
                    <Card className="p-5 rounded-2xl flex-1 bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-semibold text-blue-600">{item.date}</span>
                        {item.done && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-50 text-green-600">Completed</span>}
                      </div>
                      <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Apply Online</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Form</h2>
            <p className="text-gray-600">Complete the form below to apply for admission.</p>
          </div>

          {submitted ? (
            <Card className="text-center p-12 rounded-3xl bg-white border border-gray-200">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-green-600">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Application Submitted!</h2>
              <p className="text-sm mb-6 text-gray-600">
                Thank you for applying to Horizon University. We'll review your application and get back to you within 5 business days.
              </p>
              <p className="text-xs text-gray-500">Reference: HU-2026-{Math.floor(Math.random() * 9000 + 1000)}</p>
            </Card>
          ) : (
            <Card className="p-8 md:p-10 rounded-3xl bg-white border border-gray-200">
              {/* Progress */}
              <div className="flex items-center gap-2 mb-10">
                {steps.map((s, i) => (
                  <div key={s} className="flex items-center gap-2 flex-1">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                         style={{ background: i <= step ? "#2563EB" : "#f3f4f6", color: i <= step ? "#fff" : "#6b7280", border: `1px solid ${i <= step ? "#2563EB" : "#e5e7eb"}` }}>
                      {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                    </div>
                    <span className="text-xs font-medium hidden md:block" style={{ color: i <= step ? "#111827" : "#6b7280" }}>{s}</span>
                    {i < steps.length - 1 && <div className="flex-1 h-px mx-2" style={{ background: i < step ? "#2563EB" : "#e5e7eb" }} />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {step === 0 && (
                  <div key="step0" className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-xs font-semibold block mb-2 text-gray-600">First Name *</Label>
                        <Input {...register("firstName", { required: true })} className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900" />
                        {errors.firstName && <p className="text-xs text-red-500 mt-1">Required</p>}
                      </div>
                      <div>
                        <Label className="text-xs font-semibold block mb-2 text-gray-600">Last Name *</Label>
                        <Input {...register("lastName", { required: true })} className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-xs font-semibold block mb-2 text-gray-600">Email *</Label>
                        <Input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900" />
                      </div>
                      <div>
                        <Label className="text-xs font-semibold block mb-2 text-gray-600">Phone *</Label>
                        <Input {...register("phone", { required: true })} className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-xs font-semibold block mb-2 text-gray-600">Date of Birth *</Label>
                        <Input type="date" {...register("dob", { required: true })} className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900" />
                      </div>
                      <div>
                        <Label className="text-xs font-semibold block mb-2 text-gray-600">Gender *</Label>
                        <Select {...register("gender", { required: true })} className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900">
                          <option value="">Select</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs font-semibold block mb-2 text-gray-600">Address</Label>
                      <Input {...register("address")} className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900" />
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div key="step1" className="space-y-6">
                    <div>
                      <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-gray-900"><BookOpen className="w-4 h-4 text-blue-600" /> Matriculation</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input {...register("matricBoard")} placeholder="Board Name" className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900" />
                        <Input {...register("matricYear")} placeholder="Year" className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900" />
                        <Input {...register("matricMarks")} placeholder="Obtained Marks" className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900" />
                        <Input {...register("matricTotal")} placeholder="Total Marks" className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-gray-900"><BookOpen className="w-4 h-4 text-blue-600" /> Intermediate / A-Levels</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input {...register("interBoard")} placeholder="Board Name" className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900" />
                        <Input {...register("interYear")} placeholder="Year" className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900" />
                        <Input {...register("interMarks")} placeholder="Obtained Marks" className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900" />
                        <Input {...register("interTotal")} placeholder="Total Marks" className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900" />
                      </div>
                    </div>
                    <div className="p-4 rounded-xl flex items-start gap-3 bg-blue-50 border border-blue-200">
                      <Upload className="w-5 h-5 shrink-0 mt-0.5 text-blue-600" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Upload Documents</p>
                        <p className="text-xs mt-1 text-gray-600">Upload scanned copies of your transcripts, CNIC, and passport-size photo. (PDF, JPG; Max 5MB each)</p>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div key="step2" className="space-y-5">
                    <div>
                      <Label className="text-xs font-semibold block mb-2 text-gray-600">Select Program *</Label>
                      <Select {...register("program", { required: true })} className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900">
                        <option value="">Choose a program</option>
                        {programs.map((p) => <option key={p} value={p}>{p}</option>)}
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs font-semibold block mb-2 text-gray-600">Preferred Campus *</Label>
                      <div className="grid gap-3">
                        {campuses.map((c) => (
                          <Label key={c} className="flex items-center gap-3 p-4 rounded-xl cursor-pointer bg-gray-50 border border-gray-200">
                            <Input type="radio" value={c} {...register("campus")} className="sr-only peer" />
                            <div className="w-5 h-5 rounded-full border-2 peer-checked:border-blue-600 flex items-center justify-center border-gray-300">
                              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 scale-0 peer-checked:scale-100" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900">{c}</p>
                            </div>
                          </Label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs font-semibold block mb-2 text-gray-600">Additional Notes</Label>
                      <Textarea {...register("notes")} rows={3} className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none bg-gray-50 border border-gray-200 text-gray-900" />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div key="step3" className="space-y-5">
                    <div className="p-5 rounded-xl bg-blue-50 border border-blue-200">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="w-4 h-4 text-blue-600" />
                        <h3 className="text-sm font-bold text-gray-900">Review Your Application</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Please review all information before submitting. You can go back to make changes.
                      </p>
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: "Name", value: watch("firstName") + " " + watch("lastName") },
                        { label: "Email", value: watch("email") },
                        { label: "Phone", value: watch("phone") },
                        { label: "Program", value: watch("program") },
                        { label: "Campus", value: watch("campus") },
                      ].filter((f) => f.value).map((f) => (
                        <div key={f.label} className="flex items-center justify-between py-2 border-b border-gray-200">
                          <span className="text-xs text-gray-600">{f.label}</span>
                          <span className="text-sm font-semibold text-gray-900">{f.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                  {step > 0 ? (
                    <Button variant="secondary" type="button" onClick={() => setStep(step - 1)}>
                      <ArrowLeft className="w-4 h-4" /> Back
                    </Button>
                  ) : <div />}
                  {step < steps.length - 1 ? (
                    <Button variant="primary" type="button" onClick={() => setStep(step + 1)}>
                      Continue <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button variant="success" type="submit">
                      <CheckCircle className="w-4 h-4" /> Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          )}
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4 inline-block">Fee Structure</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tuition & Fees</h2>
            <p className="text-gray-600">Transparent fee structure for all programs (PKR).</p>
          </div>
          <Card className="rounded-2xl overflow-hidden border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-6 py-4 font-semibold text-gray-900">Program</th>
                  <th className="text-right px-6 py-4 font-semibold text-gray-900">Per Semester</th>
                  <th className="text-right px-6 py-4 font-semibold text-gray-900">Total (8 Sem)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["BS Computer Science", "PKR 285,000", "PKR 2,280,000"],
                  ["BS Software Engineering", "PKR 285,000", "PKR 2,280,000"],
                  ["BS Electrical Engineering", "PKR 310,000", "PKR 2,480,000"],
                  ["BBA", "PKR 245,000", "PKR 1,960,000"],
                  ["MBA", "PKR 350,000", "PKR 1,400,000"],
                  ["BS Data Science", "PKR 295,000", "PKR 2,360,000"],
                ].map(([prog, sem, total], i) => (
                  <tr key={prog} className="border-t border-gray-200" style={{ background: i % 2 === 0 ? "#fff" : "#f3f4f6" }}>
                    <td className="px-6 py-4 font-medium text-gray-900">{prog}</td>
                    <td className="text-right px-6 py-4 text-gray-600">{sem}</td>
                    <td className="text-right px-6 py-4 font-semibold text-gray-900">{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </section>
    </div>
  );
}

