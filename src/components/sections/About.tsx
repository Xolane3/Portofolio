import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase text-primary">
              About Me
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              A Developer Who{" "}
              <span className="gradient-text">Designs & Innovates</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I am <strong className="text-foreground">Xolane Shabalala</strong>, a Multimedia Student and Software Developer with experience in React, ASP.NET C#, UI/UX Design, Front-End Development, IT Support, and Technical Research.
              </p>
              <p>
                I enjoy building modern web applications, designing intuitive user experiences, and solving real-world challenges through technology. My work spans software development, graphic design, website development, branding, and research-driven innovation.
              </p>
              <p>
                I led <strong className="text-foreground">Amanzi Mpilo</strong>, an IoT-based greywater monitoring solution focused on improving water sustainability in South Africa, combining stakeholder analysis, cost-benefit analysis, and proof-of-concept design.
              </p>
              <p>
                I am passionate about creating impactful digital products that combine clean design, strong functionality, and meaningful business value.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1+</div>
                <div className="mt-1 text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="mt-1 text-sm text-muted-foreground">Projects Built</div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="mt-1 text-sm text-muted-foreground">Technologies</div>
              </div> */}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border bg-surface p-8 lg:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">XS</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground">Xolane Shabalala</div>
                    <div className="text-sm text-muted-foreground">Full-Stack Emerging Developer</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Software Development", level: 90 },
                    { label: "UI/UX Design", level: 85 },
                    { label: "IT Support", level: 80 },
                    { label: "Research & Innovation", level: 75 },
                  ].map((skill) => (
                    <div key={skill.label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-muted-foreground">{skill.label}</span>
                        <span className="text-primary font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-xl bg-primary/10 border border-primary/20 -z-10" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl bg-secondary border border-border -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
