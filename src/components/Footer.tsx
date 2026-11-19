import { Droplets, Instagram, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CONTACTS, getWhatsAppLink } from "../data/contacts";
import { TikTokIcon } from "./icons/TikTokIcon";

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-start">
            <div className="flex items-center gap-2">
              <Droplets className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-black tracking-tight text-white uppercase">
                Lava<span className="text-orange-500">Wash</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm">
              {t("footerTagline")}
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1" dir="ltr">
              <Phone className="h-3.5 w-3.5 text-orange-400" />
              <a href={`tel:${CONTACTS.phoneNumber}`} className="hover:text-white transition-colors">
                {CONTACTS.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Social & Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
             {/* Phone */}
             <a 
               href={`tel:${CONTACTS.phoneNumber}`} 
               className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors py-2 px-3.5 bg-zinc-900 hover:bg-zinc-800 rounded-full border border-zinc-800 text-xs font-medium"
               title="Call Us"
               dir="ltr"
             >
                <Phone className="h-4 w-4 text-orange-400" />
                <span>{CONTACTS.phoneDisplay}</span>
             </a>

             {/* WhatsApp */}
             <a 
               href={getWhatsAppLink(t("heroWhatsAppMsg"))} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors py-2 px-3.5 bg-zinc-900 hover:bg-zinc-800 rounded-full border border-zinc-800 text-xs font-medium"
               title="WhatsApp"
             >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp</span>
             </a>

             {/* Instagram */}
             <a 
               href={CONTACTS.instagramUrl} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors py-2 px-3.5 bg-zinc-900 hover:bg-zinc-800 rounded-full border border-zinc-800 text-xs font-medium"
               title="Instagram: @lavawash.jo"
             >
                <Instagram className="h-4 w-4 text-pink-400" />
                <span>{CONTACTS.instagramHandle}</span>
             </a>

             {/* TikTok */}
             <a 
               href={CONTACTS.tiktokUrl} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors py-2 px-3.5 bg-zinc-900 hover:bg-zinc-800 rounded-full border border-zinc-800 text-xs font-medium"
               title="TikTok: @lavawash.jo"
             >
                <TikTokIcon className="h-4 w-4 text-cyan-400" />
                <span>TikTok</span>
             </a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-900/80 text-center text-zinc-500 text-xs flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>
            &copy; {new Date().getFullYear()} {language === "ar" ? "لافا واش للعناية بالسيارات" : "LavaWash Detailing"}. {t("footerRights")}
          </div>
          <div className="text-zinc-600 text-[11px]">
            Jordan • +962 7 9640 7049 • @lavawash.jo
          </div>
        </div>
      </div>
    </footer>
  );
}
