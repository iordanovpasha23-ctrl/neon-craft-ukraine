import { useState, useMemo } from "react";

const VantazhnykyCalc = () => {
  const [workers, setWorkers] = useState(2);
  const [hours, setHours] = useState(2);
  const [floor, setFloor] = useState(1);
  const [hasElevator, setHasElevator] = useState(true);

  const total = useMemo(() => {
    let cost = 450 * workers * hours;
    if (!hasElevator && floor > 1) {
      cost += 100 * (floor - 1);
    }
    return cost;
  }, [workers, hours, floor, hasElevator]);

  return (
    <div className="glass-panel neon-border-green rounded-xl p-6 md:p-8">
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-foreground/80 mb-2">
            Кількість вантажників: <span className="text-primary">{workers}</span>
          </label>
          <input
            type="range"
            min={1}
            max={6}
            value={workers}
            onChange={(e) => setWorkers(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1</span><span>6</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground/80 mb-2">
            Кількість годин: <span className="text-primary">{hours}</span>
          </label>
          <input
            type="range"
            min={1}
            max={12}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1</span><span>12</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground/80 mb-2">
            Поверх: <span className="text-primary">{floor}</span>
          </label>
          <input
            type="range"
            min={1}
            max={25}
            value={floor}
            onChange={(e) => setFloor(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1</span><span>25</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setHasElevator(!hasElevator)}
            className={`w-12 h-7 rounded-full transition-colors duration-300 ${hasElevator ? "bg-primary" : "bg-muted"}`}
          >
            <div className={`w-5 h-5 rounded-full bg-foreground transition-transform duration-300 ml-1 ${hasElevator ? "translate-x-5" : ""}`} />
          </button>
          <span className="text-sm text-foreground/80">Наявність ліфта</span>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <div className="text-muted-foreground text-sm mb-1">Орієнтовна вартість</div>
        <div className="font-display text-4xl font-black text-primary text-glow-green">
          {total.toLocaleString("uk-UA")} грн
        </div>
      </div>
    </div>
  );
};

export default VantazhnykyCalc;
