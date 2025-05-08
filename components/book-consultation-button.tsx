"use client"
import { Button, type ButtonProps } from "@/components/ui/button"
import Link from "next/link"

interface BookConsultationButtonProps extends ButtonProps {
  text?: string
}

export function BookConsultationButton({
  text = "Book Consultation",
  className,
  ...props
}: BookConsultationButtonProps) {
  return (
    <Link href="https://cal.com/mattdyer/15min" target="_blank" rel="noopener noreferrer">
      <Button className={className} {...props}>
        {text}
      </Button>
    </Link>
  )
}
