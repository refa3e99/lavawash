import { motion } from "motion/react";
import { MessageCircle, ArrowRight, Phone } from "lucide-react";
import heroImg from "../assets/images/lavawash_hero_1788692767732.jpg";
import { useLanguage } from "../context/LanguageContext";
import { CONTACTS, getWhatsAppLink } from "../data/contacts";

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Luxury car covered in foam" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/70 to-zinc-950"></div>
        {/* Glow accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 backdrop-blur-md mb-8 shadow-inner"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-xs sm:text-sm font-medium text-zinc-300">
            {t("heroBadge")}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl break-words leading-tight sm:leading-tight md:leading-tight"
        >
          {t("heroTitlePart1")}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
            {t("heroTitleHighlight")}
          </span>
          {t("heroTitlePart2")}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed"
        >
          {t("heroSubtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto items-center justify-center"
        >
          <a 
            href={getWhatsAppLink(t("heroWhatsAppMsg"))} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(234,88,12,0.4)] w-full sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            <span>{t("heroBookCTA")}</span>
          </a>
          <a 
            href={`tel:${CONTACTS.phoneNumber}`}
            className="flex items-center justify-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all border border-zinc-700/80 hover:border-zinc-500 w-full sm:w-auto"
            dir="ltr"
          >
            <Phone className="h-4 w-4 text-orange-400" />
            <span>{CONTACTS.phoneDisplay}</span>
          </a>
        </motion.div>

        {/* Social / contact quick indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center gap-4 text-xs sm:text-sm text-zinc-400"
        >
          <span>{language === "ar" ? "تابعنا على إنستغرام وتيك توك:" : "Follow us on Instagram & TikTok:"}</span>
          <a
            href={CONTACTS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-4"
          >
            {CONTACTS.instagramHandle}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
