import { motion } from "framer-motion";
import { Users, Clock, MapPin, Shield, Trophy, Wrench, Zap, Target, ChevronRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const stats = [
  { value: "5+", label: "Років досвіду", icon: Trophy },
  { value: "12 000+", label: "Виконаних замовлень", icon: Target },
  { value: "5", label: "Міст присутності", icon: MapPin },
  { value: "150+", label: "Майстрів у команді", icon: Users },
];

const values = [
  {
    icon: Clock,
    title: "Швидкість",
    text: "Виїзд протягом 60 хвилин. Ми цінуємо ваш час і завжди приїжджаємо вчасно.",
  },
  {
    icon: Shield,
    title: "Надійність",
    text: "Гарантія на всі роботи. Відповідальність за збереження вашого майна.",
  },
  {
    icon: Wrench,
    title: "Професіоналізм",
    text: "Кожен майстер проходить перевірку та має досвід від 3 років у своїй галузі.",
  },
  {
    icon: Zap,
    title: "Прозорість",
    text: "Фіксовані ціни без прихованих платежів. Ви знаєте вартість до початку робіт.",
  },
];

const timeline = [
  { year: "2019", text: "Старт компанії в Одесі. Перша команда з 5 вантажників." },
  { year: "2020", text: "Розширення послуг: електрики та сантехніки. Вихід на Київ." },
  { year: "2021", text: "Запуск міжміських перевезень. Підключення Дніпра та Львова." },
  { year: "2022", text: "Понад 5 000 виконаних замовлень. Відкриття у Харкові." },
  { year: "2023", text: "Цілодобовий режим роботи 24/7. Команда 100+ майстрів." },
  { year: "2024", text: "150+ професіоналів. Понад 12 000 задоволених клієнтів." },
];

const cities = [
  { name: "Одеса", desc: "Головний офіс. Повний спектр послуг." },
  { name: "Київ", desc: "Найбільша команда. 50+ майстрів." },
  { name: "Дніпро", desc: "Швидкий виїзд по всьому місту." },
  { name: "Львів", desc: "Працюємо з 2021 року." },
  { name: "Харків", desc: "Активно розвиваємо напрямок." },
];

const AboutPage = () => {
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
            <span className="text-primary text-glow-green">Про</span>{" "}
            <span className="text-foreground">компанію</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            СервісПро — це команда професіоналів, яка надає якісні послуги вантажників, електриків, 
            сантехніків та міжміських перевезень у 5 найбільших містах України.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 industrial-gradient">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel neon-border-green rounded-xl p-6 text-center"
              >
                <s.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="font-display text-3xl md:text-4xl font-black text-primary text-glow-green mb-1">
                  {s.value}
                </div>
                <div className="text-muted-foreground text-sm">{s.label}</div>
              </motion.div>
            ))}
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
              Наша <span className="text-secondary text-glow-blue">місія</span>
            </h2>
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed">
              Зробити якісні побутові послуги доступними кожному українцю. 
              Ми будуємо сервіс, де клієнт отримує швидку допомогу від перевірених професіоналів 
              за чесну ціну — без сюрпризів та прихованих платежів.
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
            Наші <span className="text-primary text-glow-green">цінності</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-xl p-6 hover:neon-border-green transition-all duration-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:glow-green transition-all duration-500">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            Наш <span className="text-secondary text-glow-blue">шлях</span>
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] md:left-[31px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20" />

            <div className="space-y-8">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5"
                >
                  <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full glass-panel neon-border-green flex items-center justify-center z-10">
                    <span className="font-display text-xs md:text-sm font-bold text-primary">{t.year}</span>
                  </div>
                  <div className="glass-panel rounded-xl p-4 md:p-5 flex-1 mt-1">
                    <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{t.text}</p>
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
            Де ми <span className="text-primary text-glow-green">працюємо</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {cities.map((c, i) => (
              <motion.div
                key={c.name}
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
            Готові <span className="text-primary text-glow-green">допомогти</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
          >
            Зателефонуйте або залиште заявку — ми зв'яжемося з вами протягом 5 хвилин.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+380933956399"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-bold px-8 py-4 rounded-lg glow-green-strong hover:scale-105 transition-transform animate-glow-pulse"
            >
              <Phone className="w-5 h-5" />
              Зателефонувати
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors"
            >
              Переглянути послуги
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
