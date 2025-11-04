"use client"

import { CMSData } from "@/lib/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";
import { createContext, useContext, useState } from "react";
import { Toaster } from "sonner";

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
  initialData
}: {
  children: React.ReactNode;
  initialData: CMSData;
}) {

  const [data] = useState<CMSData>(initialData);

  return (
    <CMSContext.Provider value={data}>
      {children}
    </CMSContext.Provider>
  );
}

export default function Providers({
  children,
  initialData
}: {
  children: React.ReactNode;
  initialData: CMSData;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <CMSDataProvider initialData={initialData}>
        <TooltipProvider>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
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
