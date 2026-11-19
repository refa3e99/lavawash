import { motion } from "motion/react";
import { Sparkles, Droplets, Shield, Clock } from "lucide-react";
import polishingImg from "../assets/images/lavawash_polishing_1788692784325.jpg";
import { useLanguage } from "../context/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      name: t("service1Title"),
      description: t("service1Desc"),
      icon: Droplets,
    },
    {
      name: t("service2Title"),
      description: t("service2Desc"),
      icon: Sparkles,
    },
    {
      name: t("service3Title"),
      description: t("service3Desc"),
      icon: Shield,
    },
    {
      name: t("service4Title"),
      description: t("service4Desc"),
      icon: Clock,
    },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
              {t("servicesTitlePart1")}
              <span className="text-orange-500">{t("servicesTitleHighlight")}</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mb-10 max-w-xl leading-relaxed">
              {t("servicesSubtitle")}
            </p>

            <div className="space-y-8">
              {services.map((feature, index) => (
                <motion.div 
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/25 shadow-[0_0_15px_rgba(234,88,12,0.1)]">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white tracking-wide">{feature.name}</h3>
                    <p className="mt-1.5 text-sm sm:text-base text-zinc-400 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image with Accent Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative border border-zinc-800 bg-zinc-900 group">
               <img 
                  src={polishingImg} 
                  alt="Professional car polishing" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorative background glow */}
            <div className="absolute -bottom-6 -left-6 h-48 w-48 bg-orange-600/20 blur-3xl rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 h-48 w-48 bg-amber-600/15 blur-3xl rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
