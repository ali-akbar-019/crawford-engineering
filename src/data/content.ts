// src/data/content.ts

import type { SiteData } from "../types";

export const siteData: SiteData = {
    company: "Crawford Engineering & Infrastructure",
    tagline: "Future‑ready engineering for critical infrastructure.",
    description:
        "We deliver end‑to‑end engineering services for transport and urban infrastructure, and support specialist laboratory environments in higher education.",

    nav: [
        { label: "Services", path: "/services" },
        { label: "Sectors", path: "/sectors" },
        { label: "Projects", path: "/projects" },
        { label: "Contact", path: "/contact" },
    ],

    capabilities: [
        {
            label: "Design",
            description: "Geometric and model-based design across all project phases.",
        },
        {
            label: "Delivery",
            description: "End-to-end project management from feasibility to handover.",
        },
        {
            label: "Documentation",
            description: "Technical reports, SOPs, risk registers and as-built records.",
        },
    ],

    services: [
        {
            id: "road-design",
            title: "Road Design",
            description:
                "Geometric design for roads, intersections and corridor upgrades aligned with standards.",
            tags: ["Concept", "Detailed", "Safety‑led design"],
            category: "infrastructure",
            icon: "RouteIcon",
        },
        {
            id: "project-management",
            title: "Project Management",
            description:
                "Planning, coordination and delivery management across feasibility to hand‑over.",
            tags: ["Scope", "Time", "Cost", "Risk"],
            category: "infrastructure",
            icon: "ClipboardList",
        },
        {
            id: "bim",
            title: "BIM",
            description:
                "Model‑based coordination and documentation supporting buildability and asset data.",
            tags: ["3D models", "Coordination", "Asset data"],
            category: "infrastructure",
            icon: "Box",
        },
        {
            id: "cost-estimation",
            title: "Cost Estimation",
            description:
                "Order‑of‑magnitude to detailed estimates for options, business cases and procurement.",
            tags: ["CAPEX", "OPEX", "Risk allowances"],
            category: "infrastructure",
            icon: "Calculator",
        },
        {
            id: "commissioning",
            title: "Commissioning & Decommissioning",
            description:
                "Plans, utilities checks, functional testing and coordinated shutdowns for lab equipment and test rigs.",
            tags: ["Mechanical", "Electrical", "Controls interfaces"],
            category: "laboratory",
            icon: "Zap",
        },
        {
            id: "technical-reports",
            title: "Technical Reports & Documentation",
            description:
                "Reports capturing test setups, acceptance criteria, results and as‑installed configuration.",
            tags: ["Test plans", "Acceptance reports", "As‑built records"],
            category: "laboratory",
            icon: "FileText",
        },
        {
            id: "sops",
            title: "SOPs & Work Instructions",
            description:
                "Clear SOPs for complex equipment and control systems for staff and students.",
            tags: ["Startup", "Shutdown", "Maintenance routines"],
            category: "laboratory",
            icon: "BookOpen",
        },
        {
            id: "risk-analysis",
            title: "Risk Analysis Documents",
            description:
                "Risk assessments and controls for lab equipment and experiments aligned to HSW frameworks.",
            tags: ["Risk registers", "Hazard controls", "Safe operating limits"],
            category: "laboratory",
            icon: "ShieldAlert",
        },
    ],

    projects: [
        {
            id: "urban-corridor",
            title: "Urban Corridor Upgrade",
            description:
                "Road design and staging for an urban arterial, integrating bus priority and active transport.",
            tags: ["Road design", "BIM"],
            sector: "Transport & Urban",
        },
        {
            id: "interchange-redevelopment",
            title: "Interchange Redevelopment",
            description:
                "Project management and BIM coordination for a multi‑modal interchange upgrade.",
            tags: ["Project management", "BIM"],
            sector: "Transport & Urban",
        },
        {
            id: "lab-upgrade",
            title: "Engineering Lab Upgrade",
            description:
                "Commissioning support and documentation for refurbished lab equipment, including SOPs and risk analysis.",
            tags: ["Commissioning", "SOPs", "Risk analysis"],
            sector: "Campuses & Facilities",
        },
    ],

    sectors: [
        {
            id: "transport",
            title: "Transport & Urban",
            subtitle: "Public and private infrastructure at scale.",
            items: [
                "Road corridors and intersections",
                "Interchanges and precinct upgrades",
                "Active transport integration",
            ],
            icon: "TrafficCone",
        },
        {
            id: "campus",
            title: "Campuses, Utilities & Facilities",
            subtitle: "Operational and brownfield campus environments.",
            items: [
                "Campus upgrades and lab facilities",
                "Energy and utilities interfaces",
                "Operational / brownfield delivery",
            ],
            icon: "Building2",
        },
    ],

    contact: {
        email: "info@crawfordengineering.com",
        phone: "+61 (0)4 00 000 000",
        office: "Level 1, Example Street, Your City",
    },
};