import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyCallButton from "./StickyCallButton";

interface FAQItem {
  q: string;
  a: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  services: string[];
  priceBlocks: { label: string; price: string }[];
  calculator: ReactNode;
  faqs: FAQItem[];
}

const ServicePageLayout = ({
  title,
  subtitle,
  services,
  priceBlocks,
  calculator,
  faqs,
}: ServicePageLayoutProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="relative container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary text-glow-green mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+380933956399"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-bold px-8 py-4 rounded-lg glow-green-strong hover:scale-105 transition-transform"
            >
              Замовити зараз
            </a>
            <a href="tel:+380933956399" className="inline-flex items-center gap-2 text-secondary font-bold text-xl text-glow-blue">
              <Phone className="w-6 h-6" />
              093 395 6399
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 industrial-gradient">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-8 text-center">
            Що ми <span className="text-primary text-glow-green">пропонуємо</span>
          </h2>
          <div className="glass-panel neon-border-green rounded-xl p-6 md:p-8">
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-primary" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container text-center">
          <a
            href="tel:+380933956399"
            className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground font-display font-bold px-8 py-4 rounded-lg glow-blue-strong hover:scale-105 transition-transform"
          >
            <Phone className="w-5 h-5" />
            Зателефонувати зараз
          </a>
        </div>
      </section>

      {/* Price blocks */}
      <section className="py-16 industrial-gradient">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-secondary text-glow-blue">Ціни</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {priceBlocks.map((p, i) => (
              <div key={i} className="glass-panel neon-border-blue rounded-xl p-5 text-center">
                <div className="text-foreground/80 text-sm mb-2">{p.label}</div>
                <div className="font-display text-xl font-bold text-secondary text-glow-blue">{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="container max-w-2xl">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-8 text-center">
            Калькулятор <span className="text-primary text-glow-green">вартості</span>
          </h2>
          {calculator}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 industrial-gradient">
        <div className="container text-center">
          <a
            href="tel:+380933956399"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-bold px-8 py-4 rounded-lg glow-green-strong hover:scale-105 transition-transform"
          >
            Замовити зараз
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-8 text-center">
            Часті <span className="text-secondary text-glow-blue">питання</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-panel rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-foreground/90 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/30 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default ServicePageLayout;
