import { cn } from "@/lib/utils";

export default function PageContainer({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={cn("px-3 py-2", className)}>{children}</div>
}
