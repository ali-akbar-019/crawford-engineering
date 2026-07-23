// src/types/index.ts

export interface NavItem {
    label: string;
    path: string;
}

export type ServiceCategory = "infrastructure" | "laboratory";

export interface Service {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    category: ServiceCategory;
    icon: string; // Lucide icon name
    image: string;
    highlights: string[];
}

export type ProjectStatus = "in-progress" | "completed";

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    sector: string;
    status: ProjectStatus;
    location: string;
    image: string;
    images: string[];
    timeline: string[];
    currentStage: number;
}

export interface Sector {
    id: string;
    title: string;
    subtitle: string;
    items: string[];
    icon: string;
}

export interface Capability {
    label: string;
    description: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    photo: string;
    focalPoint?: string;
    group: "founders" | "employees";
}

export interface Office {
    id: string;
    country: string;
    address: string;
    phone: string;
}

export interface JobOpening {
    id: string;
    title: string;
    type: string;
    location: string;
    department: string;
    description: string;
}

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    office: string;
}

export interface SiteData {
    company: string;
    tagline: string;
    description: string;
    nav: NavItem[];
    capabilities: Capability[];
    services: Service[];
    projects: Project[];
    sectors: Sector[];
    team: TeamMember[];
    offices: Office[];
    jobOpenings: JobOpening[];
    testimonials: Testimonial[];
    contact: ContactInfo;
}
