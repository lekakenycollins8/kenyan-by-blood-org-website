import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        // Custom variants for our Kenyan NGO
        primary: "bg-[#DC241f] text-white hover:bg-[#DC241f]/90 transition-all duration-200",
        success: "bg-[#006600] text-white hover:bg-[#006600]/90 transition-all duration-200",
        outline_primary: "border-2 border-[#DC241f] text-[#DC241f] hover:bg-[#DC241f]/10 transition-all duration-200",
        outline_success: "border-2 border-[#006600] text-[#006600] hover:bg-[#006600]/10 transition-all duration-200",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        xl: "h-12 px-10 rounded-md text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);