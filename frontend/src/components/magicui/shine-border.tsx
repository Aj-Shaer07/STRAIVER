"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderWidth?: number;
  duration?: number;
  shineColor?: string | string[];
  children?: React.ReactNode;
}

/**
 * Shine Border
 *
 * An animated border effect component with configurable properties.
 * The shine appears on hover of the wrapper.
 */
export function ShineBorder({
  borderWidth = 2,
  duration = 20,
  shineColor = "#ffffff",
  className,
  style,
  children,
  ...props
}: ShineBorderProps) {
  return (
    <div
      className={cn(
        "relative group",
        className
      )}
      style={{ display: "inline-block", ...style }}
      {...props}
    >
      <div
        style={{
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          backgroundImage: `radial-gradient(transparent,transparent, ${
            Array.isArray(shineColor) ? shineColor.join(",") : shineColor
          },transparent,transparent)`,
          backgroundSize: "300% 300%",
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "var(--border-width)",
          pointerEvents: "none",
        } as React.CSSProperties}
        className={cn(
          "absolute inset-0 size-full rounded-[inherit] will-change-[background-position] transition-opacity duration-300 opacity-0 group-hover:opacity-100 motion-safe:animate-shine",
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}