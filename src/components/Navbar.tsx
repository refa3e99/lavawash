import { motion } from "motion/react";
import { MessageCircle, Menu, X, Droplets, Globe, Phone } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { CONTACTS, getWhatsAppLink } from "../data/contacts";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Droplets className="h-8 w-8 text-orange-500 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-orange-500/20 blur-md rounded-full -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white uppercase">
                Lava<span className="text-orange-500">Wash</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-medium tracking-wider -mt-1">
                {language === "ar" ? "للعناية بالسيارات" : "CAR DETAILING"}
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-4 xl:gap-6 flex-shrink-0">
            <a href="#services" className="text-xs lg:text-sm font-medium text-zinc-300 hover:text-orange-400 transition-colors whitespace-nowrap">
              {t("navServices")}
            </a>
            <a href="#pricing" className="text-xs lg:text-sm font-medium text-zinc-300 hover:text-orange-400 transition-colors whitespace-nowrap">
              {t("navPricing")}
            </a>
            <a href="#reviews" className="text-xs lg:text-sm font-medium text-zinc-300 hover:text-orange-400 transition-colors whitespace-nowrap">
              {t("navReviews")}
            </a>

            {/* Direct Phone / Contact Badge */}
            <a
              href={`tel:${CONTACTS.phoneNumber}`}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-orange-400 font-medium transition-colors border-e border-zinc-800 pe-2.5 lg:pe-4 xl:pe-5 rtl:border-s rtl:border-e-0 rtl:ps-2.5 rtl:lg:ps-4 rtl:xl:ps-5 flex-shrink-0"
              title={CONTACTS.phoneDisplay}
              dir="ltr"
            >
              <Phone className="h-3.5 w-3.5 text-orange-500" />
              <span className="hidden xl:inline">{CONTACTS.phoneDisplay}</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 lg:px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/70 hover:border-orange-500/50 hover:text-white transition-all shadow-sm flex-shrink-0 cursor-pointer"
              title={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
              aria-label="Toggle language"
            >
              <Globe className="h-3.5 w-3.5 text-orange-400" />
              <span>{t("langName")}</span>
            </button>
            
            <a 
              href={getWhatsAppLink(t("heroWhatsAppMsg"))}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 lg:gap-2 bg-orange-600 hover:bg-orange-500 text-white px-3.5 py-2 lg:px-5 lg:py-2.5 rounded-full text-xs lg:text-sm font-semibold transition-all shadow-[0_0_15px_rgba(234,88,12,0.25)] hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              <MessageCircle className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
              <span>{t("navBookWhatsApp")}</span>
            </a>
          </div>

          {/* Mobile Menu Button & Quick Lang Switch */}
          <div className="md:hidden flex items-center gap-3.5">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-200 bg-zinc-900 border border-zinc-700 hover:border-orange-500 transition-colors shadow-sm cursor-pointer"
              aria-label="Toggle language"
            >
              <Globe className="h-3.5 w-3.5 text-orange-400" />
              <span>{t("langName")}</span>
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none rounded-lg bg-zinc-900/60 border border-zinc-800 transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 px-4 pt-3 pb-6"
        >
          <div className="space-y-2 flex flex-col">
            <a 
              href="#services" 
              onClick={() => setIsOpen(false)} 
              className="block px-4 py-3 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-xl transition-colors"
            >
              {t("navServices")}
            </a>
            <a 
              href="#pricing" 
              onClick={() => setIsOpen(false)} 
              className="block px-4 py-3 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-xl transition-colors"
            >
              {t("navPricing")}
            </a>
            <a 
              href="#reviews" 
              onClick={() => setIsOpen(false)} 
              className="block px-4 py-3 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-xl transition-colors"
            >
              {t("navReviews")}
            </a>

            <a
              href={`tel:${CONTACTS.phoneNumber}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800"
              dir="ltr"
            >
              <Phone className="h-4 w-4 text-orange-500" />
              <span>{CONTACTS.phoneDisplay}</span>
            </a>
            
            <a 
              href={getWhatsAppLink(t("heroWhatsAppMsg"))} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 flex justify-center items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-5 py-3.5 rounded-xl font-medium transition-all shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              {t("navBookWhatsApp")}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
