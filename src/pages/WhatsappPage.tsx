import { MessageCircle } from "lucide-react";

const WhatsappPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="glass-panel-strong rounded-2xl p-8 md:p-12 max-w-lg w-full text-center flex flex-col items-center gap-8">
        <h1 className="font-display text-3xl md:text-5xl font-bold text-primary text-glow-green">
          Напишите нам прямо сейчас!
        </h1>
        <p className="text-foreground/70 font-body">
          Ответим в течение нескольких минут и поможем с вашим вопросом.
        </p>
        <a
          href="https://wa.me/380933956399"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white font-bold text-lg md:text-xl px-8 py-5 rounded-xl shadow-lg hover:scale-105 transition-transform animate-glow-pulse-slow"
        >
          <MessageCircle className="w-7 h-7" />
          Написать в WhatsApp
        </a>
      </div>
    </div>
  );
};

export default WhatsappPage;
