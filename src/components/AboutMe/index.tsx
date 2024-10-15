import { Header } from "../Header";
import {
  Container,
  AboutContainer,
  AboutContent,
  InfosProfile,
  ButtonLestTalk,
  ImageProfile,
  SocialIcons,
} from "./styled";
import { useState } from "react";
import { ModalAboutMe } from "./ModalAboutMe";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

export function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Container>
        <Header />
        <AboutContainer>
          <AboutContent>
            <InfosProfile>
              <div>
                <p>Olá, seja bem-vindo!</p>
                <h1>Me chamo Milena Clara Rizzi,</h1>
                <p>Sou estudante de Ciências da Computação</p>
              </div>
              <SocialIcons>
                <a href="https://github.com/MilenaRizzi" target="blank">
                  <FaGithub size={32} />
                </a>
                <a href="https://www.linkedin.com/in/milena-clara-rizzi-a38944254/" target="blank">
                  <FaLinkedin size={32} />
                </a>
                <a href="#">
                  <FaGoogle size={32} />
                </a>
              </SocialIcons>
            </InfosProfile>
            {/* Botão que abre o modal */}
            <ButtonLestTalk onClick={openModal}>Sobre mim</ButtonLestTalk>
          </AboutContent>
          <div>
            <ImageProfile src="src/assets/myPhoto.jpg" alt="" />
          </div>
        </AboutContainer>
        {/* Condicionalmente renderizar o modal */}
      </Container>
      {isModalOpen && (
        <div>
          <ModalAboutMe onClose={closeModal} />
        </div>
      )}
    </div>
  );
}
