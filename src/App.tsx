import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// 1. Import HashRouter instead of BrowserRouter
import { HashRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import TitlePage from "./pages/TitlePage";
import PreExperimentPage from "./pages/PreExperimentPage";
import IntroductionPage from "./pages/IntroductionPage";
import ExperimentPage from "./pages/ExperimentPage";
import CalculationPage from "./pages/CalculationPage";
import QuizPage from "./pages/QuizPage";
import ConclusionPage from "./pages/ConclusionPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      {/* 2. Use HashRouter. No 'basename' prop is needed anymore! */}
      <HashRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <main className="flex-1 flex flex-col">
              <header className="h-14 flex items-center border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
                <SidebarTrigger className="ml-4" />
                <h1 className="ml-4 text-lg font-semibold text-foreground">
                  Profilometer Experiment
                </h1>
              </header>
              <div className="flex-1">
                <Routes>
                  {/* Routes work normally relative to the hash */}
                  <Route path="/" element={<TitlePage />} /> 
                  <Route path="/pre-experiment" element={<PreExperimentPage />} />
                  <Route path="/introduction" element={<IntroductionPage />} />
                  <Route path="/experiment" element={<ExperimentPage />} />
                  <Route path="/calculation" element={<CalculationPage />} />
                  <Route path="/quiz" element={<QuizPage />} />
                  <Route path="/conclusion" element={<ConclusionPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </HashRouter>
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;