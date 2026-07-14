import type { EducationItem } from "@/types/portfolio";

export const profile = {
  age: 18,
  country: "brazil",
} as const;

export const educationItems: readonly EducationItem[] = [
  {
    id: "programming",
    icon: "code",
    institution: "Escola Padre Alberto Neto",
    location: "Queluz, Portugal",
  },
  {
    id: "highSchool",
    icon: "school",
  },
  {
    id: "universityGoal",
    icon: "university",
    institution: "Universidade Aberta",
    location: "Portugal",
    status: "planned",
  },
] as const;
