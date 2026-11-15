import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/content";

export const Projects = () => (
  <Section
    id="projects"
    eyebrow="Work"
    title="Selected projects"
    subtitle="Some work I have done"
  >
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.url} {...project} />
      ))}
    </div>
  </Section>
);
