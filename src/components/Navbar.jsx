import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import { contactInfo } from '../data/content';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Close mobile drawer on route change
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
  }

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses' },
    { label: 'Jobs in India', path: '/jobs-in-india' },
    { label: 'Student Visa', path: '/student-visa' },
    { label: 'Work in Japan', path: '/work-in-japan' },
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-2xs transition-all w-full">
      <nav className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Logo / School Brand */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 mr-2 lg:mr-4 xl:mr-8 group">
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl overflow-hidden border border-slate-200 shadow-2xs flex items-center justify-center bg-white shrink-0 group-hover:border-red-500 transition-all p-0.5">
              <img
                src="/images/indojapanlogo.jpeg"
                alt="IndoJapan Japanese Language School Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg lg:text-[17px] xl:text-[18.5px] font-black tracking-tight text-slate-900 group-hover:text-red-600 transition-colors whitespace-nowrap">
                IndoJapan <span className="text-red-600">Japanese Language School</span>
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wide whitespace-nowrap flex items-center gap-1.5">
                <span className="text-red-600 font-bold">インド日本学園</span>
                <span className="text-slate-300">•</span>
                <span>Jalandhar Head Office</span>
              </span>
            </div>
          </Link>

          {/* 2. Desktop Navigation Links (Direct click button for core sections) */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-3 2xl:gap-4 text-[14px] xl:text-[15px] 2xl:text-[16px] font-bold text-slate-800 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 xl:px-3 py-1.5 transition-colors whitespace-nowrap relative ${
                  isActive(link.path)
                    ? 'text-red-600 font-black'
                    : 'text-slate-800 hover:text-red-600'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-2.5 left-0 right-0 h-0.5 bg-red-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* 3. Right Action: Bold Red Contact Button */}
          <div className="hidden lg:flex items-center shrink-0 ml-2 xl:ml-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl text-sm xl:text-[15px] font-black text-white bg-red-600 hover:bg-red-700 shadow-sm hover:shadow-md transition-all whitespace-nowrap flex items-center gap-1.5 group cursor-pointer"
            >
              <Phone className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile / Tablet Menu & Call Toggle */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={`tel:${contactInfo.indiaPhone}`}
              className="p-2 sm:p-2.5 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center gap-1 text-xs font-bold shrink-0"
              title="Call India Office"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors border border-slate-200 shrink-0 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer (Direct link buttons for all 7 sections) */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100 space-y-2 bg-white">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-bold flex items-center justify-between transition-colors ${
                    isActive(link.path)
                      ? 'bg-red-50 text-red-700 font-black'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl text-base font-black bg-red-600 text-white flex items-center justify-between shadow-sm"
              >
                <span>Contact Us (Office & Phone)</span>
                <ChevronRight className="w-4 h-4 text-white/80" />
              </Link>
            </div>

            {/* Mobile Contact Information */}
            <div className="pt-3 border-t border-slate-100 mt-3 space-y-2 px-2">
              <div className="p-3.5 rounded-2xl bg-slate-900 text-white space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Founder & CEO</span>
                  <span className="text-xs font-black text-red-400">{contactInfo.founder}</span>
                </div>
                
                <div className="space-y-1.5 text-xs">
                  <a
                    href={`tel:${contactInfo.indiaPhone}`}
                    className="flex items-center justify-between text-slate-200 hover:text-white"
                  >
                    <span className="text-slate-400">India Contact:</span>
                    <strong className="font-bold text-white">{contactInfo.indiaPhone}</strong>
                  </a>

                  <a
                    href={contactInfo.japanWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-slate-200 hover:text-white"
                  >
                    <span className="text-slate-400">Japan (WhatsApp):</span>
                    <strong className="font-bold text-white">{contactInfo.japanPhone}</strong>
                  </a>
                </div>
              </div>

              <p className="text-xs text-center text-slate-500 font-medium">
                {contactInfo.address.full}
              </p>
            </div>

          </div>
        )}
      </nav>
    </header>
  );
};
