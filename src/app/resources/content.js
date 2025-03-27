import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Escalando",
  lastName: "Marketing",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Performance & Growth Marketing",
  avatar: "/images/escalando white.png",
  location: "America/Hermosillo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Español"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/EscalandoMarketingDigital",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:andres@escalandomarketing.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>We build landing pages that convert.</>,
  subline: (
    <>
      At Escalando Marketing, we specialize in designing <InlineCode>high-converting</InlineCode> pages that drive real results.
      <br /> Whether it's leads, sales, or sign-ups — we craft every detail to scale your business.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Us",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://estrategia.escalandomarketing.com/schedule/booking",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       🚀 200% average increase in leads across our projects  
       <br />🧠 Strategy-first design based on user behavior  
       <br />📲 Seamless integrations with Meta Ads & Google Ads
      </>
    ),
  },
  why:{
    display:true,
    title: "We Don’t Just Build Websites — We Engineer Growth",
    description: (
      <>
At Escalando Marketing, we combine performance strategy with cutting-edge tools to deliver real, measurable results. Here's why clients choose us:
      </>
    ),
    bullet:[
      {
        title: "💻 Our Own Website Builder",
        subtitle: (
          <>
          We offer landing pages and websites through our proprietary builder, powered by Duda — a leading platform trusted by thousands of agencies globally.
          </>,
          <>
Lightning-fast loading speeds
</>,
<>
Built-in SEO optimizations
</>,
<>
Mobile-first design
</>,
<>
Easy scalability & hosting
</>,
<>
Integrated analytics and dynamic content
</>,
<>
You get enterprise-grade infrastructure without the hassle.
          </>
        ),
      },
      {
        title: "🤝 150+ Clients Served",
        subtitle: (
          <>
          We’ve partnered with over 150 businesses across diverse industries — from beauty and health to real estate and e-commerce. Our experience allows us to craft strategies that actually convert, not just look good.
          </>
        ),
      },
      {
        title: "📈 5,000+ Campaigns Launched",
        subtitle: (
          <>
          With more than 5,000 ad campaigns executed on Meta Ads, we don’t guess — we iterate, test, and scale based on real data. From top-of-funnel awareness to bottom-funnel conversions, we know what works.
          </>
        ),
      },
      {
        title: "🔵 Meta Business Partner",
        subtitle: (
          <>
          As official Meta Business Partners, we have direct access to advanced tools, early betas, and platform support — giving our clients an edge over competitors.          </>
        ),
      }
    ]
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience by Nich",
    experiences: [
      {
        company: "Health & Beauty",
        timeframe: "2025",
        role: "Lead Funnel & Meta Ads Strategy",
        achievements: [
          <>
            Designed and optimized landing pages for dental clinics, smile design specialists, nutritionists, spas, aesthetic centers, and beauty professionals
             — all focused on lead generation from paid Meta Ads campaigns.
          </>,
          <>
            Achieved up to <strong>5X return on ad spend (ROAS)</strong> by building high-converting pages tailored to each service’s unique audience and offer.
          </>,
          <>
          Automated follow-ups using WhatsApp and CRM integrations to help clients close faster and scale appointments.
          </>,
        ],
        featured: [
          <>
          Featured Case – <strong>Embryogen (Fertility Clinic – IVF)</strong>:
          We created a fully optimized landing page targeting potential IVF patients. The funnel achieved a 50% opt-in rate, with over 40 qualified appointments scheduled per month, helping the clinic consistently fill its calendar with high-intent prospects.
          </>,
        ],
        images: [{
          src: "/images/embryogen-landing.PNG",
          alt: "Embryogen Landing Mockup",
          link: "https://proyectobebe.embryogen.mx",
          width: 16,
          height: 9,
        }],
      },
      {
        company: "Real Estate",
        timeframe: "2022 - 2025",
        role: "Landing Page Specialist",
        achievements: [
          <>
           Built high-converting landing pages for real estate agents and residential developments,
           optimized for lead generation through Meta and Google Ads.
          </>,
          <>
            Increased <strong>qualified lead volume by over 300%</strong> by using conversion-focused
            layouts, persuasive copy, and streamlined forms adapted to high-ticket properties.
          </>,
        ],
        featured: [
          <>
          <strong>Featured Case – Las Alamedas (Residential Development):</strong>  
    We implemented a complete funnel strategy through Meta Ads and high-converting landing pages.  
    The campaign resulted in the sale of <strong>over 100 residential lots in less than a year</strong>,  
    by consistently attracting and converting high-intent leads through automated follow-ups and 
    clear value-driven messaging.
          </>
        ],
        images: [ {
          src: "/images/projects/las-alamedas/cover-1.png",
          alt: "Alamedas Landing Mockup",
          link: "https://www.alamedafincasur.com/",
          width: 16,
          height: 9,
      }],
        
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { about, blog, gallery, home, newsletter, person, social, work };

