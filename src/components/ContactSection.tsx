import { Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage, translations } from "@/contexts/LanguageContext";

const inputClass =
  "w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:glow-blue transition-all";

const ContactSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const [form, setForm] = useState({
    service: "",
    workers: 2,
    pointA: "",
    elevatorA: true,
    pointB: "",
    elevatorB: true,
    cargo: "",
    name: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.service || !form.name || !form.phone) return;

    const serviceLabel = t.serviceOptions.find((o) => o.value === form.service)?.label ?? form.service;
    const message = [
      "🔔 Нова заявка!",
      "",
      `Послуга: ${serviceLabel}`,
      `Вантажники: ${form.workers}`,
      `Точка А: ${form.pointA}`,
      `Ліфт А: ${form.elevatorA ? "Так" : "Ні"}`,
      `Точка Б: ${form.pointB}`,
      `Ліфт Б: ${form.elevatorB ? "Так" : "Ні"}`,
      `Груз: ${form.cargo || "—"}`,
      `Ім'я: ${form.name}`,
      `Телефон: ${form.phone}`,
    ].join("\n");

    const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN ?? "8483400716:AAGgdLOQFUwVvPfQPhBq1hYXAVevUyiW6iY";
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID ?? "2050553430";

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });
    } catch (err) {
      console.error("Telegram send error:", err);
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ service: "", workers: 2, pointA: "", elevatorA: true, pointB: "", elevatorB: true, cargo: "", name: "", phone: "" });
  };

  return (
    <section className="relative py-20 md:py-32" id="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
        >
          {t.title} <span className="text-secondary text-glow-blue">{t.titleAccent}</span>
        </motion.h2>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel neon-border-blue rounded-xl p-8"
          >
            <div className="text-center mb-8">
              <a
                href="tel:+380738827086"
                className="inline-flex items-center gap-3 text-secondary text-2xl font-bold text-glow-blue animate-neon-flicker"
              >
                <Phone className="w-7 h-7" />
                073 882 7086
              </a>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-primary text-glow-green font-display text-xl font-bold mb-2">{t.thanks}</div>
                <p className="text-muted-foreground">{t.thanksDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">{t.serviceLabel}</label>
                  <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                    <SelectTrigger className={inputClass + " h-12"}>
                      <SelectValue placeholder={t.servicePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.serviceOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    {t.workersLabel}: <span className="text-primary font-bold">{form.workers}</span>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={form.workers}
                    onChange={(e) => setForm({ ...form, workers: Number(e.target.value) })}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1</span><span>20</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">{t.pointALabel}</label>
                  <input
                    type="text"
                    placeholder={t.pointAPlaceholder}
                    value={form.pointA}
                    onChange={(e) => setForm({ ...form, pointA: e.target.value })}
                    className={inputClass}
                  />
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-sm text-muted-foreground">{t.elevator}</span>
                    <button type="button" onClick={() => setForm({ ...form, elevatorA: true })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${form.elevatorA ? "bg-primary text-primary-foreground" : "bg-muted/50 text-muted-foreground"}`}>
                      {t.yes}
                    </button>
                    <button type="button" onClick={() => setForm({ ...form, elevatorA: false })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${!form.elevatorA ? "bg-primary text-primary-foreground" : "bg-muted/50 text-muted-foreground"}`}>
                      {t.no}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">{t.pointBLabel}</label>
                  <input
                    type="text"
                    placeholder={t.pointBPlaceholder}
                    value={form.pointB}
                    onChange={(e) => setForm({ ...form, pointB: e.target.value })}
                    className={inputClass}
                  />
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-sm text-muted-foreground">{t.elevator}</span>
                    <button type="button" onClick={() => setForm({ ...form, elevatorB: true })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${form.elevatorB ? "bg-primary text-primary-foreground" : "bg-muted/50 text-muted-foreground"}`}>
                      {t.yes}
                    </button>
                    <button type="button" onClick={() => setForm({ ...form, elevatorB: false })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${!form.elevatorB ? "bg-primary text-primary-foreground" : "bg-muted/50 text-muted-foreground"}`}>
                      {t.no}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">{t.taskLabel}</label>
                  <textarea
                    placeholder={t.taskPlaceholder}
                    rows={2}
                    value={form.cargo}
                    onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                    className={inputClass + " resize-none"}
                  />
                </div>

                <div className="border-t border-border pt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">{t.contactDetails}</label>
                  </div>
                  <input
                    type="text"
                    placeholder={t.namePlaceholder}
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-display font-bold text-sm uppercase tracking-wider py-4 rounded-lg glow-blue-strong hover:scale-[1.02] transition-transform"
                >
                  <Send className="w-4 h-4" />
                  {t.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
