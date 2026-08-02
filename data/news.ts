export type NewsItem = {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  author: string;
  content: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 1,
    slug: "horizon-ranks-number-1-cs",
    title: "Horizon University Ranks #1 in Computer Science in Pakistan",
    category: "Ranking",
    date: "March 15, 2024",
    excerpt: "The latest HEC rankings place Horizon's Computer Science program at the top spot nationally, recognizing our research output and industry partnerships.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
    author: "Communications Office",
    content: `
      <p>We are thrilled to announce that Horizon University has been ranked #1 in Computer Science in Pakistan by the Higher Education Commission (HEC). This recognition is a testament to our commitment to excellence in education and research.</p>
      
      <h3>Highlights of Our Ranking</h3>
      <ul>
        <li>Top rank in research output</li>
        <li>Excellent industry partnerships</li>
        <li>Outstanding student performance</li>
      </ul>
    `,
  },
  {
    id: 2,
    slug: "new-ai-research-center",
    title: "New AI Research Center Opens with Industry Collaboration",
    category: "Research",
    date: "February 28, 2024",
    excerpt: "In partnership with leading tech companies, our new center will focus on applied AI in healthcare, agriculture, and finance.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
    author: "Research Office",
    content: `
      <p>We are proud to announce the opening of our new AI Research Center, in collaboration with leading tech companies.</p>
    `,
  },
  {
    id: 3,
    slug: "1250-students-spring-2024",
    title: "1250+ Students Enrolled in Spring 2024 Semester",
    category: "Admissions",
    date: "February 10, 2024",
    excerpt: "We welcome our largest spring intake ever, with students from over 80 cities across Pakistan joining the Horizon family.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
    author: "Admissions Office",
    content: `
      <p>We are excited to welcome our largest spring intake ever!</p>
    `,
  },
  {
    id: 4,
    slug: "horizon-team-wins-robotics-competition",
    title: "Horizon Team Wins National Robotics Competition",
    category: "Achievement",
    date: "January 25, 2024",
    excerpt: "Our robotics society's autonomous drone design clinched the first prize at the National Engineering Robotics Contest.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
    author: "Student Affairs",
    content: `
      <p>Congratulations to our robotics team on their national victory!</p>
    `,
  },
  {
    id: 5,
    slug: "mou-lse-exchange-program",
    title: "MoU Signed with LSE for Exchange Program",
    category: "Partnership",
    date: "January 10, 2024",
    excerpt: "Students from our Business School can now spend a semester at the London School of Economics starting Fall 2024.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop",
    author: "International Office",
    content: `
      <p>We are excited to announce our new partnership with LSE!</p>
    `,
  },
  {
    id: 6,
    slug: "alumni-donates-2-million-scholarship",
    title: "Alumni Donates $2 Million for Scholarship Fund",
    category: "Giving",
    date: "December 18, 2023",
    excerpt: "A 2010 graduate has established an endowment fund that will fully fund 50 need-based scholarships annually.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
    author: "Advancement Office",
    content: `
      <p>We are deeply grateful for this generous donation from our alumnus!</p>
    `,
  },
];
