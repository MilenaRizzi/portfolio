import styled from "styled-components";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Techs } from "./components/Techs";
import { GlobalStyle } from "./styles/global";
import { FaArrowCircleUp } from "react-icons/fa";
import { HomeContainer } from "./styles";
const BackToTopIcon = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
        opacity: .8;

  }
`;
function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HomeContainer>
        <AboutMe />
        <Techs />
        <Projects />
        <Education />
        <Contact />
        <Footer />
        <BackToTopIcon onClick={scrollToTop}>
          <FaArrowCircleUp color="#95BBE9" />
        </BackToTopIcon>
      </HomeContainer>
      <GlobalStyle />
    </>
  );
}

export default App;
