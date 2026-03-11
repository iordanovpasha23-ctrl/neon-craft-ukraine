import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Zap, Trash2, Calculator, PlugZap, Cable, Lightbulb, Power, CircuitBoard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ElecService {
  id: string;
  name: string;
  nameRu: string;
  price: number;
  unit: string;
  unitRu: string;
  icon: React.ElementType;
  category: string;
  categoryRu: string;
}

const services: ElecService[] = [
  // Штробление и прокладка
  { id: "shtrob_beton", name: "Штробління в бетоні (2 см)", nameRu: "Штробление в бетоне (2 см)", price: 166, unit: "м.пог", unitRu: "м.пог", icon: Zap, category: "Штробління та прокладка", categoryRu: "Штробление и прокладка" },
  { id: "shtrob_kirpich", name: "Штробління в цеглі (2 см)", nameRu: "Штробление в кирпиче (2 см)", price: 123, unit: "м.пог", unitRu: "м.пог", icon: Zap, category: "Штробління та прокладка", categoryRu: "Штробление и прокладка" },
  { id: "provodka_otkr", name: "Відкрита проводка", nameRu: "Открытая проводка", price: 39, unit: "м.пог", unitRu: "м.пог", icon: Cable, category: "Штробління та прокладка", categoryRu: "Штробление и прокладка" },
  // Щитки и автоматы
  { id: "schitok", name: "Встановлення електрощитка", nameRu: "Установка электрощитка", price: 619, unit: "шт", unitRu: "шт", icon: CircuitBoard, category: "Щитки та автомати", categoryRu: "Щитки и автоматы" },
  { id: "schetchik", name: "Підключення лічильника", nameRu: "Подключение счётчика", price: 670, unit: "шт", unitRu: "шт", icon: Power, category: "Щитки та автомати", categoryRu: "Щитки и автоматы" },
  { id: "avtomat", name: "Встановлення автомата", nameRu: "Установка автомата", price: 175, unit: "шт", unitRu: "шт", icon: PlugZap, category: "Щитки та автомати", categoryRu: "Щитки и автоматы" },
  { id: "uzo", name: "Встановлення УЗО", nameRu: "Установка УЗО", price: 327, unit: "шт", unitRu: "шт", icon: PlugZap, category: "Щитки та автомати", categoryRu: "Щитки и автоматы" },
  // Розетки и выключатели
  { id: "rozetka_vnutr", name: "Встановлення розетки (внутрішня)", nameRu: "Установка розетки (внутренняя)", price: 200, unit: "шт", unitRu: "шт", icon: Power, category: "Розетки та вимикачі", categoryRu: "Розетки и выключатели" },
  { id: "rozetka_zovn", name: "Встановлення розетки (зовнішня)", nameRu: "Установка розетки (наружная)", price: 150, unit: "шт", unitRu: "шт", icon: Power, category: "Розетки та вимикачі", categoryRu: "Розетки и выключатели" },
  { id: "vymykach", name: "Встановлення вимикача", nameRu: "Установка выключателя", price: 180, unit: "шт", unitRu: "шт", icon: Power, category: "Розетки та вимикачі", categoryRu: "Розетки и выключатели" },
  // Освещение
  { id: "lyustra", name: "Підвіс люстри", nameRu: "Подвес люстры", price: 350, unit: "шт", unitRu: "шт", icon: Lightbulb, category: "Освітлення", categoryRu: "Освещение" },
  { id: "tochkovyi", name: "Монтаж точкового світильника", nameRu: "Монтаж точечного светильника", price: 250, unit: "шт", unitRu: "шт", icon: Lightbulb, category: "Освітлення", categoryRu: "Освещение" },
  { id: "led", name: "LED-підсвітка (1 м)", nameRu: "LED-подсветка (1 м)", price: 200, unit: "м.пог", unitRu: "м.пог", icon: Lightbulb, category: "Освітлення", categoryRu: "Освещение" },
  // Коробки
  { id: "korobka_beton", name: "Розподільна коробка (бетон)", nameRu: "Распредкоробка (бетон)", price: 236, unit: "шт", unitRu: "шт", icon: CircuitBoard, category: "Коробки та з'єднання", categoryRu: "Коробки и соединения" },
  { id: "korobka_kirpich", name: "Розподільна коробка (цегла)", nameRu: "Распредкоробка (кирпич)", price: 170, unit: "шт", unitRu: "шт", icon: CircuitBoard, category: "Коробки та з'єднання", categoryRu: "Коробки и соединения" },
  { id: "korobka_gips", name: "Розподільна коробка (гіпсокартон)", nameRu: "Распредкоробка (гипсокартон)", price: 127, unit: "шт", unitRu: "шт", icon: CircuitBoard, category: "Коробки та з'єднання", categoryRu: "Коробки и соединения" },
  { id: "raspajka", name: "Збірка коробки, розпайка", nameRu: "Сборка коробки, распайка", price: 316, unit: "шт", unitRu: "шт", icon: CircuitBoard, category: "Коробки та з'єднання", categoryRu: "Коробки и соединения" },
  // Ниши
  { id: "nisha_kirpich", name: "Ніша у цеглі", nameRu: "Ниша в кирпиче", price: 852, unit: "шт", unitRu: "шт", icon: Zap, category: "Інше", categoryRu: "Прочее" },
  { id: "nisha_beton", name: "Ніша у бетоні", nameRu: "Ниша в бетоне", price: 1478, unit: "шт", unitRu: "шт", icon: Zap, category: "Інше", categoryRu: "Прочее" },
];

