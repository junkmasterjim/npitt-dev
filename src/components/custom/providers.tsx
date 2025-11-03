"use client"

import { CMSData } from "@/lib/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";
import { createContext, useContext } from "react";

const queryClient = new QueryClient();

const CMSContext = createContext<CMSData | undefined>(undefined);

export function useCMS() {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSDataProvider');
  }
  return context;
}

function CMSDataProvider({
  children,
  data
}: {
  children: React.ReactNode;
  data: CMSData;
}) {
  return (
    <CMSContext.Provider value={data}>
      {children}
    </CMSContext.Provider>
  );
}

export default function Providers({
  children,
  cmsData
}: {
  children: React.ReactNode;
  cmsData: CMSData;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <CMSDataProvider data={cmsData}>
        <TooltipProvider>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </TooltipProvider>
      </CMSDataProvider>
    </QueryClientProvider>
  )
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}
