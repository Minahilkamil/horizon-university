import { NextResponse } from "next/server";
import { faculty as fallbackFaculty, type FacultyMember } from "@/data/faculty";

const departments = ["Computer Science", "Engineering", "Business"];
const designations = ["Professor", "Associate Professor", "Assistant Professor", "Lecturer"];
const qualifications = ["PhD", "MS", "MPhil", "MBA"];
const experiences = ["15 Years", "12 Years", "8 Years", "5 Years"];
const subjectSets = [
  ["Artificial Intelligence", "Machine Learning", "Data Structures"],
  ["Circuit Design", "Control Systems", "Signal Processing"],
  ["Marketing Management", "Financial Accounting", "Business Ethics"],
  ["Web Development", "Database Systems", "Operating Systems"],
];
const bioSamples = [
  "has been teaching at Horizon University since 2015 and brings extensive industry experience from top tech companies.",
  "joined Horizon University in 2018 and is passionate about hands-on learning and practical education.",
  "brings a unique blend of academic excellence and real-world business experience to our campus.",
  "is dedicated to fostering innovation and critical thinking among students.",
];

function mapUsersToFaculty(users: Array<{ id: number; name: string; email: string }>): FacultyMember[] {
  return users.slice(0, 8).map((user, idx) => ({
    id: user.id,
    name: user.name,
    designation: designations[idx % designations.length],
    department: departments[idx % departments.length],
    image: `https://i.pravatar.cc/150?img=${idx + 1}`,
    qualification: qualifications[idx % qualifications.length],
    experience: experiences[idx % experiences.length],
    email: user.email.toLowerCase().replace("@", ".faculty@"),
    officeHours: "Mon-Wed 10:00 AM - 1:00 PM",
    bio: `${user.name.split(" ")[0]} ${bioSamples[idx % bioSamples.length]}`,
    subjects: subjectSets[idx % subjectSets.length],
  }));
}

export async function GET() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Faculty upstream request failed with status ${res.status}`);
    }

    const users = (await res.json()) as Array<{ id: number; name: string; email: string }>;

    return NextResponse.json(mapUsersToFaculty(users));
  } catch {
    return NextResponse.json(fallbackFaculty);
  }
}
