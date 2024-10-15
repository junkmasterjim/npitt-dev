'use client';

import { CodePreview } from '@/components/code-preview';
import { CURSOR_CODE } from '@/components/lab/cursor/code';
import { Cursor } from '@/components/lab/cursor/cursor';
import { PROMISE_BUTTON_CODE } from '@/components/lab/promise-button/code';
import PromiseButton from '@/components/lab/promise-button/promise-button';
import { RouteHeading } from '@/components/route-heading';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useState } from 'react';

const Lab = () => {
  const [cursorBehaviour, setCursorBehaviour] = useState<'static' | 'spring'>(
    'static'
  );
  return (
    <>
      <div>
        <RouteHeading
          heading="Lab"
          description="Welcome to my lab. You'll find some cool stuff here. I like experimenting with UI elements, animations, and building fun interactions."
        />

        <div className="flex flex-col gap-8">
          <LabExperiment
            title="Promise Button"
            description="Reflects the state of a promise or async function."
            preview={
              <div className="grid gap-8">
                <span>
                  <p className="text-muted-foreground text-sm text-center">
                    success
                  </p>
                  <PromiseButton>Subscribe</PromiseButton>
                </span>
                <span>
                  <p className="text-muted-foreground text-sm text-center">
                    error
                  </p>
                  <PromiseButton error>Subscribe</PromiseButton>
                </span>
              </div>
            }
            code={PROMISE_BUTTON_CODE}
          />

          <LabExperiment
            title="Cursor"
            description="A simple cursor that can be used with or without a spring animation."
            preview={
              <div className="flex flex-col items-center justify-center gap-2 text-sm">
                <p className="text-muted-foreground">
                  Hover me to see the cursor.
                </p>
                <Button
                  variant={'outline'}
                  className="uppercase"
                  onClick={() =>
                    setCursorBehaviour((prev) =>
                      prev === 'static' ? 'spring' : 'static'
                    )
                  }
                >
                  Swap to {cursorBehaviour === 'static' ? 'spring' : 'static'}
                </Button>
                {cursorBehaviour === 'static' ? (
                  <Cursor className="hidden group-hover:block" />
                ) : (
                  <Cursor
                    className="hidden group-hover:block"
                    behaviour="spring"
                  />
                )}
              </div>
            }
            code={CURSOR_CODE}
          />

          {/* <Noise density={1} className="w-full h-full" /> */}
        </div>
      </div>
    </>
  );
};

export default Lab;

const LabExperiment = ({
  title,
  description,
  preview,
  code,
  usage,
}: {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  usage?: string;
}) => {
  return (
    <>
      <div className="group">
        <h3 className="text-lg font-semibold leading-none">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>

        <Tabs
          defaultValue="preview"
          className="aspect-[4/3] max-h-96 w-full rounded-lg border shadow-md bg-background dark:bg-neutral-900 mt-2 overflow-hidden"
        >
          <TabsList className="bg-card rounded-none rounded-t-lg w-full justify-start gap-2 px-2 h-12 relative z-50">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            {usage ? <TabsTrigger value="usage">Usage</TabsTrigger> : null}
          </TabsList>

          <>
            <TabsContent
              value="preview"
              className="grid place-content-center max-h-[calc(100%-48px)] data-[state=active]:h-full m-0 w-full"
            >
              <div className="flex flex-col items-center justify-center w-full h-full -mt-2 relative">
                {preview}
              </div>
            </TabsContent>

            <TabsContent
              value="code"
              className="max-h-[calc(100%-48px)] data-[state=active]:h-full m-0 overflow-auto px-2 w-full"
            >
              <CodePreview code={code} />
            </TabsContent>

            {usage ? (
              <TabsContent
                value="usage"
                className="max-h-[calc(100%-48px)] data-[state=active]:h-full m-0 overflow-auto px-2 w-full"
              >
                <CodePreview code={usage} />
              </TabsContent>
            ) : null}
          </>
        </Tabs>
      </div>
    </>
  );
};

const Noise = ({
  className,
  density = 2,
}: {
  className?: string;
  density?: number; // ! Best to use 1-3. Defaults to 2. Higher numbers are less dense.
}) => {
  return (
    <>
      <div className={className}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="w-full h-full object-cover"
        >
          <defs>
            <filter
              id="nnnoise-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="linearRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency={density / 10}
                numOctaves="4"
                seed="15"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              ></feTurbulence>
              <feSpecularLighting
                surfaceScale="40"
                specularConstant="3"
                specularExponent="20"
                lighting-color="#4e2b80"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                result="specularLighting"
              >
                <feDistantLight azimuth="3" elevation="200"></feDistantLight>
              </feSpecularLighting>
              <feColorMatrix
                type="saturate"
                values="0"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="specularLighting"
                result="colormatrix"
              ></feColorMatrix>
            </filter>
          </defs>
          <rect
            width="700"
            height="700"
            fill="#4e2b80"
            filter="url(#nnnoise-filter)"
          ></rect>
        </svg>
      </div>
    </>
  );
};
