import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Palette,
  Wrench,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Software Development",
    icon: Code2,
    color: "oklch(0.75 0.14 75)",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "ASP.NET",
      "C#",
      "REST APIs",
      "Git & GitHub",
      "Responsive Web Development",
    ],
  },
  {
    title: "UI/UX & Design",
    icon: Palette,
    color: "oklch(0.65 0.14 290)",
    skills: [
      "UI Design",
      "UX Design",
      "Wireframing",
      "Prototyping",
      "Figma",
      "Design Systems",
    ],
  },
  {
    title: "IT & Infrastructure",
    icon: Wrench,
    color: "oklch(0.6 0.12 170)",
    skills: [
      "IT Support",
      "Computer Troubleshooting",
      "Network Configuration",
      "DNS Management",
      "Domain Configuration",
      "Microsoft Office",
      "Hardware & Software Support",
    ],
  },
  {
    title: "Research & Innovation",
    icon: Lightbulb,
    color: "oklch(0.7 0.12 50)",
    skills: [
      "IoT Systems",
      "ESP32 Development",
      "Water Sustainability Research",
      "Stakeholder Analysis",
      "Cost-Benefit Analysis",
      "Proof of Concept (POC) Design",
      "Technical Documentation",
    ],
  },
];

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative rounded-2xl border border-border bg-surface p-6 lg:p-8 hover:bg-surface-raised transition-colors duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl border"
          style={{
            backgroundColor: `${category.color}15`,
            borderColor: `${category.color}25`,
          }}
        >
          <Icon className="h-5 w-5" style={{ color: category.color }} />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-secondary text-muted-foreground border border-border hover:text-foreground hover:border-primary/20 transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-primary">
            Expertise
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            A versatile skill set spanning software development, design, infrastructure, and research.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
