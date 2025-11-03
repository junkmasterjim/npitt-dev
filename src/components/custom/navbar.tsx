"use client"

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { SlidingLink } from "@/components/custom/sliding-link";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {

  const pathname = usePathname();

  return (

    <div className="flex items-center justify-between px-3 py-2 w-full border-b">
      <nav className="flex items-center gap-2">
        <SlidingLink className={cn(pathname == "/" && "font-semibold")} href={"/"}>Home</SlidingLink>
        <SlidingLink className={cn(pathname == "/projects" && "font-semibold")} href={"/projects"}>Projects</SlidingLink>
        <SlidingLink className={cn(pathname == "/writing" && "font-semibold")} href={"/writing"}>Writing</SlidingLink>
      </nav>
      <ThemeToggle />
    </div>
  )
}
