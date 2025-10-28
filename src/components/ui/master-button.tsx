import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

// Unified button variants using CSS custom properties for consistent theming
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        // Primary - Main CTAs (red brand color)
        primary: "bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl focus-visible:ring-red-500 active:bg-red-800",
        // Secondary - Alternative actions (blue brand color) 
        secondary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg focus-visible:ring-blue-500 active:bg-blue-800",
        // Phone - Emergency/phone calls (green for urgency)
        phone: "bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg focus-visible:ring-green-500 active:bg-green-800",
        // Outline - Secondary CTAs
        outline: "border-2 border-red-600 text-red-600 bg-white hover:bg-red-600 hover:text-white shadow-sm hover:shadow-md focus-visible:ring-red-500",
        // Ghost - Subtle actions
        ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-500",
        // Link - Text links
        link: "text-red-600 hover:text-red-700 underline-offset-4 hover:underline focus-visible:ring-red-500"
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


