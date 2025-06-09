// Stats data
export const IMPACT_STATS = [
  {
    value: "50,000+",
    label: "Lives Saved",
    description: "Through blood donations across Kenya",
  },
  {
    value: "100+",
    label: "Donation Centers",
    description: "Located throughout Kenya's counties",
  },
  {
    value: "25,000+",
    label: "Regular Donors",
    description: "Who donate blood at least twice a year",
  },
  {
    value: "300+",
    label: "Blood Drives",
    description: "Organized annually across the country",
  },
];

// Process steps
export const DONATION_PROCESS = [
  {
    id: 1,
    title: "Registration",
    description:
      "Complete a simple registration form with your personal information.",
    icon: "clipboard-list",
    image: '/images/registration.jpg',
  },
  {
    id: 2,
    title: "Screening",
    description:
      "Brief medical check to ensure you're eligible to donate blood safely.",
    icon: "stethoscope",
    image: '/images/screening.jpg',
  },
  {
    id: 3,
    title: "Donation",
    description:
      "The actual blood donation takes just 8-10 minutes in a safe environment.",
    icon: "heart",
    image: '/images/donation.jpg',
  },
  {
    id: 4,
    title: "Recovery",
    description:
      "Enjoy refreshments and rest for 15 minutes before resuming your day.",
    icon: "coffee",
    image: '/images/recovery.jpg',
  },
];

// Testimonials data
export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "After my son needed an emergency transfusion, I committed to donating blood regularly. This organization makes it so easy and convenient.",
    author: "Sarah Mwangi",
    location: "Nairobi",
    image: "https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    quote:
      "I've been donating for 5 years now, and I know my blood goes directly to saving lives in my community. It's the easiest way to be a hero.",
    author: "James Odhiambo",
    location: "Kisumu",
    image: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    quote:
      "The team is professional, friendly, and they make the whole process painless. I bring my university students every semester.",
    author: "Dr. Elizabeth Mutai",
    location: "Eldoret",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// Upcoming events
export const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "Nairobi Community Blood Drive",
    date: "July 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Kenyatta National Hospital",
    image: "https://images.pexels.com/photos/3952240/pexels-photo-3952240.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "University of Nairobi Donation Day",
    date: "July 22, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "University of Nairobi Campus",
    image: "https://images.pexels.com/photos/8460388/pexels-photo-8460388.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Mombasa Corporate Challenge",
    date: "August 5, 2025",
    time: "8:00 AM - 6:00 PM",
    location: "Mombasa Beach Hotel",
    image: "https://images.pexels.com/photos/8376266/pexels-photo-8376266.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// Blood type information
export const BLOOD_TYPES = [
  { type: "A+", canDonateTo: ["A+", "AB+"], canReceiveFrom: ["A+", "A-", "O+", "O-"] },
  { type: "A-", canDonateTo: ["A+", "A-", "AB+", "AB-"], canReceiveFrom: ["A-", "O-"] },
  { type: "B+", canDonateTo: ["B+", "AB+"], canReceiveFrom: ["B+", "B-", "O+", "O-"] },
  { type: "B-", canDonateTo: ["B+", "B-", "AB+", "AB-"], canReceiveFrom: ["B-", "O-"] },
  { type: "AB+", canDonateTo: ["AB+"], canReceiveFrom: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
  { type: "AB-", canDonateTo: ["AB+", "AB-"], canReceiveFrom: ["A-", "B-", "AB-", "O-"] },
  { type: "O+", canDonateTo: ["A+", "B+", "AB+", "O+"], canReceiveFrom: ["O+", "O-"] },
  { type: "O-", canDonateTo: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], canReceiveFrom: ["O-"] },
];