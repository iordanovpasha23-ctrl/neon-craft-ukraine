import { Truck, MapPin, Grid3X3, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Truck,
    title: "Вантажники",
    description: "Професійні вантажники для квартирних, офісних та складських переїздів.",
    price: "від 300 грн/год",
    href: "/vantagniki",
    color: "green" as const,
  },
  {
    icon: MapPin,
    title: "Міжміські перевезення",
    description: "Перевезення по Україні з гарантією безпеки.",
    price: "від 18 грн/км",
    href: "/perevezennya",
    color: "blue" as const,
  },
  {
    icon: Grid3X3,
    title: "Плиточник",
    description: "Професійна кладка плитки та керамограніту з ідеальною геометрією.",
    price: "від 450 грн/м²",
    href: "/plytka",
    color: "green" as const,
  },
  {
    icon: Layers,
    title: "Натяжні стелі",
    description: "Монтаж натяжних стель під ключ за 1 день.",
    price: "від 350 грн/м²",
    href: "/natsteli",
    color: "blue" as const,
  },
];

const ServicesGrid = () => {
  return (
    <section className="relative py-20 md:py-32 industrial-gradient">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="relative container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Наші <span className="text-primary text-glow-green">послуги</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={s.href}
                className={`group block glass-panel rounded-xl p-8 transition-all duration-500 hover:scale-[1.02] ${
                  s.color === "green"
                    ? "hover:neon-border-green"
                    : "hover:neon-border-blue"
                }`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`shrink-0 w-14 h-14 rounded-lg flex items-center justify-center ${
                      s.color === "green"
                        ? "bg-primary/10 text-primary group-hover:glow-green"
                        : "bg-secondary/10 text-secondary group-hover:glow-blue"
                    } transition-all duration-500`}
                  >
                    <s.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{s.description}</p>
                    <div
                      className={`inline-block font-display text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-md ${
                        s.color === "green"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {s.price}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
