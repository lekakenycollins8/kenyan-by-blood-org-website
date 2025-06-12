// team.ts
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Derrick Ngokonyo",
    role: "Team Lead",
    imageUrl: "/images/team/derrick.jpg",
  },
  {
    id: "2",
    name: "Dennis Muigai",
    role: "Team Lead",
    imageUrl: "/images/team/dennis.jpg",
  },
  {
    id: "3",
    name: "Benedict Kiriri",
    role: "Media and Communications Lead",
    imageUrl: "/images/team/benedict.jpg",
  },
  {
    id: "4",
    name: "Nancy Muthoni Nyaga",
    role: "Digital Lead",
    imageUrl: "/images/team/nancy.jpg",
  },
  {
    id: "5",
    name: "Valentine Mwende",
    role: "Spokesperson",
    imageUrl: "/images/team/valentine.jpg",
  },
  {
    id: "6",
    name: "Lekakeny Collins",
    role: "IT and Development Lead",
    imageUrl: "/images/team/lekakeny.jpg",
  }
];