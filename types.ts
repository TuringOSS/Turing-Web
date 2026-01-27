export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  description?: string;
  details?: {
    date: string;
    location: string;
    participants: string;
    winners?: string[];
  };
}

export interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
}

export enum SectionType {
  HERO = 'HERO',
  ABOUT = 'ABOUT',
  PROJECTS = 'PROJECTS',
  TEAM = 'TEAM',
  CONTACT = 'CONTACT'
}