import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xolane Shabalala | Software Developer & UI/UX Designer" },
      { name: "description", content: "Full-Stack Emerging Developer with React, ASP.NET C#, UI/UX Design, IT Support, and Research experience. Building digital solutions through software development, design & innovation." },
      { property: "og:title", content: "Xolane Shabalala | Software Developer & UI/UX Designer" },
      { property: "og:description", content: "Full-Stack Emerging Developer with React, ASP.NET C#, UI/UX Design, IT Support, and Research experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
