let cursorSize = "`${cursorSize}px`";

export const { sample } = {
	sample: `
    import { useEffect } from "react";

    import { cn } from "@/lib/utils";
    import {
        SpringOptions,
        motion,
        useMotionValue,
        useSpring,
    } from "framer-motion";

    export const Cursor = ({
        className,
        blur = "none",
        variant = "circle",
        behaviour = "static",
        smoothOptions = {
            stiffness: 300,
            damping: 20,
            mass: 0.5,
        },
        cursorSize = 20,
    }: {
        className?: string;
        blur?: "none" | "sm" | "md" | "lg";
        variant?: "circle" | "square";
        behaviour?: "static" | "spring";
        smoothOptions?: SpringOptions;
        cursorSize?: number;
    }) => {
        // use Mouse if you want to use the cursor position with no spring
        const mouse = { x: useMotionValue(0), y: useMotionValue(0) };
        // use smooth if you want to use the cursor position with a spring
        const smooth = {
            x: useSpring(mouse.x, smoothOptions),
            y: useSpring(mouse.y, smoothOptions),
        };

        const handleMouseMove = (e: { clientX: any; clientY: any }) => {
            const { clientX, clientY } = e;
            mouse.x.set(clientX - cursorSize / 2);
            mouse.y.set(clientY - cursorSize / 2);
        };

        useEffect(() => {
            window.addEventListener("mousemove", handleMouseMove);
            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };
        });

        return (
            <>
                {/* STATIC RENDER */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1] }}
                    transition={{ duration: 0.5, times: [0, 0.9, 1] }}
                    style={{
                        // smooth for spring, mouse for static
                        left: mouse.x,
                        top: mouse.y,
                        height: ${cursorSize},
                        width: ${cursorSize},
                    }}
                    className={cn(
                        // height and width of the cursor is set to 16px
                        "rounded-full z-50 cursor-none pointer-events-none fixed inset-0 backdrop-invert",

                        // props
                        className,
                        "invisible",
                        behaviour === "static" && "visible",
                        variant === "square" && "rounded-none",

                        // blur
                        blur === "sm" && "backdrop-blur-sm",
                        blur === "md" && "backdrop-blur-md",
                        blur === "lg" && "backdrop-blur-lg"
                    )}
                />

                {/* SPRING RENDER */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1] }}
                    transition={{ duration: 0.5, times: [0, 0.9, 1] }}
                    style={{
                        // smooth for spring, mouse for static
                        left: smooth.x,
                        top: smooth.y,
                        height: ${cursorSize},
                        width: ${cursorSize},
                    }}
                    className={cn(
                        // height and width of the cursor is set to 16px
                        " z-50 cursor-none pointer-events-none fixed inset-0 backdrop-invert",

                        // props
                        className,
                        "invisible",
                        behaviour === "spring" && "visible",
                        variant === "circle" && "rounded-full",
                        variant === "square" && "rounded-none",

                        // blur
                        blur === "sm" && "backdrop-blur-sm",
                        blur === "md" && "backdrop-blur-md",
                        blur === "lg" && "backdrop-blur-lg"
                    )}
                />
            </>
        );
    };
    `,
};
