import { useCountAnimation } from "@/hooks/useCountAnimation"

interface AnimatedCounterProps {
  end: number
  start?: number
  duration?: number
  suffix?: string
  className?: string
}

export const AnimatedCounter = ({
  end,
  start = 0,
  duration = 2000,
  suffix = "",
  className = "",
}: AnimatedCounterProps) => {
  const { count, elementRef } = useCountAnimation({ end, start, duration })

  return (
    <div
      ref={elementRef}
      className={`font-bold tracking-tight text-foreground ${className}`}
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}
