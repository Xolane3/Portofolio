import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Droplets,
  Globe,
  LayoutTemplate,
  Palette,
  type LucideIcon,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  iconColor: string;
  featured?: boolean;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Amanzi Mpilo",
    description:
      "An IoT-based greywater monitoring solution focused on improving water sustainability in South Africa. Includes stakeholder analysis, cost-benefit analysis, sustainability research, proof-of-concept design, and ESP32-based monitoring architecture.",
    tags: [
      "IoT Water Monitoring",
      "Stakeholder Analysis",
      "Cost-Benefit Analysis",
      "Sustainability Research",
      "POC Design",
    ],
    icon: Droplets,
    iconColor: "oklch(0.6 0.12 220)",
    featured: true,
    link: "#",
  },

  {
    title: "Portfolio & Business Websites",
    description:
      "Professional portfolio and business websites built using React and modern web technologies. Includes responsive design, modern UI/UX, SEO optimization, performance tuning, DNS configuration, hosting setup, and full deployment.",
    tags: [
      "React Development",
      "Responsive Design",
      "UI/UX Design",
      "DNS & Domain Configuration",
      "Website Deployment",
    ],
    icon: Globe,
    iconColor: "oklch(0.75 0.14 75)",
    link: "https://www.bentechhub.co.za/",
  },

  {
    title: "ASP.NET C# Applications",
    description:
      "Full-stack applications built using ASP.NET C# including authentication systems, CRUD applications, database integration, dashboards, and business management systems.",
    tags: [
      "ASP.NET C#",
      "CRUD Applications",
      "Database Integration",
      "Authentication Systems",
      "Business Systems",
    ],
    icon: LayoutTemplate,
    iconColor: "oklch(0.65 0.14 260)",
    link: "https://the-one.d3orocytspub4f.amplifyapp.com/",
  },

  {
    title: "Graphic Design & Branding",
    description:
      "Professional branding and graphic design projects including logos, flyers, business cards, banners, social media content, marketing materials, and complete visual identity systems.",
    tags: [
      "Logo Design",
      "Business Cards",
      "Flyers",
      "Banners",
      "Brand Identity",
      "Social Media Graphics",
    ],
    icon: Palette,
    iconColor: "oklch(0.7 0.14 320)",
    link: "https://drive.google.com/file/d/1u_oGm22zJfS2yzy2D6AnMW2pnru3Qn1A/view",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className={`group relative rounded-2xl border border-border bg-surface overflow-hidden hover:bg-surface-raised transition-all duration-300 ${
        project.featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between mb-5">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl border"
            style={{
              backgroundColor: `${project.iconColor}12`,
              borderColor: `${project.iconColor}20`,
            }}
          >
            <Icon className="h-6 w-6" style={{ color: project.iconColor }} />
          </div>
          {project.featured && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="mt-3 text-muted-foreground leading-relaxed text-sm lg:text-base">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View Project
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: project.iconColor }}
      />
    </motion.div>
  );
}

export function Projects() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-primary">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            A selection of my work across software development, design, and research innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
