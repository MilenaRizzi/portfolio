import { HeaderContainer, NavigatorMenu } from "./styles";
import logo from "../../assets/logo.png";
export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <NavigatorMenu>
        <p onClick={() => scrollToSection("projetos")}>Projetos</p>
        <p onClick={() => scrollToSection("academico")}>Acadêmico</p>
        <p onClick={() => scrollToSection("contato")}>Fale Comigo</p>
      </NavigatorMenu>
    </HeaderContainer>
  );
}
