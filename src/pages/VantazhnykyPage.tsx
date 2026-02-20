import { motion } from "framer-motion";
import { Phone, Truck, Users, Zap, FileCheck, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import VantazhnykyCalc from "@/components/calculators/VantazhnykyCalc";
import ContactSection from "@/components/ContactSection";

const services = [
  "Квартирні переїзди будь-якої складності",
  "Офісні переїзди з розбиранням та збиранням меблів",
  "Складські роботи та завантаження фур",
  "Піднімання та спуск важких предметів",
  "Перенесення піаніно, сейфів, обладнання",
  "Пакування та захист речей при переїзді",
];

const priceBlocks = [
  { label: "1 вантажник / год", price: "350 грн" },
  { label: "2 вантажники / год", price: "700 грн" },
  { label: "Поверх без ліфта", price: "+15 грн" },
  { label: "Мінімальне замовлення", price: "2 години" },
];

const benefits = [
  {
    icon: Zap,
    title: "Швидкий виїзд бригади",
    desc: "Вантажники приїжджають протягом 60 хвилин у будь-яке місто.",
  },
  {
    icon: FileCheck,
    title: "Офіційний договір",
    desc: "Фіксуємо умови співпраці та гарантуємо збереження вантажу.",
  },
  {
    icon: CreditCard,
    title: "Зручна оплата",
    desc: "Готівка, картка, безготівка — обирайте комфортний спосіб.",
  },
  {
    icon: Users,
    title: "Досвідчені фахівці",
    desc: "Професійні мувери з необхідними навичками та обладнанням.",
  },
];

const VantazhnykyPage = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pb-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        <div className="relative container text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-secondary font-display text-sm font-bold uppercase tracking-[0.3em] mb-4"
          >
            Професійні вантажники
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary text-glow-green mb-4"
          >
            Ваш надійний помічник
            <br />
            <span className="text-foreground">у переїзді</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4"
          >
            З нами переїзд стає не тільки простішим, а й дешевшим.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex items-center justify-center gap-3 md:gap-5 flex-wrap mb-6"
          >
            {["ОДЕСА", "КИЇВ", "ДНІПРО", "ЛЬВІВ", "ХАРКІВ"].map((city, i) => (
              <span key={city} className="flex items-center gap-3 md:gap-5">
                <span className="font-display text-sm md:text-base font-semibold text-foreground/60 tracking-widest uppercase">
                  {city}
                </span>
                {i < 4 && <span className="w-1.5 h-1.5 rounded-full bg-primary/80" />}
              </span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10"
          >
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-black text-primary text-glow-green">5+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">років роботи</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-black text-secondary text-glow-blue">1000+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">задоволених клієнтів</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-black text-primary text-glow-green">60</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">хв — час виїзду</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+380933956399"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-bold px-8 py-4 rounded-lg glow-green-strong hover:scale-105 transition-transform animate-glow-pulse-slow"
            >
              <Phone className="w-5 h-5" />
              Замовити зараз
            </a>
            <a href="tel:+380933956399" className="inline-flex items-center gap-2 text-secondary font-bold text-xl text-glow-blue">
              <Phone className="w-6 h-6" />
              093 395 6399
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 industrial-gradient">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-8 text-center"
          >
            Що ми <span className="text-primary text-glow-green">пропонуємо</span>
          </motion.h2>
          <div className="glass-panel neon-border-green rounded-xl p-6 md:p-8">
            <ul className="space-y-4">
              {services.map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 text-foreground/90"
                >
                  <Truck className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                  <span>{s}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 industrial-gradient">
        <div className="container max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-4 text-center"
          >
            Чому <span className="text-primary text-glow-green">вигідно співпрацювати</span> з нами
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-center mb-12"
          >
            Швидко • Ефективно • Якісно
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel neon-border-green rounded-xl p-6 text-center hover:scale-[1.02] transition-transform duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:glow-green transition-all">
                  <b.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-sm font-bold mb-2 uppercase tracking-wider">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-8 text-center"
          >
            <span className="text-secondary text-glow-blue">Ціни</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {priceBlocks.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-panel neon-border-blue rounded-xl p-6 text-center hover:border-secondary/60 transition-colors"
              >
                <div className="text-foreground/80 text-sm mb-2">{p.label}</div>
                <div className="font-display text-2xl font-black text-secondary text-glow-blue">{p.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 industrial-gradient">
        <div className="container max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-8 text-center"
          >
            Калькулятор <span className="text-primary text-glow-green">вартості</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <VantazhnykyCalc />
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default VantazhnykyPage;
