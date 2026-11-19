import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Reviews() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: t("review1Name"),
      car: t("review1Car"),
      content: t("review1Text"),
    },
    {
      name: t("review2Name"),
      car: t("review2Car"),
      content: t("review2Text"),
    },
    {
      name: t("review3Name"),
      car: t("review3Car"),
      content: t("review3Text"),
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              {t("reviewsTitlePart1")}
              <span className="text-orange-500">{t("reviewsTitleHighlight")}</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              {t("reviewsSubtitle")}
            </p>
          </div>
          <div className="flex items-center gap-3 bg-zinc-900/80 px-4 py-2 rounded-2xl border border-zinc-800">
             <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 text-orange-400 fill-orange-400" />
                ))}
             </div>
             <span className="text-white font-bold text-sm tracking-wide">{t("reviewsRating")}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-zinc-900/70 border border-zinc-800/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-zinc-700 transition-colors ${
                index === 2 ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0 w-full" : ""
              }`}
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-6 italic text-sm sm:text-base">
                  "{review.content}"
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-800/60">
                <p className="text-white font-bold tracking-wide">{review.name}</p>
                <p className="text-orange-400 text-xs sm:text-sm font-medium mt-0.5">{review.car}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
