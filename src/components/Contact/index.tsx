import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPaperPlane } from "@fortawesome/free-solid-svg-icons"; // Importe o ícone correto
import {
  ContactContainer,
  ContactInfos,
  LinksContainer,
  StyledImage,
} from "./styles";

export function Contact() {
  return (
    <ContactContainer id="contato">
      <ContactInfos>
        <div>
          <h1>Les't talk</h1>
          <p>
            <FontAwesomeIcon icon={faPhone} size="lg" /> +51 (48)992079910
          </p>
          <p>
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
            milenaribeirorizzi@gmail.com
          </p>
        </div>
        <LinksContainer>
          <a
            href="https://drive.google.com/file/d/14g_TRrgG7yEAy1Lsi3Hh2zyBWoKuAK52/view?usp=sharing"
            target="blank"
          >
            Acesse Meu Currículo
          </a>
          <a
            href="https://www.linkedin.com/in/milena-clara-rizzi-a38944254/"
            target="blank"
          >
            Conecte-me no Linkedin
          </a>
        </LinksContainer>
      </ContactInfos>
      <div>
        <StyledImage src="src\assets\contact1.png" alt="" />
      </div>
    </ContactContainer>
  );
}
