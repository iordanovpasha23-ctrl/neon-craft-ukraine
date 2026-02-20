import { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const PlytkaCalc = () => {
  const [area, setArea] = useState(10);
  const [type, setType] = useState<"standard" | "keramogranit">("standard");
  const [demontazh, setDemontazh] = useState(false);
  const [vyrivnyuvannya, setVyrivnyuvannya] = useState(false);

  const basePrice = type === "keramogranit" ? 550 : 450;
  const total =
    basePrice * area +
    (demontazh ? 120 * area : 0) +
    (vyrivnyuvannya ? 180 * area : 0);

  return (
    <div className="glass-panel neon-border-green rounded-xl p-6 md:p-8">
      <div className="space-y-6">
        {/* Площа */}
        <div>
          <label className="block text-sm font-semibold text-foreground/80 mb-2">
            Площа (м²): <span className="text-primary">{area}</span>
          </label>
          <input
            type="range"
            min={1}
            max={100}
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1 м²</span>
            <span>100 м²</span>
          </div>
        </div>

        {/* Тип плитки */}
        <div>
          <label className="block text-sm font-semibold text-foreground/80 mb-2">Тип плитки</label>
          <div className="flex gap-3">
            {[
              { value: "standard" as const, label: "Звичайна" },
              { value: "keramogranit" as const, label: "Керамограніт" },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setType(opt.value)}
                className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  type === opt.value
                    ? "bg-primary text-primary-foreground glow-green"
                    : "glass-panel text-foreground/70 hover:text-foreground"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Демонтаж */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground/80">Демонтаж старої плитки (+120 грн/м²)</span>
          <button
            onClick={() => setDemontazh(!demontazh)}
            className={`w-14 h-7 rounded-full transition-all duration-300 ${
              demontazh ? "bg-primary glow-green" : "bg-muted"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ml-1 ${
                demontazh ? "translate-x-7" : ""
              }`}
            />
          </button>
        </div>

        {/* Вирівнювання */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground/80">Вирівнювання поверхні (+180 грн/м²)</span>
          <button
            onClick={() => setVyrivnyuvannya(!vyrivnyuvannya)}
            className={`w-14 h-7 rounded-full transition-all duration-300 ${
              vyrivnyuvannya ? "bg-primary glow-green" : "bg-muted"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ml-1 ${
                vyrivnyuvannya ? "translate-x-7" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Total */}
      <div className="mt-8 text-center">
        <div className="text-muted-foreground text-sm mb-2">Орієнтовна вартість:</div>
        <motion.div
          key={total}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="font-display text-4xl md:text-5xl font-black text-primary text-glow-green"
        >
          {total.toLocaleString("uk-UA")} грн
        </motion.div>
        <a
          href="tel:+380933956399"
          className="mt-6 inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-bold px-8 py-4 rounded-lg glow-green-strong hover:scale-105 transition-transform"
        >
          <Phone className="w-5 h-5" />
          Замовити
        </a>
      </div>
    </div>
  );
};

export default PlytkaCalc;
