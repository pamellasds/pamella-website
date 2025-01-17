import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

const buttonVariants = ({ variant = "default", size = "default", className = "" }) => {
  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-purple-100 text-purple-900 hover:bg-purple-200",
    ghost: "text-purple-600 hover:bg-purple-50",
    outline: "border border-purple-200 bg-white text-purple-600 hover:bg-purple-50",
  }

  const sizes = {
    default: "h-10 px-4 py-2 rounded-md",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10 rounded-md",
  }

  return cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  )
}

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  asChild = false, 
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={buttonVariants({ variant, size, className })}
      ref={ref}
      {...props} 
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }