// --- TYPE DEFINITIONS ---
// This block defines the exact "shape" of our project data for TypeScript.

interface GlanceItem {
  label: string;
  value: string;
}

interface Feature {
  title: string;
  ux: string;
  tech: string;
  visual: string;
}

// This is the master Type for a single Project object
export interface Project {
  slug: string;
  showcaseVideoUrl?: string; // The '?' makes this property optional
  hero: {
    title: string;
    tagline: string;
    atAGlance: GlanceItem[];
  };
  brief: {
    title: string;
    challenge: string;
    vision: string;
  };
  cortex: {
    title: string;
    approach: string[];
  };
  code: {
    title: string;
    features: Feature[];
  };
  impact: {
    title: string;
    result: string;
    testimonial: {
      quote: string;
      author: string;
      role: string;
    };
  };
}

// --- Your existing projects array starts below this line ---

export const projects: Project[] = [
  {
    slug: "personalized-ecommerce-experience",
    showcaseVideoUrl:
      "https://player.vimeo.com/video/1099619139?autoplay=1&dnt=1&byline=0&portrait=0&title=0", // Use embedded Vimeo video URL
    hero: {
      title: "AURA: Architecting a Bespoke Digital Flagship",
      tagline:
        "An immersive e-commerce experience as luxurious and unforgettable as the scent itself.",
      atAGlance: [
        { label: "Industry", value: "Luxury E-commerce" },
        {
          label: "Services",
          value: "Full-Stack Web Architecture, 3D Experience Design",
        },
        { label: "Core Tech", value: "Next.js, R3F, Django" },
      ],
    },
    brief: {
      title: "The Brief",
      challenge:
        "AURA, a purveyor of fine perfumes, faced a critical challenge: their existing digital presence failed to translate the opulence and artistry of their physical products, diluting the brand's premium identity online.",
      vision:
        'Our vision was to reject the mundane and create a "Digital Flagship"—a bespoke online destination that would serve as a direct extension of the AURA brand, fusing cinematic experience with commercial performance.',
    },
    cortex: {
      title: "The Cortex",
      approach: [
        "A Decoupled, Headless Architecture: We strategically separated the frontend (Next.js) and backend (Django) to provide complete creative freedom without compromising on performance or security.",
        'React Three Fiber for Immersive Storytelling: To truly capture "Digital Opulence," we integrated R3F to make the digital tangible, allowing users to connect with the product in a way flat e-commerce sites cannot.',
        "Django & PostgreSQL for a Robust Backend: For a platform handling transactions and data, we used a battle-tested stack to guarantee security, performance, and data integrity at scale.",
      ],
    },
    code: {
      title: "The Code: Digital Alchemy in Action",
      features: [
        {
          title: "The Zero-Stutter Cinematic 3D Hero",
          ux: 'On landing, the user is greeted by a breathtaking, interactive 3D model. As they scroll, the camera pans in a seamless, cinematic sequence, completely free of the jarring "pop-in" or lag common in web-based 3D.',
          tech: "We wrapped the 9.5MB GLB model in a React <Suspense> boundary and used Drei's <Preload all /> component to force WebGL shader compilation before the scene was mounted. GSAP's ScrollTrigger then orchestrated the flawless scrollytelling sequence.",
          visual: "/images/case-study-visual-1.png",
        },
        {
          title: 'The "Live" Headless Journal',
          ux: "The AURA team can publish articles and see changes appear on the live website instantly, with no waiting for a lengthy build process or cache refresh. The content workflow is as fast and responsive as the site itself.",
          tech: "We utilized Django Signals on the backend to trigger a secure webhook to a Next.js API route. This route uses the `revalidateTag` function to intelligently purge only the specific cache entries related to the updated content.",
          visual: "/images/case-study-visual-2.png",
        },
        {
          title: "The Seamless & Secure Authentication Flow",
          ux: "A user can leave a page open, return hours later, and continue shopping without ever being abruptly logged out. The security layer is invisible and frictionless.",
          tech: "Our frontend Axios client uses interceptors to watch for 401 errors. If a token expires, an interceptor automatically calls the `/token/refresh/` endpoint, acquires a new token, and retries the original failed request—all invisibly to the user.",
          visual: "/images/case-study-visual-3.png",
        },
      ],
    },
    impact: {
      title: "The Impact",
      result:
        "The AURA Digital Flagship is more than an e-commerce website; it is a new benchmark for luxury digital experiences. We successfully translated the brand's core identity into an interactive platform that is as meticulous in its code as it is cinematic in its presentation.",
      testimonial: {
        quote:
          "Working with Code & Cortex was a revelation. They didn't just build us a website; they architected a digital extension of our brand. The strategic insight they brought to the table was matched only by their incredible attention to technical detail.",
        author: "Elara Vance",
        role: "CEO of AURA",
      },
    },
  },

  //project 2
  {
    slug: "ai-brand-tone-analyzer", // This slug matches the link from the ShowcaseSection
    hero: {
      title: "The Mentor in the Machine: Architecting QBrain AI",
      tagline:
        "Engineering a hyper-local, curriculum-aware AI tutor to revolutionize exam preparation for a nation of students.",
      atAGlance: [
        { label: "Tech Stack", value: "FastAPI, Python, React, GSAP" },
        { label: "Core Innovation", value: "Curriculum-Grounded RAG" },
        { label: "Timeline", value: "8 Weeks (MVP)" },
      ],
    },
    brief: {
      title: "The Brief",
      challenge:
        "In Bangladesh's competitive academic landscape, millions of students preparing for SSC board exams face a resource gap. Generic AI tools lack the nuanced, hyper-specific knowledge of the National Curriculum (NCTB), making them fundamentally unequipped for the task.",
      vision:
        "Our vision was to architect a digital mentor—an intelligent system named QBrain AI. This platform would not merely fetch data; it would understand student intent, meticulously trained on the very curriculum it was designed to teach.",
    },
    cortex: {
      title: "The Cortex",
      approach: [
        "FastAPI was chosen for its asynchronous performance and Pydantic-driven data integrity, ensuring a scalable and robust API core.",
        "A Vector Database (Qdrant) was selected for its high-performance, low-latency similarity search—the engine of our context retrieval.",
        "The UX was designed as a narrative journey, using a cinematic GSAP transition to shift the user's mindset from browsing to focused learning.",
      ],
    },
    code: {
      title: "The Code: Digital Alchemy in Action",
      features: [
        {
          title: "Beyond Search: An AI That Understands Context",
          ux: "Our solution was a bespoke Retrieval-Augmented Generation (RAG) system. The user experiences an AI that feels like an expert tutor, referencing specific textbook chapters and exam patterns instead of giving generic answers.",
          tech: "Our system ingests the NCTB curriculum, converts text into semantic vectors using a Hugging Face Sentence Transformer, and indexes them in Qdrant. A query finds relevant context which is injected into a master prompt for an LLM, ensuring curriculum-grounded answers.",
          visual: "/images/qbrain-1.png", // Placeholder visual
        },
        {
          title: "The Cinematic Portal to Learning",
          ux: "To elevate the initial interaction, we engineered a full-screen GSAP transition. This premium, cinematic entry builds anticipation and reinforces the brand's innovative identity.",
          tech: 'When the primary input is engaged, GSAP orchestrates a complex timeline: a black overlay fades in, "gate" divs part like doors, and a radial light bloom culminates in a white flash, perfectly masking the redirect to the dedicated chat page.',
          visual: "/images/qbrain-2.png", // Placeholder visual
        },
      ],
    },
    impact: {
      title: "The Impact",
      result:
        "The outcome is a polished, production-ready MVP that serves as a powerful proof-of-concept and a scalable foundation. The platform successfully solves the core challenge of providing curriculum-aware answers in a cost-effective, open-source-driven architecture.",
      testimonial: {
        quote:
          "Code & Cortex didn't just build our app; they architected our vision. They possess a rare ability to translate a complex educational challenge into a product that is both technically brilliant and emotionally resonant.",
        author: "Zayed Bin Hamid",
        role: "Founder, QBrain AI",
      },
    },
  },

  {
  slug: "telecom-fair-ecommerce",
  hero: {
    title: "Telecom Fair: Mobile Shopping, Reimagined",
    tagline: "Crafting a clean, elegant mobile e-commerce experience for the next generation of shoppers in Bangladesh.",
    atAGlance: [
      { label: "Tech Stack", value: "Next.js, Tailwind CSS" },
      { label: "Core Innovation", value: "User-Centered E-commerce UI" },
      { label: "Timeline", value: "2 Weeks" },
    ],
  },
  brief: {
    title: "The Brief",
    challenge:
      "Most mobile e-commerce sites in Bangladesh are cluttered, slow, and difficult to navigate. The client needed a visually modern yet information-rich experience that reflects a premium brand identity.",
    vision:
      "We imagined an experience where users could browse, compare, and trust what they see. By putting ourselves in the user's shoes, we redefined what it means to shop for mobile phones online in a clean, focused, and smooth interface.",
  },
  cortex: {
    title: "The Cortex",
    approach: [
      "Built with Next.js and Tailwind CSS for optimal performance and flexible component-based architecture.",
      "Designed a clean homepage featuring a bold hero section, search bar, and product slider.",
      "Wrapped product specs and extra details inside clean modal pages to reduce homepage clutter and focus user attention.",
    ],
  },
  code: {
    title: "The Code: E-commerce Made Sleek",
    features: [
      {
        title: "Premium Hero Section & CTA",
        ux: "We led with a full-screen hero section showcasing flagship products like the iPhone 15 Pro Max, combining high-res visuals with standout CTAs.",
        tech: "Tailwind CSS powered the layout, ensuring full responsiveness. Image sliders and product cards were custom-built using utility-first classes.",
        visual: "/images/telecomfair-1.png", // Replace this with the real image path
      },
      {
        title: "Smart Product Browsing Experience",
        ux: "Instead of overwhelming users with all data up front, we used intelligent routing and modal-based navigation to reveal deeper info only when needed.",
        tech: "Next.js routing was leveraged to dynamically render product pages. Search functionality was added to improve user flow.",
        visual: "/images/telecomfair-2.png", // Replace with actual
      },
    ],
  },
  impact: {
    title: "The Impact",
    result:
      "The final site delivered an impressive, premium e-commerce experience for the client’s mobile business. It redefined their digital presence and helped boost trust and conversions.",
    testimonial: {
      quote:
        "Our new website feels like a premium showroom. Zayed and his team truly understood our business needs and delivered more than we imagined.",
      author: "Mobile Shop Owner",
      role: "Owner, Telecom Fair",
    },
  },
}

];
