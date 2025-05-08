"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { BookConsultationButton } from "@/components/book-consultation-button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">SHOOGLE</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
            How It Works
          </Link>
          <Link href="#why-digital-assets" className="text-sm font-medium hover:underline underline-offset-4">
            Why Digital Assets
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <BookConsultationButton>Book Consultation</BookConsultationButton>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container flex flex-col space-y-3 p-4">
            <Link href="/" className="text-sm font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#services" className="text-sm font-medium" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium" onClick={toggleMenu}>
              How It Works
            </Link>
            <Link href="#why-digital-assets" className="text-sm font-medium" onClick={toggleMenu}>
              Why Digital Assets
            </Link>
            <Link href="#contact" className="text-sm font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <BookConsultationButton className="w-full mt-2">Book Consultation</BookConsultationButton>
          </div>
        </div>
      )}
    </header>
  )
}
