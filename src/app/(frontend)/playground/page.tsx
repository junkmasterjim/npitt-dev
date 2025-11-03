"use client"

import PageContainer from "@/components/custom/page-container";
import { Cursor } from "@/components/playground/cursor";
import { GoodCheapFast } from "@/components/playground/good-cheap-fast";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function PlaygroundPage() {
  const [square, setSquare] = useState(false);
  const [spring, setSpring] = useState(false);

  return (
    <PageContainer>
      <div className="flex flex-wrap gap-4">
        <GoodCheapFast />

        <div className=" flex flex-col gap-2">
          cursor settings
          <div className="flex gap-2 items-center">
            <div className="size-4 bg-primary rounded-full" />
            <Switch checked={square} onCheckedChange={() => setSquare(!square)} />
            <div className="size-4 bg-primary" />
          </div>

          <div className="flex gap-2 items-center">
            <span>static</span>
            <Switch checked={spring} onCheckedChange={() => setSpring(!spring)} />
            <span>spring</span>
          </div>

        </div>

        <GoodCheapFast uncompromising />
        <Cursor
          behaviour={spring ? "spring" : "static"}
          shape={square ? "square" : "circle"}
        />
      </div>
    </PageContainer>
  )
}

