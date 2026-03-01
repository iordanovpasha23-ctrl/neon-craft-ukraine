import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Truck, Users, Zap, FileCheck, CreditCard, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import VantazhnykyCalc from "@/components/calculators/VantazhnykyCalc";
import ContactSection from "@/components/ContactSection";

type Lang = "ua" | "ru";

const t = {
  ua: {
    heroLabel: "Професійні вантажники",
    heroTitle1: "Ваш надійний помічник",
    heroTitle2: "у переїзді",
    heroDesc: "З нами переїзд стає не тільки простішим, а й дешевшим.",
    orderNow: "Замовити зараз",
    yearsWork: "років роботи",
    happyClients: "задоволених клієнтів",
    dispatchTime: "хв — час виїзду",
    sectionTitle: "Що ми",
    sectionTitleAccent: "пропонуємо",
    pricesTitle: "Ціни",
    calcTitle: "Калькулятор",
    calcAccent: "вартості",
    services: [
      "Квартирні переїзди будь-якої складності",
      "Офісні переїзди з розбиранням та збиранням меблів",
      "Складські роботи та завантаження фур",
      "Піднімання та спуск важких предметів",
      "Перенесення піаніно, сейфів, обладнання",
      "Пакування та захист речей при переїзді",
    ],
    benefits: [
      { title: "Швидкий виїзд бригади", desc: "Вантажники приїжджають протягом 60 хвилин у будь-яке місто." },
      { title: "Офіційний договір", desc: "Фіксуємо умови співпраці та гарантуємо збереження вантажу." },
      { title: "Зручна оплата", desc: "Готівка, картка, безготівка — обирайте комфортний спосіб." },
      { title: "Досвідчені фахівці", desc: "Професійні мувери з необхідними навичками та обладнанням." },
    ],
    priceBlocks: [
      { label: "1 вантажник / год", price: "300 грн" },
      { label: "2 вантажники / год", price: "600 грн" },
      { label: "Поверх без ліфта", price: "+15 грн" },
      { label: "Мінімальне замовлення", price: "2 години" },
    ],
  },
  ru: {
    heroLabel: "Профессиональные грузчики",
    heroTitle1: "Ваш надёжный помощник",
    heroTitle2: "в переезде",
    heroDesc: "С нами переезд становится не только проще, но и дешевле.",
    orderNow: "Заказать сейчас",
    yearsWork: "лет работы",
    happyClients: "довольных клиентов",
    dispatchTime: "мин — время выезда",
    sectionTitle: "Что мы",
    sectionTitleAccent: "предлагаем",
    pricesTitle: "Цены",
    calcTitle: "Калькулятор",
    calcAccent: "стоимости",
    services: [
      "Квартирные переезды любой сложности",
      "Офисные переезды с разборкой и сборкой мебели",
      "Складские работы и загрузка фур",
      "Подъём и спуск тяжёлых предметов",
      "Перенос пианино, сейфов, оборудования",
      "Упаковка и защита вещей при переезде",
    ],
    benefits: [
      { title: "Быстрый выезд бригады", desc: "Грузчики приезжают в течение 60 минут в любой город." },
      { title: "Официальный договор", desc: "Фиксируем условия сотрудничества и гарантируем сохранность груза." },
      { title: "Удобная оплата", desc: "Наличные, карта, безналичный — выбирайте удобный способ." },
      { title: "Опытные специалисты", desc: "Профессиональные муверы с необходимыми навыками и оборудованием." },
    ],
    priceBlocks: [
      { label: "1 грузчик / час", price: "300 грн" },
      { label: "2 грузчика / час", price: "600 грн" },
      { label: "Этаж без лифта", price: "+15 грн" },
      { label: "Минимальный заказ", price: "2 часа" },
    ],
  },
};

const benefitIcons = [Zap, FileCheck, CreditCard, Users];

const VantazhnykyPage = () => {
  const [lang, setLang] = useState<Lang>("ua");
  const c = t[lang];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Language toggle */}
      <div className="fixed top-20 right-4 z-50">
        <div className="glass-panel rounded-full flex items-center gap-1 p-1 border border-border/50">
          <Globe className="w-4 h-4 text-muted-foreground ml-2" />
          <button
            onClick={() => setLang("ua")}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              lang === "ua"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            UA
          </button>
          <button
            onClick={() => setLang("ru")}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              lang === "ru"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            RU
          </button>
        </div>
      </div>

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
            <a
              href="tel:+380933956399"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-bold px-8 py-4 rounded-lg glow-green-strong hover:scale-105 transition-transform animate-glow-pulse-slow"
            >
              <Phone className="w-5 h-5" />
              {c.orderNow}
            </a>
            <a href="tel:+380933956399" className="inline-flex items-center gap-2 text-secondary font-bold text-xl text-glow-blue">
              <Phone className="w-6 h-6" />
              093 395 6399
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
