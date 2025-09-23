import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "liquid-hover glass text-foreground hover:glass-strong transition-glass font-medium",
        destructive: "liquid-hover bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "liquid-hover glass-subtle border-glass-border text-foreground hover:glass transition-glass",
        secondary: "liquid-hover glass-subtle text-secondary-foreground hover:glass transition-glass",
        ghost: "liquid-hover hover:glass-subtle hover:text-foreground transition-glass",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "gradient-text liquid-card glass-strong hover:glow-border transition-glass font-semibold shadow-cyan",
        glass: "liquid-hover glass text-foreground hover:glass-strong transition-glass backdrop-blur-md",
        glow: "liquid-hover glass border border-primary/20 text-primary hover:glow-border hover:shadow-cyan-glow transition-glass",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
