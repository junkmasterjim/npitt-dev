"use client"

import { fetchCMSData } from "@/lib/utils";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

function CMSDataProvider({ children }: { children: React.ReactNode }) {

  const { isLoading } = useQuery({
    queryKey: ['cms-data'],
    queryFn: fetchCMSData,
  })

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return children;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CMSDataProvider>
        {children}
      </CMSDataProvider>
    </QueryClientProvider>
  )
}
