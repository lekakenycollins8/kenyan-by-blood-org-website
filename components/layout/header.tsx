"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { NAV_LINKS } from "@/lib/constants"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Dropdown menu component for navigation
function DropdownMenu({ link, scrolled }: { link: any, scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "font-medium text-sm transition-colors py-2 px-4 rounded-md flex items-center",
          scrolled
            ? "text-black hover:bg-[#006600]/10 hover:text-[#006600]"
            : "text-white hover:bg-white/10 hover:text-[#DC241f]",
        )}
      >
        {link.name}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          {link.children?.map((childLink: any) => (
            <Link
              key={childLink.name}
              href={childLink.path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#DC241f]"
              onClick={() => setIsOpen(false)}
            >
              {childLink.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2 border-b-2 border-[#DC241f]" : "bg-black py-4 border-b-2 border-[#006600]",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
            <div className={cn("rounded-full w-10 h-10 overflow-hidden", scrolled ? "bg-[#DC241f]" : "bg-white")}>
            <img 
              src="/images/KBBF-logo.svg" 
              alt="KBFF Logo"
              className="w-full h-full object-cover"
              width={80}
              height={80}
            />
            </div>
          <span className={cn("text-2xl font-bold", scrolled ? "text-black" : "text-white")}>
            <span>i</span>
            <span>am</span>
            <span className="text-[#DC241f]">K</span>enyan
            <span className="text-[#DC241f]">B</span>y
            <span className="text-[#006600]">B</span>lood
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((link) => {
            if (link.isDropdown) {
              return (
                <DropdownMenu 
                  key={link.name} 
                  link={link} 
                  scrolled={scrolled} 
                />
              );
            }
            
            return (
              <Link
                key={link.name}
                href={link.path}
                className={cn(
                  "font-medium text-sm transition-colors py-2 px-4 rounded-md",
                  scrolled
                    ? "text-black hover:bg-[#006600]/10 hover:text-[#006600]"
                    : "text-white hover:bg-white/10 hover:text-[#DC241f]",
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
            <Button
            variant="default"
            size="lg"
            className={cn(
              "rounded-full font-semibold",
              scrolled
              ? "bg-[#DC241f] hover:bg-[#b01c19] text-white border-2 border-white"
              : "bg-[#006600] hover:bg-[#004d00] text-white border-2 border-white",
            )}
            onClick={() => window.location.href = '/donate#waystosupport'}
            >
            Donate Now
            </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden p-2 rounded-full",
            scrolled ? "bg-[#DC241f]/10 text-[#DC241f]" : "bg-white/10 text-white",
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 z-50">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.name} className="flex flex-col">
                    <div className="font-medium text-black py-3 px-4 rounded-md">
                      {link.name}
                    </div>
                    <div className="ml-4 flex flex-col space-y-2">
                      {link.children?.map((childLink) => (
                        <Link
                          key={childLink.name}
                          href={childLink.path}
                          className="font-medium text-gray-600 hover:text-[#DC241f] hover:bg-gray-50 py-2 px-4 rounded-md"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {childLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className="font-medium text-black hover:text-[#DC241f] hover:bg-gray-50 py-3 px-4 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {/* <Button
                variant="outline"
                size="lg"
                className="rounded-full border-[#006600] text-[#006600] hover:bg-[#006600] hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Button> */}
                <Button
                variant="default"
                size="lg"
                className="rounded-full bg-[#DC241f] hover:bg-[#b01c19] text-white"
                onClick={() => {
                  setIsMenuOpen(false)
                  window.location.href = '/donate'
                }}
                >
                Donate Now
                </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
