import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import Index from "./pages/Index";
import VantazhnykyPage from "./pages/VantazhnykyPage";
import PerevezennyaPage from "./pages/PerevezennyaPage";
import ElektrykaPage from "./pages/ElektrykaPage";
import NatSteliPage from "./pages/NatSteliPage";
import AboutPage from "./pages/AboutPage";
import WhatsappPage from "./pages/WhatsappPage";
import PhotoPage from "./pages/PhotoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <LanguageToggle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/vantagniki" element={<VantazhnykyPage />} />
            <Route path="/perevezennya" element={<PerevezennyaPage />} />
            <Route path="/elektryka" element={<ElektrykaPage />} />
            <Route path="/natsteli" element={<NatSteliPage />} />
            <Route path="/whatsapp" element={<WhatsappPage />} />
            <Route path="/photo" element={<PhotoPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
