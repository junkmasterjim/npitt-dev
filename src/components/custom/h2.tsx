import { cn } from "@/lib/utils";

export function H2({ children, className }: { children: React.ReactNode, className?: string }) {
  return <h2 className={cn("text-lg tracking-tighter text-foreground/70 font-medium leading-7", className)}>{children}</h2>
}
