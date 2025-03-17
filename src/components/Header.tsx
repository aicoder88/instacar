import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Car, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  logo?: string;
  navLinks?: Array<{
    label: string;
    href: string;
    subLinks?: Array<{ label: string; href: string }>;
  }>;
}

const Header = ({
  logo = "Insta Car Spa",
  navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    {
      label: "Locations",
      href: "#locations",
      subLinks: [
        { label: "Downtown", href: "#locations-downtown" },
        { label: "Plateau Mont-Royal", href: "#locations-plateau" },
        { label: "Westmount", href: "#locations-westmount" },
        { label: "Notre-Dame-de-Grâce", href: "#locations-ndg" },
        { label: "Griffintown", href: "#locations-griffintown" },
        { label: "Old Port", href: "#locations-oldport" },
      ],
    },
    { label: "Gallery", href: "#gallery" },
    { label: "Blog", href: "#blog" },
    { label: "About", href: "#about" },
  ],
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-amber-500/20 shadow-lg shadow-amber-500/5"
          : "bg-black/30 backdrop-blur-md border-b border-white/10",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="/"
            className="text-2xl font-bold text-white flex items-center"
          >
            <Car className="h-6 w-6 mr-2 text-amber-500" />
            <span className="bg-gradient-to-r from-amber-400 to-fuchsia-500 bg-clip-text text-transparent">
              {logo}
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.subLinks ? (
                <div className="flex items-center">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className={cn(
                      "text-white/80 hover:text-amber-400 transition-colors font-medium flex items-center",
                      activeDropdown === link.label && "text-amber-400",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200",
                        activeDropdown === link.label && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 rounded-md overflow-hidden bg-black/80 backdrop-blur-xl border border-amber-500/20 shadow-lg shadow-amber-500/10 z-50"
                      >
                        <div className="py-1">
                          {link.subLinks.map((subLink, subIdx) => (
                            <a
                              key={subIdx}
                              href={subLink.href}
                              className="block px-4 py-2 text-sm text-white/80 hover:bg-amber-500/20 hover:text-amber-400 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subLink.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  href={link.href}
                  className="text-white/80 hover:text-amber-400 transition-colors font-medium"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <Button
            className="bg-gradient-to-r from-amber-500 to-fuchsia-600 hover:from-amber-600 hover:to-fuchsia-700 text-white font-bold px-6 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 border-0"
            onClick={() => (window.location.href = "#booking")}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-amber-400" />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-amber-500/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.subLinks ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className={cn(
                          "text-white/80 hover:text-amber-400 transition-colors font-medium py-2 border-b border-white/10 flex justify-between items-center",
                          activeDropdown === link.label && "text-amber-400",
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "ml-1 h-4 w-4 transition-transform duration-200",
                            activeDropdown === link.label && "rotate-180",
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-1 py-2 bg-amber-900/20 rounded-md my-1"
                          >
                            {link.subLinks.map((subLink, subIdx) => (
                              <a
                                key={subIdx}
                                href={subLink.href}
                                className="block py-2 text-sm text-white/70 hover:text-amber-400 transition-colors"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setMobileMenuOpen(false);
                                }}
                              >
                                {subLink.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-amber-400 transition-colors font-medium py-2 border-b border-white/10 block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              <Button
                className="bg-gradient-to-r from-amber-500 to-fuchsia-600 hover:from-amber-600 hover:to-fuchsia-700 text-white font-bold w-full mt-4 shadow-lg shadow-amber-500/20 border-0"
                onClick={() => {
                  window.location.href = "#booking";
                  setMobileMenuOpen(false);
                }}
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
