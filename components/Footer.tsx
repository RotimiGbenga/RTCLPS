import React from 'react';
import { FacebookIcon } from './icons/FacebookIcon';
import { XIcon } from './icons/XIcon';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-orange-600 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Logo and brief sentence */}
          <div>
            <h3 className="text-xl font-bold mb-4">TCL Professional Services</h3>
            <p className="text-orange-100 text-sm">
              Expert Auditing, Book-keeping, and Business Software Solutions to streamline your operations.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#/home" className="hover:text-orange-200 transition-colors">Home</a></li>
              <li><a href="#/about" className="hover:text-orange-200 transition-colors">About Us</a></li>
              <li><a href="#/services" className="hover:text-orange-200 transition-colors">Services</a></li>
              <li><a href="#/contact" className="hover:text-orange-200 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Details and Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <address className="space-y-2 text-orange-100 not-italic text-sm">
              <p>11, Agard Street, Sabo, Yaba, Lagos</p>
              <p>
                <a href="mailto:odunsi@tclprofessionals.com" className="hover:text-orange-200 transition-colors">
                  odunsi@tclprofessionals.com
                </a>
              </p>
              <p>
                <a href="tel:+2348023268296" className="hover:text-orange-200 transition-colors">
                  WhatsApp: +2348023268296
                </a>
              </p>
               <p>
                <a href="tel:+2349091349207" className="hover:text-orange-200 transition-colors">
                  Call: +2349091349207
                </a>
              </p>
            </address>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-orange-200 transition-colors">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" aria-label="X (formerly Twitter)" className="hover:text-orange-200 transition-colors">
                <XIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-orange-700 pt-6 text-center text-orange-200 text-sm">
          <p>&copy; {new Date().getFullYear()} TCL Professional Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;