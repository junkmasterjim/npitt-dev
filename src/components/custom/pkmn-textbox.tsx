import { cn } from "@/lib/utils";
import { H2 } from "./h2";

export function PkmnTextbox({ label, children, className }: { label?: string, children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("border-x-2 border-t-2 border-b-[3px] p-0.5 border-primary", className)}>
      {label && <H2 className=" -mt-4 ml-2 px-2 underline absolute bg-background">{label}</H2>}
      <div className="border-x-2 border-primary p-2 border-b-2 border-t-[3px]">
        {children}
      </div>
    </div>
  )
}
