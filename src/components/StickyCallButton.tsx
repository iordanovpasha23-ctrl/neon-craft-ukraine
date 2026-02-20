import { Phone } from "lucide-react";

const StickyCallButton = () => {
  return (
    <a
      href="tel:+380933956399"
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-green-strong animate-glow-pulse"
      aria-label="Зателефонувати"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default StickyCallButton;
