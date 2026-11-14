import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Building2, 
  Train, 
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { contactInfo } from '../data/content';

export const Contact = () => {
  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="Contact Us | Indo Japan Language School | Jalandhar, Punjab"
        description="Contact Indo Japan Language School in Jalandhar, Punjab. Reach our team via phone or email, or visit our Civil Lines center for Japanese language and study visa guidance."
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
              <span>Jalandhar Office • In-Person & Telephonic Guidance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Contact Indo Japan Language School
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Have questions regarding learning Japanese, language school admission timelines, or student visa documentation? Reach out to us via direct phone, email, or visit our Jalandhar center.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* 1. Phone Card (Clickable tel:) */}
            <div className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Telephone Lines</h3>
                <p className="text-xs text-slate-500">
                  Direct voice assistance during office hours:
                </p>
                <div className="space-y-2 pt-1 text-sm">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Mobile Helpline</span>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                      className="font-bold text-slate-900 hover:text-red-600 transition-colors text-base"
                    >
                      {contactInfo.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Landline Office</span>
                    <a
                      href={`tel:${contactInfo.landline.replace(/\s+/g, '')}`}
                      className="font-semibold text-slate-700 hover:text-red-600 transition-colors text-xs"
                    >
                      {contactInfo.landlineDisplay}
                    </a>
                  </div>
                </div>
              </div>
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                className="w-full py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs text-center transition-colors shadow-xs"
              >
                Tap to Call Now
              </a>
            </div>

            {/* 2. WhatsApp Direct Chat Card */}
            <div className="p-6 rounded-2xl bg-[#f0fdf4] border border-emerald-200 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-xs">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.067-1.112-.067-.282-.09-.64-.22-1.107-.42-1.954-.84-3.224-2.813-3.321-2.943-.098-.13-.795-1.057-.795-2.016 0-.958.503-1.428.683-1.622.18-.194.393-.243.524-.243.131 0 .262.001.376.007.121.006.284-.046.444.339.163.393.555 1.353.604 1.452.049.098.082.213.016.344-.065.131-.098.213-.196.328-.098.115-.207.256-.296.344-.1.098-.204.204-.088.403.116.199.516.852 1.107 1.378.76.678 1.401.888 1.6.987.199.098.315.082.431-.049.116-.131.498-.58.63-.78.131-.199.262-.164.441-.098.18.066 1.139.537 1.335.635.196.098.327.147.376.229.049.082.049.475-.095.88z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.442 5.176L2 22l4.981-1.398A9.954 9.954 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.063c-1.637 0-3.153-.482-4.428-1.312l-.317-.208-2.964.832.842-2.884-.229-.333A8.04 8.04 0 0 1 3.938 12c0-4.446 3.617-8.063 8.062-8.063 4.446 0 8.063 3.617 8.063 8.063 0 4.445-3.617 8.063-8.063 8.063z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">WhatsApp Chat</h3>
                <p className="text-xs text-slate-600">
                  Instant messaging for rapid profile review and syllabus queries:
                </p>
                <div className="space-y-1 pt-1 text-sm">
                  <span className="text-[10px] text-emerald-700 uppercase font-bold block">Verified WhatsApp</span>
                  <a
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 hover:text-emerald-600 transition-colors text-base"
                  >
                    {contactInfo.whatsappNumber}
                  </a>
                  <span className="text-[11px] text-slate-500 block">Typical reply time: within a few minutes</span>
                </div>
              </div>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Chat on WhatsApp</span>
                <span className="text-xs">💬</span>
              </a>
            </div>

            {/* 3. Instagram Official Card */}
            <div className="p-6 rounded-2xl bg-[#fdf2f8] border border-pink-200 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Instagram</h3>
                <p className="text-xs text-slate-600">
                  Follow for visa updates, student arrivals in Japan & classroom reels:
                </p>
                <div className="space-y-1 pt-1 text-sm">
                  <span className="text-[10px] text-pink-700 uppercase font-bold block">Official Page</span>
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 hover:text-pink-600 transition-colors text-base"
                  >
                    {contactInfo.instagramHandle}
                  </a>
                  <span className="text-[11px] text-slate-500 block">Watch Japan student life & tips</span>
                </div>
              </div>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold text-xs text-center transition-colors shadow-xs"
              >
                Follow on Instagram
              </a>
            </div>

            {/* 4. Email & Office Card */}
            <div className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Email & Address</h3>
                <p className="text-xs text-slate-500">
                  Send documents or visit our Civil Lines center:
                </p>
                <div className="space-y-2 pt-1 text-xs sm:text-sm">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Email</span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="font-semibold text-slate-900 hover:text-red-600 transition-colors text-xs break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Address</span>
                    <p className="text-xs text-slate-700 font-medium leading-tight">
                      {contactInfo.address.line1}, Near BMC Chowk, Jalandhar
                    </p>
                  </div>
                </div>
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs text-center transition-colors shadow-xs"
              >
                Compose Email
              </a>
            </div>

          </div>

          {/* Direct Social Fast Connect Strip */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 mb-16 shadow-sm">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-semibold border border-white/20">
                <span>💬 Quick Inquiries</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Prefer Messaging Us on WhatsApp or Instagram?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Send your profile details for an instant evaluation or follow our daily Japan visa updates.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.067-1.112-.067-.282-.09-.64-.22-1.107-.42-1.954-.84-3.224-2.813-3.321-2.943-.098-.13-.795-1.057-.795-2.016 0-.958.503-1.428.683-1.622.18-.194.393-.243.524-.243.131 0 .262.001.376.007.121.006.284-.046.444.339.163.393.555 1.353.604 1.452.049.098.082.213.016.344-.065.131-.098.213-.196.328-.098.115-.207.256-.296.344-.1.098-.204.204-.088.403.116.199.516.852 1.107 1.378.76.678 1.401.888 1.6.987.199.098.315.082.431-.049.116-.131.498-.58.63-.78.131-.199.262-.164.441-.098.18.066 1.139.537 1.335.635.196.098.327.147.376.229.049.082.049.475-.095.88z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.442 5.176L2 22l4.981-1.398A9.954 9.954 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.063c-1.637 0-3.153-.482-4.428-1.312l-.317-.208-2.964.832.842-2.884-.229-.333A8.04 8.04 0 0 1 3.938 12c0-4.446 3.617-8.063 8.062-8.063 4.446 0 8.063 3.617 8.063 8.063 0 4.445-3.617 8.063-8.063 8.063z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>

              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Visiting Hours & Accessibility */}
          <div className="bg-[#fafbfc] rounded-2xl border border-slate-200 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-600" />
                <h3 className="text-xl font-bold text-slate-900">Office Visiting Hours</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Students and parents are welcome to visit during our designated counseling hours for in-person consultations:
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
                <h3 className="text-xl font-bold text-slate-900">How to Reach Our Center</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>From Jalandhar City Railway Station:</strong> Approximately 2.5 km (10 minutes by auto-rickshaw or taxi).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>From Shaheed-e-Azam Bhagat Singh ISBT (Bus Stand):</strong> Approximately 1.8 km (around 6 minutes via BMC Chowk).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>From Phagwara / Ludhiana:</strong> Easily connected via the main GT Road / Grand Trunk Road directly into BMC Chowk.</span>
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
              Frequently Asked Questions About Contacting Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Common questions from prospective students and parents.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-bold text-slate-900">Do I need to book an appointment before visiting the Jalandhar office?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                While walk-in visits during visiting hours are welcome, we encourage calling our phone line (<strong>{contactInfo.phoneDisplay}</strong>) in advance so our senior language sensei or visa advisor can allocate dedicated time to review your academic certificates.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-bold text-slate-900">What documents should I bring for an initial consultation?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If available, please bring your 10th and 12th standard marksheets, graduation degree/transcripts (if applicable), details of your financial sponsor (occupation and annual income), and any prior Japanese language study proof.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-bold text-slate-900">Do you assist students outside of Jalandhar?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Yes. We regularly guide students from across Punjab, including Ludhiana, Amritsar, Phagwara, Kapurthala, Hoshiarpur, Bathinda, and Mohali. Initial document reviews and guidance can be provided over the phone and email.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
