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
import { YoutubeIcon, FacebookIcon, InstagramIcon } from '../components/SocialIcons';
import { SEOHead } from '../components/SEOHead';
import { contactInfo } from '../data/content';

export const About = () => {
  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="About Us | IndoJapan Japanese Language School | Jalandhar & Fukuoka"
        description="Learn about IndoJapan Japanese Language School in Jalandhar, Punjab and Fukuoka, Japan. Founder & CEO: NAVDEEP VIRK. Dedicated Japanese language training (JLPT N5 to N1) and study in Japan advisory."
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              <span className="font-bold">インド日本学園 • 学校案内</span>
              <span className="text-red-300">•</span>
              <span>{contactInfo.headOffice}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              About IndoJapan <span className="text-red-600 block sm:inline">Japanese Language School</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Founded and spearheaded by <strong>{contactInfo.founder}</strong> (Founder & CEO), we provide structured Japanese language education and authentic, dependable guidance for students aspiring to study and build careers in Japan.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Leadership Spotlight */}
      <section className="py-14 lg:py-18 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/30 text-red-400 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-500/40">
                <UserCheck className="w-4 h-4" />
                <span>Leadership & Vision • 代表メッセージ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Message from Founder & CEO: {contactInfo.founder}
              </h2>
              <div className="space-y-4 text-slate-200 text-base leading-relaxed font-normal">
                <p>
                  "Our mission at <strong>IndoJapan Japanese Language School</strong> is rooted in absolute transparency and uncompromising academic quality. Over the years, we have observed many students from Punjab being misled by vague promises or inappropriate visa tracks. Our vision is to empower every aspirant with authentic Japanese language competence (JLPT N5 to N1) and direct, legitimate admissions into accredited Japanese language institutes and universities."
                </p>
                <p>
                  "With our Head Office in Jalandhar, Punjab and our Fukuoka Branch Office (<strong>福岡営業所</strong>) in Japan, we remain by our students' side from their first Hiragana stroke until their successful arrival, residence card registration, and career settlement in Japan."
                </p>
              </div>

              {/* Direct Founder Contact details */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-sm sm:text-base font-bold">
                <a
                  href={`tel:${contactInfo.indiaPhone}`}
                  className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>India Helpline: {contactInfo.indiaPhone}</span>
                </a>

                <a
                  href={contactInfo.japanOffice.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors"
                  title="WhatsApp Call / Chat Fukuoka Japan Office"
                >
                  <Globe className="w-4 h-4 text-sky-400" />
                  <span>Fukuoka, Japan: {contactInfo.japanPhone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-3xl p-7 text-center space-y-5">
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-red-500 mx-auto shadow-2xl bg-slate-800">
                <img
                  src="/images/navdeepvirk/n2.jpeg"
                  alt={`Founder & CEO ${contactInfo.founder} - IndoJapan Japanese Language School`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">{contactInfo.founder}</h3>
                <span className="text-xs sm:text-sm text-red-400 font-extrabold uppercase tracking-wider block mt-1">
                  FOUNDER & CEO
                </span>
                <span className="text-sm text-slate-300 mt-1 block font-medium">
                  IndoJapan Japanese Language School
                </span>
                <a 
                  href="https://www.indojapanjalandhar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white block mt-0.5 font-mono transition-colors"
                >
                  {contactInfo.domain}
                </a>
              </div>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 text-white transition-opacity shadow-sm"
                  title="Instagram Profile (@indo_japan_jalandhar)"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-4 h-4 text-white" />
                </a>
                <a
                  href={contactInfo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-red-600 hover:bg-red-700 text-white transition-colors"
                  title="YouTube Channel"
                  aria-label="YouTube Channel"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  title="Facebook Page"
                  aria-label="Facebook Page"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main About Story Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                Our Educational Mission
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
                Guiding Students with Clarity, Accuracy and Integrity
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
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

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm sm:text-base text-slate-800 font-bold">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>JLPT N5 to N1 Classroom Teaching</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>School Application Dossier Assistance</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Certificate of Eligibility (COE) Guidance</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Direct Guidance from Founder & CEO {contactInfo.founder}</span>
                </div>
              </div>
            </div>

            {/* Photography Column: Full picture, uncropped, clean frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white w-full max-w-lg">
                <img
                  src="/images/indojapanhome.jpeg"
                  alt="IndoJapan Japanese Language School campus and student learning environment"
                  className="w-full h-auto object-contain block"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              Values That Drive Our Guidance
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              How we conduct our educational training and advisory at {contactInfo.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">Truthful & Factual Advice</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                We do not create false hopes, guarantee visa outcomes, or invent partnerships. Every piece of advice we provide is cross-referenced with official Japanese Ministry guidelines.
              </p>
            </div>

            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">Language-First Approach</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Japanese language proficiency is the foundation of success in Japan. We emphasize comprehensive script learning (Hiragana, Katakana, Kanji) and practical conversational preparedness.
              </p>
            </div>

            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">Dedicated Student Support</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                From initial profile assessment in Jalandhar to school document compilation, SOP review, and pre-departure briefings, we assist students at each milestone.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">Have Questions About Studying in Japan?</h3>
            <p className="text-base sm:text-lg text-slate-300 font-normal">
              Speak with Founder & CEO {contactInfo.founder} at our Jalandhar Head Office.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${contactInfo.indiaPhone}`}
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-bold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {contactInfo.indiaPhone}</span>
            </a>
            <Link
              to="/contact"
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm sm:text-base font-bold border border-slate-700"
            >
              Office Directions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
