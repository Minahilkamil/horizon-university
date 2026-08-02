export type Event = {
  id: number;
  slug: string;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  content: string;
};

export const events: Event[] = [
  {
    id: 1,
    slug: "horizon-techfest-2024",
    title: "Horizon TechFest 2024",
    type: "Competition",
    date: "April 15-17, 2024",
    time: "10:00 AM - 8:00 PM",
    location: "Main Campus, Horizon University",
    description: "Pakistan's largest student-run tech festival with hackathons, robotics competitions, and workshops.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&auto=format&fit=crop",
    content: `
      <p>Join us for Horizon TechFest 2024, Pakistan's largest student-run tech festival featuring exciting hackathons, robotics competitions, workshops, and guest lectures!</p>
      
      <h3>Highlights</h3>
      <ul>
        <li>48-hour Hackathon</li>
        <li>Robotics Competition</li>
        <li>Guest lectures from industry leaders</li>
      </ul>
    `,
  },
  {
    id: 2,
    slug: "annual-career-fair-2024",
    title: "Annual Career Fair 2024",
    type: "Career",
    date: "March 28, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Student Center, Horizon University",
    description: "Connect with over 80+ top companies for internships and full-time positions.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
    content: `
      <p>Our Annual Career Fair is your chance to meet recruiters from the best companies in Pakistan and abroad.</p>
    `,
  },
  {
    id: 3,
    slug: "spring-music-concert-2024",
    title: "Spring Music Concert",
    type: "Cultural",
    date: "April 5, 2024",
    time: "7:00 PM - 11:00 PM",
    location: "Auditorium, Horizon University",
    description: "An evening of music, dance, and performances by our students and local artists.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop",
    content: `
      <p>Celebrate spring with an amazing evening of music and dance!</p>
    `,
  },
  {
    id: 4,
    slug: "research-symposium-2024",
    title: "Research Symposium 2024",
    type: "Academic",
    date: "May 10, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Faculty Building, Horizon University",
    description: "Showcasing groundbreaking research by our faculty and students across all disciplines.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
    content: `
      <p>Explore cutting-edge research from our university community.</p>
    `,
  },
  {
    id: 5,
    slug: "sports-gala-2024",
    title: "Sports Gala 2024",
    type: "Sports",
    date: "May 20-25, 2024",
    time: "All Day",
    location: "Sports Complex, Horizon University",
    description: "Inter-departmental and inter-university sports competitions in 15 different sports.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop",
    content: `
      <p>Join us for our annual sports extravaganza!</p>
    `,
  },
  {
    id: 6,
    slug: "alumni-reunion-2024",
    title: "Alumni Reunion 2024",
    type: "Community",
    date: "June 15, 2024",
    time: "6:00 PM - 11:00 PM",
    location: "Main Campus, Horizon University",
    description: "Reconnect with old friends, network with professionals, and celebrate our alumni community.",
    image: "https://images.unsplash.com/photo-1496024840928-4988bd3f4e55?q=80&w=600&auto=format&fit=crop",
    content: `
      <p>We can't wait to welcome our alumni back home!</p>
    `,
  },
];
