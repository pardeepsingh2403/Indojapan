import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Train, 
  Globe,
  UserCheck
} from 'lucide-react';
import { YoutubeIcon, FacebookIcon, InstagramIcon } from '../components/SocialIcons';
import { SEOHead } from '../components/SEOHead';
import { contactInfo } from '../data/content';

export const Contact = () => {
  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="Contact Us | IndoJapan Japanese Language School | Jalandhar & Fukuoka"
        description="Contact IndoJapan Japanese Language School in Jalandhar, Punjab and Fukuoka, Japan. Founder & CEO: NAVDEEP VIRK. India: 9478066275, Japan: +81 80 3932 1993. Website: www.indojapanjalandhar.com."
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              <span className="font-bold">お問い合わせ・アクセス</span>
              <span className="text-red-300">•</span>
              <span>{contactInfo.headOffice}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Contact IndoJapan <span className="text-red-600 block sm:inline">Japanese Language School</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Reach out directly to our Founder & CEO <strong>{contactInfo.founder}</strong> and advisory team in Jalandhar, Punjab, or our Fukuoka Office in Japan.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Official Contact Highlight Strip */}
      <section className="py-10 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Founder Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-lg">
                <UserCheck className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs sm:text-sm text-red-400 font-extrabold uppercase tracking-wider block">
                  Founder & CEO
                </span>
                <strong className="text-xl sm:text-2xl font-black text-white block">
                  {contactInfo.founder}
                </strong>
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Head of Operations & Leadership</span>
              </div>
            </div>

            {/* India Contact Number */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black shrink-0 shadow-lg">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs sm:text-sm text-emerald-400 font-extrabold uppercase tracking-wider block">
                  India Contact Number
                </span>
                <a
                  href={`tel:${contactInfo.indiaPhone}`}
                  className="text-xl sm:text-2xl font-black text-white hover:text-emerald-400 transition-colors block font-mono"
                >
                  {contactInfo.indiaPhone}
                </a>
                <span className="text-xs sm:text-sm text-slate-300 font-medium">{contactInfo.headOffice}</span>
              </div>
            </div>

            {/* Japan Fukuoka Office */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-black shrink-0 shadow-lg">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs sm:text-sm text-sky-400 font-extrabold uppercase tracking-wider block">
                  福岡営業所 • Fukuoka Office
                </span>
                <a
                  href={contactInfo.japanOffice.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl font-black text-white hover:text-sky-400 transition-colors block font-mono"
                  title="WhatsApp Call / Chat Fukuoka Japan Office"
                >
                  {contactInfo.japanPhone}
                </a>
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Japan Office & Student Support</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main 4 Contact Cards Grid */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* 1. India Phone Card */}
            <div className="p-7 rounded-3xl bg-[#fafbfc] border border-slate-200 shadow-2xs flex flex-col justify-between space-y-5">
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">India Contact</h3>
                <p className="text-sm text-slate-600 font-medium">
                  Direct helpline at Jalandhar Head Office:
                </p>
                <div className="space-y-2.5 pt-1">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold block">Primary Number</span>
                    <a
                      href={`tel:${contactInfo.indiaPhone}`}
                      className="font-black text-slate-900 hover:text-red-600 transition-colors text-xl sm:text-2xl font-mono block mt-0.5"
                    >
                      {contactInfo.indiaPhone}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold block">Office Hours</span>
                    <span className="text-sm font-bold text-slate-800">9:00 AM – 6:00 PM</span>
                  </div>
                </div>
              </div>
              <a
                href={`tel:${contactInfo.indiaPhone}`}
                className="w-full py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base text-center transition-colors shadow-xs"
              >
                Call India: {contactInfo.indiaPhone}
              </a>
            </div>

            {/* 2. Japan Fukuoka Office Card */}
            <div className="p-7 rounded-3xl bg-[#f0f9ff] border border-sky-200 shadow-2xs flex flex-col justify-between space-y-5">
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">Japan Office</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">福岡営業所 (Fukuoka Office)</h3>
                </div>
                <div className="space-y-2 pt-1 text-sm">
                  <div className="p-3 rounded-2xl bg-white border border-sky-200">
                    <span className="text-xs text-slate-500 uppercase font-bold block">Office Address</span>
                    <strong className="text-slate-900 font-japanese block text-sm sm:text-base mt-0.5">
                      〒812-0027 福岡市博多区下川端町10-6 THE J・Plusビル 5階B号室
                    </strong>
                    <span className="text-xs text-slate-600 block mt-0.5">
                      THE J-Plus Bldg 5F Room B, Hakata-ku, Fukuoka
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-sky-700 uppercase font-bold block">International Call / WhatsApp</span>
                    <a
                      href={contactInfo.japanOffice.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-black text-slate-900 hover:text-sky-600 transition-colors text-xl font-mono block mt-0.5"
                      title="WhatsApp Call / Chat"
                    >
                      {contactInfo.japanPhone}
                    </a>
                  </div>
                </div>
              </div>
              <a
                href={contactInfo.japanOffice.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm sm:text-base text-center transition-colors shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>WhatsApp Fukuoka Office</span>
              </a>
            </div>

            {/* 3. WhatsApp Direct Card */}
            <div className="p-7 rounded-3xl bg-[#f0fdf4] border border-emerald-200 shadow-2xs flex flex-col justify-between space-y-5">
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center font-bold shadow-xs">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.067-1.112-.067-.282-.09-.64-.22-1.107-.42-1.954-.84-3.224-2.813-3.321-2.943-.098-.13-.795-1.057-.795-2.016 0-.958.503-1.428.683-1.622.18-.194.393-.243.524-.243.131 0 .262.001.376.007.121.006.284-.046.444.339.163.393.555 1.353.604 1.452.049.098.082.213.016.344-.065.131-.098.213-.196.328-.098.115-.207.256-.296.344-.1.098-.204.204-.088.403.116.199.516.852 1.107 1.378.76.678 1.401.888 1.6.987.199.098.315.082.431-.049.116-.131.498-.58.63-.78.131-.199.262-.164.441-.098.18.066 1.139.537 1.335.635.196.098.327.147.376.229.049.082.049.475-.095.88z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.442 5.176L2 22l4.981-1.398A9.954 9.954 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.063c-1.637 0-3.153-.482-4.428-1.312l-.317-.208-2.964.832.842-2.884-.229-.333A8.04 8.04 0 0 1 3.938 12c0-4.446 3.617-8.063 8.062-8.063 4.446 0 8.063 3.617 8.063 8.063 0 4.445-3.617 8.063-8.063 8.063z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">WhatsApp Chat</h3>
                <p className="text-sm text-slate-600 font-medium">
                  Fast messaging for course and visa inquiries:
                </p>
                <div className="space-y-2 pt-1">
                  <div>
                    <span className="text-xs text-emerald-700 uppercase font-bold block">Direct WhatsApp</span>
                    <a
                      href={contactInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-black text-slate-900 hover:text-emerald-600 transition-colors text-xl sm:text-2xl font-mono block mt-0.5"
                    >
                      {contactInfo.indiaPhone}
                    </a>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 block">Instant response during business hours</span>
                </div>
              </div>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base text-center transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* 4. Head Office & Maps Card */}
            <div className="p-7 rounded-3xl bg-[#fafbfc] border border-slate-200 shadow-2xs flex flex-col justify-between space-y-5">
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Jalandhar Head Office</h3>
                <p className="text-sm text-slate-600 font-medium">
                  Visit our center for in-person consultation:
                </p>
                <div className="space-y-2 pt-1 text-sm">
                  <strong className="text-slate-900 font-black block text-base">
                    BMC CHOWK, Near Bus Stand
                  </strong>
                  <p className="text-slate-700 font-medium leading-relaxed">
                    Jalandhar, Punjab – 144001
                  </p>
                  <p className="text-xs font-mono text-slate-500">Domain: {contactInfo.domain}</p>
                </div>
              </div>
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base text-center transition-colors shadow-xs flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>

          {/* Social Channels Strip: Instagram Priority First, then YouTube & Facebook */}
          <div className="p-7 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 mb-16 shadow-lg border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs sm:text-sm text-pink-400 font-extrabold uppercase tracking-wider flex items-center justify-center md:justify-start gap-1.5">
                <span>Official Media Channels • SNS 公式チャンネル</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Connect With IndoJapan on Instagram, YouTube & Facebook
              </h3>
              <p className="text-base text-slate-300 font-normal">
                Follow our official social pages for visa updates, classroom lectures, COE grant celebrations, and student life in Japan.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              {/* Instagram Button (Highest Priority) */}
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white text-sm sm:text-base font-black flex items-center gap-2.5 shadow-md transition-all scale-100 hover:scale-102"
              >
                <InstagramIcon className="w-5 h-5 text-white" />
                <span>Instagram ({contactInfo.instagramHandle})</span>
              </a>

              {/* YouTube Button */}
              <a
                href={contactInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-bold flex items-center gap-2 shadow-xs transition-all"
              >
                <YoutubeIcon className="w-5 h-5 text-white" />
                <span>YouTube</span>
              </a>

              {/* Facebook Button */}
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-bold flex items-center gap-2 shadow-xs transition-all"
              >
                <FacebookIcon className="w-5 h-5 text-white" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Visiting Hours & Directions */}
          <div className="bg-[#fafbfc] rounded-3xl border border-slate-200 p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <Clock className="w-6 h-6 text-red-600" />
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Visiting Hours at Head Office</h3>
              </div>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Founder & CEO {contactInfo.founder} and language counselors are available during the following schedule:
              </p>
              <div className="space-y-3 text-base">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200">
                  <span className="font-semibold text-slate-700">Monday to Saturday:</span>
                  <strong className="text-slate-900 font-mono font-bold text-lg">9:00 AM – 6:00 PM</strong>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200">
                  <span className="font-semibold text-slate-700">Sunday:</span>
                  <span className="text-red-600 font-extrabold uppercase text-sm tracking-wider">Off / Closed</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <Train className="w-6 h-6 text-red-600" />
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  How to Reach Us in Jalandhar (アクセス案内)
                </h3>
              </div>
              <ul className="space-y-3.5 text-base text-slate-700 leading-relaxed font-normal">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>From Shaheed Bhagat Singh ISBT (Main Bus Stand):</strong> Located right at <strong>BMC Chowk, Near Bus Stand</strong> — just a short <strong>2 to 3 minutes walk (approx. 200–300 meters)</strong> from the main bus terminal exit.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>From Jalandhar City Railway Station:</strong> Approximately <strong>2.5 km (around 8–10 mins)</strong> via auto-rickshaw or e-rickshaw straight to BMC Chowk.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>From Jalandhar Cantt Railway Station:</strong> Approximately <strong>4.5 km (around 10–12 mins)</strong> via GT Road directly into BMC Chowk.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>From Ludhiana, Phagwara, Amritsar & Across Punjab:</strong> Direct highway access via Grand Trunk Road (GT Road / NH-44) arriving straight into BMC Chowk, Near Bus Stand.
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Clear Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-normal">
              Direct answers regarding counseling at IndoJapan Japanese Language School.
            </p>
          </div>

          <div className="space-y-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-lg sm:text-xl font-black text-slate-900">Who will assess my study in Japan application?</h4>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                All student applications and eligibility evaluations are personally reviewed by Founder & CEO <strong>{contactInfo.founder}</strong> alongside certified Japanese language senseis at our Jalandhar Head Office.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-lg sm:text-xl font-black text-slate-900">Can students outside Jalandhar get telephonic guidance?</h4>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Yes. You can call our India contact number <strong>{contactInfo.indiaPhone}</strong> or send your academic documents on WhatsApp for a preliminary course and visa eligibility assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
