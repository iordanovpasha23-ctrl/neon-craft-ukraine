import { motion } from "framer-motion";
import { Phone, Truck, Zap, FileCheck, CreditCard, Users, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import VantazhnykyCalc from "@/components/calculators/VantazhnykyCalc";
import ContactSection from "@/components/ContactSection";
import { useLanguage, translations } from "@/contexts/LanguageContext";
import kyivLandmark from "@/assets/kyiv-landmark.jpg";

const benefitIcons = [Zap, FileCheck, CreditCard, Users];

const kyivDistricts = [
  "Печерськ", "Поділ", "Оболонь", "Троєщина", "Позняки",
  "Святошин", "Виноградар", "Дарниця", "Лівобережна", "Лук'янівка",
];

const VantazhnykyKyivPage = () => {
  const { lang } = useLanguage();
  const c = translations[lang].vantagniki;
  const isUa = lang === "ua";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with Kyiv landmark */}
      <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
        {/* Landmark background */}
        <div className="absolute inset-0">
          <img
            src={kyivLandmark}
            alt={isUa ? "Софійський собор у Києві" : "Софийский собор в Киеве"}
            className="w-full h-full object-cover opacity-40"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
          <div className="absolute inset-0 grid-overlay opacity-30" />
        </div>

        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative container text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass-panel neon-border-blue rounded-full px-4 py-2 mb-6"
          >
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-secondary font-display text-sm font-bold uppercase tracking-[0.3em]">
              {isUa ? "Київ" : "Киев"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary text-glow-green mb-4"
          >
            {isUa ? "Вантажники в Києві" : "Грузчики в Киеве"}
            <br />
            <span className="text-foreground">{isUa ? "цілодобово" : "круглосуточно"}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-6"
          >
            {isUa
              ? "Професійні вантажники по всіх районах столиці. Виїзд протягом 60 хвилин — від Печерська до Троєщини."
              : "Профессиональные грузчики по всем районам столицы. Выезд в течение 60 минут — от Печерска до Троещины."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10"
          >
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-black text-primary text-glow-green">60</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {isUa ? "хв — виїзд" : "мин — выезд"}
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-black text-secondary text-glow-blue">10</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {isUa ? "районів Києва" : "районов Киева"}
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-black text-primary text-glow-green">24/7</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {isUa ? "без вихідних" : "без выходных"}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+380738827086"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-bold px-8 py-4 rounded-lg glow-green-strong hover:scale-105 transition-transform animate-glow-pulse-slow"
            >
              <Phone className="w-5 h-5" />
              {c.orderNow}
            </a>
            <a href="tel:+380738827086" className="inline-flex items-center gap-2 text-secondary font-bold text-xl text-glow-blue">
              <Phone className="w-6 h-6" />
              073 882 7086
            </a>
          </motion.div>
        </div>
      </section>

      {/* Districts */}
      <section className="py-12 md:py-16 industrial-gradient">
        <div className="container max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-8 text-center"
          >
            {isUa ? "Працюємо в усіх" : "Работаем во всех"}{" "}
            <span className="text-secondary text-glow-blue">
              {isUa ? "районах Києва" : "районах Киева"}
            </span>
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {kyivDistricts.map((d, i) => (
              <motion.span
                key={d}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="glass-panel neon-border-blue rounded-full px-4 py-2 text-sm text-foreground/90 flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-secondary" />
                {d}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Services + Benefits */}
      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-12 text-center"
          >
            {c.sectionTitle} <span className="text-primary text-glow-green">{c.sectionTitleAccent}</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {c.services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-panel neon-border-green rounded-xl p-5 flex items-start gap-3 hover:scale-[1.02] transition-transform duration-300"
              >
                <Truck className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                <span className="text-foreground/90 text-sm">{s}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.benefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-panel neon-border-green rounded-xl p-6 text-center hover:scale-[1.02] transition-transform duration-300 group"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:glow-green transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-sm font-bold mb-2 uppercase tracking-wider">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="py-16 md:py-24 industrial-gradient">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-8 text-center"
          >
            <span className="text-secondary text-glow-blue">
              {isUa ? "Ціни в Києві" : "Цены в Киеве"}
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.priceBlocks.map((p, i) => (
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
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-8 text-center"
          >
            {c.calcTitle} <span className="text-primary text-glow-green">{c.calcAccent}</span>
          </motion.h2>
          <VantazhnykyCalc />
        </div>
      </section>

      <ContactSection />
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default VantazhnykyKyivPage;
