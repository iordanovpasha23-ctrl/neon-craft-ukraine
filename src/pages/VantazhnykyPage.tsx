import { motion } from "framer-motion";
import { Phone, Truck, Zap, FileCheck, CreditCard, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import VantazhnykyCalc from "@/components/calculators/VantazhnykyCalc";
import ContactSection from "@/components/ContactSection";
import { useLanguage, translations } from "@/contexts/LanguageContext";

const benefitIcons = [Zap, FileCheck, CreditCard, Users];

const VantazhnykyPage = () => {
  const { lang } = useLanguage();
  const c = translations[lang].vantagniki;

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
            {c.heroLabel}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary text-glow-green mb-4"
          >
            {c.heroTitle1}
            <br />
            <span className="text-foreground">{c.heroTitle2}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4"
          >
            {c.heroDesc}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex items-center justify-center gap-3 md:gap-5 flex-wrap mb-6"
          >
            {(() => {
              const list = ["ОДЕСА", "КИЇВ", "ЛЬВІВ"];
              return list.map((city, i) => (
                <span key={city} className="flex items-center gap-3 md:gap-5">
                  <span className="font-display text-sm md:text-base font-semibold text-foreground/60 tracking-widest uppercase">
                    {city}
                  </span>
                  {i < list.length - 1 && <span className="w-1.5 h-1.5 rounded-full bg-primary/80" />}
                </span>
              ));
            })()}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10"
          >
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-black text-primary text-glow-green">5+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">{c.yearsWork}</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-black text-secondary text-glow-blue">1000+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">{c.happyClients}</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-black text-primary text-glow-green">60</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">{c.dispatchTime}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="tel:+380738827086" className="inline-flex items-center gap-2 text-secondary font-bold text-xl text-glow-blue">
              <Phone className="w-6 h-6" />
              073 882 7086
            </a>
          </motion.div>
        </div>
      </section>

      {/* Combined: Services + Benefits */}
      <section className="py-16 md:py-24 industrial-gradient">
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
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-8 text-center"
          >
            <span className="text-secondary text-glow-blue">{c.pricesTitle}</span>
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
      <section className="py-16 md:py-24 industrial-gradient">
        <div className="container max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-8 text-center"
          >
            {c.calcTitle} <span className="text-primary text-glow-green">{c.calcAccent}</span>
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
