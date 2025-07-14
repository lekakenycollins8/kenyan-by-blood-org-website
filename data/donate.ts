export const donatePageData = {
    hero: {
        headline: "Your Blood. Their Lifeline.",
        subheading:
            "Every drop counts. Your donation supports emergency care, maternal health, and countless lives across Kenya.",
        ctaLabel: "Donate Now",
        backgroundImage: "/images/donate-hero.jpg", // Blood donation image
    },

    whyDonate: {
    title: "Why Your Donation Matters",
    paragraphs: [
      "In Kenya, thousands of lives hang in the balance due to critical blood shortages. Every 10 minutes, seven people require life-saving blood transfusions, yet only 16% of the needed supply is collected.",
      "Maternal health is particularly affected, with 40% of maternal deaths caused by obstetric hemorrhage that could be prevented with adequate blood supply. Your donation directly addresses this urgent need.",
      "By donating today, you join a movement of compassionate Kenyans creating a healthcare system where no one dies waiting for blood that should be readily available.",
    ],
    image:
      "/images/donate-matters.jpg",
    alt: "A young Kenyan man holding a placard after donating blood",
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
      title: "Donate in Kind",
      description: "Contribute money, medical supplies, equipment, or volunteer your time.",
      ctaLabel: "Give Now",
      href: "#donation-form",
    },
    {
      icon: "handshake",
      title: "Sponsor a Cause",
      description: "Fund a mobile unit, a drive, or ongoing programs long-term.",
      ctaLabel: "Become a Sponsor",
      href: "/partners",
    },
  ],

  donationForm: {
    title: "Make a Donation",
    intro: "Choose how you'd like to support our life-saving work across Kenya.",
    ctaLabel: "Donate Securely",
    amounts: [
      { value: 1000, label: "Basic Support", description: "Provides essential supplies for multiple blood donations" },
      { value: 2500, label: "Community Impact", description: "Supports organizing a local blood drive in underserved areas" },
      { value: 5000, label: "Rural Outreach", description: "Funds transportation of blood and equipment to remote rural communities" },
      { value: 10000, label: "Mobile Collection", description: "Sponsors a fully equipped mobile blood collection unit for a day" },
      { value: "custom", label: "Custom Support", description: "Every contribution makes a difference in saving Kenyan lives" },
    ],
    methods: [
      {
        name: "M-Pesa",
        instructions: "Paybill: 522533\nAccount: 7987279\n\nYour donation will help us continue our mission of ensuring blood availability across Kenya.",
      },
      {
        name: "Bank Transfer",
        instructions: "Account Name: Kenyan by Blood Foundation\nAccount No: 1340858835\nBank: Kenya Commercial Bank (KCB)\n\nPlease include your name and 'Donation' in the transfer reference.",
      },
    ],
    trustMessage: "100% of your donation supports life-saving programs and resources across Kenya.",
  },

  testimonials: [
    {
      name: "Grace W.",
      role: "Blood Recipient",
      quote:
        "Without a timely transfusion, I might not be here today. I'm forever grateful to the donors and this foundation.",
      image:
        "/images/testimonial1.JPG",
    },
    {
      name: "David M.",
      role: "Donor & Volunteer",
      quote:
        "Donating blood is one of the simplest, most powerful things you can do. I'm proud to be part of this movement.",
      image:
        "/images/testimonial2.jpg",
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