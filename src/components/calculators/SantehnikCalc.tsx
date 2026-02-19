import { useState, useMemo } from "react";

const plumbingServices = [
  { label: "Заміна змішувача", price: 550 },
  { label: "Монтаж бойлера", price: 1800 },
  { label: "Прочистка каналізації", price: 950 },
  { label: "Усунення протікання", price: 700 },
];

const SantehnikCalc = () => {
  const [selected, setSelected] = useState<boolean[]>(plumbingServices.map(() => false));

  const total = useMemo(() => {
    return plumbingServices.reduce((sum, s, i) => (selected[i] ? sum + s.price : sum), 0);
  }, [selected]);

  const toggle = (i: number) => {
    setSelected((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <div className="glass-panel neon-border-blue rounded-xl p-6 md:p-8">
      <div className="space-y-3">
        {plumbingServices.map((s, i) => (
          <button
            key={s.label}
            onClick={() => toggle(i)}
            className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${
              selected[i]
                ? "bg-secondary/15 neon-border-blue"
                : "bg-muted/30 border border-border hover:bg-muted/50"
            }`}
          >
            <span className={`font-semibold text-sm ${selected[i] ? "text-secondary" : "text-foreground/70"}`}>
              {s.label}
            </span>
            <span className={`font-display text-sm font-bold ${selected[i] ? "text-secondary" : "text-muted-foreground"}`}>
              {s.price.toLocaleString("uk-UA")} грн
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <div className="text-muted-foreground text-sm mb-1">Орієнтовна вартість</div>
        <div className="font-display text-4xl font-black text-secondary text-glow-blue">
          {total > 0 ? `${total.toLocaleString("uk-UA")} грн` : "—"}
        </div>
      </div>
    </div>
  );
};

export default SantehnikCalc;
