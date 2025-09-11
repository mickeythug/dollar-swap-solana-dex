import React, { useState, useEffect, Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import NotFound from "./pages/NotFound";

// Lazy load the main page to enable proper preloading
const Index = lazy(() => import("./pages/Index"));

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    // Preload the main page and its dependencies
    const preloadResources = async () => {
      try {
        // Start loading the Index component
        const indexPromise = import("./pages/Index");
        
        // Preload other critical resources
        const resourcePromises = [
          import("./components/Header"),
          import("./components/Hero"), 
          import("./components/MarketCapCounter"),
          import("./components/SwapInterface"),
          import("./components/Footer")
        ];

        // Wait for all components to load
        await Promise.all([indexPromise, ...resourcePromises]);
        
        // Minimum loading time for better UX
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsPageReady(true);
      } catch (error) {
        console.error("Error preloading resources:", error);
        // Still proceed even if there's an error
        setIsPageReady(true);
      }
    };

    preloadResources();
  }, []);

  const handleLoadingComplete = () => {
    if (isPageReady) {
      setIsLoading(false);
    }
  };

  // Update loading complete when page is ready
  useEffect(() => {
    if (isPageReady && !isLoading) {
      setIsLoading(false);
    }
  }, [isPageReady, isLoading]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
