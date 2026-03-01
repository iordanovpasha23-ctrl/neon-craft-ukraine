import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage, translations } from "@/contexts/LanguageContext";

const ratings = [5, 5, 5, 4];

const Reviews = () => {
  const { lang } = useLanguage();
  const t = translations[lang].reviews;

  return (
    <section className="relative py-20 md:py-32 industrial-gradient">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="relative container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
        >
          {t.title} <span className="text-primary text-glow-green">{t.titleAccent}</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.items.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel neon-border-green rounded-xl p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-4 h-4 ${si < ratings[i] ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed italic">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-foreground text-sm">{r.name}</span>
                <span className="text-muted-foreground text-xs uppercase tracking-wider">{r.city}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
