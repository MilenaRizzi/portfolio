import { ProjectCard } from "./ProjectCard";
import { ProjectsContainer, ProjectsInfo, Title } from "./styles";

export function Projects() {
  return (
    <ProjectsContainer id="projetos">
      <Title>Projects</Title>
      <ProjectsInfo>
        <ProjectCard
          title="LabFoods"
          description=" Aplicaçao Full-Stack desenvolvida durante o módulo 3 do curso Analise e desenvolvimento web, Senai"
          frontEndLink="https://github.com/FuturoDEV-Tubarao/M3P-FrontEnd-Squad1"
          backEndLink="https://github.com/FuturoDEV-Tubarao/M3P-BackEnd-Squad1"
          videoUrl="https://www.youtube.com/embed/iX-QaNzd-0Y?si=Di6dWO4lhZ_HTBDb"
        />
        {/* <ProjectCard
          title="Dev-Stores"
          description="Aplicação em Next.js desenvolvida durante o curso de Next da Plataforma Rocket-Seat."
          frontEndLink="https://github.com/MilenaRizzi/devstore"
          // backEndLink="https://github.com/back-end"
          videoUrl="https://www.youtube.com/embed/iX-QaNzd-0Y?si=Di6dWO4lhZ_HTBDb"
        /> */}
        <ProjectCard
          title="ToDo List"
          description="Aplicação Full-Stack, desenvolvida por mim, com objetivo de consolidar conceitos. Ao lado um vídeo com explicação de todo funcionamento da aplicação"
          frontEndLink="https://github.com/front-end"
          backEndLink="https://github.com/back-end"
          videoUrl="https://www.youtube.com/embed/mAQ7fTsR4r8?si=X6RyalFJejS-CRHI"
        />
      </ProjectsInfo>
    </ProjectsContainer>
  );
}
