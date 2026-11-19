import { motion } from "motion/react";
import { MessageCircle, Instagram, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CONTACTS, getWhatsAppLink } from "../data/contacts";
import { TikTokIcon } from "./icons/TikTokIcon";

export function CTA() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-orange-600/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-zinc-800/50 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          {t("ctaTitlePart1")}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
            {t("ctaTitleHighlight")}
          </span>
          {t("ctaTitlePart2")}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {t("ctaSubtitle")}
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full"
        >
          <a 
            href={getWhatsAppLink(t("heroWhatsAppMsg"))} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all w-full sm:w-auto shadow-[0_0_25px_rgba(234,88,12,0.35)] hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-5 w-5" />
            <span>{t("ctaWhatsAppBtn")}</span>
          </a>
          <a 
            href={`tel:${CONTACTS.phoneNumber}`} 
            className="flex items-center justify-center gap-2.5 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all w-full sm:w-auto border border-zinc-700/80 hover:border-zinc-500"
            dir="ltr"
          >
            <Phone className="h-5 w-5 text-orange-400" />
            <span>{CONTACTS.phoneDisplay}</span>
          </a>
        </motion.div>

        {/* Social Links Cards (Instagram & TikTok) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 max-w-xl mx-auto p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-xs sm:text-sm font-semibold text-zinc-300">
            {language === "ar" ? "تابعنا على منصات التواصل:" : "Connect with us:"}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={CONTACTS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/70 transition-colors text-xs sm:text-sm font-medium"
            >
              <Instagram className="h-4 w-4 text-orange-400" />
              <span>{CONTACTS.instagramHandle}</span>
            </a>
            <a
              href={CONTACTS.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/70 transition-colors text-xs sm:text-sm font-medium"
            >
              <TikTokIcon className="h-4 w-4 text-orange-400" />
              <span>TikTok</span>
            </a>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="mt-10 flex items-center justify-center gap-2 text-zinc-400 text-xs sm:text-sm"
        >
           <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0" />
           <span>{t("ctaLocation")}</span>
        </motion.div>
      </div>
    </section>
  );
}
