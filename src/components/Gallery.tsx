import { motion } from "motion/react";
import showroomImg from "../assets/images/lavawash_showroom_1788692798619.jpg";
import { useLanguage } from "../context/LanguageContext";

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] border border-zinc-800 shadow-2xl group"
        >
          <img 
            src={showroomImg} 
            alt="Pristine luxury car in detailing studio" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent flex items-end">
             <div className="p-6 sm:p-10 md:p-12 max-w-3xl">
                <p className="text-white text-lg sm:text-2xl md:text-3xl font-light tracking-wide leading-relaxed">
                  {t("galleryQuotePart1")}
                  <span className="font-bold text-orange-500">
                    {t("galleryQuoteHighlight")}
                  </span>
                </p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
