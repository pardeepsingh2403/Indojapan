import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import { contactInfo } from '../data/content';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 6 primary navigation destinations (Contact Us is the prominent right action button)
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Japanese Language', path: '/japanese-language' },
    { label: 'Study in Japan', path: '/study-in-japan' },
    { label: 'Student Visa', path: '/japan-student-visa' },
    { label: 'Success Gallery', path: '/gallery' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-2xs transition-all w-full">
      <nav className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Logo / Brand (shrink-0 guarantees it NEVER gets crushed or overlapped) */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 mr-3 lg:mr-6 xl:mr-10 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs flex items-center justify-center group-hover:border-red-500 group-hover:bg-red-50/40 transition-all shrink-0">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-[10px] sm:text-xs font-black shadow-xs">
                日
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[15px] sm:text-lg lg:text-[17px] xl:text-xl font-black tracking-tight text-slate-900 group-hover:text-red-600 transition-colors whitespace-nowrap">
                Indo Japan <span className="text-red-600">Language School</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wide whitespace-nowrap">
                <span className="sm:hidden">Jalandhar, Punjab</span>
                <span className="hidden sm:inline">Jalandhar, Punjab • Japanese Education & Visa</span>
              </span>
            </div>
          </Link>

          {/* 2. Desktop Navigation Links (Properly proportional for 1024px laptops and 1440px desktops) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-5 2xl:gap-6 text-[13px] xl:text-[14.5px] 2xl:text-[15px] font-bold text-slate-800 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-1.5 xl:px-2 py-1.5 transition-colors whitespace-nowrap relative ${
                  isActive(link.path)
                    ? 'text-red-600 font-black'
                    : 'text-slate-800 hover:text-red-600'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-red-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* 3. Right Action: Bold Red Contact Button */}
          <div className="hidden lg:flex items-center shrink-0 ml-3 xl:ml-6">
            <Link
              to="/contact"
              className="px-3.5 py-2 xl:px-5 xl:py-2.5 rounded-xl text-xs xl:text-sm font-black text-white bg-red-600 hover:bg-red-700 shadow-sm hover:shadow-md transition-all whitespace-nowrap flex items-center gap-1.5 xl:gap-2 group cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white group-hover:rotate-12 transition-transform" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile / Tablet Menu & Call Toggle */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
              className="p-2 sm:p-2.5 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center gap-1 text-xs font-bold shrink-0"
              title="Call Indo Japan Language School"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors border border-slate-200 shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
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
                className="mt-2 px-4 py-3.5 rounded-xl text-base font-black bg-red-600 text-white flex items-center justify-between shadow-sm"
              >
                <span>Contact Us (Office & Phone)</span>
                <ChevronRight className="w-5 h-5 text-white/80" />
              </Link>
            </div>

            {/* Mobile Contact Information Box */}
            <div className="pt-3 border-t border-slate-100 mt-2 space-y-2 px-2">
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                className="w-full py-3 px-4 rounded-xl bg-slate-950 text-white font-bold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call {contactInfo.phoneDisplay}</span>
              </a>
              <p className="text-xs text-center text-slate-500 font-medium">
                SCO 14, Civil Lines, Near BMC Chowk, Jalandhar, Punjab
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
