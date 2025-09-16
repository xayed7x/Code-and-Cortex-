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
  liveUrl?: string;
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
    liveUrl: "https://aura-perfume.vercel.app",
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
          visual: "/aura.png",
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
},
//Project 4

{
  slug: "progresso-productivity-app",
  
  hero: {
    title: "Progresso: Turning Time into Tangible Goals",
    tagline:
      "A productivity and goal-tracking app designed to help individuals and teams master their time and achieve more with less stress.",
    atAGlance: [
      { label: "Industry", value: "Productivity & Personal Development" },
      { label: "Services", value: "Full Product Design, AI Integration, Web & Mobile App Development" },
      { label: "Core Tech", value: "Next.js, Supabase, OpenAI API, TailwindCSS" },
    ],
  },
  brief: {
    title: "The Brief",
    challenge:
      "People juggle countless tasks every day, yet most tools fail to provide a simple, clear way to connect daily habits to long-term goals. Many productivity apps either overcomplicate the process or ignore offline activities entirely.",
    vision:
      "Our vision with Progresso was to create a sleek, intuitive platform that blends manual time logging with AI-powered insights, enabling users to track their entire day — both on and off devices — and progressively move towards their goals.",
  },
  cortex: {
    title: "The Cortex",
    approach: [
      "A Hybrid Time-Tracking Approach: Allowing both automatic and manual activity logging ensures even offline work like studying with pen & paper or family time gets tracked.",
      "Goal-Oriented AI Assistance: An integrated AI chatbot helps users set realistic goals, adjust them over time, and keep them on track.",
      "Cross-Platform Consistency: A unified experience on mobile, tablet, and desktop ensures users can log activities or check progress anytime, anywhere.",
    ],
  },
  code: {
    title: "The Code: Simple, Fast, and Intelligent",
    features: [
      {
        title: "Unified Dashboard with Progress Analytics",
        ux: "Users see where their time goes at a glance, broken down into categories like Study, Social Media, Workouts, and Religious Activities.",
        tech: "We built an analytics layer on Supabase with real-time listeners to instantly update dashboards when new logs are added.",
        visual: "/images/progresso-dashboard.png",
      },
      {
        title: "AI Goal Coach",
        ux: "The AI assistant learns from user habits and provides tailored suggestions to improve productivity and stay aligned with long-term objectives.",
        tech: "Integrated OpenAI API with custom prompt engineering and session-based learning stored in Supabase.",
        visual: "/progresso.png",
      },
      {
        title: "Seamless Offline Activity Logging",
        ux: "Users can quickly log offline activities in just two taps, choosing from predefined categories or adding custom labels.",
        tech: "Used a lightweight form system with indexedDB caching for offline-first experience, syncing with Supabase when back online.",
        visual: "/progresso.png",
      },
    ],
  },
  impact: {
    title: "The Impact",
    result:
      "Progresso bridges the gap between awareness and action, giving users a clear map of their day and empowering them to make better decisions with their time. It has already attracted early sign-ups from students, entrepreneurs, and busy professionals.",
    testimonial: {
      quote:
        "Progresso didn’t just help me organize my schedule — it changed the way I think about my goals. The balance between simplicity and intelligence is unmatched.",
      author: "Samir Khan",
      role: "Early Access User",
    },
  },
},
//project 5

{
  "slug": "nexacart-fullstack-platform",
  "showcaseVideoUrl": "https://player.vimeo.com/video/your-nexacart-video-id?autoplay=1&dnt=1&byline=0&portrait=0&title=0",
  "hero": {
    "title": "NexaCart: Engineering a Universal Commerce Platform",
    "tagline": "A single, scalable foundation for any business, from boutique brands to enterprise catalogs.",
    "atAGlance": [
      { "label": "Industry", "value": "E-commerce Platform / SaaS" },
      {
        "label": "Services",
        "value": "Full-Stack Development, Backend Architecture, UI/UX"
      },
      { "label": "Core Tech", "value": "Next.js, Prisma, Supabase, Tailwind" }
    ]
  },
  "brief": {
    "title": "The Brief",
    "challenge": "Businesses entering the e-commerce space are often trapped between two undesirable options: cheap, inflexible templates that stifle growth, or expensive, time-consuming custom builds. There was a clear market need for a third option.",
    "vision": "Our vision was to architect a 'Universal Commerce Platform.' A single, robust, and highly adaptable foundation that provides the speed-to-market of a template but is engineered with the power, scalability, and feature set of a bespoke, enterprise-grade application."
  },
  "cortex": {
    "title": "The Cortex",
    "approach": [
      "A Modern, Full-Stack Architecture: We leveraged the VSPN Stack (Vercel, Supabase, Prisma, Next.js) to create a tightly integrated, full-stack application, ensuring optimal performance, type-safety, and a seamless developer experience.",
      "A Business-First Backend: The project's core is a comprehensive Admin Panel. We prioritized building the business management tools first, ensuring the platform solved real-world operational challenges like product and order management.",
      "Localized & Global Payment Gateways: To maximize market applicability, we implemented a multi-gateway system from the start, supporting both global leaders like Stripe and essential local payment aggregators like SSLCOMMERZ."
    ]
  },
  "code": {
    "title": "The Code: Digital Alchemy in Action",
    "features": [
      {
        "title": "The Unified Multi-Gateway Checkout",
        "ux": "The user is presented with a clear choice between international card payments or local methods. Regardless of their selection, the experience is seamless, secure, and concludes on a consistent, professional order confirmation page.",
        "tech": "We created two distinct server-side API endpoints: one for Stripe's Payment Intents and another for SSLCOMMERZ's session initiation. The SSLCOMMERZ flow is hardened with a secure, server-to-server IPN listener to validate transactions, ensuring 100% data integrity.",
        "visual": "/images/nexa-cartcheckout.png"
      },
      {
        "title": "The Real-Time Admin Command Center",
        "ux": "An administrator logs in and is immediately presented with a high-level overview of their business—total revenue, sales volume, and recent orders—without needing to consult a separate analytics tool. It's an instant pulse-check of the business.",
        "tech": "This dashboard is a Next.js Server Component that directly and securely queries the Supabase database. We used Prisma's powerful aggregation functions (`_sum`, `_count`) to perform efficient calculations on the server, ensuring the dashboard is both fast and always up-to-date.",
        "visual": "/images/nexacartadmin.png"
      },
      {
        "title": "Frictionless Product Management with Cloud Storage",
        "ux": "An admin can create a new product, drag and drop an image from their computer, set the price and stock, and click 'save'. The new product appears on the live storefront instantly, with the image served from a global CDN.",
        "tech": "The form submission is handled by a Next.js API route. This route uses the Supabase Storage SDK to upload the image file directly to a secure bucket, which returns a public URL. The Prisma client then writes the complete product data, including the new image URL, to the PostgreSQL database in a single transaction.",
        "visual": "/images/nexacartproduct.png"
      }
    ]
  },
  "impact": {
    "title": "The Impact",
    "result": "NexaCart is not just a website; it's a scalable business asset. It provides a robust, production-ready foundation that dramatically reduces the time-to-market for any e-commerce venture, giving them enterprise-grade tools from day one and a platform that can grow with them.",
    "testimonial": {
      "quote": "NexaCart isn't just a template; it's a complete business operating system. We went from concept to live sales in record time, with a backend that feels like it was custom-built for our needs. The flexibility is incredible.",
      "author": "Julian Croft",
      "role": "Founder, Artisan Collective"
    }
  }
}
]