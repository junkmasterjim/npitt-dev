"use client"

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { SlidingLink } from "@/components/custom/sliding-link";
import { ThemeToggle } from "@/components/custom/theme-toggle";

export default function Navbar() {

  const pathname = usePathname();

  const navigation: Array<{ href: string; label: string }> = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Project" },
    { href: "/writing", label: "Writing" },
    { href: "/playground", label: "Playground" },
  ];

  return (
    <div className="flex items-center justify-between px-3 py-2 w-full border-b">
      <nav className="flex items-center gap-4">
        {
          navigation.map((link) => (
            <SlidingLink key={link.label} className={cn(pathname == link.href && "font-semibold")} href={link.href}>
              {link.label}
            </SlidingLink>
          ))
        }
      </nav>
      <ThemeToggle />
    </div>
  )
}
