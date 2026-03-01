import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-20 right-4 z-50">
      <div className="glass-panel rounded-full flex items-center gap-1 p-1 border border-border/50">
        <Globe className="w-4 h-4 text-muted-foreground ml-2" />
        <button
          onClick={() => setLang("ua")}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
            lang === "ua"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          UA
        </button>
        <button
          onClick={() => setLang("ru")}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
            lang === "ru"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          RU
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
