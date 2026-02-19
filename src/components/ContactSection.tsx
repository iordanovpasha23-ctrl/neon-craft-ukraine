import { Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", phone: "", message: "" });
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
          Зв'яжіться <span className="text-secondary text-glow-blue">з нами</span>
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
                href="tel:+380991234567"
                className="inline-flex items-center gap-3 text-secondary text-2xl font-bold text-glow-blue animate-neon-flicker"
              >
                <Phone className="w-7 h-7" />
                099-123-45-67
              </a>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-primary text-glow-green font-display text-xl font-bold mb-2">Дякуємо!</div>
                <p className="text-muted-foreground">Ми зв'яжемося з вами найближчим часом.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше ім'я"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:glow-blue transition-all"
                />
                <input
                  type="tel"
                  placeholder="Номер телефону"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:glow-blue transition-all"
                />
                <textarea
                  placeholder="Короткий опис завдання"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:glow-blue transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-display font-bold text-sm uppercase tracking-wider py-4 rounded-lg glow-blue-strong hover:scale-[1.02] transition-transform"
                >
                  <Send className="w-4 h-4" />
                  Відправити заявку
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
