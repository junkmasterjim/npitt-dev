"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  return (

    <nav className="flex items-center w-full gap-2 border-b py-2 px-3">
      <Link className={cn(pathname == "/" && "font-semibold")} href={"/"}>Home</Link>
      <Link className={cn(pathname == "/projects" && "font-semibold")} href={"/projects"}>Projects</Link>
      <Link className={cn(pathname == "/writing" && "font-semibold")} href={"/writing"}>Writing</Link>
    </nav >
  )
}
