export interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?q=80&w=1470&auto=format&fit=crop',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  }
];