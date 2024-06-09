"use client";

import { ModeToggle } from "./mode-toggle";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Asterisk,
  FilesIcon,
  FlaskConical,
  Home,
  LucideIcon,
  Package,
  Paintbrush,
  PocketKnife,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const tabs: { label: string; id: string; href: string; icon: LucideIcon }[] = [
  { label: "Home", id: "home", href: "/", icon: Home },
  { label: "Projects", id: "projects", href: "/projects", icon: Package },
  { label: "Blog", id: "blog", href: "/blog", icon: FilesIcon },
  {
    label: "Lab",
    id: "lab",
    href: "/lab",
    icon: FlaskConical,
  },
  {
    label: "Styles",
    id: "styles",
    href: "/styles",
    icon: Paintbrush,
  },
  {
    label: "Essentials",
    id: "essentials",
    href: "/essentials",
    icon: PocketKnife,
  },
];

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);

  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname.split("/")[1] || "home");

  const scrollHandler = () => {
    if (window.scrollY < 100) {
      setIsHidden(false);
    }
    if (window.scrollY > 100) {
      setIsHidden(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => scrollHandler());
    return () => {
      window.removeEventListener("scroll", () => scrollHandler());
    };
  }, []);

  useEffect(() => {
    setActiveTab(pathname.split("/")[1] || "home");
  }, [pathname]);

  return (
    <>
      <motion.div
        className="fixed z-50 left-0 flex w-full items-center justify-between px-2 h-20"
        initial={{ top: 0 }}
        animate={{ top: isHidden ? -80 : 0 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0 }}
      >
        <div className="px-4 min-h-12 rounded-full border shadow flex gap-4 items-center justify-between bg-secondary text-secondary-foreground w-full max-w-screen-sm mx-auto ">
          <div className="flex items-center gap-2">
            {tabs.map((tab) => (
              <span key={tab.id}>
                {tab.id === activeTab ? (
                  <Tooltip>
                    <Link href={tab.href} tabIndex={-1}>
                      <TooltipTrigger asChild>
                        <Button
                          size={"icon"}
                          className="rounded-full transition-all relative after:absolute after:-bottom-1 after:h-px after:w-5 after:rounded-full after:bg-[linear-gradient(to_right,#11111100_0%,#888_50%,#11111100_100%)] bg-muted-foreground/25 hover:bg-muted-foreground/25 after:opacity-100 opacity-50 size-8"
                          variant={"ghost"}
                        >
                          <tab.icon className="size-5" />
                        </Button>
                      </TooltipTrigger>
                    </Link>
                    <TooltipContent className="mt-2">
                      {tab.label}
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <Tooltip>
                    <Link href={tab.href} tabIndex={-1}>
                      <TooltipTrigger asChild>
                        <Button
                          size={"icon"}
                          className="rounded-full transition-all hover:opacity-50 size-8"
                          variant={"ghost"}
                          onClick={() => setActiveTab(tab.id)}
                        >
                          <tab.icon className="size-5" />
                        </Button>
                      </TooltipTrigger>
                    </Link>
                    <TooltipContent className="mt-2">
                      {tab.label}
                    </TooltipContent>
                  </Tooltip>
                )}
              </span>
            ))}
          </div>

          <ModeToggle className="rounded-full" />
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
