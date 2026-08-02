export type FacultyMember = {
  id: number;
  slug: string;
  name: string;
  designation: string;
  department: string;
  image: string;
  qualification: string;
  experience: string;
  email: string;
  officeHours: string;
  bio: string;
  subjects: string[];
};

export const faculty: FacultyMember[] = [
  {
    id: 1,
    slug: "dr-sarah-ahmed",
    name: "Dr. Sarah Ahmed",
    designation: "Professor",
    department: "Computer Science",
    image: "https://i.pravatar.cc/150?img=1",
    qualification: "PhD",
    experience: "15 Years",
    email: "sarah.ahmed@horizon.edu",
    officeHours: "Mon-Wed 10:00 AM - 1:00 PM",
    bio: "Dr. Sarah has been teaching at Horizon University since 2015 and brings extensive industry experience from top tech companies.",
    subjects: ["Artificial Intelligence", "Machine Learning", "Data Structures"],
  },
  {
    id: 2,
    slug: "dr-usman-malik",
    name: "Dr. Usman Malik",
    designation: "Associate Professor",
    department: "Engineering",
    image: "https://i.pravatar.cc/150?img=3",
    qualification: "MS",
    experience: "12 Years",
    email: "usman.malik@horizon.edu",
    officeHours: "Tue-Thu 2:00 PM - 5:00 PM",
    bio: "Dr. Usman joined Horizon University in 2018 and is passionate about hands-on learning and practical education.",
    subjects: ["Circuit Design", "Control Systems", "Signal Processing"],
  },
  {
    id: 3,
    slug: "dr-ayesha-khan",
    name: "Dr. Ayesha Khan",
    designation: "Assistant Professor",
    department: "Business",
    image: "https://i.pravatar.cc/150?img=5",
    qualification: "MBA",
    experience: "8 Years",
    email: "ayesha.khan@horizon.edu",
    officeHours: "Wed-Fri 9:00 AM - 12:00 PM",
    bio: "Dr. Ayesha brings a unique blend of academic excellence and real-world business experience to our campus.",
    subjects: ["Marketing Management", "Financial Accounting", "Business Ethics"],
  },
  {
    id: 4,
    slug: "prof-bilal-raza",
    name: "Prof. Bilal Raza",
    designation: "Professor",
    department: "Computer Science",
    image: "https://i.pravatar.cc/150?img=7",
    qualification: "PhD",
    experience: "15 Years",
    email: "bilal.raza@horizon.edu",
    officeHours: "Mon-Wed 10:00 AM - 1:00 PM",
    bio: "Prof. Bilal is dedicated to fostering innovation and critical thinking among students.",
    subjects: ["Web Development", "Database Systems", "Operating Systems"],
  },
  {
    id: 5,
    slug: "dr-nida-farooq",
    name: "Dr. Nida Farooq",
    designation: "Lecturer",
    department: "Engineering",
    image: "https://i.pravatar.cc/150?img=9",
    qualification: "MPhil",
    experience: "5 Years",
    email: "nida.farooq@horizon.edu",
    officeHours: "Mon-Fri 11:00 AM - 1:00 PM",
    bio: "Dr. Nida focuses on student-centered teaching and applied engineering research.",
    subjects: ["Applied Physics", "Thermodynamics", "Engineering Mathematics"],
  },
  {
    id: 6,
    slug: "dr-hamza-siddiqui",
    name: "Dr. Hamza Siddiqui",
    designation: "Associate Professor",
    department: "Business",
    image: "https://i.pravatar.cc/150?img=11",
    qualification: "MBA",
    experience: "12 Years",
    email: "hamza.siddiqui@horizon.edu",
    officeHours: "Tue-Thu 1:00 PM - 4:00 PM",
    bio: "Dr. Hamza mentors future entrepreneurs through project-based business education.",
    subjects: ["Entrepreneurship", "Strategic Management", "Business Analytics"],
  },
  {
    id: 7,
    slug: "prof-zainab-ali",
    name: "Prof. Zainab Ali",
    designation: "Professor",
    department: "Computer Science",
    image: "https://i.pravatar.cc/150?img=13",
    qualification: "PhD",
    experience: "15 Years",
    email: "zainab.ali@horizon.edu",
    officeHours: "Mon-Thu 9:00 AM - 12:00 PM",
    bio: "Prof. Zainab leads advanced computing courses and research collaborations.",
    subjects: ["Cloud Computing", "Cybersecurity", "Distributed Systems"],
  },
  {
    id: 8,
    slug: "dr-tariq-mehmood",
    name: "Dr. Tariq Mehmood",
    designation: "Assistant Professor",
    department: "Engineering",
    image: "https://i.pravatar.cc/150?img=15",
    qualification: "MS",
    experience: "8 Years",
    email: "tariq.mehmood@horizon.edu",
    officeHours: "Wed-Fri 2:00 PM - 5:00 PM",
    bio: "Dr. Tariq connects classroom theory with modern industrial engineering practices.",
    subjects: ["Embedded Systems", "Automation", "Digital Electronics"],
  },
];
