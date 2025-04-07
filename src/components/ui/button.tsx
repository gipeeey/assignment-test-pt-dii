import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

type BaseProps = {
  asChild?: boolean;
};

type IconProps = {
  icon?: LucideIcon;
  iconPosition?: "before" | "after" | "icon-only";
};

type TooltipProps =
  | {
      tooltip?: undefined;
      tooltipPosition?: never;
    }
  | {
      tooltip: boolean;
      tooltipPosition?: "top" | "right" | "bottom" | "left";
    };

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      color: {
        default: "bg-white text-primary hover:bg-white/60",
        danger: "bg-red-500/80 text-white hover:bg-red-500/60",
        warning: "bg-amber-500/80 text-white hover:bg-amber-500/60",
      },
      variant: {
        default: "shadow-xs",
        outline:
          "bg-transparent text-white border border-white/25 hover:border-white/60 shadow-xs hover:bg-white/10",
        ghost: "bg-transparent text-white hover:bg-white/5",
      },
      size: {
        default: "h-9 px-4 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        color: "danger",
        class:
          "text-red-500 border-red-500/50 hover:bg-red-500/10 hover:border-red-500",
      },
      {
        variant: "outline",
        color: "warning",
        class:
          "text-amber-500 border-amber-500/50 hover:bg-amber-500/10 hover:border-amber-500",
      },
      {
        variant: "ghost",
        color: "warning",
        class: "text-amber-500 hover:bg-amber-500/10",
      },
      {
        variant: "ghost",
        color: "danger",
        class: "text-red-500 hover:bg-red-500/10",
      },
    ],
    defaultVariants: {
      color: "default",
      variant: "default",
      size: "default",
    },
  }
);

const Button = ({
  className,
  asChild = false,
  variant,
  color,
  size,
  icon: Icon,
  children,
  tooltip = false,
  tooltipPosition = "bottom",
  iconPosition = "before",
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> &
  BaseProps &
  IconProps &
  TooltipProps) => {
  const buttonEl = (
    <button
      data-slot="button"
      className={cn(
        buttonVariants({ color, variant, size, className }),
        iconPosition === "icon-only" &&
          (size === "default" || !size) &&
          "size-9",
        iconPosition === "icon-only" && size === "sm" && "size-8",
        iconPosition === "icon-only" && size === "lg" && "size-10"
      )}
      {...props}
    >
      {Icon && iconPosition === "before" && <Icon />}
      {iconPosition !== "icon-only" && (
        <span className="pt-0.5">{children}</span>
      )}
      {Icon && iconPosition === "icon-only" && <Icon />}
      {Icon && iconPosition === "after" && <Icon />}
    </button>
  );

  return tooltip ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{buttonEl}</TooltipTrigger>
        <TooltipContent side={tooltipPosition}>
          <p>Miauw!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    buttonEl
  );
};

export { Button, buttonVariants };
export type { IconProps, TooltipProps };
