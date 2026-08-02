
export type Department = {
  id: number;
  slug: string;
  name: string;
  description: string;
  icon: string;
  programs: string[];
  facultyCount: number;
  labs: string[];
  achievements: string[];
};

export const departments: Department[] = [
  {
    id: 1,
    slug: "computer-science",
    name: "Department of Computer Science",
    description:
      "Empowering students with cutting-edge skills in software engineering, AI, data science, and cybersecurity.",
    icon: "💻",
    programs: ["BS Computer Science", "MS Computer Science", "PhD Computer Science"],
    facultyCount: 15,
    labs: ["AI & Machine Learning Lab", "Cybersecurity Lab", "Software Engineering Lab"],
    achievements: [
      "Ranked #1 in Pakistan for Computer Science",
      "100% placement rate for graduates",
      "Multiple national hackathon wins",
    ],
  },
  {
    id: 2,
    slug: "engineering",
    name: "Department of Engineering",
    description:
      "Innovating the future through electrical, mechanical, and civil engineering programs with hands-on learning.",
    icon: "⚙️",
    programs: ["BS Electrical Engineering", "BS Mechanical Engineering", "MS Engineering"],
    facultyCount: 20,
    labs: ["Circuit Design Lab", "Robotics Lab", "Thermodynamics Lab"],
    achievements: [
      "National robotics competition champions",
      "Industry partnerships with top engineering firms",
      "State-of-the-art research facilities",
    ],
  },
  {
    id: 3,
    slug: "business",
    name: "School of Business",
    description:
      "Developing future leaders through rigorous business education, entrepreneurship, and real-world projects.",
    icon: "📊",
    programs: ["BBA Business Administration", "MBA", "Executive MBA"],
    facultyCount: 12,
    labs: ["Finance Lab", "Marketing Research Lab", "Entrepreneurship Center"],
    achievements: [
      "Top business school in the region",
      "Alumni leading Fortune 500 companies",
      "100+ startups launched by graduates",
    ],
  },
  {
    id: 4,
    slug: "sciences",
    name: "Department of Sciences",
    description:
      "Exploring the frontiers of physics, chemistry, biology, and mathematics through research and education.",
    icon: "🔬",
    programs: ["BS Physics", "BS Chemistry", "BS Biology", "MS Sciences"],
    facultyCount: 18,
    labs: ["Physics Lab", "Chemistry Lab", "Biology Lab"],
    achievements: [
      "Groundbreaking research publications",
      "International research collaborations",
      "Modern lab equipment",
    ],
  },
];
