import {
  ModalOverlay,
  ModalContent,
  Paragraph,
  Timeline,
  TimelineItem,
  TimelineDate,
  TimelineCircle,
  TimelineEvent,
  CloseButton,
  TimeLineContent,
  AboutMeContent, // Importando o CloseButton correto
} from "./styles";

export function ModalAboutMe({ onClose }: { onClose: () => void }) {
  return (
    <ModalOverlay>
      <ModalContent>
        {/* Colocar o botão de fechar no lugar certo */}
        <CloseButton onClick={onClose}>Fechar</CloseButton>
        <AboutMeContent>
          <h1>Sobre Mim</h1>
          <Paragraph>
            Meu nome é Milena, tenho 26 anos, e atualmente curso 5º período
            da graduação de <strong>Ciências da Computação</strong>, na Universidade do Sul de Santa Catarina.
          </Paragraph>
          <Paragraph>
            Recentemente, finalizei o curso de Analista de Desenvolvimento Web
            no Senai-SC, com duração de out/2023 a julho/2024. Durante os 9 meses de curso, pude
            adquirir habilidades em front-end (HTML, CSS, JavaScript, TypeScript,
            React, Styled-components), back-end (Java, Spring, PostgreSQL) e full-stack, onde há toda a integração de todo o sistema. Além disso, também pude ter a chance de aprofundar meus conhecimentos em ferramentas essenciais como Git, GitHub, Trello e  pude aprender sobre conceitos de virtualização e metologias ágeis.  
          </Paragraph>
          <Paragraph>
            Durante o curso, participei de diversos projetos práticos, incluindo o projeto final, no qual
            desenvolvi, em equipe, uma aplicação full stack de receitas, onde era possível o cadastro de usuário, login, cadastro de receitas e interação dos usuários por meio de votos em receitas cadastradas. Neste projeto, fiquei responsável pela integração entre front-end e back-end, o que foi
            essencial para aplicar na prática meus conhecimentos e entender a distribuição de tarefas e organização em equipe no ambiente de desenvolvimento.
          </Paragraph>
          <Paragraph>
            Ainda não possuo experiência profissional, entretanto, adquiri
            experiência e conhecimento em projetos pessoais, projetos da
            faculade e de cursos, como o citado acima.
          </Paragraph>
          <Paragraph>
            Busco oportunidade de estágio na área de desenvolvimento, onde
            poderei aplicar minhas habilidades de forma profissional. Sou uma
            pessoa proativa, que valoriza o trabalho em equipe e está sempre
            disposta a aprender e a contribuir.
          </Paragraph>
        </AboutMeContent>
        <TimeLineContent>
          <h1>Linha do Tempo</h1>
          <p>Um pouquinho do percursso de meu aprendizado</p>
          <Timeline>
            <TimelineItem>
              <TimelineDate>06/2022</TimelineDate>
              <TimelineCircle />
              <TimelineEvent>
                Inicio do curso de Ciências da Computação
              </TimelineEvent>
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>2022</TimelineDate>
              <TimelineCircle />
              <TimelineEvent>
                Primeiros passos com lógica de programação
              </TimelineEvent>
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>2023</TimelineDate>
              <TimelineCircle />
              <TimelineEvent>
                Primeiro Projeto - HTML, CSS:
                <a href="https://github.com/MilenaRizzi/projeto-cordel">
                  {" "}
                  Projeto Cordel
                </a>
              </TimelineEvent>
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>2023</TimelineDate>
              <TimelineCircle />
              <TimelineEvent>
                Curso RocketSeat, projetos react:{" "}
                <a href="https://github.com/MilenaRizzi/github-blog">
                  github-blog,
                </a>{" "}
                <a href="https://github.com/MilenaRizzi/dt-money">dt-money,</a>{" "}
                <a href="https://github.com/MilenaRizzi/app-timer">app-timer</a>
              </TimelineEvent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDate>2023</TimelineDate>
              <TimelineCircle />
              <TimelineEvent>
                Início do curso Analista de Desenvolvimento Web:{" "}
                <a href="https://github.com/MilenaRizzi/projetos-senai">
                  projetos-senai
                </a>
              </TimelineEvent>
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>2024</TimelineDate>
              <TimelineCircle />
              <TimelineEvent>
                Término do curso Analista de desenvolvimento web
              </TimelineEvent>
            </TimelineItem>
          </Timeline>
        </TimeLineContent>
      </ModalContent>
    </ModalOverlay>
  );
}
