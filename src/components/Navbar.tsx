import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, translations } from "@/contexts/LanguageContext";

const navLinks = [
  { key: "vantagniki" as const, href: "/vantagniki" },
  { key: "perevezennya" as const, href: "/perevezennya" },
  { key: "plytka" as const, href: "/plytka" },
  { key: "natsteli" as const, href: "/natsteli" },
  { key: "about" as const, href: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].nav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel-strong">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-lg md:text-xl font-bold text-primary text-glow-green tracking-wider">
          СЕРВІС<span className="text-secondary">ПРО</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              {t[l.key]}
            </Link>
          ))}
          <a
            href="tel:+380933956399"
            className="flex items-center gap-2 text-primary font-bold glow-green rounded-lg px-4 py-2 bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">093 395 6399</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel-strong border-t border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors uppercase tracking-wide py-2"
                >
                  {t[l.key]}
                </Link>
              ))}
              <a
                href="tel:+380933956399"
                className="flex items-center gap-2 text-primary font-bold text-lg"
              >
                <Phone className="w-5 h-5" />
                093 395 6399
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
