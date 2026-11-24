import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Globe
} from 'lucide-react';
import { YoutubeIcon, FacebookIcon, InstagramIcon } from './SocialIcons';
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
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-white border border-slate-800 flex items-center justify-center shadow-xs p-1">
                <img
                  src="/images/indojapanlogo.jpeg"
                  alt="IndoJapan Japanese Language School Logo"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div>
                <span className="text-base sm:text-lg font-black text-white tracking-tight block">
                  IndoJapan <span className="text-red-500">Japanese Language School</span>
                </span>
                <span className="text-xs text-red-400 font-bold uppercase tracking-wider block">
                  {contactInfo.headOffice}
                </span>
              </div>
            </div>

            <p className="text-[14.5px] sm:text-[15px] text-slate-300 leading-relaxed font-normal">
              IndoJapan Japanese Language School provides structured Japanese language education (<strong className="text-slate-100 font-bold">JLPT N5 to N1</strong>), study abroad coaching, and Japan student visa (<strong className="text-slate-100 font-bold">COE</strong>) support for students across Punjab and India.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider block">Founder & CEO</span>
              <strong className="text-white font-extrabold text-base block">{contactInfo.founder}</strong>
              <span className="text-xs sm:text-sm text-red-400 font-semibold">{contactInfo.domain}</span>
            </div>
          </div>

          {/* Column 2: The Required Sections / Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[15px] sm:text-base font-black text-white uppercase tracking-wider border-l-4 border-red-500 pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-[14.5px] sm:text-[15px] text-slate-300 font-medium">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span> Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span> Courses (JLPT N5 to N1)
                </Link>
              </li>
              <li>
                <Link to="/jobs-in-india" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span> Jobs in India (Japanese MNCs)
                </Link>
              </li>
              <li>
                <Link to="/student-visa" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span> Student Visa (Study in Japan)
                </Link>
              </li>
              <li>
                <Link to="/work-in-japan" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span> Work in Japan (SSW & TITP)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span> Gallery (Approved COEs & Visas)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Media Channels */}
          <div className="space-y-4">
            <h4 className="text-[15px] sm:text-base font-black text-white uppercase tracking-wider border-l-4 border-red-500 pl-3">
              Connect With Us
            </h4>
            
            <div className="space-y-3">
              {/* Instagram Channel (Top Priority) */}
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-pink-500 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <InstagramIcon className="w-5 h-5 text-white" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-pink-400 block font-bold uppercase tracking-wider">Instagram (Official)</span>
                  <span className="text-sm font-bold text-white group-hover:text-pink-300 truncate block">
                    {contactInfo.instagramHandle}
                  </span>
                </div>
              </a>

              {/* YouTube Channel */}
              <a
                href={contactInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-red-600 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                  <YoutubeIcon className="w-5 h-5 text-white" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-slate-400 block font-bold">YouTube Channel</span>
                  <span className="text-sm font-bold text-white group-hover:text-red-400 truncate block">
                    @INDO-JAPANJALANDHAR
                  </span>
                </div>
              </a>

              {/* Facebook Page */}
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-600 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <FacebookIcon className="w-5 h-5 text-white" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-slate-400 block font-bold">Facebook Page</span>
                  <span className="text-sm font-bold text-white group-hover:text-blue-400 truncate block">
                    INDO-JAPAN Jalandhar
                  </span>
                </div>
              </a>

              {/* WhatsApp Direct */}
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-600 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.067-1.112-.067-.282-.09-.64-.22-1.107-.42-1.954-.84-3.224-2.813-3.321-2.943-.098-.13-.795-1.057-.795-2.016 0-.958.503-1.428.683-1.622.18-.194.393-.243.524-.243.131 0 .262.001.376.007.121.006.284-.046.444.339.163.393.555 1.353.604 1.452.049.098.082.213.016.344-.065.131-.098.213-.196.328-.098.115-.207.256-.296.344-.1.098-.204.204-.088.403.116.199.516.852 1.107 1.378.76.678 1.401.888 1.6.987.199.098.315.082.431-.049.116-.131.498-.58.63-.78.131-.199.262-.164.441-.098.18.066 1.139.537 1.335.635.196.098.327.147.376.229.049.082.049.475-.095.88z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.442 5.176L2 22l4.981-1.398A9.954 9.954 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.063c-1.637 0-3.153-.482-4.428-1.312l-.317-.208-2.964.832.842-2.884-.229-.333A8.04 8.04 0 0 1 3.938 12c0-4.446 3.617-8.063 8.062-8.063 4.446 0 8.063 3.617 8.063 8.063 0 4.445-3.617 8.063-8.063 8.063z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-slate-400 block font-bold">Direct WhatsApp</span>
                  <span className="text-sm font-bold text-white group-hover:text-emerald-400 truncate block">
                    {contactInfo.indiaPhone}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 4: Contact & Office Details (India & Japan) */}
          <div className="space-y-4">
            <h4 className="text-[15px] sm:text-base font-black text-white uppercase tracking-wider border-l-4 border-red-500 pl-3">
              Office Locations & Contact
            </h4>
            
            <div className="space-y-3.5 text-sm">
              {/* India Phone */}
              <a
                href={`tel:${contactInfo.indiaPhone}`}
                className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 uppercase font-bold block">India Helpline</span>
                  <strong className="text-white font-extrabold text-base sm:text-lg group-hover:text-red-400 transition-colors font-mono">
                    {contactInfo.indiaPhone}
                  </strong>
                </div>
              </a>

              {/* Head Office Address (Jalandhar) */}
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 uppercase font-bold block">Jalandhar Head Office</span>
                  <span className="text-slate-200 text-sm sm:text-[14.5px] leading-snug block">{contactInfo.address.full}</span>
                </div>
              </div>

              {/* Japan Fukuoka Office Address */}
              <div className="flex items-start gap-3 text-slate-400 pt-1 border-t border-slate-900">
                <Globe className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-sky-400 uppercase font-bold block">
                    福岡営業所 (Fukuoka Office, Japan)
                  </span>
                  <span className="text-slate-200 text-sm sm:text-[14.5px] font-japanese leading-snug block mt-0.5">
                    {contactInfo.japanOffice.address}
                  </span>
                  <a
                    href={contactInfo.japanOffice.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1 mt-1 font-bold"
                  >
                    <span>Tel / WhatsApp: {contactInfo.japanOffice.phone}</span>
                  </a>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="flex items-start gap-3 text-slate-400 pt-1">
                <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-300">
                  <span className="text-xs text-slate-400 uppercase font-bold block">Office Timings</span>
                  <span>Mon – Sat: 9:00 AM – 6:00 PM<br /><span className="text-red-400 font-semibold">Sunday: Off / Closed</span></span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Factual Disclaimer Banner */}
        <div className="py-6 border-b border-slate-800 text-xs sm:text-[13px] text-slate-400 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-200 text-sm">
            <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
            <span>Compliance & Official Transparency Notice</span>
          </div>
          <p>
            {contactInfo.name} ({contactInfo.domain}) is an educational training and language consultancy based in Jalandhar, Punjab, India. We provide accurate Japanese language instruction (JLPT N5–N1) and study visa dossier guidance. We do not claim official government affiliation, nor do we promise guaranteed Certificate of Eligibility (COE) or visa approvals. Final admissions and student visa decisions rest exclusively with the designated Japanese language institutes and the Immigration Services Agency of Japan.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-400">
          <p>
            © 2026 {contactInfo.name}. All rights reserved. {contactInfo.headOffice}.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm flex-wrap font-medium">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <span>•</span>
            <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
            <span>•</span>
            <Link to="/jobs-in-india" className="hover:text-white transition-colors">Jobs in India</Link>
            <span>•</span>
            <Link to="/student-visa" className="hover:text-white transition-colors">Student Visa</Link>
            <span>•</span>
            <Link to="/work-in-japan" className="hover:text-white transition-colors">Work in Japan</Link>
            <span>•</span>
            <Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
