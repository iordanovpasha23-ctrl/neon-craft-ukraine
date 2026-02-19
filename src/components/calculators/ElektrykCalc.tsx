import { useState, useMemo } from "react";

const electricServices = [
  { label: "Заміна розетки", price: 600 },
  { label: "Монтаж автоматів", price: 1200 },
  { label: "Повна проводка", price: 9000 },
  { label: "Аварійний виїзд", price: 800 },
];

const ElektrykCalc = () => {
  const [selected, setSelected] = useState<boolean[]>(electricServices.map(() => false));

  const total = useMemo(() => {
    return electricServices.reduce((sum, s, i) => (selected[i] ? sum + s.price : sum), 0);
  }, [selected]);

  const toggle = (i: number) => {
    setSelected((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <div className="glass-panel neon-border-green rounded-xl p-6 md:p-8">
      <div className="space-y-3">
        {electricServices.map((s, i) => (
          <button
            key={s.label}
            onClick={() => toggle(i)}
            className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${
              selected[i]
                ? "bg-primary/15 neon-border-green"
                : "bg-muted/30 border border-border hover:bg-muted/50"
            }`}
          >
            <span className={`font-semibold text-sm ${selected[i] ? "text-primary" : "text-foreground/70"}`}>
              {s.label}
            </span>
            <span className={`font-display text-sm font-bold ${selected[i] ? "text-primary" : "text-muted-foreground"}`}>
              {s.price.toLocaleString("uk-UA")} грн
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <div className="text-muted-foreground text-sm mb-1">Орієнтовна вартість</div>
        <div className="font-display text-4xl font-black text-primary text-glow-green">
          {total > 0 ? `${total.toLocaleString("uk-UA")} грн` : "—"}
        </div>
      </div>
    </div>
  );
};

export default ElektrykCalc;
