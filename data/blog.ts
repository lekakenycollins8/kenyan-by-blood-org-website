// Blog data types and content
export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  role?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: Author;
  categories: string[];
  tags?: string[];
  readTime?: number;
}

// Blog categories
export const BLOG_CATEGORIES = [
  "Blood Donation",
  "Impact Stories",
  "Health Tips",
  "Events",
  "Community",
  "News"
];

// Sample blog posts
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "importance-of-regular-blood-donation",
    title: "The Importance of Regular Blood Donation",
    excerpt: "Learn why regular blood donation is crucial for maintaining adequate blood supplies and how it benefits both donors and recipients.",
    content: `
# The Importance of Regular Blood Donation

Blood donation is a simple yet profound act that saves millions of lives every year. In Kenya, where blood shortages are common, regular donation is especially important.

## Why Regular Donation Matters

Regular blood donation ensures that blood banks maintain adequate supplies for emergencies and scheduled medical procedures. Blood has a limited shelf life—red blood cells can only be stored for 42 days, and platelets for just 5 days. This means a constant supply of new donations is essential.

## Benefits to Recipients

For recipients, the benefits are obvious and life-saving:

- **Emergency trauma care**: Accident victims may require large amounts of blood quickly
- **Surgical procedures**: Many operations wouldn't be possible without blood transfusions
- **Cancer treatments**: Patients undergoing chemotherapy often need blood products
- **Childbirth complications**: Mothers experiencing complications during delivery may need blood transfusions
- **Chronic illnesses**: People with sickle cell disease, thalassemia, and other conditions require regular transfusions

## Benefits to Donors

Donating blood isn't just beneficial for recipients—it offers several health advantages to donors as well:

1. **Free health screening**: Each donation includes a mini health check-up
2. **Reduced risk of heart disease**: Regular donation may lower iron stores, reducing heart attack risk
3. **Calorie burn**: Donating blood burns approximately 650 calories
4. **Psychological benefits**: The knowledge that you've helped save lives provides emotional satisfaction

## How Often Can You Donate?

Healthy adults can donate whole blood every 12 weeks (about 3 months). This interval allows your body to replenish the donated blood cells and maintain your health.

## Join Our Mission

At Kenyan By Blood Foundation, we're committed to ensuring that every hospital in Kenya has access to safe, adequate blood supplies. By becoming a regular donor, you become an essential part of this life-saving mission.

Remember: Every donation can save up to three lives. Will you join us?
    `,
    coverImage: "https://images.pexels.com/photos/6823674/pexels-photo-6823674.jpeg",
    date: "June 14, 2025",
    author: {
      id: "dr-kamau",
      name: "Dr. James Kamau",
      avatar: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
      bio: "Hematologist with 15 years of experience in blood banking and transfusion medicine.",
      role: "Medical Director"
    },
    categories: ["Blood Donation", "Health Tips"],
    tags: ["blood donation", "health benefits", "community health"],
    readTime: 5
  },
  {
    slug: "meet-mary-blood-donation-saved-my-life",
    title: "Meet Mary: \"Blood Donation Saved My Life\"",
    excerpt: "Mary Wanjiku shares her powerful story of how blood donors saved her life during childbirth complications.",
    content: `
# Meet Mary: "Blood Donation Saved My Life"

## A Normal Pregnancy Turned Critical

Mary Wanjiku, a 28-year-old primary school teacher from Nakuru, was expecting her first child. Her pregnancy had progressed normally until week 36, when she developed severe preeclampsia—a dangerous pregnancy complication characterized by high blood pressure.

"Everything happened so quickly," Mary recalls. "One moment I was teaching my class, and the next I was being rushed to the hospital with dangerously high blood pressure."

## Emergency Delivery

Doctors decided to perform an emergency C-section to save both Mary and her baby. During the procedure, Mary experienced postpartum hemorrhage—severe bleeding after childbirth that can be life-threatening.

"I lost consciousness during the delivery," Mary says. "I later learned that I had lost nearly 40% of my blood volume and required immediate transfusions."

## The Gift of Life

Mary received four units of blood during her emergency. These blood donations came from volunteer donors who had given blood at a Kenyan By Blood Foundation drive just days earlier.

"Without those blood donations, I wouldn't be here today," Mary says, cradling her healthy baby daughter, Faith. "Someone I've never met took an hour out of their day to donate blood, and that simple act saved my life and gave my daughter her mother."

## A New Purpose

Today, Mary has become an advocate for blood donation. She organizes regular blood drives at her school and shares her story with anyone who will listen.

"Many people don't think about donating blood until someone they know needs it," she explains. "But by then, it might be too late. We need people to donate regularly, before the emergency happens."

## The Ongoing Need

In Kenya, maternal hemorrhage remains one of the leading causes of maternal mortality. According to health officials, having adequate blood supplies could prevent up to 25% of these deaths.

"Every two seconds, someone in Kenya needs blood," says Dr. Njeri, who treated Mary. "And unlike many medical supplies, blood cannot be manufactured or stockpiled indefinitely. It must come from generous donors."

## Mary's Message

Mary's message to potential donors is simple: "You may never meet the person whose life you save, but I promise you, they and their loved ones will be forever grateful. Please donate blood—it truly is the gift of life."

*If Mary's story has inspired you to donate blood, visit our [Donation Centers](/donate) page to find the nearest donation point or upcoming blood drive.*
    `,
    coverImage: "https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg",
    date: "June 10, 2025",
    author: {
      id: "sarah-njoroge",
      name: "Sarah Njoroge",
      avatar: "https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg",
      bio: "Community outreach coordinator and blood donation advocate.",
      role: "Outreach Coordinator"
    },
    categories: ["Impact Stories", "Community"],
    tags: ["personal stories", "maternal health", "blood transfusion"],
    readTime: 7
  },
  {
    slug: "upcoming-blood-drive-nairobi-june-2025",
    title: "Upcoming Blood Drive: Nairobi Central Business District",
    excerpt: "Join us for our largest blood drive of the year in Nairobi's Central Business District on June 28, 2025.",
    content: `
# Upcoming Blood Drive: Nairobi Central Business District

## Join Us for Our Largest Blood Drive of the Year

The Kenyan By Blood Foundation is proud to announce our largest blood drive of the year, taking place in Nairobi's Central Business District on Saturday, June 28, 2025, from 9:00 AM to 5:00 PM.

## Event Details

- **Date**: Saturday, June 28, 2025
- **Time**: 9:00 AM - 5:00 PM
- **Location**: Nairobi Central Park, Main Pavilion
- **Goal**: 500 donations in a single day

## Why This Drive Matters

June and July typically see a significant drop in blood donations due to holidays and travel, yet the need for blood remains constant. This drive aims to boost blood supplies before this critical period.

"We're calling on all eligible donors to participate," says Derrick Ochieng, Executive Director of Kenyan By Blood Foundation. "Just one hour of your time can save up to three lives."

## What to Expect

Donors can expect a streamlined, comfortable experience:

1. **Registration**: Quick digital registration (pre-registration available online)
2. **Health Screening**: Brief medical history review and mini health check
3. **Donation**: The actual donation takes only 8-10 minutes
4. **Recovery**: Refreshment area with snacks and drinks
5. **Community**: Connect with other donors and learn more about blood donation

## Special Features

This year's drive includes several special features:

- **Mobile Blood Donation Units**: 20 donation stations to minimize waiting
- **Entertainment**: Live music and performances by local artists
- **Children's Area**: Supervised activities for children while parents donate
- **Education Zone**: Learn about blood types, donation process, and impact
- **Corporate Challenge**: Local businesses competing to achieve highest donation rates

## Eligibility Requirements

To donate blood, you must:

- Be between 16-65 years old (16-17 with parental consent)
- Weigh at least 50kg
- Be in good general health
- Have not donated blood in the last 12 weeks
- Bring ID (national ID, passport, or driving license)

## Partners

This blood drive is made possible through partnerships with:

- Nairobi County Government
- Kenya National Blood Transfusion Service
- Major Nairobi Hospitals
- Corporate Sponsors

## Make Your Appointment

While walk-ins are welcome, we encourage donors to make appointments to reduce waiting time. Schedule your donation time slot by:

- Visiting our website: [www.iamkenyanbyblood.org/june-drive](https://www.iamkenyanbyblood.org/june-drive)
- Calling: 0720-572-793
- Emailing: donate@iamkenyanbyblood.org

## Spread the Word

Help us reach our goal by sharing this event with friends, family, and colleagues. Together, we can ensure that no patient in Kenya goes without the blood they need.

**Remember**: Every donation counts. Be a hero—donate blood on June 28!
    `,
    coverImage: "https://images.pexels.com/photos/8460388/pexels-photo-8460388.jpeg",
    date: "June 5, 2025",
    author: {
      id: "derrick-ochieng",
      name: "Derrick Ochieng",
      avatar: "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg",
      bio: "Founder and Executive Director of Kenyan By Blood Foundation.",
      role: "Executive Director"
    },
    categories: ["Events", "News"],
    tags: ["blood drive", "nairobi", "volunteer", "donation"],
    readTime: 4
  }
];
