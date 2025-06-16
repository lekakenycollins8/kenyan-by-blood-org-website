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
    id: "blood-drive-nairobi-2025",
    title: "Nairobi Blood Drive 2025",
    description: "Our largest blood drive event in Nairobi, with over 500 donors participating.",
    coverImage: "https://images.pexels.com/photos/6823539/pexels-photo-6823539.jpeg",
    date: "March 15, 2025",
    location: "Kenyatta National Hospital, Nairobi",
    photos: [
      {
        id: "nairobi-1",
        title: "Registration Desk",
        description: "Volunteers helping donors complete their registration forms.",
        imageUrl: "https://images.pexels.com/photos/6823539/pexels-photo-6823539.jpeg",
        date: "March 15, 2025",
        eventName: "Nairobi Blood Drive 2025",
        location: "Kenyatta National Hospital",
        tags: ["registration", "volunteers"]
      },
      {
        id: "nairobi-2",
        title: "Donation in Progress",
        description: "A donor giving blood with assistance from our medical staff.",
        imageUrl: "https://images.pexels.com/photos/6823559/pexels-photo-6823559.jpeg",
        date: "March 15, 2025",
        eventName: "Nairobi Blood Drive 2025",
        location: "Kenyatta National Hospital",
        tags: ["donation", "medical"]
      },
      {
        id: "nairobi-3",
        title: "Post-Donation Refreshments",
        description: "Donors enjoying refreshments after their donation.",
        imageUrl: "https://images.pexels.com/photos/6823674/pexels-photo-6823674.jpeg",
        date: "March 15, 2025",
        eventName: "Nairobi Blood Drive 2025",
        location: "Kenyatta National Hospital",
        tags: ["refreshments", "recovery"]
      }
    ]
  },
  {
    id: "mombasa-community-drive-2025",
    title: "Mombasa Community Drive",
    description: "Our first community blood drive in Mombasa, bringing together local residents.",
    coverImage: "https://images.pexels.com/photos/8460388/pexels-photo-8460388.jpeg",
    date: "April 22, 2025",
    location: "Mombasa Beach Hotel, Mombasa",
    photos: [
      {
        id: "mombasa-1",
        title: "Community Gathering",
        description: "Local community members gathering for the blood drive event.",
        imageUrl: "https://images.pexels.com/photos/8460388/pexels-photo-8460388.jpeg",
        date: "April 22, 2025",
        eventName: "Mombasa Community Drive",
        location: "Mombasa Beach Hotel",
        tags: ["community", "gathering"]
      },
      {
        id: "mombasa-2",
        title: "Medical Screening",
        description: "Medical professionals conducting pre-donation screenings.",
        imageUrl: "https://images.pexels.com/photos/8460501/pexels-photo-8460501.jpeg",
        date: "April 22, 2025",
        eventName: "Mombasa Community Drive",
        location: "Mombasa Beach Hotel",
        tags: ["screening", "medical"]
      }
    ]
  },
  {
    id: "university-of-nairobi-2025",
    title: "University of Nairobi Campaign",
    description: "Students and faculty coming together to donate blood at the university campus.",
    coverImage: "https://images.pexels.com/photos/8376266/pexels-photo-8376266.jpeg",
    date: "May 10, 2025",
    location: "University of Nairobi Campus",
    photos: [
      {
        id: "uon-1",
        title: "Student Volunteers",
        description: "Student volunteers helping organize the blood drive.",
        imageUrl: "https://images.pexels.com/photos/8376266/pexels-photo-8376266.jpeg",
        date: "May 10, 2025",
        eventName: "University of Nairobi Campaign",
        location: "University of Nairobi Campus",
        tags: ["students", "volunteers"]
      },
      {
        id: "uon-2",
        title: "Faculty Participation",
        description: "University faculty members participating in the blood drive.",
        imageUrl: "https://images.pexels.com/photos/8376274/pexels-photo-8376274.jpeg",
        date: "May 10, 2025",
        eventName: "University of Nairobi Campaign",
        location: "University of Nairobi Campus",
        tags: ["faculty", "donation"]
      }
    ]
  }
];
