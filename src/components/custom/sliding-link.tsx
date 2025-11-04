import { cn } from "@/lib/utils";

export const SlidingLink = ({
  href,
  children,
  className,
  classHovered,
  target
}: {
  target?: string
  href?: string;
  children: React.ReactNode;
  className?: string;
  classHovered?: string;
}) => {
  if (!href) {
    return (
      <>
        <div
          className={cn(
            "relative cursor-pointer line-clamp-1 leading-relaxed group",
            className,
          )}
        >
          {/* Primary */}
          <p className="group-hover:-translate-y-full transition-transform duration-500 group-hover:duration-300 ease-in-out">
            {children}
          </p>
          {/* Secondary */}
          <p
            className={cn(
              "group-hover:translate-y-0 translate-y-full absolute top-0 left-0 transition-transform duration-500 group-hover:duration-300 ease-in-out",
              classHovered ? classHovered : "text-amber-600",
            )}
          >
            {children}
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <a
          target={target}
          href={href}
          className={cn(
            "relative cursor-pointer overflow-hidden block leading-relaxed group whitespace-nowrap",
            className,
          )}
        >
          {/* Primary */}
          <p className="group-hover:-translate-y-full transition-transform duration-500 group-hover:duration-300 ease-in-out">
            {children}
          </p>
          {/* Secondary */}
          <p
            className={cn(
              "group-hover:translate-y-0 translate-y-full absolute top-0 left-0 transition-transform duration-500 group-hover:duration-300 ease-in-out",
              classHovered ? classHovered : "text-amber-600",
            )}
          >
            {children}
          </p>
        </a>
      </>
    );
  }
};
