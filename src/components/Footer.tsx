import React from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black/70 backdrop-blur-md border-t border-orange-500/20 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-orange-500">Insta Car Spa</h3>
          <p className="text-gray-300">
            Montreal's Premier In-Building Car Detailing Service
          </p>
          <div className="flex items-center space-x-2 text-gray-300">
            <MapPin size={18} className="text-orange-500" />
            <span>Montreal, Quebec</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <Phone size={18} className="text-orange-500" />
            <span>(514) 555-1234</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <Mail size={18} className="text-orange-500" />
            <span>info@instacarspamtl.com</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-orange-500">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Service Hours */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-orange-500">Service Hours</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex justify-between">
              <span>Monday - Friday:</span>
              <span>8:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday:</span>
              <span>9:00 AM - 5:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday:</span>
              <span>10:00 AM - 4:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-orange-500">Newsletter</h3>
          <p className="text-gray-300">
            Subscribe to receive special offers and updates
          </p>
          <div className="flex flex-col space-y-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border-orange-500/30 focus:border-orange-500 text-white placeholder:text-gray-400"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Subscribe
            </Button>
          </div>
          <div className="flex space-x-4 pt-2">
            <a
              href="#"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-orange-500/20 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Insta Car Spa. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#" className="hover:text-orange-500 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
