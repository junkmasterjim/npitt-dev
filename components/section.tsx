import { cn } from "@/lib/utils";

export const Section = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => {
  return (
    <section
      id={id ?? "home"}
      className={cn(
        "space-y-4 sm:space-y-6  tracking-tight leading-tight",
        className,
      )}
    >
      {children}
    </section>
  );
};
