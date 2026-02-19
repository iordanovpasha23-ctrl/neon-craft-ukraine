import { useState, useMemo } from "react";

const volumes = [
  { label: "Малий", extra: 800 },
  { label: "Середній", extra: 1500 },
  { label: "Великий", extra: 2500 },
];

const MizhmistiCalc = () => {
  const [distance, setDistance] = useState(100);
  const [volume, setVolume] = useState(0);
  const [packing, setPacking] = useState(false);

  const total = useMemo(() => {
    let cost = 18 * distance + volumes[volume].extra;
    if (packing) cost += 500;
    return cost;
  }, [distance, volume, packing]);

  return (
    <div className="glass-panel neon-border-green rounded-xl p-6 md:p-8">
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-foreground/80 mb-2">
            Відстань: <span className="text-secondary">{distance} км</span>
          </label>
          <input
            type="range"
            min={10}
            max={1500}
            step={10}
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className="w-full accent-secondary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>10 км</span><span>1500 км</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground/80 mb-3">Об'єм вантажу</label>
          <div className="grid grid-cols-3 gap-3">
            {volumes.map((v, i) => (
              <button
                key={v.label}
                onClick={() => setVolume(i)}
                className={`py-3 rounded-lg text-sm font-semibold transition-all ${
                  volume === i
                    ? "bg-secondary text-secondary-foreground glow-blue"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setPacking(!packing)}
            className={`w-12 h-7 rounded-full transition-colors duration-300 ${packing ? "bg-secondary" : "bg-muted"}`}
          >
            <div className={`w-5 h-5 rounded-full bg-foreground transition-transform duration-300 ml-1 ${packing ? "translate-x-5" : ""}`} />
          </button>
          <span className="text-sm text-foreground/80">Пакування (+500 грн)</span>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <div className="text-muted-foreground text-sm mb-1">Орієнтовна вартість</div>
        <div className="font-display text-4xl font-black text-secondary text-glow-blue">
          {total.toLocaleString("uk-UA")} грн
        </div>
      </div>
    </div>
  );
};

export default MizhmistiCalc;