const ElektrykaCalc = () => {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<Record<string, number>>({});

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = { ...prev };
      if (next[id]) {
        delete next[id];
      } else {
        next[id] = 1;
      }
      return next;
    });
  };

  const setQty = (id: string, qty: number) => {
    if (qty <= 0) {
      setSelected((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    } else {
      setSelected((prev) => ({ ...prev, [id]: qty }));
    }
  };

  const selectedServices = services.filter((s) => selected[s.id]);
  const total = selectedServices.reduce((sum, s) => sum + s.price * (selected[s.id] || 0), 0);

  const categories = [...new Set(services.map((s) => (lang === "ua" ? s.category : s.categoryRu)))];

  const clearLabel = lang === "ua" ? "Очистити" : "Очистить";
  const orderLabel = lang === "ua" ? "Ваше замовлення" : "Ваш заказ";
  const totalLabel = lang === "ua" ? "Разом:" : "Итого:";
  const emptyLabel = lang === "ua" ? "Оберіть послуги зі списку" : "Выберите услуги из списка";
  const callLabel = lang === "ua" ? "Викликати електрика" : "Вызвать электрика";
  const qtyLabel = lang === "ua" ? "К-сть" : "Кол-во";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Services list */}
      <div className="lg:col-span-3 space-y-6">
        {categories.map((cat) => (
          <div key={cat}>
            <h3 className="font-display text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              {cat}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services
                .filter((s) => (lang === "ua" ? s.category : s.categoryRu) === cat)
                .map((s) => {
                  const isSelected = !!selected[s.id];
                  const Icon = s.icon;
                  const name = lang === "ua" ? s.name : s.nameRu;
                  const unit = lang === "ua" ? s.unit : s.unitRu;
                  return (
                    <button
                      key={s.id}
                      onClick={() => toggle(s.id)}
                      className={`text-left glass-panel rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] ${
                        isSelected ? "neon-border-green ring-1 ring-primary/30" : "hover:border-primary/20"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                          isSelected ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-foreground/90 leading-tight">{name}</div>
                          <div className="text-primary font-bold text-sm mt-1">
                            {s.price} грн/{unit}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      {/* Order summary */}
      <div className="lg:col-span-2">
        <div className="glass-panel neon-border-green rounded-xl p-6 sticky top-24">
          <h3 className="font-display text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            {orderLabel}
          </h3>

          {selectedServices.length === 0 ? (
            <p className="text-muted-foreground text-sm py-8 text-center">{emptyLabel}</p>
          ) : (
            <div className="space-y-3 mb-6">
              {selectedServices.map((s) => {
                const name = lang === "ua" ? s.name : s.nameRu;
                const unit = lang === "ua" ? s.unit : s.unitRu;
                const qty = selected[s.id] || 1;
                return (
                  <div key={s.id} className="flex items-center justify-between gap-2 text-sm">
                    <div className="flex-1 min-w-0">
                      <div className="text-foreground/80 truncate">{name}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-muted-foreground text-xs">{qtyLabel}:</span>
                        <input
                          type="number"
                          min={1}
                          max={100}
                          value={qty}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => setQty(s.id, Number(e.target.value))}
                          className="w-16 bg-muted/50 border border-border rounded px-2 py-1 text-xs text-foreground text-center"
                        />
                        <span className="text-muted-foreground text-xs">{unit}</span>
                      </div>
                    </div>
                    <div className="text-primary font-bold whitespace-nowrap">
                      {(s.price * qty).toLocaleString("uk-UA")} грн
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {selectedServices.length > 0 && (
            <>
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-foreground">{totalLabel}</span>
                  <motion.span
                    key={total}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-display text-2xl font-black text-primary text-glow-green"
                  >
                    {total.toLocaleString("uk-UA")} грн
                  </motion.span>
                </div>
              </div>

              <button
                onClick={() => setSelected({})}
                className="w-full flex items-center justify-center gap-2 glass-panel text-muted-foreground font-semibold text-sm py-3 rounded-lg hover:text-foreground transition-colors mb-3"
              >
                <Trash2 className="w-4 h-4" />
                {clearLabel}
              </button>
            </>
          )}

          <a
            href="tel:+380933956399"
            className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground font-display font-bold px-6 py-4 rounded-lg glow-green-strong hover:scale-105 transition-transform"
          >
            <Phone className="w-5 h-5" />
            {callLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ElektrykaCalc;
