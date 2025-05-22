// Brand colors and theme constants
export const BRAND_COLORS = {
  red: "#DC241f",
  green: "#006600",
  black: "#000000",
  white: "#FFFFFF",
};

// Navigation links
export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Donate", path: "/donate" },
  { name: "Partner With Us", path: "/partners" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

// Social media links
export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: "facebook",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "twitter",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
  },
];

// Footer links grouped by category
export const FOOTER_LINKS = [
  {
    title: "About Us",
    links: [
      { name: "Our Story", path: "/about" },
      { name: "Team", path: "/about#team" },
      { name: "Testimonials", path: "/about#testimonials" },
      { name: "Careers", path: "/careers" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { name: "Donate Blood", path: "/donate" },
      { name: "Volunteer", path: "/volunteer" },
      { name: "Partner With Us", path: "/partner" },
      { name: "Host A Drive", path: "/host" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blood Types", path: "/resources/blood-types" },
      { name: "FAQs", path: "/faqs" },
      { name: "Donation Process", path: "/process" },
      { name: "Research", path: "/research" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", path: "/contact" },
      { name: "Report Issues", path: "/contact#issues" },
      { name: "Donation Centers", path: "/centers" },
      { name: "Privacy Policy", path: "/privacy" },
    ],
  },
];