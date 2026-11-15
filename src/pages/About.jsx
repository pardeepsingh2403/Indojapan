import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  UserCheck,
  Globe,
  BookOpen,
  Users
} from 'lucide-react';
import { YoutubeIcon, FacebookIcon } from '../components/SocialIcons';
import { SEOHead } from '../components/SEOHead';
import { contactInfo } from '../data/content';

export const About = () => {
  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="About Us | IndoJapan Japanese Language School | Jalandhar"
        description="Learn about IndoJapan Japanese Language School in Jalandhar, Punjab. Founder: NAVDEEP SINGH VIRK. Dedicated Japanese language training (JLPT N5 to N1) and study in Japan advisory."
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
              <span>{contactInfo.headOffice}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              About IndoJapan Japanese Language School
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Founded and spearheaded by <strong>{contactInfo.founder}</strong>, we provide structured Japanese language education and authentic, dependable guidance for students aspiring to study and build careers in Japan.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Leadership Spotlight */}
      <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 text-red-400 text-xs font-bold border border-red-500/40">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Leadership & Vision</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Message from Owner / Founder: {contactInfo.founder}
              </h2>
              <div className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                <p>
                  "Our mission at <strong>IndoJapan Japanese Language School</strong> is rooted in absolute transparency and uncompromising academic quality. Over the years, we have observed many students from Punjab being misled by vague promises or inappropriate visa tracks. Our vision is to empower every aspirant with authentic Japanese language competence (JLPT N5 to N1) and direct, legitimate admissions into accredited Japanese language institutes and universities."
                </p>
                <p>
                  "With our Head Office in Jalandhar, Punjab and active liaison coordination in Japan, we remain by our students' side from their first Hiragana stroke until their successful arrival, residence card registration, and career settlement in Japan."
                </p>
              </div>

              {/* Direct Founder Contact details */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold">
                <a
                  href={`tel:${contactInfo.indiaPhone}`}
                  className="flex items-center gap-1.5 text-white hover:text-red-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>India Helpline: {contactInfo.indiaPhone}</span>
                </a>

                <a
                  href={`tel:${contactInfo.japanPhone.replace(/[\s+]/g, '')}`}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4 text-sky-400" />
                  <span>Japan Contact: {contactInfo.japanPhone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-3xl p-6 text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-red-600 text-white font-black text-3xl flex items-center justify-center mx-auto shadow-md">
                NV
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">{contactInfo.founder}</h3>
                <span className="text-xs text-red-400 font-bold uppercase tracking-wider block">
                  Owner & Founder
                </span>
                <span className="text-xs text-slate-400 mt-1 block">
                  IndoJapan Japanese Language School
                </span>
                <span className="text-[11px] text-slate-500 block">
                  {contactInfo.domain}
                </span>
              </div>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={contactInfo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white transition-colors"
                  title="YouTube Channel"
                  aria-label="YouTube Channel"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  title="Facebook Page"
                  aria-label="Facebook Page"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white transition-colors"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <span className="text-xs font-bold">💬</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main About Story Section */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                Our Educational Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Guiding Students with Clarity, Accuracy and Integrity
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  <strong>IndoJapan Japanese Language School</strong> was founded in Jalandhar with a clear, singular focus: to bridge the gap between Indian students and the Japanese education ecosystem through rigorous language preparation and transparent advisory.
                </p>
                <p>
                  Japan is one of the world's most advanced economies, offering world-class educational institutions, unmatched personal safety, and rich cultural heritage. However, navigating Japanese immigration rules, choosing an accredited language school, and achieving the required linguistic competence can often be overwhelming without reliable information.
                </p>
                <p>
                  Our role is to provide realistic, fact-based guidance. We ensure prospective students understand what studying in Japan genuinely entails—from course curricula and living expenses to Japanese societal norms and part-time work regulations.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>JLPT N5 to N1 Classroom Teaching</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>School Application Dossier Assistance</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Certificate of Eligibility (COE) Guidance</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Direct Guidance from {contactInfo.founder}</span>
                </div>
              </div>
            </div>

            {/* Photography Column */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                  alt="Students studying collaboratively in classroom"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600">
                  <strong className="text-slate-900 font-semibold block">{contactInfo.name}</strong>
                  Jalandhar Punjab India Head Office • {contactInfo.domain}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-20 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Values That Drive Our Guidance
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              How we conduct our educational training and advisory at {contactInfo.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Truthful & Factual Advice</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We do not create false hopes, guarantee visa outcomes, or invent partnerships. Every piece of advice we provide is cross-referenced with official Japanese Ministry guidelines.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Language-First Approach</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Japanese language proficiency is the foundation of success in Japan. We emphasize comprehensive script learning (Hiragana, Katakana, Kanji) and practical conversational preparedness.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Dedicated Student Support</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From initial profile assessment in Jalandhar to school document compilation, SOP review, and pre-departure briefings, we assist students at each milestone.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Have Questions About Studying in Japan?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak with Founder {contactInfo.founder} at our Jalandhar Head Office.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${contactInfo.indiaPhone}`}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {contactInfo.indiaPhone}</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700"
            >
              Office Directions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
