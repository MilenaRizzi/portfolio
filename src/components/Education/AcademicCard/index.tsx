import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardProperties,
  ViewImageLink,
} from "./styles";

interface Property {
  name: string;
  url: string;
}

interface AcademicCardProps {
  title: string;
  imageUrl: string;
  titleProperties: string;
  properties: Property[]; // Alterado para usar Property[]
  onOpenModal?: (imageUrl: string) => void;
  propertyType?: "text" | "link";
}

export function AcademicCard({
  title,
  imageUrl,
  titleProperties,
  properties,
  onOpenModal,
  propertyType = "text",
}: AcademicCardProps) {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        {onOpenModal && (
          <ViewImageLink onClick={() => onOpenModal(imageUrl)}>
            Certificação
          </ViewImageLink>
        )}
        <p>{titleProperties}</p>
        <CardProperties>
          {properties.map((property, index) =>
            propertyType === "link" ? (
              <ul>
                <li>
                  <a
                    href={property.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {property.name}
                  </a>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <p key={index}>{property.name}</p>
                </li>
              </ul>
            )
          )}
        </CardProperties>
      </CardContent>
    </CardContainer>
  );
}
