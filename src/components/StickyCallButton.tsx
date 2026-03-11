import { Phone, MessageCircle, Send } from "lucide-react";

const StickyCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://t.me/iordanovpasha"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(200,80%,50%)] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Telegram"
      >
        <Send className="w-6 h-6" />
      </a>
      <a
        href="https://wa.me/380933956399"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="tel:+380933956399"
        className="md:hidden w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-green-strong animate-glow-pulse"
        aria-label="Зателефонувати"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default StickyCallButton;
