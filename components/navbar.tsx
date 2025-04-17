"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Jaar 1", href: "/year-1" },
  { name: "Jaar 2", href: "/year-2" },
  { name: "Jaar 3", href: "/year-3" },
  { name: "Jaar 4", href: "/year-4" },
  { name: "Curriculum", href: "/curriculum" },
  { name: "Over Ons", href: "/about" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white pb-[5px] shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Fixed size logo container */}
        <div className="flex h-12 w-32 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Design & Technology Logo"
              width={80}
              height={30}
              className="h-auto w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation - adjusted to prevent wrapping */}
        <nav className="hidden md:flex md:items-center">
          <div className="flex flex-nowrap">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item whitespace-nowrap text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "active text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                  {isActive && <div className="menu-hexagon-indicator" />}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "active text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {isActive && <div className="menu-hexagon-indicator" />}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
