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
        { label: "Team", path: "/team" },
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
            longDescription:
                "Our road design team delivers concept through to detailed geometric design for arterials, intersections and corridor upgrades. Every design is developed against current road authority standards, with a safety‑led approach that balances capacity, active transport and constructability from the earliest concept sketch through to issued‑for‑construction drawings.",
            tags: ["Concept", "Detailed", "Safety‑led design"],
            category: "infrastructure",
            icon: "RouteIcon",
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop",
            highlights: [
                "Concept and detailed geometric design",
                "Intersection and corridor staging plans",
                "Standards‑compliant, safety‑led approach",
            ],
        },
        {
            id: "railway-design",
            title: "Railway & Track Design",
            description:
                "Track geometry, corridor alignment and rail interface design for upgrades and new works.",
            longDescription:
                "We support rail corridor projects with track geometry, alignment design and interface coordination between road and rail assets. Our team works alongside transport authorities to deliver combined road‑and‑rail corridor solutions where level crossings, interchanges and shared infrastructure require close coordination between disciplines.",
            tags: ["Track geometry", "Corridor alignment", "Interface design"],
            category: "infrastructure",
            icon: "TrainIcon",
            image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1200&auto=format&fit=crop",
            highlights: [
                "Track geometry and alignment design",
                "Road / rail interface coordination",
                "Level crossing and interchange input",
            ],
        },
        {
            id: "project-management",
            title: "Project Management",
            description:
                "Planning, coordination and delivery management across feasibility to hand‑over.",
            longDescription:
                "From feasibility studies through to practical completion, our project management team keeps scope, time, cost and risk under control. We coordinate design consultants, contractors and stakeholders through a structured delivery framework, with transparent reporting so clients always know exactly where a project stands.",
            tags: ["Scope", "Time", "Cost", "Risk"],
            category: "infrastructure",
            icon: "ClipboardList",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
            highlights: [
                "Feasibility through to hand‑over",
                "Stakeholder and contractor coordination",
                "Transparent scope, cost and risk reporting",
            ],
        },
        {
            id: "bim",
            title: "BIM",
            description:
                "Model‑based coordination and documentation supporting buildability and asset data.",
            longDescription:
                "Our BIM services provide model‑based coordination across disciplines, clash detection and structured asset data capture. Models are developed to support buildability reviews during design and handed over as accurate digital records that continue to add value through the operational life of the asset.",
            tags: ["3D models", "Coordination", "Asset data"],
            category: "infrastructure",
            icon: "Box",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
            highlights: [
                "Multi‑discipline model coordination",
                "Clash detection and buildability review",
                "Structured asset data handover",
            ],
        },
        {
            id: "cost-estimation",
            title: "Cost Estimation",
            description:
                "Order‑of‑magnitude to detailed estimates for options, business cases and procurement.",
            longDescription:
                "We prepare cost estimates ranging from early order‑of‑magnitude figures for options analysis through to detailed, procurement‑ready estimates. Estimates include CAPEX and OPEX allowances, risk contingency and clear assumptions, giving clients confidence in the numbers behind every business case.",
            tags: ["CAPEX", "OPEX", "Risk allowances"],
            category: "infrastructure",
            icon: "Calculator",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
            highlights: [
                "Order‑of‑magnitude to detailed estimates",
                "CAPEX / OPEX and contingency allowances",
                "Procurement‑ready cost documentation",
            ],
        },
        {
            id: "commissioning",
            title: "Commissioning & Decommissioning",
            description:
                "Plans, utilities checks, functional testing and coordinated shutdowns for lab equipment and test rigs.",
            longDescription:
                "Our commissioning team plans and executes utilities checks, functional testing and coordinated shutdowns for laboratory equipment and test rigs. Every commissioning plan covers mechanical, electrical and controls interfaces, minimising downtime and keeping staff and students safe throughout the process.",
            tags: ["Mechanical", "Electrical", "Controls interfaces"],
            category: "laboratory",
            icon: "Zap",
            image: "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?q=80&w=1200&auto=format&fit=crop",
            highlights: [
                "Utilities checks and functional testing",
                "Coordinated shutdown planning",
                "Mechanical, electrical and controls scope",
            ],
        },
        {
            id: "technical-reports",
            title: "Technical Reports & Documentation",
            description:
                "Reports capturing test setups, acceptance criteria, results and as‑installed configuration.",
            longDescription:
                "We produce technical reports and documentation that capture test setups, acceptance criteria and results in full detail. As‑installed configurations are recorded accurately, giving facilities teams a reliable reference long after a project has been handed over.",
            tags: ["Test plans", "Acceptance reports", "As‑built records"],
            category: "laboratory",
            icon: "FileText",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
            highlights: [
                "Test plans and acceptance criteria",
                "Detailed results reporting",
                "Accurate as‑installed records",
            ],
        },
        {
            id: "sops",
            title: "SOPs & Work Instructions",
            description:
                "Clear SOPs for complex equipment and control systems for staff and students.",
            longDescription:
                "Our team writes clear, practical SOPs and work instructions for complex equipment and control systems used by staff and students. Every document is written to be understood and followed correctly under normal operating conditions and during startup, shutdown and maintenance routines.",
            tags: ["Startup", "Shutdown", "Maintenance routines"],
            category: "laboratory",
            icon: "BookOpen",
            image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=1200&auto=format&fit=crop",
            highlights: [
                "Startup and shutdown procedures",
                "Maintenance routine documentation",
                "Written for staff and student use",
            ],
        },
        {
            id: "risk-analysis",
            title: "Risk Analysis Documents",
            description:
                "Risk assessments and controls for lab equipment and experiments aligned to HSW frameworks.",
            longDescription:
                "We prepare risk assessments and control documentation for laboratory equipment and experiments, aligned to health, safety and wellbeing frameworks. Risk registers, hazard controls and safe operating limits are documented clearly so risks are understood and managed before work begins.",
            tags: ["Risk registers", "Hazard controls", "Safe operating limits"],
            category: "laboratory",
            icon: "ShieldAlert",
            image: "https://images.unsplash.com/photo-1581093458791-9f3113b8e8b3?q=80&w=1200&auto=format&fit=crop",
            highlights: [
                "Risk registers and hazard controls",
                "Safe operating limits documentation",
                "Aligned to HSW frameworks",
            ],
        },
    ],

    projects: [
        {
            id: "m1-pacific-motorway",
            title: "M1 Pacific Motorway Upgrade",
            description:
                "Road design and staging for a major arterial upgrade, integrating bus priority lanes and active transport crossings.",
            longDescription:
                "This project delivers a staged upgrade of a major arterial motorway corridor, adding dedicated bus priority lanes and new active transport crossings. Our team is responsible for the geometric design and construction staging plan, working closely with the road authority to minimise disruption to live traffic while the corridor is progressively widened and reconfigured.",
            tags: ["Road design", "BIM"],
            sector: "Transport & Urban",
            status: "in-progress",
            location: "Palmview, QLD",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?q=80&w=1200&auto=format&fit=crop",
            ],
            timeline: ["Concept & Feasibility", "Detailed Design", "Construction / Delivery", "Handover & Closeout"],
            currentStage: 2,
        },
        {
            id: "interchange-redevelopment",
            title: "Interchange Redevelopment",
            description:
                "Project management and BIM coordination for a multi‑modal interchange upgrade connecting rail and bus networks.",
            longDescription:
                "A multi‑modal interchange linking rail and bus networks is being redeveloped to improve passenger flow and accessibility. We are providing project management and BIM coordination across the design consultant team, tracking scope, program and cost while resolving clashes between structural, services and architectural models before construction begins.",
            tags: ["Project management", "BIM"],
            sector: "Transport & Urban",
            status: "in-progress",
            location: "Brisbane, QLD",
            image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
            ],
            timeline: ["Concept & Feasibility", "Detailed Design", "Construction / Delivery", "Handover & Closeout"],
            currentStage: 1,
        },
        // this is being upgraded to the road maintenance
        {
            id: "road-maintenance",
            title: "Road Maintenance",
            description:
                "Comprehensive road maintenance and rehabilitation services, including pavement repairs, resurfacing, drainage improvements, and road safety enhancements.",
            longDescription:
                "This project focused on restoring and maintaining key roadway infrastructure to improve safety, durability, and traffic flow. The scope included asphalt resurfacing, pothole repairs, pavement rehabilitation, line marking, drainage system upgrades, and routine maintenance works. Our team ensured all activities were completed in accordance with local engineering standards while minimizing disruptions to motorists through carefully planned traffic management and phased construction.",
            tags: ["Road Rehabilitation", "Asphalt Resurfacing", "Traffic Management"],
            sector: "Transport Infrastructure",
            status: "completed",
            location: "Melbourne, VIC",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop",
            ],
            timeline: [
                "Planning & Assessment",
                "Road Rehabilitation",
                "Surface Finishing",
                "Project Completion"
            ],
            currentStage: 3,
        },
        {
            id: "urban-corridor",
            title: "Urban Corridor Upgrade",
            description:
                "Geometric design and staging plan for an urban arterial corridor, balancing capacity with pedestrian safety.",
            longDescription:
                "This urban arterial corridor upgrade required a careful balance between vehicle capacity and pedestrian safety through a dense town centre. Our geometric design and staging plan sequenced the works around existing businesses and bus routes, and the project reached practical completion with strong safety outcomes for the local community.",
            tags: ["Road design", "Safety‑led design"],
            sector: "Transport & Urban",
            status: "in-progress",
            location: "Sydney, NSW",
            image: "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?q=80&w=1200&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
            ],
            timeline: ["Concept & Feasibility", "Detailed Design", "Construction / Delivery", "Handover & Closeout"],
            currentStage: 3,
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

    team: [
        {
            id: "hassan-masood",
            name: "Hassan Masood",
            role: "Founder & Executive Director",
            bio: "Hassan founded Crawford Engineering and leads its operations in Australia. He drives the company's vision, manages key projects and builds lasting relationships with clients and industry partners.",
            photo: "/team/HassanMasood.png",
            focalPoint: "50% 18%",
            group: "founders",
        },
        {
            id: "masood-ali",
            name: "Masood Ali",
            role: "Co-Founder & Chief Executive Officer (CEO)",
            bio: "As Co-Founder and CEO, Masood provides strategic leadership and oversees the company's overall direction, ensuring operational excellence, sustainable growth and the successful execution of the company's vision.",
            photo: "/team/MasoodAli.png",
            focalPoint: "50% 16%",
            group: "founders",
        },
        {
            id: "waqar-masood",
            name: "Waqar Masood",
            role: "Co-Founder, Chief Financial Officer (CFO) & Regional Director – UAE",
            bio: "As Co-Founder and CFO, Waqar manages financial strategy, business planning and regional operations in the UAE. He plays a key role in strengthening the company's international presence and ensuring financial efficiency.",
            photo: "/team/WaqarMasood.jpeg",
            focalPoint: "50% 16%",
            group: "founders",
        },
        {
            id: "umair-masood",
            name: "Umair Masood",
            role: "Co-Founder, Chief Marketing Officer (CMO) & Digital Strategy Lead",
            bio: "As Co-Founder and CMO, Umair leads the company's digital transformation, branding, marketing and public relations. He manages the company's online presence, website development and communication strategies to enhance global visibility.",
            photo: "/team/UmairMasood.jpg",
            focalPoint: "50% 12%",
            group: "founders",
        },
        {
            id: "adam-tahir",
            name: "Adam Tahir",
            role: "Regional Manager, Qatar",
            bio: "Adam supports Crawford Engineering's Qatar operations, overseeing delivery for transport and infrastructure projects across the region.",
            photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
            group: "employees",
        },
        {
            id: "alla-ismail",
            name: "Alla Ismail",
            role: "Regional Manager, UAE",
            bio: "Alla oversees Crawford Engineering's presence in the UAE, working closely with regional clients to deliver projects on time and to standard.",
            photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
            group: "employees",
        },
    ],

    offices: [
        {
            id: "australia",
            country: "Australia",
            address: "Level 1, Example Street, Brisbane QLD 4000",
        },
        {
            id: "qatar",
            country: "Qatar",
            address: "West Bay, Doha, Qatar",
        },
        {
            id: "dubai",
            country: "United Arab Emirates",
            address: "Business Bay, Dubai, UAE",
        },
    ],

    jobOpenings: [
        {
            id: "road-design-engineer",
            title: "Road Design Engineer",
            type: "Full-time",
            location: "Brisbane, QLD",
            department: "Infrastructure",
            description:
                "Deliver geometric design and staging plans for road and corridor upgrade projects, working closely with senior engineers and road authorities.",
        },
        {
            id: "project-coordinator",
            title: "Project Coordinator",
            type: "Full-time",
            location: "Melbourne, VIC",
            department: "Project Management",
            description:
                "Support project managers with scheduling, documentation and stakeholder coordination across transport and campus infrastructure projects.",
        },
        {
            id: "bim-technician",
            title: "BIM Technician",
            type: "Contract",
            location: "Remote (AUS)",
            department: "Infrastructure",
            description:
                "Build and coordinate multi-discipline models, run clash detection and prepare asset data handovers for infrastructure projects.",
        },
    ],

    testimonials: [
        {
            id: "t1",
            quote:
                "Crawford Engineering managed our interchange upgrade with a level of coordination we hadn't seen before. Every clash was caught in the model long before it became a site problem.",
            author: "Project Director",
            role: "Transport Authority Client",
            company: "State Roads Agency",
        },
        {
            id: "t2",
            quote:
                "The commissioning documentation for our lab refurbishment was thorough and easy for our facilities team to pick up. SOPs were written for the people who'd actually use them.",
            author: "Facilities Manager",
            role: "Higher Education Client",
            company: "University Campus",
        },
        {
            id: "t3",
            quote:
                "Clear reporting and a realistic program from day one. We always knew exactly where the project stood, which made our own stakeholder updates a lot easier.",
            author: "Program Manager",
            role: "Infrastructure Client",
            company: "Regional Development Authority",
        },
    ],

    contact: {
        email: "info@crawfordengineering.com",
        phone: "+61 450 850 587",
        office: "Level 1, Example Street, Brisbane QLD 4000",
    },
};
