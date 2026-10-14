import Section from "../components/Section.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects as defaultProjects } from "../data/projects.js";

export default function Projects({ projects = defaultProjects }) {
  return (
    <Section id="proyectos" title="Proyectos">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
