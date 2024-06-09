import { RouteHeading } from "@/components/route-heading";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Bag = () => {
  return (
    <>
      <RouteHeading
        heading="Essentials"
        description="A list of my essentials. Things I use for work, things I use for fun, and some things that I just like to have around."
      />
      <div className="space-y-12">
        <Section id="desk">
          <SectionHeading>Desk Setup</SectionHeading>
          <BagPocket
            items={[
              {
                title: `14" MacBook M2 Pro, 16GB RAM (2023)`,
                description:
                  "I love this thing. I ran on a 2017 MacBook Air for nearly 5 years, and this was a MAJOR improvement. If I could, I might have gone for the 16-inch model and some more RAM, but this machine still performs well above my needs.",
                href: "https://www.apple.com/macbook-pro/",
              },
              {
                title: "Logitech M240 Silent Wireless Mouse",
                description:
                  "I've had this mouse for years. It's simple, reliable, and silent. I've never had any issues with it, and it's good for the price. I'd like to upgrade to something a bit more ergonomic, but this mouse is great for now.",
                href: "https://www.logitech.com/en-ca/shop/p/m240-silent-bluetooth-mouse.910-007113",
              },
              {
                title: "DX Racer Racing Series",
                description:
                  "Gotta love the DX Racer. It's an older model and I've had it for 4 years, but it's still comfy as ever. Sometimes I think it's a bit heavy, but I'm just being picky at that point. Great chair.",
                href: "https://www.dxracer.com/",
              },
            ]}
          />
        </Section>
        <Section id="development">
          <SectionHeading>Development</SectionHeading>
          <BagPocket
            items={[
              {
                title: "Zed",
                description:
                  "My new favourite editor. I just switched from VS Code & Zed is kicking ass. I still jump back to VS Code every now and then for some of the plugins, but once Zed sorts out their plugin ecosystem I'll have no reason to leave.",
                href: "https://zed.dev/",
              },
              {
                title: "Terminal",
                description:
                  "The default MacOS terminal. Has everything I need. Nothing fancy, gets the job done.",
              },
            ]}
          />
        </Section>
        <Section id="design">
          <SectionHeading>Design</SectionHeading>
          <BagPocket
            items={[
              {
                title: "Figma",
                description:
                  "I kind of avoided using Figma for a long time. Nowadays, it's my go to app when it comes to design; whether for development, or personal use, I use it for pretty much everything design related.",
                href: "https://figma.com/",
              },
              {
                title: "Pen & Paper",
                description:
                  "I've done a lot of sketches and wireframes on pen & paper. I usually keep a dotted grid notebook on me at all times, and end up scratching down ideas when they come to me.",
              },
            ]}
          />
        </Section>
        <Section id="productivity">
          <SectionHeading>Productivity</SectionHeading>
          <BagPocket
            items={[
              {
                title: "Notion",
                description:
                  "I have a love hate relationship with notion. It works great as a way to organize my life, but sometimes it can be a bit annoying to work with. Haven't found anything better so I'm sticking with it.",
                href: "https://notion.so/",
              },
              {
                title: "Apple Notes",
                description: "The ultimate note taking app. Peak design.",
              },
              {
                title: "Timer",
                description: "Keeps me focused.",
              },
              {
                title: "Hushh",
                description:
                  "Hushh is a simple noise generator for MacOS that I made to help me sleep! It's free and open source, so check it out if you're interested. Ocean 2 is easily my favourite sound; I use it every night to help me sleep.",
                href: "https://hushh.npitt.dev/",
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
};

export default Bag;

const BagPocket = ({
  items,
}: {
  items: Array<{ title: string; description: string; href?: string }>;
}) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col gap-1">
          {item.href ? (
            <Link
              target="_blank"
              href={item.href}
              className="font-semibold sm:text-lg inline-flex gap-2 items-center group tracking-tighter"
            >
              <span className="overflow-hidden max-w-full truncate">
                {item.title}
              </span>
              <ArrowUpRight
                strokeWidth={3}
                className="group-hover:scale-125 transition-transform duration-200 group-hover:-rotate-6 size-5"
              />
            </Link>
          ) : (
            <div className="font-semibold sm:text-lg inline-flex gap-2 items-center group tracking-tighter">
              <span className="overflow-hidden max-w-full truncate">
                {item.title}
              </span>
            </div>
          )}
          <div className="text-sm tracking-tight text-foreground/90">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};
