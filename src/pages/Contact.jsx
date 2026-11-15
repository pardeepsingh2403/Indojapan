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
import { YoutubeIcon, FacebookIcon } from '../components/SocialIcons';
import { SEOHead } from '../components/SEOHead';
import { contactInfo } from '../data/content';

export const Contact = () => {
  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="Contact Us | IndoJapan Japanese Language School | Jalandhar"
        description="Contact IndoJapan Japanese Language School in Jalandhar, Punjab. Founder: NAVDEEP SINGH VIRK. India: 9478066275, Japan: +81 80 3932 1993. Website: www.indojapanjalandhar.com."
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
              <span>{contactInfo.headOffice}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Contact IndoJapan Japanese Language School
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Reach out directly to our Founder <strong>{contactInfo.founder}</strong> and advisory team in Jalandhar, Punjab, or our liaison desk in Japan.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Official Contact Highlight Strip */}
      <section className="py-8 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Founder Card */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-xl shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider block">
                  Owner / Founder
                </span>
                <strong className="text-lg font-black text-white block">
                  {contactInfo.founder}
                </strong>
                <span className="text-xs text-slate-400">Head of Operations & Admissions</span>
              </div>
            </div>

            {/* India Contact Number */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
                  India Contact Number
                </span>
                <a
                  href={`tel:${contactInfo.indiaPhone}`}
                  className="text-lg font-black text-white hover:text-emerald-400 transition-colors block"
                >
                  {contactInfo.indiaPhone}
                </a>
                <span className="text-xs text-slate-400">{contactInfo.headOffice}</span>
              </div>
            </div>

            {/* Japan Contact Number */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider block">
                  Japan Contact Number
                </span>
                <a
                  href={`tel:${contactInfo.japanPhone.replace(/[\s+]/g, '')}`}
                  className="text-lg font-black text-white hover:text-blue-400 transition-colors block"
                >
                  {contactInfo.japanPhone}
                </a>
                <span className="text-xs text-slate-400">Japan Liaison Support</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main 4 Contact Cards Grid */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* 1. India Phone Card */}
            <div className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">India Contact</h3>
                <p className="text-xs text-slate-500">
                  Direct helpline at Jalandhar Head Office:
                </p>
                <div className="space-y-2 pt-1 text-sm">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Primary Number</span>
                    <a
                      href={`tel:${contactInfo.indiaPhone}`}
                      className="font-extrabold text-slate-900 hover:text-red-600 transition-colors text-lg"
                    >
                      {contactInfo.indiaPhone}
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Office Hours</span>
                    <span className="text-xs font-semibold text-slate-700">9:00 AM – 6:00 PM</span>
                  </div>
                </div>
              </div>
              <a
                href={`tel:${contactInfo.indiaPhone}`}
                className="w-full py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs text-center transition-colors shadow-xs"
              >
                Call India: {contactInfo.indiaPhone}
              </a>
            </div>

            {/* 2. Japan Contact Card */}
            <div className="p-6 rounded-2xl bg-[#f0f9ff] border border-sky-200 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Japan Contact</h3>
                <p className="text-xs text-slate-600">
                  Overseas assistance & student support in Japan:
                </p>
                <div className="space-y-2 pt-1 text-sm">
                  <div>
                    <span className="text-[10px] text-sky-700 uppercase font-bold block">International Desk</span>
                    <a
                      href={`tel:${contactInfo.japanPhone.replace(/[\s+]/g, '')}`}
                      className="font-extrabold text-slate-900 hover:text-sky-600 transition-colors text-lg"
                    >
                      {contactInfo.japanPhone}
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Location</span>
                    <span className="text-xs font-semibold text-slate-700">Tokyo / Japan Coordination</span>
                  </div>
                </div>
              </div>
              <a
                href={`tel:${contactInfo.japanPhone.replace(/[\s+]/g, '')}`}
                className="w-full py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs text-center transition-colors shadow-xs"
              >
                Call Japan Desk
              </a>
            </div>

            {/* 3. WhatsApp Direct Card */}
            <div className="p-6 rounded-2xl bg-[#f0fdf4] border border-emerald-200 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center font-bold shadow-xs">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.067-1.112-.067-.282-.09-.64-.22-1.107-.42-1.954-.84-3.224-2.813-3.321-2.943-.098-.13-.795-1.057-.795-2.016 0-.958.503-1.428.683-1.622.18-.194.393-.243.524-.243.131 0 .262.001.376.007.121.006.284-.046.444.339.163.393.555 1.353.604 1.452.049.098.082.213.016.344-.065.131-.098.213-.196.328-.098.115-.207.256-.296.344-.1.098-.204.204-.088.403.116.199.516.852 1.107 1.378.76.678 1.401.888 1.6.987.199.098.315.082.431-.049.116-.131.498-.58.63-.78.131-.199.262-.164.441-.098.18.066 1.139.537 1.335.635.196.098.327.147.376.229.049.082.049.475-.095.88z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.442 5.176L2 22l4.981-1.398A9.954 9.954 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.063c-1.637 0-3.153-.482-4.428-1.312l-.317-.208-2.964.832.842-2.884-.229-.333A8.04 8.04 0 0 1 3.938 12c0-4.446 3.617-8.063 8.062-8.063 4.446 0 8.063 3.617 8.063 8.063 0 4.445-3.617 8.063-8.063 8.063z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">WhatsApp Chat</h3>
                <p className="text-xs text-slate-600">
                  Fast messaging for admission and syllabus questions:
                </p>
                <div className="space-y-1 pt-1 text-sm">
                  <span className="text-[10px] text-emerald-700 uppercase font-bold block">Direct WhatsApp</span>
                  <a
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-extrabold text-slate-900 hover:text-emerald-600 transition-colors text-lg"
                  >
                    {contactInfo.indiaPhone}
                  </a>
                  <span className="text-[11px] text-slate-500 block">Instant response during business hours</span>
                </div>
              </div>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* 4. Head Office & Maps Card */}
            <div className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Jalandhar Head Office</h3>
                <p className="text-xs text-slate-500">
                  Visit our center for in-person consultation:
                </p>
                <div className="space-y-1.5 pt-1 text-xs">
                  <strong className="text-slate-900 font-bold block">
                    SCO 14, 2nd Floor, Civil Lines
                  </strong>
                  <p className="text-slate-600 leading-tight">
                    Near BMC Chowk, Opposite District Courts, Jalandhar, Punjab – 144001
                  </p>
                  <p className="text-[11px] text-slate-500">Domain: {contactInfo.domain}</p>
                </div>
              </div>
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs text-center transition-colors shadow-xs flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>

          {/* Social Channels Strip: YouTube & Facebook */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 mb-16 shadow-sm">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs text-red-400 font-bold uppercase tracking-wider">
                Official Media Channels
              </span>
              <h3 className="text-xl sm:text-2xl font-black">
                Connect With IndoJapan on YouTube & Facebook
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Watch classroom lectures, student visa grant announcements, and live Japan university sessions.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              {/* YouTube Button */}
              <a
                href={contactInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-all"
              >
                <YoutubeIcon className="w-5 h-5 text-white" />
                <span>YouTube (@INDO-JAPANJALANDHAR)</span>
              </a>

              {/* Facebook Button */}
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-all"
              >
                <FacebookIcon className="w-5 h-5 text-white" />
                <span>Facebook Official Page</span>
              </a>
            </div>
          </div>



          {/* Visiting Hours & Directions */}
          <div className="bg-[#fafbfc] rounded-3xl border border-slate-200 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-600" />
                <h3 className="text-xl font-bold text-slate-900">Visiting Hours at Head Office</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Founder {contactInfo.founder} and language counselors are available during the following schedule:
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                  <span className="font-medium text-slate-700">Monday to Friday:</span>
                  <strong className="text-slate-900 font-mono">9:00 AM – 6:00 PM</strong>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                  <span className="font-medium text-slate-700">Saturday:</span>
                  <strong className="text-slate-900 font-mono">9:30 AM – 3:00 PM</strong>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                  <span className="font-medium text-slate-700">Sunday:</span>
                  <span className="text-red-600 font-semibold uppercase text-xs">Closed</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Train className="w-5 h-5 text-slate-700" />
                <h3 className="text-xl font-bold text-slate-900">How to Reach Us in Jalandhar</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>From Jalandhar City Railway Station:</strong> Approximately 2.5 km (10 mins via auto-rickshaw).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>From Shaheed Bhagat Singh ISBT (Bus Stand):</strong> Approx 1.8 km (around 6 mins via BMC Chowk).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>From Ludhiana / Phagwara:</strong> Direct access via Grand Trunk Road directly into BMC Chowk.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Direct answers regarding counseling at IndoJapan Japanese Language School.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-bold text-slate-900">Who will assess my study in Japan application?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All student applications and eligibility evaluations are personally reviewed by Founder <strong>{contactInfo.founder}</strong> alongside certified Japanese language senseis at our Jalandhar Head Office.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-bold text-slate-900">Can students outside Jalandhar get telephonic guidance?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Yes. You can call our India contact number <strong>{contactInfo.indiaPhone}</strong> or send your certificates on WhatsApp for a preliminary eligibility and intake timeline assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
