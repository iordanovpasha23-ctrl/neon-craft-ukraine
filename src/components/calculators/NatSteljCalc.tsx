import { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const NatSteljCalc = () => {
  const [area, setArea] = useState(15);
  const [type, setType] = useState<"mat" | "gloss" | "shadow">("mat");
  const [lights, setLights] = useState(4);
  const [led, setLed] = useState(false);

  const baseMap = { mat: 350, gloss: 380, shadow: 750 };
  const total = baseMap[type] * area + 250 * lights + (led ? 1200 : 0);

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
            min={5}
            max={100}
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>5 м²</span>
            <span>100 м²</span>
          </div>
        </div>

        {/* Тип стелі */}
        <div>
          <label className="block text-sm font-semibold text-foreground/80 mb-2">Тип стелі</label>
          <div className="flex gap-3">
            {[
              { value: "mat" as const, label: "Матова" },
              { value: "gloss" as const, label: "Глянцева" },
              { value: "shadow" as const, label: "Тіньова" },
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

        {/* Світильники */}
        <div>
          <label className="block text-sm font-semibold text-foreground/80 mb-2">
            Кількість світильників: <span className="text-primary">{lights}</span> (250 грн/шт)
          </label>
          <input
            type="range"
            min={0}
            max={20}
            value={lights}
            onChange={(e) => setLights(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0</span>
            <span>20</span>
          </div>
        </div>

        {/* LED */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground/80">LED підсвітка (+1 200 грн)</span>
          <button
            onClick={() => setLed(!led)}
            className={`w-14 h-7 rounded-full transition-all duration-300 ${
              led ? "bg-primary glow-green" : "bg-muted"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ml-1 ${
                led ? "translate-x-7" : ""
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

export default NatSteljCalc;
