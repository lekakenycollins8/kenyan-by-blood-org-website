export const donatePageData = {
    hero: {
        headline: "Your Blood. Their Lifeline.",
        subheading:
            "Every drop counts. Your donation supports emergency care, maternal health, and countless lives across Kenya.",
        ctaLabel: "Donate Now",
        backgroundImage: "https://images.unsplash.com/photo-1615461066841-6116e61058f4", // Blood donation image
    },

    whyDonate: {
    title: "Why Your Donation Matters",
    paragraphs: [
      "In Kenya, thousands of lives hang in the balance due to critical blood shortages. Every 10 minutes, seven people require life-saving blood transfusions, yet only 16% of the needed supply is collected.",
      "Maternal health is particularly affected, with 40% of maternal deaths caused by obstetric hemorrhage that could be prevented with adequate blood supply. Your donation directly addresses this urgent need.",
      "By donating today, you join a movement of compassionate Kenyans creating a healthcare system where no one dies waiting for blood that should be readily available.",
    ],
    image:
      "https://images.pexels.com/photos/6823661/pexels-photo-6823661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "A young Kenyan mother holding her child after receiving a life-saving blood transfusion",
    quote: "Your donation isn't just blood—it's someone's tomorrow.",
  },

  howHelpCards: [
    {
      icon: "💉",
      title: "Blood Donation Drives",
      description: "Support our nation-wide blood collection initiatives and save lives.",
    },
    {
      icon: "💰",
      title: "Financial Support",
      description: "Your donations fund essential medical supplies and infrastructure.",
    },
    {
      icon: "🚐",
      title: "Mobile Units & Logistics",
      description: "Help us reach underserved areas with mobile clinics and transport.",
    },
    {
      icon: "📣",
      title: "Outreach & Education",
      description: "Empower communities with blood safety awareness and training.",
    },
  ],

  donationMethods: [
    {
      icon: "heart",
      title: "Donate Blood",
      description: "Find a donation center or sign up for an upcoming drive.",
      ctaLabel: "Sign Up",
      href: "/contact",
    },
    {
      icon: "wallet",
      title: "Donate Money",
      description: "Contribute via M-Pesa, PayPal, or bank transfer. Every amount counts.",
      ctaLabel: "Give Now",
      href: "#donation-form",
    },
    {
      icon: "handshake",
      title: "Sponsor a Cause",
      description: "Fund a mobile unit, a drive, or ongoing programs long-term.",
      ctaLabel: "Become a Sponsor",
      href: "/partner",
    },
  ],

  donationForm: {
    title: "Make a Donation",
    intro: "Choose your preferred amount and method to support our work.",
    ctaLabel: "Donate Securely",
    amounts: [
      { value: 1000, label: "KSh 1,000", description: "Provides supplies for 5 blood donations" },
      { value: 2500, label: "KSh 2,500", description: "Supports a local blood drive" },
      { value: 5000, label: "KSh 5,000", description: "Funds transport to rural areas" },
      { value: 10000, label: "KSh 10,000", description: "Sponsors a mobile collection unit" },
      { value: "custom", label: "Custom Amount", description: "Every shilling makes a difference" },
    ],
    methods: [
      {
        name: "M-Pesa",
        instructions: "Paybill: 123456, Account: BLOODDONATION",
      },
      {
        name: "PayPal",
        link: "https://paypal.me/kenyanbyblood",
      },
      {
        name: "Bank Transfer",
        instructions: "Account Name: Kenyan by Blood Foundation\nAccount No: 010123456789\nBank: Kenya National Bank",
      },
    ],
    trustMessage: "100% of your donation supports life-saving programs and resources.",
  },

  testimonials: [
    {
      name: "Grace W.",
      role: "Blood Recipient",
      quote:
        "Without a timely transfusion, I might not be here today. I'm forever grateful to the donors and this foundation.",
      image:
        "https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "David M.",
      role: "Donor & Volunteer",
      quote:
        "Donating blood is one of the simplest, most powerful things you can do. I'm proud to be part of this movement.",
      image:
        "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ],


  faqs: [
    {
      question: "Where does my donation go?",
      answer:
        "100% of your donation supports programs including blood drives, outreach, training, and life-saving equipment.",
    },
    {
      question: "Can I donate from abroad?",
      answer:
        "Yes! You can contribute via PayPal or bank transfer. Every gift, no matter where you're from, saves lives.",
    },
    {
      question: "How often can I give blood?",
      answer:
        "You can donate whole blood every 3 months. Regular donations help ensure a steady supply for emergencies.",
    },
    {
      question: "Are my donations secure?",
      answer:
        "Absolutely. All payment methods we provide are trusted and secure. We never store sensitive personal information.",
    },
  ],

  finalCta: {
    headline: "Be the reason someone gets a second chance.",
    ctaLabel: "Donate Now",
    backgroundImage:
      "https://images.pexels.com/photos/6823464/pexels-photo-6823464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
};