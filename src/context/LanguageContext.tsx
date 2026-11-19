import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRTL: boolean;
  t: (key: string) => string;
}

export const translations = {
  ar: {
    // Navigation
    navServices: "الخدمات",
    navPricing: "الأسعار",
    navReviews: "آراء العملاء",
    navBookWhatsApp: "احجز عبر واتساب",
    langName: "English",
    langCode: "en",

    // Hero
    heroBadge: "خدمات العناية الفائقة بالسيارات متوفرة الآن",
    heroTitlePart1: "عناية فائقة وتألق استثنائي ",
    heroTitleHighlight: "لسيارتك",
    heroTitlePart2: ".",
    heroSubtitle: "نقدم لمركبتك أرقى خدمات غسيل السيارات الاحترافي، من الغسيل العادي وغسيل VIP إلى الدراي كلين وباقة Diamond الشاملة، للمحافظة على نظافة وتألق سيارتك دائماً.",
    heroBookCTA: "احجز عبر واتساب",
    heroExploreCTA: "استكشف الخدمات",
    heroWhatsAppMsg: "مرحباً، أود الاستفسار وحجز موعد غسيل وتفصيل في لافا واش.",

    // Services
    servicesTitlePart1: "خدمات ",
    servicesTitleHighlight: "الغسيل المتخصصة",
    servicesSubtitle: "خدمات غسيل وتنظيف احترافية متكاملة تشمل الغسيل العادي، غسيل VIP، والدراي كلين بأعلى معايير الجودة.",
    service1Title: "الغسيل العادي",
    service1Desc: "غسيل خارجي متكامل، شفط الأتربة من الأرضيات، تنظيف وتلميع الأسطح، وتلميع الإطارات مع وضع أوراق الحماية.",
    service2Title: "غسيل VIP",
    service2Desc: "غسيل خارجي بمرحلتين، فك الأوساخ العالقة، تنظيف فتحات المكيف والزوايا الدقيقة، وتعطير وتغليف المقود.",
    service3Title: "الدراي كلين",
    service3Desc: "تنظيف مقاعد السيارة وسقفها بمواد مخصصة للأقمشة، معالجة البقع، شفط الرطوبة، وتغليف المقاعد الأمامية.",
    service4Title: "باقة Diamond الشاملة",
    service4Desc: "الجمع الشامل بين غسيل VIP الداخلي والخارجي والدراي كلين الكامل لأقصى درجات النظافة والانتعاش.",

    // Pricing
    pricingTitlePart1: "باقات ",
    pricingTitleHighlight: "الأسعار",
    pricingSubtitle: "باقات واضحة ومحددة تناسب مختلف فئات وأحجام السيارات لخدمات الغسيل الداخلي والخارجي والدراي كلين.",
    mostPopular: "الأكثر طلباً",
    startingAt: "ابتداءً من",
    bookPackage: "حجز الباقة",

    tier1Name: "العناية الدورية",
    tier1Price: "$45",
    tier1Desc: "مثالية للمحافظة الدورية على مظهر السيارة وتألقها السريع.",
    tier1Feature1: "غسيل خارجي يدوي بالرغوة النشطة",
    tier1Feature2: "تنظيف جنوط وإطارات السيارة",
    tier1Feature3: "تلميع وحماية الإطارات",
    tier1Feature4: "كنس داخلي سريع للمقصورة",
    tier1Feature5: "تنظيف الزجاج الخارجي وتلميعه",

    tier2Name: "باقة لافا واش",
    tier2Price: "$120",
    tier2Desc: "باقتنا الخاصة لتنظيف عميق وشامل للهيكل الخارجي والمقصورة الداخلية.",
    tier2Feature1: "جميع مزايا باقة العناية الدورية",
    tier2Feature2: "تنظيف عميق لتجاويف الجنوط",
    tier2Feature3: "تطبيق طبقة شمع سائل عازلة ولامعة",
    tier2Feature4: "كنس داخلي عميق ودقيق",
    tier2Feature5: "مسح وتعقيم جميع الأسطح الداخلية",
    tier2Feature6: "تنظيف وتلميع الزجاج داخلياً وخارجياً",

    tier3Name: "التلميع الشامل",
    tier3Price: "$295",
    tier3Desc: "عناية ترميمية كاملة وحماية فائقة تعيد سيارتك كأنها جديدة كلياً.",
    tier3Feature1: "جميع مزايا باقة لافا واش",
    tier3Feature2: "إزالة الشوائب بتقنية الصلصال (Clay Bar)",
    tier3Feature3: "تلميع آلي وتطبيق طبقة حماية للطلاء",
    tier3Feature4: "تنظيف عميق وترطيب للجلد والمقاعد",
    tier3Feature5: "معالجة وإزالة البقع من السجاد والمفروشات",
    tier3Feature6: "تنظيف وتلميع دقيق لحجرة المحرك",

    // Gallery
    galleryQuotePart1: "الإتقان ليس مجرد عمل نقوم به، بل ",
    galleryQuoteHighlight: "أسلوب حياة.",

    // Reviews
    reviewsTitlePart1: "آراء ",
    reviewsTitleHighlight: "عملائنا",
    reviewsSubtitle: "ثقة عملائنا هي فخرنا. اكتشف تجاربهم مع معايير لافا واش الفائقة.",
    reviewsRating: "5.0 / 5.0",
    review1Name: "محمد طارق",
    review1Car: "volkswagen E-Golf",
    review1Text: "الشباب ما قصروا، اجوا لباب البيت ونضفوا السيارة بشكل رهيب، احسن اشي بالخدمة اني ما بقعد استنى بالسيارة، بقدر اكمل شغلي بدون اي انتظار، شغل نضيف ومرتب وما رح اغسل الا عندهم.",
    review2Name: "سارة الليثي",
    review2Car: "رينج روفر",
    review2Text: "دقة في المواعيد، احترافية عالية، وعناية فائقة بأدق التفاصيل. أمضوا ساعات في العناية بكل ركن بالمقصورة الداخلية.",
    review3Name: "د. خالد المنصور",
    review3Car: "تسلا موديل S",
    review3Text: "بطلت اكل هم غسلة السيارة بعد الطلعة مع الشباب، ببساطة لانه لافا ووش موجودين! عندهم عناية بأدق التفاصيل ومتعاونين جداً، كل التوفيق لاحلى شباب.",

    // CTA
    ctaTitlePart1: "هل أنت مستعد لمنح سيارتك ",
    ctaTitleHighlight: "العناية الفائقة",
    ctaTitlePart2: " التي تستحقها؟",
    ctaSubtitle: "تواصل معنا اليوم عبر واتساب لحجز موعدك أو استشارة فريقنا لاختيار الباقة الأنسب لسيارتك.",
    ctaWhatsAppBtn: "مراسلتنا عبر واتساب",
    ctaPortfolioBtn: "معرض أعمالنا",
    ctaLocation: "نخدم جميع مناطق المدينة وضواحيها. تتوفر خدمات العناية المتنقلة عند الطلب.",

    // Footer
    footerTagline: "العناية الفائقة وتفصيل السيارات الاحترافي.",
    footerRights: "جميع الحقوق محفوظة."
  },
  en: {
    // Navigation
    navServices: "Services",
    navPricing: "Pricing",
    navReviews: "Reviews",
    navBookWhatsApp: "Book via WhatsApp",
    langName: "العربية",
    langCode: "ar",

    // Hero
    heroBadge: "Premium Detailing Now Available in Your City",
    heroTitlePart1: "Uncompromising Care for ",
    heroTitleHighlight: "Exceptional",
    heroTitlePart2: " Vehicles.",
    heroSubtitle: "Dedicated exclusively to premium car washing and interior cleaning services — from Standard and VIP wash to specialized Dry Cleaning and Diamond care.",
    heroBookCTA: "Book via WhatsApp",
    heroExploreCTA: "Explore Services",
    heroWhatsAppMsg: "Hello, I would like to book a detailing appointment at LavaWash.",

    // Services
    servicesTitlePart1: "Specialized ",
    servicesTitleHighlight: "Wash Services",
    servicesSubtitle: "Professional interior and exterior washing services tailored to deliver unmatched cleanliness and freshness for your vehicle.",
    service1Title: "Standard Wash",
    service1Desc: "Comprehensive exterior wash, interior floor vacuuming, surface cleaning, tire glossing, and protective paper mats.",
    service2Title: "VIP Wash",
    service2Desc: "Two-stage exterior wash, stuck dirt extraction, AC vents and intricate trim cleaning, cabin perfume, and steering wrap.",
    service3Title: "Dry Cleaning",
    service3Desc: "Deep seat fabric and headliner cleaning using specialized formulas, moisture extraction, and protective seat wrapping.",
    service4Title: "Diamond Package",
    service4Desc: "All-in-one VIP interior and exterior wash combined with full Dry Cleaning for the ultimate showroom freshness.",

    // Pricing
    pricingTitlePart1: "Straightforward ",
    pricingTitleHighlight: "Pricing",
    pricingSubtitle: "Transparent packages tailored to all vehicle categories for interior, exterior, and dry cleaning wash services.",
    mostPopular: "Most Popular",
    startingAt: "starting at",
    bookPackage: "Book Package",

    tier1Name: "Maintenance",
    tier1Price: "$45",
    tier1Desc: "Perfect for a quick refresh to keep your car looking sharp.",
    tier1Feature1: "Exterior foam hand wash",
    tier1Feature2: "Wheel face & tire cleaning",
    tier1Feature3: "Tire dressing applied",
    tier1Feature4: "Interior vacuum (quick)",
    tier1Feature5: "Windows cleaned (outside)",

    tier2Name: "The Lava Wash",
    tier2Price: "$120",
    tier2Desc: "Our signature deep clean for both interior and exterior.",
    tier2Feature1: "Everything in Maintenance",
    tier2Feature2: "Deep wheel barrel cleaning",
    tier2Feature3: "Spray wax sealant applied",
    tier2Feature4: "Thorough interior vacuum",
    tier2Feature5: "Wipe down of all interior surfaces",
    tier2Feature6: "Windows cleaned (inside & out)",

    tier3Name: "Full Detail",
    tier3Price: "$295",
    tier3Desc: "Comprehensive restoration and protection.",
    tier3Feature1: "Everything in Lava Wash",
    tier3Feature2: "Clay bar paint decontamination",
    tier3Feature3: "Machine wax/sealant application",
    tier3Feature4: "Leather deep cleaning & conditioning",
    tier3Feature5: "Carpet & upholstery spot treatment",
    tier3Feature6: "Engine bay detail",

    // Gallery
    galleryQuotePart1: "Perfection is not an act, but a ",
    galleryQuoteHighlight: "habit.",

    // Reviews
    reviewsTitlePart1: "Client ",
    reviewsTitleHighlight: "Testimonials",
    reviewsSubtitle: "Don't just take our word for it. See what our clients have to say about the LavaWash standard.",
    reviewsRating: "5.0 / 5.0",
    review1Name: "Michael T.",
    review1Car: "Vokswagen E-Golf",
    review1Text: "The guys did an amazing job! They came right to my doorstep and cleaned the car exceptionally well. The best part of the service is that I don't have to wait in the car. I can carry on with my work without any delays. The work is clean and meticulous, and I won't be getting my car washed anywhere else!",
    review2Name: "Sarah L.",
    review2Car: "Range Rover",
    review2Text: "Punctuality, outstanding professionalism, and exceptional attention to detail. They spent hours carefully cleaning every corner of the interior.",
    review3Name: "David K.",
    review3Car: "Tesla Model S",
    review3Text: "I no longer worry about getting my car washed after a night out with friends, simply because Lava Wash is always there! They pay attention to every little detail and are incredibly cooperative. Wishing the amazing team all the best!",

    // CTA
    ctaTitlePart1: "Ready to give your car the ",
    ctaTitleHighlight: "treatment",
    ctaTitlePart2: " it deserves?",
    ctaSubtitle: "Contact us today to book an appointment or discuss a custom detailing package.",
    ctaWhatsAppBtn: "Message on WhatsApp",
    ctaPortfolioBtn: "View Portfolio",
    ctaLocation: "Serving the Greater Metro Area. Mobile services available.",

    // Footer
    footerTagline: "Premium automotive care and detailing.",
    footerRights: "All rights reserved."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default language is 'ar' (Arabic) as requested
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lavawash_lang") as Language;
      if (saved === "ar" || saved === "en") {
        return saved;
      }
    }
    return "ar";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lavawash_lang", lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  useEffect(() => {
    const isRTL = language === "ar";
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    
    if (language === "ar") {
      document.title = "لافا واش | العناية الفائقة وتفصيل السيارات الفاخرة";
    } else {
      document.title = "LavaWash | Premium Car Detailing";
    }
  }, [language]);

  const t = (key: string): string => {
    const currentDict = translations[language] as Record<string, string>;
    if (currentDict && currentDict[key]) {
      return currentDict[key];
    }
    const fallbackDict = translations.ar as Record<string, string>;
    return fallbackDict[key] || key;
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
