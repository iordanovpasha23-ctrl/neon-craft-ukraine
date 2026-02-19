import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VantazhnykyPage from "./pages/VantazhnykyPage";
import PerevezennyaPage from "./pages/PerevezennyaPage";
import ElektrykPage from "./pages/ElektrykPage";
import SantehnikPage from "./pages/SantehnikPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vantagniki" element={<VantazhnykyPage />} />
          <Route path="/perevezennya" element={<PerevezennyaPage />} />
          <Route path="/elektryk" element={<ElektrykPage />} />
          <Route path="/santehnik" element={<SantehnikPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
