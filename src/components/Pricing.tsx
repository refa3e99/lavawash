import { useState } from "react";
import { motion } from "motion/react";
import { Check, MessageCircle, Sparkles, Car, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CLEANING_PACKAGES, CleaningPackage, VehiclePrice } from "../data/packages";
import { getWhatsAppLink } from "../data/contacts";

type VehicleFilter = "all" | "sedan" | "suv" | "pickup";

export function Pricing() {
  const { language, t } = useLanguage();
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleFilter>("all");

  const vehicleFilters: { id: VehicleFilter; labelAr: string; labelEn: string; icon: string }[] = [
    { id: "all", labelAr: "جميع المركبات", labelEn: "All Vehicles", icon: "✨" },
    { id: "sedan", labelAr: "صالون", labelEn: "Sedan", icon: "🚗" },
    { id: "suv", labelAr: "جيب وSUV", labelEn: "SUV & Jeep", icon: "🚙" },
    { id: "pickup", labelAr: "بيك أب", labelEn: "Pickup", icon: "🛻" },
  ];

  const getDisplayedPrice = (pkg: CleaningPackage) => {
    if (selectedVehicle === "all") {
      return {
        amount: language === "ar" ? pkg.startingPriceAr : pkg.startingPriceEn,
        note: language === "ar" ? "ابتداءً من" : "Starting at",
      };
    }
    const match = pkg.vehiclePrices.find((v) => v.id === selectedVehicle);
    if (match) {
      return {
        amount: language === "ar" ? match.priceAr : match.priceEn,
        note: language === "ar" ? match.labelAr : match.labelEn,
      };
    }
    // If not offered for pickup
    return {
      amount: language === "ar" ? pkg.startingPriceAr : pkg.startingPriceEn,
      note: language === "ar" ? "صالون / SUV" : "Sedan / SUV",
    };
  };

  const getWhatsAppMessage = (pkg: CleaningPackage) => {
    const pkgName = language === "ar" ? pkg.nameAr : pkg.nameEn;
    const vehicleName =
      selectedVehicle === "all"
        ? ""
        : selectedVehicle === "sedan"
        ? language === "ar" ? " - سيارة صالون" : " - Sedan"
        : selectedVehicle === "suv"
        ? language === "ar" ? " - سيارة جيب/SUV" : " - SUV"
        : language === "ar" ? " - بيك أب" : " - Pickup";

    if (language === "ar") {
      return `مرحباً لافا واش، أود الاستفسار وحجز [${pkgName}${vehicleName}].`;
    }
    return `Hello LavaWash, I would like to book the [${pkgName}${vehicleName}] package.`;
  };

  return (
    <section id="pricing" className="py-24 bg-zinc-900/60 border-y border-zinc-800/80 relative">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="h-4 w-4" />
            <span>{language === "ar" ? "باقات الغسيل والتفصيل المعتمدة" : "Certified Detailing Packages"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            {language === "ar" ? (
              <>
                باقات <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">العناية والغسيل</span>
              </>
            ) : (
              <>
                Cleaning & Detailing <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Packages</span>
              </>
            )}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            {language === "ar"
              ? "اختر الباقة المثالية لسيارتك بأسعار واضحة ومحددة حسب فئة وحجم المركبة، من الغسيل العادي إلى باقة Diamond الشاملة."
              : "Select the perfect wash & detailing package with crystal-clear pricing tailored to your vehicle type."}
          </p>

          {/* Vehicle Type Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-zinc-950/80 rounded-2xl border border-zinc-800 max-w-lg mx-auto shadow-inner">
            {vehicleFilters.map((filter) => {
              const active = selectedVehicle === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedVehicle(filter.id)}
                  className={`flex-1 min-w-[100px] py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
                    active
                      ? "bg-orange-600 text-white shadow-md shadow-orange-600/30"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <span>{filter.icon}</span>
                  <span>{language === "ar" ? filter.labelAr : filter.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {CLEANING_PACKAGES.map((pkg, index) => {
            const isDiamond = pkg.id === "diamond";
            const priceInfo = getDisplayedPrice(pkg);
            const badge = language === "ar" ? pkg.badgeAr : pkg.badgeEn;
            const name = language === "ar" ? pkg.nameAr : pkg.nameEn;
            const tagline = language === "ar" ? pkg.taglineAr : pkg.taglineEn;
            const features = language === "ar" ? pkg.featuresAr : pkg.featuresEn;
            const exteriorTitle = language === "ar" ? pkg.exteriorSectionTitleAr : pkg.exteriorSectionTitleEn;
            const exteriorFeatures = language === "ar" ? pkg.exteriorFeaturesAr : pkg.exteriorFeaturesEn;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative flex flex-col rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                  isDiamond
                    ? "bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-zinc-950 border-2 border-orange-500 shadow-[0_0_35px_rgba(234,88,12,0.22)] ring-1 ring-orange-500/40"
                    : "bg-zinc-950/90 border border-zinc-800 hover:border-zinc-700 hover:shadow-xl"
                }`}
              >
                {/* Badge for Diamond or VIP */}
                {badge && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-bold uppercase tracking-wider py-1 px-4 rounded-full whitespace-nowrap inline-flex items-center gap-1 shadow-lg">
                      <Sparkles className="h-3 w-3" />
                      {badge}
                    </span>
                  </div>
                )}

                {/* Card Header */}
                <div className="mb-5 pt-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                      {name}
                    </h3>
                  </div>
                  {tagline && (
                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 min-h-[2.25rem] leading-snug">
                      {tagline}
                    </p>
                  )}
                </div>

                {/* Dynamic Price Display */}
                <div className="mb-5 pb-5 border-b border-zinc-800/80">
                  <div className="flex flex-wrap items-baseline gap-x-2 text-white">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-orange-200">
                      {priceInfo.amount}
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-400 font-medium">
                      ({priceInfo.note})
                    </span>
                  </div>

                  {/* All Vehicle Prices Breakdown Pills */}
                  <div className="mt-4 pt-3 border-t border-zinc-800/60">
                    <div className="text-[11px] font-semibold text-zinc-400 mb-2 flex items-center gap-1.5">
                      <Car className="h-3.5 w-3.5 text-orange-400" />
                      <span>{language === "ar" ? "تفصيل الأسعار حسب المركبة:" : "Price by Vehicle Category:"}</span>
                    </div>
                    <div className="space-y-1.5">
                      {pkg.vehiclePrices.map((vp: VehiclePrice) => {
                        const isMatch = selectedVehicle === vp.id;
                        return (
                          <div
                            key={vp.id}
                            className={`flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg transition-colors ${
                              isMatch
                                ? "bg-orange-500/20 text-orange-300 font-bold border border-orange-500/30"
                                : "bg-zinc-900/70 text-zinc-300"
                            }`}
                          >
                            <span className="flex items-center gap-1.5">
                              <span>{vp.icon}</span>
                              <span>{language === "ar" ? vp.labelAr : vp.labelEn}</span>
                            </span>
                            <span className="font-bold text-white tracking-wide">
                              {language === "ar" ? vp.priceAr : vp.priceEn}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-1 space-y-4 mb-6">
                  <div>
                    <div className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-orange-500" />
                      <span>{language === "ar" ? "تشمل الباقة:" : "Package Includes:"}</span>
                    </div>
                    <ul className="space-y-2.5">
                      {features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-[13px] leading-relaxed">
                          <Check className="h-4 w-4 flex-shrink-0 text-orange-500 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Extra Exterior Section (for VIP Wash) */}
                  {exteriorFeatures && exteriorFeatures.length > 0 && (
                    <div className="pt-3 border-t border-zinc-800/70">
                      <div className="text-xs font-bold text-orange-400 tracking-wide mb-2">
                        {exteriorTitle || (language === "ar" ? "تشمل الخدمة الخارجية:" : "Exterior Service:")}
                      </div>
                      <ul className="space-y-2">
                        {exteriorFeatures.map((extFeat, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-[13px] leading-relaxed">
                            <Check className="h-4 w-4 flex-shrink-0 text-amber-500 mt-0.5" />
                            <span>{extFeat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* WhatsApp Booking CTA */}
                <a
                  href={getWhatsAppLink(getWhatsAppMessage(pkg))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all duration-200 ${
                    isDiamond
                      ? "bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-lg shadow-orange-600/30 hover:scale-[1.02]"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-zinc-500 hover:scale-[1.01]"
                  }`}
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{language === "ar" ? `حجز ${name} عبر واتساب` : `Book ${name} via WhatsApp`}</span>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto">
          {language === "ar"
            ? "💡 جميع المواد ومساحيق الغسيل والتنظيف المستخدمة معتمدة وآمنة تماماً على طلاء وأقمشة ومقصورة السيارات."
            : "💡 All cleaning and washing formulas used are certified, gentle, and 100% safe on vehicle paint, upholstery, and delicate surfaces."}
        </div>
      </div>
    </section>
  );
}
