"use client"

import { fetchCMSData } from "@/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CMSDataProvider>
        {children}
      </CMSDataProvider>
    </QueryClientProvider>
  )
}

function CMSDataProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['cms-data'],
      queryFn: fetchCMSData,
    });
  }, []);

  return children;
}
