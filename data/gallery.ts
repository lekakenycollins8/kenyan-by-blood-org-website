// Gallery data types and content
export interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  thumbnailUrl?: string;
  location?: string;
  eventName?: string;
  date: string;
  tags?: string[];
}

export interface Album {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  date: string;
  location?: string;
  photos: Photo[];
}

// Sample gallery data
export const GALLERY_ALBUMS: Album[] = [
  {
    id: "samburu-blood-drive-2025",
    title: "World Blood Donor Day Celebrations in Samburu Blood Drive 2025",
    description: "A blood drive event in Samburu in celebrations of the World Blood Donor Day with over 500 donors participating.",
    coverImage: "/images/samburu-BD/samburu-0.jpg",
    date: "June 14, 2025",
    location: "Samburu County referral hospital, Samburu",
    photos: [
      {
        id: "samburu-1",
        title: "Donors Lined Up",
        description: "Donors lined up for a photo opportunity before donating blood.",
        imageUrl: "/images/samburu-BD/samburu-1.jpg",
        date: "June 14, 2025",
        eventName: "Samburu Blood Drive 2025",
        location: "Samburu County referral hospital, Samburu",
        tags: ["registration", "volunteers"]
      },
      {
        id: "samburu-2",
        title: "Changia Damu Team in Action",
        description: "Changia Damu team members assisting donors during the blood drive.",
        imageUrl: "/images/samburu-BD/samburu-2.jpg",
        date: "June 14, 2025",
        eventName: "Samburu Blood Drive 2025",
        location: "Samburu County referral hospital, Samburu",
        tags: ["donation", "medical"]
      },
      {
        id: "samburu-3",
        title: "Donation in Progress",  
        description: "A donor giving blood during the event.",
        imageUrl: "/images/samburu-BD/samburu-3.jpg",
        date: "June 14, 2025",
        eventName: "Samburu Blood Drive 2025",
        location: "Samburu County referral hospital, Samburu",
        tags: ["refreshments", "recovery"]
      },
      {
        id: "samburu-4",
        title: "Medics with Donors unpacking Supplies",
        description: "A group of medics with donors unpacking supplies for the blood drive.",
        imageUrl: "/images/samburu-BD/samburu-4.jpg",
        date: "June 14, 2025",
        eventName: "Samburu Blood Drive 2025",
        location: "Samburu County referral hospital, Samburu",
        tags: ["group", "community"]
      },
      {
        id: "samburu-5",
        title: "Group Photo of Donation in Progress",
        description: "A group photo of the donors.",
        imageUrl: "/images/samburu-BD/samburu-5.jpg",
        date: "June 14, 2025",
        eventName: "Samburu Blood Drive 2025",
        location: "Samburu County referral hospital, Samburu",
        tags: ["community", "engagement"]
      }
    ]
  },
  {
    id: "palladium-group-office-drive",
    title: "Palladium Group Office Blood Drive",
    description: "A successful blood drive at the Palladium Group office, with employees actively participating.",
    coverImage: "/images/palladium/palladium-0.jpg",
    date: "June 21, 2024",
    location: "Palladium Group Office, Nairobi",
    photos: [
      {
        id: "palladium-1",
        title: "Medics with Employee Donors",
        description: "Employees of Palladium Group with medics being prepared for blood donation during the office drive.",
        imageUrl: "/images/palladium/palladium-1.JPG",
        date: "June 21, 2024",
        eventName: "Palladium Group Office Blood Drive",
        location: "Palladium Group Office, Nairobi",
        tags: ["employees", "donation"]
      },
      {
        id: "palladium-2",
        title: "Organizing Team and Volunteers",
        description: "The organizing team from KBBF and Palladium Group facilitating the blood drive.",
        imageUrl: "/images/palladium/palladium-2.jpg",
        date: "June 21, 2024",
        eventName: "Palladium Group Office Blood Drive",
        location: "Palladium Group Office, Nairobi",
        tags: ["team", "organization"]
      },
      {
        id: "palladium-3",
        title: "Donor Screening",
        description: "Medical professionals conducting pre-donation screenings.",
        imageUrl: "/images/palladium/palladium-3.jpg",
        date: "June 21, 2024",
        eventName: "Palladium Group Office Blood Drive",
        location: "Palladium Group Office, Nairobi",
        tags: ["refreshments", "community"]
      },
      {
        id: "palladium-4",
        title: "Blood Donation in Progress",
        description: "A group of employees donating blood during the drive.",
        imageUrl: "/images/palladium/palladium-4.JPG",
        date: "June 21, 2024",
        eventName: "Palladium Group Office Blood Drive",
        location: "Palladium Group Office, Nairobi",
        tags: ["donation", "medical"]
      },
      {
        id: "palladium-5",
        title: "Group Photo of Employees Donating Blood",
        description: "A group photo of all employees donating blood.",
        imageUrl: "/images/palladium/palladium-5.jpg",
        date: "June 21, 2024",
        eventName: "Palladium Group Office Blood Drive",
        location: "Palladium Group Office, Nairobi",
        tags: ["community", "engagement"]
      }
    ]
  },
  {
    id: "muranga-youth-empowernment-and-mentorship-event",
    title: "Muranga Youth Empowerment and Mentorship Event",
    description: "A blood drive event organized by the Muranga Youth to empower and mentor the youth in Muranga County.",
    coverImage: "/images/embu-ushers/embu-03.jpg",
    date: "October 4-6, 2024",
    location: "Muranga University & Michuki Technical",
    photos: [
      {
        id: "embu-1",
        title: "Donor Screening",
        description: "Medical professionals screening donors before the blood donation.",
        imageUrl: "/images/embu-ushers/embu-0.jpg",
        date: "October 4-6, 2024",
        eventName: "Muranga Youth Empowerment and Mentorship Event",
        location: "Muranga University & Michuki Technical",
        tags: ["screening", "medical"]
      },
      {
        id: "embu-2",
        title: "Donor Registration",
        description: "Donors registering for the blood drive at the event.",
        imageUrl: "/images/embu-ushers/embu-02.jpg",
        date: "October 4-6, 2024",
        eventName: "Muranga Youth Empowerment and Mentorship Event",
        location: "Muranga University & Michuki Technical",
        tags: ["registration", "volunteers"]
      },
      {
        id: "embu-3",
        title: "Donors Lined Up",
        description: "Donors lined up to give blood during the event.",
        imageUrl: "/images/embu-ushers/embu-04.jpg",
        date: "October 4-6, 2024",
        eventName: "Muranga Youth Empowerment and Mentorship Event",
        location: "Muranga University & Michuki Technical",
        tags: ["donation", "medical"]
      },
      {
        id: "embu-4",
        title: "Donor donating Blood",
        description: "A donor giving blood during the event.",
        imageUrl: "/images/embu-ushers/embu-05.jpg",
        date: "October 4-6, 2024",
        eventName: "Muranga Youth Empowerment and Mentorship Event",
        location: "Muranga University & Michuki Technical",
        tags: ["refreshments", "community"]
      },
      {
        id: "embu-5",
        title: "Organizing Team and Volunteers",
        description: "The organizing team from KBBF and Muranga Youth Empowerment and Mentorship Event facilitating the blood drive.",
        imageUrl: "/images/embu-ushers/embu-06.jpg",
        date: "October 4-6, 2024",
        eventName: "Muranga Youth Empowerment and Mentorship Event",
        location: "Muranga University & Michuki Technical",
        tags: ["team", "organization"]
      }
    ]
  }
];
