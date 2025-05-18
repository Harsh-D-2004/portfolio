export interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Top Performer',
    organization: 'The Better Hack (Pune)',
    date: 'Jan 2025',
    description: 'Our team, Ctrl+Alt+Del, ranked among the top 5 teams at The Better Hack hackathon, where we developed Neural Mix, an AI agent for musicians.',
  },
  {
    title: 'Top Performer',
    organization: 'CMR Hackfest (Hyderabad)',
    date: 'December 2022',
    description: 'Developed a plant disease detection model and backend with high accuracy, uniquely differentiating real plants from fake ones using an advanced database.',
  },
];