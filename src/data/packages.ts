export interface VehiclePrice {
  id: "sedan" | "suv" | "pickup";
  labelAr: string;
  labelEn: string;
  priceAr: string;
  priceEn: string;
  icon: string;
}

export interface CleaningPackage {
  id: string;
  nameAr: string;
  nameEn: string;
  taglineAr?: string;
  taglineEn?: string;
  badgeAr?: string;
  badgeEn?: string;
  highlighted?: boolean;
  startingPriceAr: string;
  startingPriceEn: string;
  vehiclePrices: VehiclePrice[];
  featuresAr: string[];
  featuresEn: string[];
  exteriorSectionTitleAr?: string;
  exteriorSectionTitleEn?: string;
  exteriorFeaturesAr?: string[];
  exteriorFeaturesEn?: string[];
}

export const CLEANING_PACKAGES: CleaningPackage[] = [
  {
    id: "standard",
    nameAr: "الغسيل العادي",
    nameEn: "Standard Wash",
    taglineAr: "نظافة سريعة وأنيقة للمقصورة والهيكل الخارجي",
    taglineEn: "Quick and neat cleaning for interior and exterior",
    startingPriceAr: "8 دنانير",
    startingPriceEn: "8 JOD",
    vehiclePrices: [
      { id: "sedan", labelAr: "السيارة العادية (صالون)", labelEn: "Sedan", priceAr: "8 دنانير", priceEn: "8 JOD", icon: "🚗" },
      { id: "suv", labelAr: "السيارات الكبيرة (جيب وSUV)", labelEn: "Jeep & SUV", priceAr: "10 دنانير", priceEn: "10 JOD", icon: "🚙" },
      { id: "pickup", labelAr: "البيك أب", labelEn: "Pickup", priceAr: "12 دينارًا", priceEn: "12 JOD", icon: "🛻" },
    ],
    featuresAr: [
      "شفط الأتربة والأوساخ من أرضيات السيارة باستخدام مكانس شفط قوية.",
      "تنظيف وتلميع الأسطح الداخلية للمركبة.",
      "غسل الهيكل الخارجي في مرحلة غسيل متكاملة لإزالة الأوساخ والأتربة.",
      "تلميع الإطارات لإضفاء مظهر نظيف وأنيق.",
      "وضع أوراق حماية على أرضيات السيارة بعد الانتهاء من التنظيف.",
    ],
    featuresEn: [
      "Vacuuming dust and dirt from floor carpets using high-power vacuums.",
      "Cleaning and polishing interior vehicle surfaces.",
      "Complete exterior body wash to eliminate road dirt and grime.",
      "Tire dressing and gloss application for a sharp, sleek look.",
      "Placing protective floor mats after cleaning is completed.",
    ],
  },
  {
    id: "vip",
    nameAr: "غسيل VIP",
    nameEn: "VIP Wash",
    taglineAr: "عناية فائقة وتفصيل عميق يشمل الداخل والخارج",
    taglineEn: "Deep detailing and premium care inside & out",
    badgeAr: "موصى به",
    badgeEn: "Recommended",
    startingPriceAr: "25 دينارًا",
    startingPriceEn: "25 JOD",
    vehiclePrices: [
      { id: "sedan", labelAr: "السيارة العادية (صالون)", labelEn: "Sedan", priceAr: "25 دينارًا", priceEn: "25 JOD", icon: "🚗" },
      { id: "suv", labelAr: "السيارات الكبيرة (جيب وSUV)", labelEn: "Jeep & SUV", priceAr: "30 دينارًا", priceEn: "30 JOD", icon: "🚙" },
    ],
    featuresAr: [
      "شفط الأتربة والأوساخ من أرضيات السيارة باستخدام معدات شفط متخصصة.",
      "استخدام أجهزة مخصصة لفك الأوساخ العالقة في أرضيات المركبة وإزالتها.",
      "رش مزيل للروائح غير المرغوب فيها على الأرضيات حسب الحاجة.",
      "تنظيف المقصورة الداخلية بعناية وإزالة الأوساخ الدقيقة المتراكمة حول الأزرار والفواصل.",
      "تنظيف فتحات المكيّف والأماكن التي يصعب الوصول إليها.",
      "تعطير المقصورة باستخدام معطر مخصص للسيارات.",
      "تغليف مقود السيارة بغلاف بلاستيكي للمحافظة على نظافته.",
      "وضع أوراق حماية على أرضيات السيارة بعد إتمام الخدمة.",
    ],
    featuresEn: [
      "Specialized vacuuming for floor mats and carpets.",
      "Dedicated agitation tools to loosen and eliminate trapped dirt.",
      "Odor neutralizer application on flooring as needed.",
      "Meticulous interior cleaning around buttons, seams, and console.",
      "AC vents and hard-to-reach crevices deep cleaning.",
      "Luxury automotive cabin air freshener.",
      "Protective plastic steering wheel wrapping.",
      "Protective paper floor mats placed upon service completion.",
    ],
    exteriorSectionTitleAr: "تشمل الخدمة الخارجية:",
    exteriorSectionTitleEn: "Exterior Service Includes:",
    exteriorFeaturesAr: [
      "غسل السيارة على مرحلتين للمساعدة في إزالة الأتربة والأوساخ عن الهيكل الخارجي.",
      "تطبيق شامبو الغسيل المناسب مع العناية بطلاء المركبة.",
      "تنظيف الجنوط باستخدام مواد مخصصة للمساعدة في إزالة الشحوم والرواسب.",
      "تنظيف الإطارات وإزالة الأوساخ المتراكمة عليها.",
      "تلميع الإطارات لإكمال المظهر النهائي للسيارة.",
    ],
    exteriorFeaturesEn: [
      "Two-stage safe exterior wash to lift grime and dirt safely.",
      "pH-balanced car shampoo engineered to protect delicate clear coat.",
      "Wheel rim decontamination to remove brake dust and greases.",
      "Deep tire rubber scrubbing and cleaning.",
      "Premium tire shine and dressing for a showroom finish.",
    ],
  },
  {
    id: "dry-cleaning",
    nameAr: "الدراي كلين",
    nameEn: "Dry Cleaning",
    taglineAr: "غسيل وتطهير عميق للمقاعد والفرش والأقمشة",
    taglineEn: "Deep upholstery, seat, and fabric restoration",
    startingPriceAr: "25 دينارًا",
    startingPriceEn: "25 JOD",
    vehiclePrices: [
      { id: "sedan", labelAr: "السيارة العادية (صالون)", labelEn: "Sedan", priceAr: "25 دينارًا", priceEn: "25 JOD", icon: "🚗" },
      { id: "suv", labelAr: "السيارات الكبيرة (جيب وSUV)", labelEn: "Jeep & SUV", priceAr: "30 دينارًا", priceEn: "30 JOD", icon: "🚙" },
    ],
    featuresAr: [
      "تنظيف مقاعد السيارة بمواد مخصصة للأقمشة.",
      "تنظيف سقف السيارة بعناية باستخدام مواد وطرق مناسبة لنوع القماش.",
      "معالجة الأوساخ والبقع بحسب نوع القماش ودرجة اتساخ الأسطح.",
      "شفط الأوساخ والرطوبة الناتجة عن عملية التنظيف باستخدام معدات مناسبة.",
      "تغليف المقاعد الأمامية بأغطية بلاستيكية للمحافظة على نظافتها بعد الانتهاء.",
    ],
    featuresEn: [
      "Deep seat fabric cleaning with specialized fabric safe cleaners.",
      "Delicate headliner / ceiling cleaning tailored to the fabric type.",
      "Spot and stain treatment based on fabric texture and stain severity.",
      "Extraction of moisture and residues with high-grade extraction units.",
      "Front seat plastic covers fitted to preserve cleanliness post-service.",
    ],
  },
  {
    id: "diamond",
    nameAr: "باقة Diamond",
    nameEn: "Diamond Package",
    taglineAr: "VIP Wash + Dry Cleaning (الباقة الأكثر شمولاً وتألقاً)",
    taglineEn: "VIP Wash + Dry Cleaning (Complete All-in-One Experience)",
    badgeAr: "الأكثر طلباً ومبيعاً",
    badgeEn: "Most Popular",
    highlighted: true,
    startingPriceAr: "40 دينارًا",
    startingPriceEn: "40 JOD",
    vehiclePrices: [
      { id: "sedan", labelAr: "السيارة العادية (صالون)", labelEn: "Sedan", priceAr: "40 دينارًا", priceEn: "40 JOD", icon: "🚗" },
      { id: "suv", labelAr: "السيارات الكبيرة (جيب وSUV)", labelEn: "Jeep & SUV", priceAr: "50 دينارًا", priceEn: "50 JOD", icon: "🚙" },
    ],
    featuresAr: [
      "جميع خدمات الغسيل الداخلي والخارجي VIP.",
      "تنظيف المقاعد بمواد مخصصة للأقمشة.",
      "تنظيف سقف السيارة بعناية.",
      "معالجة الأوساخ والبقع بحسب طبيعة الخامات.",
      "شفط الأوساخ والرطوبة باستخدام معدات مناسبة.",
      "تنظيف المقصورة الداخلية وتفاصيلها الدقيقة.",
      "تنظيف الجنوط والإطارات وتلميعها.",
      "تعطير السيارة وإضفاء لمسة نهائية من النظافة والانتعاش.",
    ],
    featuresEn: [
      "Complete VIP interior and exterior washing services.",
      "Seats deep cleaned with specialized fabric formulations.",
      "Detailed ceiling / headliner cleaning with utmost care.",
      "Targeted stain and dirt removal adjusted for materials.",
      "Moisture and dirt extraction using specialized equipment.",
      "Intricate interior cabin detailing in every crevice.",
      "Rims and wheels deep degreasing and tire dressing.",
      "Luxury cabin scenting for an unmatched fresh showroom finish.",
    ],
  },
];
