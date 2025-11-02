"use client"

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
      queryKey: ['projects'],
      queryFn: fetchProjects,
    });

    queryClient.prefetchQuery({
      queryKey: ['hero'],
      queryFn: fetchHeroContent,
    });

    queryClient.prefetchQuery({
      queryKey: ['socialLinks'],
      queryFn: fetchSocialLinks,
    });

    queryClient.prefetchQuery({
      queryKey: ['caseStudies'],
      queryFn: fetchCaseStudies,
    });
  }, []);

  return children;
}
