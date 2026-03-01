import { Link } from "react-router-dom";
import { useLanguage, translations } from "@/contexts/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  return (
    <footer className="border-t border-border py-12 industrial-gradient">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="font-display text-xl font-bold text-primary text-glow-green">
              СЕРВІС<span className="text-secondary">ПРО</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              {t.desc}
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4 text-foreground/80">{t.servicesTitle}</h4>
            <div className="flex flex-col gap-2">
              <Link to="/vantagniki" className="text-muted-foreground text-sm hover:text-primary transition-colors">{nav.vantagniki}</Link>
              <Link to="/perevezennya" className="text-muted-foreground text-sm hover:text-primary transition-colors">{nav.perevezennya}</Link>
              <Link to="/plytka" className="text-muted-foreground text-sm hover:text-primary transition-colors">{nav.plytka}</Link>
              <Link to="/natsteli" className="text-muted-foreground text-sm hover:text-primary transition-colors">{nav.natsteli}</Link>
              <Link to="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors">{nav.about}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4 text-foreground/80">{t.citiesTitle}</h4>
            <p className="text-muted-foreground text-sm">
              {t.cities}
            </p>
            <a href="tel:+380933956399" className="block mt-4 text-primary font-bold text-glow-green">
              093 395 6399
            </a>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
