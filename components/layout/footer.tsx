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
              <div className="rounded-full w-10 h-10 overflow-hidden">
                          <img 
                            src="/images/KBBF-logo.svg" 
                            alt="KBFF Logo"
                            className="w-full h-full object-cover"
                            width={80}
                            height={80}
                          />
                          </div>
              <span className="text-2xl font-bold">
                <span>i</span>
                <span>am</span>
                <span className="text-[#DC241f]">K</span>enyan
                <span className="text-[#DC241f]">B</span>y
                <span className="text-[#006600]">B</span>lood
              </span>
            </Link>
            <p className="text-gray-300 max-w-md">
              Kenyan By Blood Foundation is a leading blood donation NGO in Nairobi, Kenya, committed to ensuring 
              a safe and sufficient blood supply throughout Kenya. We organize blood drives across the country to support healthcare facilities.
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
                    {IconComponent && <IconComponent size={18} />}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Join Our Community</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates on blood drives, success stories, and ways to get involved.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button 
                variant="default" 
                className="w-full"
                aria-label="Subscribe to Kenyan By Blood Foundation newsletter"
              >
                Subscribe
              </Button>
            </form>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-lg mb-3 text-[#DC241f]">Contact Us</h4>
            <address className="text-gray-300 not-italic" itemScope itemType="https://schema.org/NGO">
              <span itemProp="name">Kenyan By Blood Foundation</span>
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p><span itemProp="streetAddress">Riara Center, Riara Road</span></p>
                <p><span itemProp="addressLocality">Nairobi</span>, <span itemProp="addressCountry">Kenya</span></p>
              </div>
              <p className="mt-2"><span itemProp="telephone">+254 797 005 402</span></p>
              <p><span itemProp="email">info@iamkenyanbyblood.org</span></p>
            </address>
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
            © {currentYear} KenyanByBlood. All rights reserved. 
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