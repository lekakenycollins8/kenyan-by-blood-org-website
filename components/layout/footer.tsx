import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Heart } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top section with logo, description and newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Heart 
                size={32} 
                className="fill-[#DC241f] text-[#DC241f]" 
                strokeWidth={1.5} 
              />
              <span className="text-2xl font-bold">
                <span className="text-[#DC241f]">K</span>enyan
                <span className="text-[#DC241f]">B</span>y
                <span className="text-[#006600]">B</span>lood
              </span>
            </Link>
            <p className="text-gray-300 max-w-md">
              KenyanByBlood is a leading blood donation NGO in Kenya, committed to ensuring 
              a safe and sufficient blood supply throughout the country.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = {
                  facebook: Facebook,
                  twitter: Twitter,
                  instagram: Instagram,
                  linkedin: Linkedin,
                }[social.icon];
                
                return (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-[#DC241f] transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-[#DC241f]">Contact Us</h4>
                <address className="text-gray-300 not-italic">
                  <p>123 Kimathi Street</p>
                  <p>Nairobi, Kenya</p>
                  <p className="mt-2">+254 123 456 789</p>
                  <p>info@kenyanbyblood.org</p>
                </address>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-[#DC241f]">Opening Hours</h4>
                <ul className="text-gray-300">
                  <li>Mon - Fri: 8am - 6pm</li>
                  <li>Saturday: 9am - 4pm</li>
                  <li>Sunday: 10am - 2pm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Links section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/10">
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.path}
                      className="text-gray-300 hover:text-[#DC241f] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} KenyanByBlood. All rights reserved. NGO Registration #12345
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}