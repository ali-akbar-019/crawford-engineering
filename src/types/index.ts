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
    tags: string[];
    category: ServiceCategory;
    icon: string; // Lucide icon name
}

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    sector: string;
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
    contact: ContactInfo;
}