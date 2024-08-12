export type CertificationLevel = "Beginner" | "Intermediate" | "Expert";

export interface CertificationCardProps {
  id: number;
  provider: string;
  certification_name: string;
  level: CertificationLevel;
  description: string;
  tags: string[];
  official_link: string;
  onClick: () => void;  // Function to handle click event
}
