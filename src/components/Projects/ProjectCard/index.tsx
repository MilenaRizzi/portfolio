import { Links, ProjectCardContainer, ProjectInfos } from "./styles";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  frontEndLink?: string;
  backEndLink?: string;
  videoUrl: string;
}

export function ProjectCard({
  title,
  description,
  frontEndLink,
  backEndLink,
  videoUrl,
}: ProjectCardProps) {
  return (
    <ProjectCardContainer>
      <ProjectInfos>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <Links>
          {frontEndLink && (
            <a href={frontEndLink} target="_blank" rel="noopener noreferrer">
              <FaGithub size={18} />
              Front-End
            </a>
          )}
          {backEndLink && (
            <a href={backEndLink} target="_blank" rel="noopener noreferrer">
              <FaGithub size={18} />
              Back-End
            </a>
          )}
        </Links>
      </ProjectInfos>
      <iframe src={videoUrl} title="YouTube video player" />
    </ProjectCardContainer>
  );
}
