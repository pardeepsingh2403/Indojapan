import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { contactInfo } from '../data/content';

export const FloatingActions = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-none select-none">
      
      {/* 1. Floating Google Maps Button */}
      <div className="relative flex items-center pointer-events-auto">
        {/* Tooltip / Label */}
        <div
          className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 mr-2 rounded-xl bg-slate-900/95 text-white text-xs font-bold shadow-lg backdrop-blur-xs whitespace-nowrap transition-all duration-200 ${
            hoveredButton === 'maps' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          <MapPin className="w-3.5 h-3.5 text-red-400" />
          <span>Head Office on Google Maps</span>
        </div>

        <a
          href={contactInfo.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton('maps')}
          onMouseLeave={() => setHoveredButton(null)}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white text-slate-800 hover:text-red-600 border-2 border-red-500 shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-red-400/40"
          title="Locate IndoJapan Head Office on Google Maps"
          aria-label="Locate IndoJapan Head Office on Google Maps"
        >
          <div className="relative flex items-center justify-center">
            {/* Multi-color Google Maps-style Pin or High-Contrast Brand Pin */}
            <svg className="w-7 h-7 sm:w-7.5 sm:h-7.5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                fill="#EA4335"
              />
              <circle cx="12" cy="9" r="3" fill="#FFFFFF" />
            </svg>
          </div>
        </a>
      </div>

      {/* 2. Floating WhatsApp Button */}
      <div className="relative flex items-center pointer-events-auto">
        {/* Tooltip / Label */}
        <div
          className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 mr-2 rounded-xl bg-slate-900/95 text-white text-xs font-bold shadow-lg backdrop-blur-xs whitespace-nowrap transition-all duration-200 ${
            hoveredButton === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>WhatsApp Us ({contactInfo.indiaPhone})</span>
        </div>

        <a
          href={contactInfo.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton('whatsapp')}
          onMouseLeave={() => setHoveredButton(null)}
          className="relative w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
          title="Chat directly on WhatsApp with IndoJapan Japanese Language School"
          aria-label="Chat directly on WhatsApp with IndoJapan Japanese Language School"
        >
          {/* Subtle pulse animation ping ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>

          <svg className="w-8 h-8 sm:w-8.5 sm:h-8.5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.067-1.112-.067-.282-.09-.64-.22-1.107-.42-1.954-.84-3.224-2.813-3.321-2.943-.098-.13-.795-1.057-.795-2.016 0-.958.503-1.428.683-1.622.18-.194.393-.243.524-.243.131 0 .262.001.376.007.121.006.284-.046.444.339.163.393.555 1.353.604 1.452.049.098.082.213.016.344-.065.131-.098.213-.196.328-.098.115-.207.256-.296.344-.1.098-.204.204-.088.403.116.199.516.852 1.107 1.378.76.678 1.401.888 1.6.987.199.098.315.082.431-.049.116-.131.498-.58.63-.78.131-.199.262-.164.441-.098.18.066 1.139.537 1.335.635.196.098.327.147.376.229.049.082.049.475-.095.88z" />
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.442 5.176L2 22l4.981-1.398A9.954 9.954 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.063c-1.637 0-3.153-.482-4.428-1.312l-.317-.208-2.964.832.842-2.884-.229-.333A8.04 8.04 0 0 1 3.938 12c0-4.446 3.617-8.063 8.062-8.063 4.446 0 8.063 3.617 8.063 8.063 0 4.445-3.617 8.063-8.063 8.063z" />
          </svg>
        </a>
      </div>

    </div>
  );
};
