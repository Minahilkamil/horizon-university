export type BlogPost = {
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

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "how-to-make-most-first-year",
    title: "How to Make the Most of Your First Year at University",
    category: "Student Life",
    date: "April 2, 2024",
    excerpt: "A guide to navigating academics, making friends, and finding balance in your freshman year at Horizon.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
    author: "Student Affairs Team",
    content: `
      <p>Starting university is an exciting but overwhelming experience. Your first year lays the foundation for the rest of your academic journey and personal growth.</p>
      
      <h3>1. Get Involved Early</h3>
      <p>Join clubs, societies, and sports teams. It's the easiest way to meet like-minded people and build your network.</p>
      
      <h3>2. Prioritize Your Studies</h3>
      <p>Attend all your classes, take notes, and don't hesitate to ask questions. Your professors are here to help.</p>
      
      <h3>3. Take Care of Your Health</h3>
      <p>Exercise regularly, eat well, and make sure you get enough sleep. A healthy body leads to a healthy mind.</p>
    `,
  },
  {
    id: 2,
    slug: "future-ai-in-pakistan",
    title: "The Future of AI in Pakistan: Opportunities & Challenges",
    category: "Technology",
    date: "March 20, 2024",
    excerpt: "Our faculty shares insights on how Pakistan can lead in artificial intelligence and what students need to know.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
    author: "Prof. Dr. Sarah Ahmed",
    content: `
      <p>Pakistan has immense potential in the field of artificial intelligence. With a young and talented population, the country is poised to make significant contributions.</p>
      
      <h3>Opportunities</h3>
      <p>From healthcare to agriculture, AI can solve many of Pakistan's pressing problems.</p>
      
      <h3>Challenges</h3>
      <p>We need more investment in research and development, and better access to quality education in AI.</p>
    `,
  },
  {
    id: 3,
    slug: "why-study-abroad",
    title: "Why Study Abroad is a Game-Changer for Your Career",
    category: "Career",
    date: "March 8, 2024",
    excerpt: "Insights from students who participated in our exchange programs with universities in the UK, US, and Europe.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop",
    author: "International Office",
    content: `
      <p>Studying abroad offers invaluable experiences that shape your personal and professional growth.</p>
      
      <h3>Key Benefits</h3>
      <ul>
        <li>Global perspective</li>
        <li>Networking opportunities</li>
        <li>Cultural awareness</li>
      </ul>
    `,
  },
  {
    id: 4,
    slug: "sustainable-energy-pakistan",
    title: "Sustainable Energy: What Pakistan Needs to Do",
    category: "Research",
    date: "February 25, 2024",
    excerpt: "Our Sustainable Energy Center shares findings from their latest report on Pakistan's energy transition.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop",
    author: "Research Office",
    content: `
      <p>Pakistan's energy crisis demands innovative and sustainable solutions.</p>
    `,
  },
  {
    id: 5,
    slug: "entrepreneurial-mindset",
    title: "The Entrepreneurial Mindset: Tips from Our Alumni",
    category: "Entrepreneurship",
    date: "February 12, 2024",
    excerpt: "Successful startup founders from our alumni network share their top lessons from the journey.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    author: "Alumni Relations",
    content: `
      <p>Our successful alumni share their insights on building an entrepreneurial mindset.</p>
    `,
  },
  {
    id: 6,
    slug: "day-in-life-engineering-student",
    title: "A Day in the Life of a Horizon Engineering Student",
    category: "Student Life",
    date: "January 30, 2024",
    excerpt: "Follow a Mechanical Engineering student through a typical day of classes, labs, and extracurriculars.",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=600&auto=format&fit=crop",
    author: "Student Life Team",
    content: `
      <p>Experience a day in the life of an engineering student at Horizon University.</p>
    `,
  },
];
