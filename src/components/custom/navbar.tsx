"use client"

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { SlidingLink } from "@/components/custom/sliding-link";

export default function Navbar() {

  const pathname = usePathname();

  return (

    <nav className="flex items-center w-full gap-2 border-b py-2 px-3">
      <SlidingLink className={cn(pathname == "/" && "font-semibold")} href={"/"}>Home</SlidingLink>
      <SlidingLink className={cn(pathname == "/projects" && "font-semibold")} href={"/projects"}>Projects</SlidingLink>
      <SlidingLink className={cn(pathname == "/writing" && "font-semibold")} href={"/writing"}>Writing</SlidingLink>
    </nav >
  )
}
