export interface EducationEntry {
  institution: string;
  program: string;
  startDate: string;
  endDate: string;
  location: string;
}

export const education: EducationEntry[] = [
  {
    institution: "EAN University",
    program: "Systems Engineering",
    startDate: "Jul 2026",
    endDate: "Present",
    location: "Medellín, Colombia",
  },
  {
    institution: "SENA",
    program: "Associate Degree, Software Analysis and Development",
    startDate: "Jan 2024",
    endDate: "May 2026",
    location: "Medellín, Colombia",
  },
];
