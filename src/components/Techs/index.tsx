import { useEffect, useRef } from "react";
import HTML5 from "../../assets/HTML5.png";
import CSS3 from "../../assets/CSS3.png";
import Javascript from "../../assets/Javascript.png";
import TypeScript from "../../assets/TypeScript.png";
import React from "../../assets/React.png";
import Java from "../../assets/Java.png";
import Spring from "../../assets/spring.png";
import Postgres from "../../assets/postgres.png";

import { TechsContainer } from "./styles";

export function Techs() {
  const techsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Verifica se o techsRef e o current não são nulos antes de usar
    if (techsRef.current) {
      const techs = techsRef.current.querySelectorAll("img");
      techs.forEach((tech) => observer.observe(tech));
    }

    return () => {
      if (techsRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const techs = techsRef.current.querySelectorAll("img");
        techs.forEach((tech) => observer.unobserve(tech));
      }
    };
  }, []);

  return (
    <TechsContainer ref={techsRef}>
      <h1>Tecnologias</h1>
      <div>
        <img src={HTML5} alt="HTML5" />
        <img src={CSS3} alt="CSS3" />
        <img src={Javascript} alt="JavaScript" />
        <img src={TypeScript} alt="TypeScript" />
        <img src={React} alt="React" />
        <img src={Java} alt="Java" />
        <img src={Spring} alt="Spring" />
        <img src={Postgres} alt="Postgres" />
      </div>
    </TechsContainer>
  );
}
