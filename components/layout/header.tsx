"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X, Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2"
        >
          <Heart 
            size={32} 
            className="fill-[#DC241f] text-[#DC241f]" 
            strokeWidth={1.5} 
          />
          <span className={cn(
            "text-2xl font-bold",
            scrolled ? "text-black" : "text-[#DC241f]"
          )}>
            <span className="text-[#DC241f]">D</span>ona
            <span className="text-[#006600]">K</span>enya
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={cn(
                "font-medium text-sm hover:text-[#DC241f] transition-colors relative py-2 group",
                scrolled ? "text-black" : "text-white"
              )}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC241f] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Button 
            variant="primary"
            size="lg"
            className="rounded-full shadow-md"
          >
            Donate Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#DC241f]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 z-50">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="font-medium text-black hover:text-[#DC241f] py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              variant="primary"
              size="lg"
              className="w-full mt-4 rounded-full"
            >
              Donate Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}