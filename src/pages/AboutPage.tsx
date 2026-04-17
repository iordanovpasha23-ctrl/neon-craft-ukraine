import { motion } from "framer-motion";
import { Users, Clock, MapPin, Shield, Trophy, Wrench, Zap, Target, ChevronRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { useLanguage, translations } from "@/contexts/LanguageContext";

const statIcons = [Trophy, Target, MapPin, Users];
const valueIcons = [Clock, Shield, Wrench, Zap];

const AboutPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-full animate-float opacity-20" />
        <div className="absolute bottom-10 left-20 w-20 h-20 border border-secondary/10 rounded-lg animate-float-reverse opacity-15" />

        <div className="relative container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6"
          >
            <span className="text-primary text-glow-green">{t.heroTitle1}</span>{" "}
            <span className="text-foreground">{t.heroTitle2}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {t.heroDesc}
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 industrial-gradient">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {t.stats.map((s, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel neon-border-green rounded-xl p-6 text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="font-display text-3xl md:text-4xl font-black text-primary text-glow-green mb-1">
                    {s.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel-strong neon-border-blue rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-6">
              {t.missionTitle} <span className="text-secondary text-glow-blue">{t.missionAccent}</span>
            </h2>
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed">
              {t.missionText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 industrial-gradient">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
          >
            {t.valuesTitle} <span className="text-primary text-glow-green">{t.valuesAccent}</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel rounded-xl p-6 hover:neon-border-green transition-all duration-500 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:glow-green transition-all duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
          >
            {t.timelineTitle} <span className="text-secondary text-glow-blue">{t.timelineAccent}</span>
          </motion.h2>

          <div className="relative">
            <div className="absolute left-[27px] md:left-[31px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20" />
            <div className="space-y-8">
              {t.timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5"
                >
                  <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full glass-panel neon-border-green flex items-center justify-center z-10">
                    <span className="font-display text-xs md:text-sm font-bold text-primary">{item.year}</span>
                  </div>
                  <div className="glass-panel rounded-xl p-4 md:p-5 flex-1 mt-1">
                    <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 md:py-24 industrial-gradient">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
          >
            {t.citiesTitle} <span className="text-primary text-glow-green">{t.citiesAccent}</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {t.cities.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel neon-border-blue rounded-xl p-5 text-center hover:scale-105 transition-transform duration-300"
              >
                <MapPin className="w-6 h-6 mx-auto mb-2 text-secondary" />
                <div className="font-display text-base font-bold mb-1">{c.name}</div>
                <p className="text-muted-foreground text-xs">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold mb-6"
          >
            {t.ctaTitle} <span className="text-primary text-glow-green">{t.ctaAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
          >
            {t.ctaDesc}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+380738827086"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-bold px-8 py-4 rounded-lg glow-green-strong hover:scale-105 transition-transform animate-glow-pulse"
            >
              <Phone className="w-5 h-5" />
              {t.ctaButton}
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors"
            >
              {t.ctaLink}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default AboutPage;
