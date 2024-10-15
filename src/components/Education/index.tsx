import {
  Courses,
  EducationContent,
  ModalContent,
  ModalOverlay,
} from "./styles";
import Unisul from "../../assets/unisul2.png";
import CertificadoSenai from "../../assets/final.pdf"; // Certificado PDF
import CertificadoCursoEmVideo from "../../assets/mySQLCertificado.jpg"; // Imagem do certificado
import CursoEmVideo from "../../assets/cursoEmVideo.png";
import Senai from "../../assets/senai.png";
import { useState } from "react";
import { AcademicCard } from "./AcademicCard";

type ModalType = "image" | "pdf" | null;

export function Education() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (contentSrc: string, type: ModalType) => {
    setModalContent(contentSrc);
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
    setModalType(null);
  };

  return (
    <div id="academico">
      <EducationContent>
        <h1>Acadêmico</h1>
        <AcademicCard
          title="Formação - Junho de 2026"
          imageUrl={Unisul}
          titleProperties="Matérias importantes:"
          properties={[
            { name: "Programação Orientada a Objetos", url: "" },
            { name: "Algoritmos e Estruturas de Dados", url: "" },
            { name: "Análise de Dados", url: "" },
          ]}
          propertyType="link"
        />
          <h1>Certificações</h1>
        <Courses>
            <AcademicCard
              title="Análise e Desenvolvimento Web"
              imageUrl={Senai}
              titleProperties="GitHub"
              properties={[
                {
                  name: "Projeto Final - Módulo 1",
                  url: "https://example.com/certificado-senai",
                },
                {
                  name: "Projeto Final - Módulo 2",
                  url: "https://example.com/certificado-senai",
                },
                {
                  name: "Projeto Final - Módulo 3",
                  url: "https://example.com/certificado-senai",
                },
              ]}
              onOpenModal={() => openModal(CertificadoSenai, "pdf")}
              propertyType="link" // Define como link
            />
            <AcademicCard
              title="MySql"
              imageUrl={CursoEmVideo}
              titleProperties="Práticas"
              properties={[
                {
                  name: "Certificado MySql",
                  url: "https://example.com/certificado-mysql",
                },
              ]}
              onOpenModal={() => openModal(CertificadoCursoEmVideo, "image")}
              propertyType="link" // Define como link
            />
            <AcademicCard
              title="MySql"
              imageUrl={CursoEmVideo}
              titleProperties="Práticas"
              properties={[
                {
                  name: "Certificado MySql",
                  url: "https://example.com/certificado-mysql",
                },
              ]}
              onOpenModal={() => openModal(CertificadoCursoEmVideo, "image")}
              propertyType="link" // Define como link
            />
            <AcademicCard
              title="MySql"
              imageUrl={CursoEmVideo}
              titleProperties="Práticas"
              properties={[
                {
                  name: "Certificado MySql",
                  url: "https://example.com/certificado-mysql",
                },
              ]}
              onOpenModal={() => openModal(CertificadoCursoEmVideo, "image")}
              propertyType="link" // Define como link
            />
          
        </Courses>
      </EducationContent>
      {modalOpen && modalContent && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent>
            <button onClick={closeModal}>Fechar</button>
            {modalType === "pdf" ? (
              <iframe
                src={modalContent}
                width="600"
                height="400"
                style={{ border: "none" }}
              />
            ) : (
              <img
                src={modalContent}
                width={600}
                height={400}
                alt="Certificação"
              />
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
}
