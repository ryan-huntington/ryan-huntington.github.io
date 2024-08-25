import { useParams } from "react-router-dom";
import ProjectTemplate from "../components/ProjectTemplate";
import projectData from "../assets/projectsData.json";
function ProjectPage() {
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  // Find the project based on the ID from the URL
  const project = projectData.find((p) => p.id === numericId);

  return (
    <div className="project-page">
      {project ? <ProjectTemplate data={project} /> : <p>Project not found.</p>}
    </div>
  );
}
export default ProjectPage;
