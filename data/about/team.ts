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
    name: "Andrew Maingi",
    role: "Growth and Partnerships Lead",
    imageUrl: "/images/team/andrew.jpg",
  },
  {
    id: "5",
    name: "David Masese",
    role: "Growth and Partnerships Lead",
    imageUrl: "/images/team/masese.jpg",
  },
  {
    id: "6",
    name: "Prince Muraguri",
    role: "Research Monitoring and Evaluation Lead",
    imageUrl: "/images/team/price.jpg",
  },
  {
    id: "7",
    name: "Nancy Muthoni Nyaga",
    role: "Digital Lead",
    imageUrl: "/images/team/nancy.jpg",
  },
  {
    id: "8",
    name: "Dr. Valentine Mwende",
    role: "Spokesperson",
    imageUrl: "/images/team/valentine.jpg",
  },
  {
    id: "9 ",
    name: "Lamech Koibarak",
    role: "Monitoring and Evaluation Lead",
    imageUrl: "/images/team/lamech.jpg",
  },
  {
    id: "10",
    name: "Rashid Salim",
    role: "Programs Coordinator",
    imageUrl: "/images/team/rashid.jpg",
  },
  {
    id: "11",
    name: "Lekakeny Collins",
    role: "IT and Development Lead",
    imageUrl: "/images/team/lekakeny.jpg",
  },
  {
    id: "12",
    name: "Anthony Odhek",
    role: "Legal Counsel",
    imageUrl: "/images/team/anthony.jpg",
  }
];