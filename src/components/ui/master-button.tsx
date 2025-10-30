import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

// Unified button variants using H2O brand colors for consistent theming
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        // Primary - Main CTAs (brand cyan)
        primary: "bg-brand-cyan hover:bg-brand-cyan-dark text-white shadow-lg hover:shadow-xl focus-visible:ring-brand-cyan active:bg-brand-cyan-dark",
        // Secondary - Alternative actions (brand turquoise) 
        secondary: "bg-brand-turquoise hover:bg-brand-cyan text-white shadow-md hover:shadow-lg focus-visible:ring-brand-turquoise active:bg-brand-cyan",
        // Phone - Emergency/phone calls (brand cyan with different shade)
        phone: "bg-brand-cyan hover:bg-brand-cyan-dark text-white shadow-md hover:shadow-lg focus-visible:ring-brand-cyan active:bg-brand-cyan-dark",
        // Outline - Secondary CTAs
        outline: "border-2 border-brand-cyan text-brand-cyan bg-white hover:bg-brand-cyan hover:text-white shadow-sm hover:shadow-md focus-visible:ring-brand-cyan",
        // Ghost - Subtle actions
        ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-brand-cyan",
        // Link - Text links
        link: "text-brand-cyan hover:text-brand-cyan-dark underline-offset-4 hover:underline focus-visible:ring-brand-cyan"
      },
      size: {
        sm: "px-4 py-2 text-sm h-9",
        md: "px-6 py-3 text-base h-11", 
        lg: "px-8 py-4 text-lg h-13",
        xl: "px-10 py-5 text-xl h-16"
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

export interface MasterButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  children: ReactNode
}

const MasterButton = forwardRef<HTMLButtonElement, MasterButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

MasterButton.displayName = "MasterButton"

export { MasterButton, buttonVariants }


