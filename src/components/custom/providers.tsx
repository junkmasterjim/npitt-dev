"use client"

import { fetchCMSData } from "@/lib/api";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

function CMSDataProvider({ children }: { children: React.ReactNode }) {

  const { isLoading } = useQuery({
    queryKey: ['cms-data'],
    queryFn: fetchCMSData,
  })

  if (isLoading) {
    return <div className="min-h-96 flex items-center w-full justify-center">Loading...</div>;
  }

  return children;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CMSDataProvider>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </CMSDataProvider>
    </QueryClientProvider>
  )
}
