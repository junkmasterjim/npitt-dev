"use client"

import { useState } from "react";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export function GoodCheapFast({ uncompromising, className }: { uncompromising?: boolean, className?: string }) {
  const [good, setGood] = useState<boolean>(uncompromising ? true : false);
  const [fast, setFast] = useState<boolean>(false);
  const [cheap, setCheap] = useState<boolean>(false);

  const handleGoodChange = (value: boolean) => {
    if (value) {
      if (fast && cheap) {
        setFast(false); // Too many, remove fast
      }
    }
    if (uncompromising) {
      if (value === false) {
        toast.error("Sorry, we don't do that here.");
      }
    } else setGood(value);
  };

  const handleFastChange = (value: boolean) => {
    if (value) {
      if (good && cheap) {
        setCheap(false); // Too many, remove cheap
      }
    }
    setFast(value);
  };

  const handleCheapChange = (value: boolean) => {
    if (value) {
      if (good && fast) {
        if (uncompromising) {
          setFast(false); // Too many, remove fast
        } else setGood(false); // Too many, remove good
      }
    }
    setCheap(value);
  };

  return (
    <div className={cn("flex flex-col gap-8 bg-secondary text-secondary-foreground p-4 rounded-lg border border-border max-w-sm w-full font-sans shadow-[0_4px_8px_rgba(0,0,0,0.05)]", className)}>
      <div>
        <h3 className="text-2xl font-medium text-secondary-foreground tracking-tighter leading-none">
          What are you looking for?
        </h3>
        <p className="tracking-tight text-sm text-secondary-foreground/80">
          You can only pick two!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <label className="tracking-tight leading-0 text-lg">Good</label>
            <p className="tracking-tighter leading-none text-sm text-secondary-foreground/80">
              Uncompromising quality.
            </p>
          </div>

          <Switch
            checked={good}
            onCheckedChange={(e) => handleGoodChange(e)}
            lock={uncompromising}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <label className="tracking-tight leading-0 text-lg">Cheap</label>
            <p className="tracking-tighter leading-none text-sm text-secondary-foreground/80">
              Budget friendly.
            </p>
          </div>

          <Switch
            checked={cheap}
            onCheckedChange={(e) => handleCheapChange(e)}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <label className="tracking-tight leading-0 text-lg">Fast</label>
            <p className="tracking-tighter leading-none text-sm text-secondary-foreground/80">
              Lightning fast delivery.
            </p>
          </div>

          <Switch checked={fast} onCheckedChange={(e) => handleFastChange(e)} />
        </div>
      </div>
    </div>
  );
};
