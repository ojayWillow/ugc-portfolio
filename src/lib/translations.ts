export type Locale = "lv" | "en";

export const translations: Record<Locale, Record<string, any>> = {
  lv: {
    // === NAVBAR ===
    nav: {
      home: "Sākums",
      videos: "Video",
      photos: "Foto",
      services: "Pakalpojumi",
      brands: "Zīmoli",
      about: "Par mani",
      contact: "Kontakti",
    },

    // === HERO ===
    hero: {
      badge: "Pieejama sadarbībām",
      name: "Samanta Kopce",
      role: "UGC Satura Veidotāja",
      description:
        "Veidoju autentisku, aizraujošu saturu, kas pārvērš skatītājus par klientiem. Padarīsim tavu zīmolu neaizmirstamu.",
      viewWork: "Skatīt manus darbus",
      collaborate: "Sadarbosimies",
      stats: [
        { value: "50+", label: "Zīmolu sadarbības" },
        { value: "2M+", label: "Skatījumi" },
        { value: "100+", label: "Satura vienības" },
      ],
      scroll: "Ritini",
    },

    // === VIDEO SHOWCASE ===
    videoShowcase: {
      subtitle: "Portfolio",
      title: "Video saturs",
      description:
        "Aizraujošs UGC saturs, kas veidots iesaistei un konversijai.",
      playing: "ATSKAŅO",
      categories: {
        Beauty: "Skaistumkopšana",
        Lifestyle: "Dzīvesstils",
        BTS: "Aizkulises",
      },
    },

    // === PHOTO GALLERY ===
    photoGallery: {
      subtitle: "Galerija",
      title: "Foto saturs",
      description: "Augstas kvalitātes vizuāli, kas stāsta tava zīmola stāstu.",
      photoTitles: {
        "Content Shoot": "Satura fotosesija",
        Lifestyle: "Dzīvesstils",
        "Brand Work": "Darbs zīmoliem",
        Creative: "Radošais darbs",
        "Behind the Scenes": "Aizkulises",
        Portrait: "Portrets",
        Samanta: "Samanta",
      },
    },

    // === SERVICES ===
    services: {
      subtitle: "Ko es daru",
      title: "Pakalpojumi",
      description:
        "No idejas līdz gatavam rezultātam — viss, kas tavam zīmolam nepieciešams, lai izceltos sociālajos tīklos.",
      items: [
        {
          icon: "🎬",
          title: "UGC Video",
          description:
            "Izsaiņošana, apskati, pamācības, GRWM un dienas saturs, kas jūtas autentisks un veicina iesaisti.",
          formats: ["TikTok", "Reels", "Shorts"],
        },
        {
          icon: "📸",
          title: "Produktu fotogrāfija",
          description:
            "Dzīvesstila kadri, flat lay un estētiski produktu foto, kas padara tavu zīmolu neatsveramu.",
          formats: ["Instagram", "Mājaslapa", "Reklāmas"],
        },
        {
          icon: "🎙️",
          title: "Balss ieraksti",
          description:
            "Silts, autentisks stāstījums zīmolu video, reklāmām un sociālajam saturam, kas savieno ar auditoriju.",
          formats: ["Reklāmas", "Reels", "Promo"],
        },
        {
          icon: "✂️",
          title: "Īsformas saturs",
          description:
            "Aizraujošs vertikālais video, optimizēts TikTok, Instagram Reels un YouTube Shorts platformām.",
          formats: ["9:16", "15-60s", "Trending"],
        },
        {
          icon: "💡",
          title: "Radošā stratēģija",
          description:
            "Satura koncepti, scenāriji un radošā vadība, pielāgota tavam zīmola balsij un mērķauditorijai.",
          formats: ["Koncepti", "Scenāriji", "Moodboard"],
        },
        {
          icon: "📦",
          title: "Izsaiņošana un apskati",
          description:
            "Patiesa pirmā iespaida izsaiņošana un godīgi produktu apskati, kas veido uzticību.",
          formats: ["Organisks", "Autentisks", "Saistošs"],
        },
      ],
      cta: "Katrs projekts ir unikāls — atradīsim perfektu risinājumu tavam zīmolam.",
      ctaButton: "Apspriedīsim tavu projektu",
    },

    // === BRAND COLLABORATIONS ===
    brandCollaborations: {
      subtitle: "Uzticas man",
      title: "Zīmolu sadarbības",
      description:
        "Lepojos ar sadarbību ar lieliskiem zīmoliem dažādās nozarēs.",
    },

    // === SOCIAL PROOF ===
    socialProof: {
      subtitle: "Pierādījumi",
      title: "Reāli rezultāti",
      description:
        "Skaitļi nemelo. Lūk, kas notiek, kad autentisks saturs satiek pareizo auditoriju.",
      emptyTitle: "Katrs zīmola stāsts sākas kaut kur.",
      emptyDescription:
        "Padarīsim tavu projektu par nākamo veiksmes stāstu šajā sienā. Pirmais solis? Vienkārša saruna.",
      emptyButton: "Esi pirmais stāsts",
    },

    // === ABOUT ===
    about: {
      subtitle: "Par mani",
      title: "Čau, es esmu Samanta 👋",
      bio: [
        "Esmu UGC satura veidotāja, kas ar aizrautību veido autentisku, saistošu saturu, kas rezonē ar patiesām auditorijām. Ar pieredzi skaistumkopšanā, dzīvesstilā, tehnoloģijās un modē — es iedzīvinu zīmolus caur patiesu stāstīšanu.",
        "Mans saturs ir sasniedzis vairāk nekā 2M+ skatījumu un palīdzējis 50+ zīmoliem palielināt iesaisti un konversiju rādītājus. Es ticu satura veidošanai, kas jūtas organisks, nevis iestudēts.",
        "Kad neveidoju saturu, mani var atrast izpētot jaunas kafejnīcas, eksperimentējot ar fotogrāfiju vai plānojot nākamo radošo projektu.",
      ],
      skills: [
        "UGC Video",
        "Produktu fotogrāfija",
        "Zīmola stratēģija",
        "Sociālie tīkli",
        "Reels & TikTok",
        "Izsaiņošana",
      ],
    },

    // === CONTACT ===
    contact: {
      subtitle: "Sazinies ar mani",
      title: "Veidosim kopā",
      description:
        "Ir projekts prātā? Labprāt par to dzirdētu. Raksti man un izveidosim kaut ko fantastisku.",
      nameLabel: "Vārds",
      namePlaceholder: "Tavs vārds",
      emailLabel: "E-pasts",
      emailPlaceholder: "tavs@epasts.lv",
      brandLabel: "Zīmols / Uzņēmums",
      brandPlaceholder: "Tava zīmola nosaukums",
      detailsLabel: "Projekta detaļas",
      detailsPlaceholder:
        "Pastāsti par savu projektu, budžetu un laika grafiku...",
      sendButton: "Nosūtīt ziņu ✨",
      socials: [
        { name: "TikTok", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "YouTube", href: "#" },
        { name: "E-pasts", href: "mailto:hello@example.com" },
      ],
    },

    // === FOOTER ===
    footer: {
      rights: "Visas tiesības aizsargātas.",
      builtWith: "Veidots ar ❤️ izmantojot Next.js & Aceternity UI",
    },
  },

  en: {
    // === NAVBAR ===
    nav: {
      home: "Home",
      videos: "Videos",
      photos: "Photos",
      services: "Services",
      brands: "Brands",
      about: "About",
      contact: "Contact",
    },

    // === HERO ===
    hero: {
      badge: "Available for Collaborations",
      name: "Samanta Kopce",
      role: "UGC Content Creator",
      description:
        "Crafting authentic, scroll-stopping content that turns viewers into customers. Let's make your brand unforgettable.",
      viewWork: "View My Work",
      collaborate: "Let's Collaborate",
      stats: [
        { value: "50+", label: "Brand Collabs" },
        { value: "2M+", label: "Views Generated" },
        { value: "100+", label: "Content Pieces" },
      ],
      scroll: "Scroll",
    },

    // === VIDEO SHOWCASE ===
    videoShowcase: {
      subtitle: "Portfolio",
      title: "Video Content",
      description:
        "Scroll-stopping UGC crafted for engagement and conversion.",
      playing: "PLAYING",
      categories: {
        Beauty: "Beauty",
        Lifestyle: "Lifestyle",
        BTS: "BTS",
      },
    },

    // === PHOTO GALLERY ===
    photoGallery: {
      subtitle: "Gallery",
      title: "Photo Content",
      description: "High-quality visuals that tell your brand's story.",
      photoTitles: {
        "Content Shoot": "Content Shoot",
        Lifestyle: "Lifestyle",
        "Brand Work": "Brand Work",
        Creative: "Creative",
        "Behind the Scenes": "Behind the Scenes",
        Portrait: "Portrait",
        Samanta: "Samanta",
      },
    },

    // === SERVICES ===
    services: {
      subtitle: "What I Do",
      title: "Services",
      description:
        "From concept to delivery — everything your brand needs to shine on social media.",
      items: [
        {
          icon: "🎬",
          title: "UGC Videos",
          description:
            "Unboxings, reviews, tutorials, GRWM, and day-in-my-life content that feels authentic and drives engagement.",
          formats: ["TikTok", "Reels", "Shorts"],
        },
        {
          icon: "📸",
          title: "Product Photography",
          description:
            "Lifestyle shots, flat lays, and aesthetic product photos that make your brand look irresistible.",
          formats: ["Instagram", "Website", "Ads"],
        },
        {
          icon: "🎙️",
          title: "Voiceovers",
          description:
            "Warm, authentic narration for brand videos, ads, and social content that connects with your audience.",
          formats: ["Ads", "Reels", "Promos"],
        },
        {
          icon: "✂️",
          title: "Short-Form Content",
          description:
            "Scroll-stopping vertical videos optimized for TikTok, Instagram Reels, and YouTube Shorts.",
          formats: ["9:16", "15-60s", "Trending"],
        },
        {
          icon: "💡",
          title: "Creative Strategy",
          description:
            "Content concepts, scripting, and creative direction tailored to your brand voice and target audience.",
          formats: ["Concepts", "Scripts", "Moodboards"],
        },
        {
          icon: "📦",
          title: "Unboxing & Reviews",
          description:
            "Genuine first-impression unboxings and honest product reviews that build trust with real consumers.",
          formats: ["Organic", "Authentic", "Relatable"],
        },
      ],
      cta: "Every project is unique — let's find the perfect package for your brand.",
      ctaButton: "Let's Discuss Your Project",
    },

    // === BRAND COLLABORATIONS ===
    brandCollaborations: {
      subtitle: "Trusted By",
      title: "Brand Collaborations",
      description:
        "Proud to have worked with amazing brands across multiple industries.",
    },

    // === SOCIAL PROOF ===
    socialProof: {
      subtitle: "The Receipts",
      title: "Real Results",
      description:
        "Numbers don't lie. Here's what happens when authentic content meets the right audience.",
      emptyTitle: "Every brand story starts somewhere.",
      emptyDescription:
        "Let's make your project the next success story on this wall. The first step? A simple conversation.",
      emptyButton: "Be the First Story",
    },

    // === ABOUT ===
    about: {
      subtitle: "About Me",
      title: "Hey, I'm Samanta 👋",
      bio: [
        "I'm a UGC content creator passionate about crafting authentic, relatable content that resonates with real audiences. With experience across beauty, lifestyle, tech, and fashion niches, I bring brands to life through genuine storytelling.",
        "My content has generated over 2M+ views and helped 50+ brands increase their engagement and conversion rates. I believe in creating content that feels organic, not scripted.",
        "When I'm not creating, you'll find me exploring new coffee shops, experimenting with photography, or planning my next creative project.",
      ],
      skills: [
        "UGC Videos",
        "Product Photography",
        "Brand Strategy",
        "Social Media",
        "Reels & TikTok",
        "Unboxing",
      ],
    },

    // === CONTACT ===
    contact: {
      subtitle: "Get In Touch",
      title: "Let's Create Together",
      description:
        "Have a project in mind? I'd love to hear about it. Drop me a message and let's make some amazing content.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      brandLabel: "Brand / Company",
      brandPlaceholder: "Your brand name",
      detailsLabel: "Project Details",
      detailsPlaceholder:
        "Tell me about your project, budget, and timeline...",
      sendButton: "Send Message ✨",
      socials: [
        { name: "TikTok", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "YouTube", href: "#" },
        { name: "Email", href: "mailto:hello@example.com" },
      ],
    },

    // === FOOTER ===
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with ❤️ using Next.js & Aceternity UI",
    },
  },
};
