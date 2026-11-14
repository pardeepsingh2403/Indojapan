import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../data/content';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800 text-sm">
          
          {/* Column 1: School Identity & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-white font-bold shadow-xs">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold">
                  日
                </span>
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight block">
                  Indo Japan <span className="text-red-500">Language School</span>
                </span>
                <span className="text-xs text-red-400 font-bold uppercase tracking-wider block">
                  Jalandhar, Punjab
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Indo Japan Language School provides structured Japanese language education (<strong className="text-slate-200">JLPT N5 to N1</strong>), Japanese language school admission guidance, and Japan student visa (<strong className="text-slate-200">COE</strong>) support for students across Jalandhar and Punjab.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <span className="font-bold text-slate-300 block uppercase tracking-wider">Serving Students In:</span>
              <p className="text-xs text-slate-400 font-medium">{contactInfo.serviceAreas}</p>
            </div>
          </div>

          {/* Column 2: Japanese Language Tracks */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-black text-white uppercase tracking-wider border-l-3 border-red-500 pl-2.5">
              Japanese Language
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/japanese-language" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-500 font-bold">N5:</span> Basic Japanese (150 Hours)
                </Link>
              </li>
              <li>
                <Link to="/japanese-language" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-500 font-bold">N4:</span> Elementary Japanese
                </Link>
              </li>
              <li>
                <Link to="/japanese-language" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-500 font-bold">N3:</span> Intermediate Bridge
                </Link>
              </li>
              <li>
                <Link to="/japanese-language" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-500 font-bold">N2:</span> Upper Intermediate Benchmark
                </Link>
              </li>
              <li>
                <Link to="/japanese-language" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-500 font-bold">N1:</span> Advanced Mastery
                </Link>
              </li>
              <li>
                <Link to="/japanese-language" className="hover:text-white transition-colors text-xs text-slate-500 pt-1 block">
                  Hiragana, Katakana & Kanji Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Study in Japan & Visa Navigation */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-black text-white uppercase tracking-wider border-l-3 border-red-500 pl-2.5">
              Study in Japan & Visa
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/study-in-japan" className="hover:text-white transition-colors">
                  Language School Pathway
                </Link>
              </li>
              <li>
                <Link to="/study-in-japan" className="hover:text-white transition-colors">
                  8-Step Application Process
                </Link>
              </li>
              <li>
                <Link to="/japan-student-visa" className="hover:text-white transition-colors">
                  Certificate of Eligibility (COE)
                </Link>
              </li>
              <li>
                <Link to="/japan-student-visa" className="hover:text-white transition-colors">
                  Financial Sponsorship Guidelines
                </Link>
              </li>
              <li>
                <Link to="/study-in-japan#intakes" className="hover:text-white transition-colors">
                  Admission Intakes (April & Oct)
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Student Success & Visa Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Details */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-black text-white uppercase tracking-wider border-l-3 border-red-500 pl-2.5">
              Office & Contact
            </h4>
            
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-start gap-2.5 text-slate-300 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold block">Mobile Helpline</span>
                  <strong className="text-white font-extrabold text-base group-hover:text-red-400 transition-colors">{contactInfo.phoneDisplay}</strong>
                </div>
              </a>

              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.067-1.112-.067-.282-.09-.64-.22-1.107-.42-1.954-.84-3.224-2.813-3.321-2.943-.098-.13-.795-1.057-.795-2.016 0-.958.503-1.428.683-1.622.18-.194.393-.243.524-.243.131 0 .262.001.376.007.121.006.284-.046.444.339.163.393.555 1.353.604 1.452.049.098.082.213.016.344-.065.131-.098.213-.196.328-.098.115-.207.256-.296.344-.1.098-.204.204-.088.403.116.199.516.852 1.107 1.378.76.678 1.401.888 1.6.987.199.098.315.082.431-.049.116-.131.498-.58.63-.78.131-.199.262-.164.441-.098.18.066 1.139.537 1.335.635.196.098.327.147.376.229.049.082.049.475-.095.88z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.442 5.176L2 22l4.981-1.398A9.954 9.954 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.063c-1.637 0-3.153-.482-4.428-1.312l-.317-.208-2.964.832.842-2.884-.229-.333A8.04 8.04 0 0 1 3.938 12c0-4.446 3.617-8.063 8.062-8.063 4.446 0 8.063 3.617 8.063 8.063 0 4.445-3.617 8.063-8.063 8.063z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold block">Direct WhatsApp</span>
                  <span className="text-emerald-400 font-bold group-hover:text-emerald-300 transition-colors">Chat on WhatsApp</span>
                </div>
              </a>

              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold block">Instagram</span>
                  <span className="text-pink-400 font-bold group-hover:text-pink-300 transition-colors">@indojapanlanguageschool</span>
                </div>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-2.5 text-slate-300 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold block">Official Email</span>
                  <span className="text-slate-200 font-medium break-all">{contactInfo.email}</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold block">Jalandhar Center</span>
                  <span className="text-slate-300 text-xs sm:text-sm">{contactInfo.address.full}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400 pt-1">
                <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <span className="text-[11px] text-slate-500 uppercase font-bold block">Visiting Hours</span>
                  <span>Mon – Fri: 9:00 AM – 6:00 PM<br />Sat: 9:30 AM – 3:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Factual Disclaimer Banner */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-200">
            <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
            <span>Official Information & Compliance Notice</span>
          </div>
          <p>
            Indo Japan Language School is an educational training and guidance consultancy based in Jalandhar, Punjab. We provide accurate information regarding Japanese language study, language institute selection, and documentation procedures. We do not claim official government affiliation, nor do we promise guaranteed Certificate of Eligibility (COE) or visa approvals. Final admissions and student visa decisions rest exclusively with the designated Japanese language institutions and the Immigration Services Agency of Japan.
          </p>
        </div>

        {/* Bottom Copyright & Local SEO Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {contactInfo.name}. All rights reserved. Jalandhar, Punjab, India.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/about" className="hover:text-slate-300 transition-colors">About Institute</Link>
            <span>•</span>
            <Link to="/gallery" className="hover:text-slate-300 transition-colors">Success Gallery</Link>
            <span>•</span>
            <Link to="/japan-student-visa" className="hover:text-slate-300 transition-colors">Visa Guidelines</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Visit Jalandhar Office</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
