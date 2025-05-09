"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface ClientLinkProps extends React.ComponentProps<typeof Link> {
  className?: string
}

export function ClientLink({ className, ...props }: ClientLinkProps) {
  return <Link className={cn(className)} {...props} />
} 