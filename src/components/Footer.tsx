import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 industrial-gradient">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="font-display text-xl font-bold text-primary text-glow-green">
              СЕРВІС<span className="text-secondary">ПРО</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              Надійні послуги у 5 містах України. Працюємо швидко та професійно.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4 text-foreground/80">Послуги</h4>
            <div className="flex flex-col gap-2">
              <Link to="/vantagniki" className="text-muted-foreground text-sm hover:text-primary transition-colors">Вантажники</Link>
              <Link to="/perevezennya" className="text-muted-foreground text-sm hover:text-primary transition-colors">Міжміські перевезення</Link>
              <Link to="/elektryk" className="text-muted-foreground text-sm hover:text-primary transition-colors">Електрик</Link>
              <Link to="/santehnik" className="text-muted-foreground text-sm hover:text-primary transition-colors">Сантехнік</Link>
              <Link to="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors">Про нас</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4 text-foreground/80">Міста</h4>
            <p className="text-muted-foreground text-sm">
              Одеса • Київ • Дніпро • Львів • Харків
            </p>
            <a href="tel:+380933956399" className="block mt-4 text-primary font-bold text-glow-green">
              093 395 6399
            </a>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            © 2024 СервісПро. Усі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
