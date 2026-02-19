import { Clock, Shield, Banknote, Award } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    title: "Виїзд протягом 60 хвилин",
    description: "Швидка реакція на ваш запит у будь-якому місті.",
  },
  {
    icon: Shield,
    title: "Працюємо 24/7",
    description: "Цілодобово, без вихідних та свят.",
  },
  {
    icon: Banknote,
    title: "Фіксовані ціни",
    description: "Без прихованих платежів та доплат.",
  },
  {
    icon: Award,
    title: "Досвід понад 5 років",
    description: "Тисячі задоволених клієнтів по всій Україні.",
  },
];

const WhyUs = () => {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Чому <span className="text-secondary text-glow-blue">обирають нас</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel neon-border-blue rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-sm font-bold mb-2 uppercase tracking-wider">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
