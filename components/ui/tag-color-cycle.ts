// Color cycle utility for tags with beautiful innovation component colors
type TagVariant = "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "error" | "light-purple" | "blue" | "pink" | "green"

export const colorForIndex = (index: number): TagVariant => {
  // Beautiful color cycle for innovation components
  const innovationColors: TagVariant[] = [
    "light-purple",
    "blue", 
    "pink",
    "green"
  ]
  
  return innovationColors[index % innovationColors.length]
}

// Alternative function for general use with all colors
export const generalColorForIndex = (index: number): TagVariant => {
  const colors: TagVariant[] = [
    "default",
    "primary", 
    "secondary",
    "accent",
    "success",
    "warning",
    "error"
  ]
  
  return colors[index % colors.length]
}

export default colorForIndex