import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Олександр К.",
    city: "Одеса",
    text: "Замовляв вантажників для переїзду. Приїхали вчасно, все акуратно перенесли. Рекомендую!",
    rating: 5,
  },
  {
    name: "Марина Т.",
    city: "Київ",
    text: "Електрик приїхав за 40 хвилин. Швидко знайшов проблему і все полагодив. Професіонал.",
    rating: 5,
  },
  {
    name: "Андрій В.",
    city: "Дніпро",
    text: "Сантехнік усунув протікання за годину. Ціна відповідала заявленій. Дякую!",
    rating: 5,
  },
  {
    name: "Ірина Л.",
    city: "Львів",
    text: "Перевезення меблів між містами — все дістали у цілості. Водій дуже відповідальний.",
    rating: 4,
  },
];

const Reviews = () => {
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
          Відгуки <span className="text-primary text-glow-green">клієнтів</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
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
                    className={`w-4 h-4 ${si < r.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
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
