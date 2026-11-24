import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  GraduationCap, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Compass, 
  Award, 
  Building2, 
  Briefcase, 
  Train, 
  Home as HomeIcon,
  AlertCircle,
  Sparkles,
  Globe,
  X,
  ZoomIn
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { contactInfo, jlptLevels, studyProcessSteps, visaMilestones } from '../data/content';

export const Home = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const featuredApprovals = [
    { id: 1, type: "Visa", title: "Japan Student Visa", img: "/images/visa/visa1.jpeg" },
    { id: 2, type: "COE", title: "Certificate of Eligibility (COE)", img: "/images/coe/coe1.jpeg" },
    { id: 3, type: "Visa", title: "Japan Student Visa", img: "/images/visa/visa3.jpeg" },
    { id: 4, type: "COE", title: "Certificate of Eligibility (COE)", img: "/images/coe/coe2.jpeg" },
    { id: 5, type: "Visa", title: "Japan Student Visa", img: "/images/visa/visa5.jpeg" },
    { id: 6, type: "COE", title: "Certificate of Eligibility (COE)", img: "/images/coe/coe4.jpeg" }
  ];
  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="IndoJapan Japanese Language School | Jalandhar Punjab Head Office | www.indojapanjalandhar.com"
        description="Learn Japanese (JLPT N5 to N1) and receive authentic guidance for Japanese language school admission and student visa (COE) processing at IndoJapan Japanese Language School in Jalandhar, Punjab and Fukuoka, Japan. Founder & CEO: NAVDEEP VIRK."
      />

      {/* ======================================================== */}
      {/* SECTION 1: HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative bg-white border-b border-slate-200/80 pt-10 pb-14 lg:pt-16 lg:pb-20 overflow-hidden">
        {/* Subtle Japanese Background Pattern */}
        <div className="absolute inset-0 jp-dots-pattern opacity-30 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Region & Mission Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-red-700 shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                <span className="font-bold">インド日本学園 • 語学教育</span>
                <span className="text-red-300">•</span>
                <span>{contactInfo.headOffice} • Founder & CEO: {contactInfo.founder}</span>
              </div>

              {/* Headline & Tagline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.12]">
                  IndoJapan <span className="text-red-600">Japanese Language School</span>
                </h1>
                <div className="inline-block py-2 px-5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-black text-lg sm:text-xl md:text-2xl shadow-sm">
                  Your Journey to Japan Starts Here • 日本への第一歩
                </div>
              </div>

              {/* Exact Supporting Text */}
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl font-normal">
                Master Japanese language (<strong className="text-slate-900 font-black">JLPT N5 to N1</strong>), apply to top accredited Japanese language institutes, and secure your Japan student visa with verified, transparent guidance from Founder & CEO <strong className="text-slate-900 font-black">{contactInfo.founder}</strong>.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/courses"
                  className="px-7 py-4 rounded-xl text-base font-bold text-white bg-red-600 hover:bg-red-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <BookOpen className="w-5 h-5 text-white" />
                  <span>Explore Courses (JLPT N5–N1)</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/student-visa"
                  className="px-7 py-4 rounded-xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-5 h-5 text-red-600" />
                  <span>Study in Japan Guide</span>
                </Link>

                <a
                  href={`tel:${contactInfo.indiaPhone}`}
                  className="px-6 py-4 rounded-xl text-base font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                  title="Call India Office"
                >
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <span>{contactInfo.indiaPhone}</span>
                </a>
              </div>

              {/* Core Feature Badges */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-200 text-sm sm:text-base text-slate-800 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>JLPT N5 to N1 Intensive Batches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Accredited School Admissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>100% Genuine Stamped Visas & COEs</span>
                </div>
              </div>

            </div>

            {/* Right Split Photography Column: Full picture, uncropped, clean shadow, no dark blue bar */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none">
                {/* Decorative subtle aura */}
                <div className="hidden sm:block absolute -inset-2 bg-gradient-to-tr from-red-100 to-slate-100 rounded-3xl transform rotate-1 pointer-events-none"></div>
                
                {/* Image Container: Full picture, no dark overlay */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white">
                  <img
                    src="/images/indojapanhome.jpeg"
                    alt="IndoJapan Japanese Language School - BMC CHOWK Jalandhar"
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* TRUST & KEY HIGHLIGHTS METRICS STRIP */}
      {/* ======================================================== */}
      <section className="bg-slate-900 text-white py-8 border-b border-slate-800 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <strong className="text-lg sm:text-xl font-black text-white block">
                  25+ Approvals
                </strong>
                <span className="text-sm text-slate-300 font-medium block">
                  17 Visas & 8 COEs Granted
                </span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-600/20 text-sky-400 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <strong className="text-lg sm:text-xl font-black text-white block">
                  Japan: #1 in India
                </strong>
                <span className="text-sm text-slate-300 font-medium block">
                  28.8% FDI ($5.71B) Inflows
                </span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <strong className="text-lg sm:text-xl font-black text-white block">
                  Daily Batches
                </strong>
                <span className="text-sm text-slate-300 font-medium block">
                  10 AM–12 PM & 1 PM–3 PM
                </span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <strong className="text-lg sm:text-xl font-black text-white block">
                  BMC CHOWK Center
                </strong>
                <span className="text-sm text-slate-300 font-medium block">
                  Near Bus Stand, Jalandhar
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: ABOUT INDOJAPAN JAPANESE LANGUAGE SCHOOL */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founder Photography: Full picture, clean frame, no dark blue bar */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
                <img
                  src="/images/navdeepvirk/n2.jpeg"
                  alt={`Founder ${contactInfo.founder} - IndoJapan Japanese Language School`}
                  className="w-full h-auto max-h-[460px] object-contain rounded-2xl block mx-auto"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 text-center">
                <strong className="text-xl font-black text-slate-900 block">{contactInfo.founder}</strong>
                <span className="text-sm font-bold text-red-600 block">{contactInfo.founderTitle}</span>
                <span className="text-sm text-slate-600 font-medium">{contactInfo.headOffice}</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                <Building2 className="w-4 h-4 text-red-600" />
                <span>About Our Institute</span>
              </div>

              {/* Exact Suggested Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
                Guiding Your Journey from India to Japan
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                <p>
                  <strong className="text-slate-900 font-bold">{contactInfo.name}</strong> is an educational institute established in {contactInfo.headOffice}, founded by <strong className="text-slate-900 font-bold">{contactInfo.founder}</strong> to provide authentic Japanese language education and comprehensive guidance for students aspiring to study and work in Japan.
                </p>
                <p>
                  We understand that studying abroad is a significant academic and life decision. Our objective is to guide students with factual, transparent information regarding Japanese language learning milestones (JLPT N5 to N1), Japanese language school admissions, Certificate of Eligibility (COE) procedures, and student visa application standards.
                </p>
                <p>
                  Rather than making exaggerated claims or unrealistic promises, we focus on genuine preparation: teaching proper Japanese language skills, helping students select suitable educational institutions, and ensuring documentation is compiled accurately in accordance with Japanese Immigration guidelines.
                </p>
              </div>

              {/* 4 Feature Cards */}
              <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-base text-slate-800 font-semibold">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>JLPT N5 to N1 Classroom Teaching</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Accredited School Admissions</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Certificate of Eligibility (COE) Filing</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Personal Guidance from Founder & CEO {contactInfo.founder}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-bold text-red-600 hover:text-red-700"
                >
                  <span>Read More About Our Background</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <span className="text-slate-300">•</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-base font-bold text-slate-700 hover:text-slate-900"
                >
                  <span>Visit Our Jalandhar Center</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION: WHY CHOOSE JAPANESE LANGUAGE */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-22 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Language Advantage & Economic Powerhouse
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              Why Choose Japanese Language?
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl mx-auto">
              Japanese is one of the highest-value languages in the world. As Japan ranks as the <strong className="text-slate-900 font-bold">#1 top foreign investor in India (28.8% of total FDI equity inflows)</strong>, proficiency in Japanese opens doors to lucrative global careers.
            </p>
          </div>

          {/* Feature Showcase: Infographic Photo + 4 Key Advantages */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            
            {/* Left: Infographic Photo */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div 
                onClick={() => setSelectedDoc({ title: "FDI Equity Inflows: Japan #1 Investor in India (28.8% • $5.71B)", img: "/images/japaneselanguageschool.jpeg", school: "Official DPIIT FDI Data • Economic Growth Indicator" })}
                className="bg-white p-3 sm:p-4 rounded-3xl border-2 border-red-200/80 shadow-md hover:shadow-xl hover:border-red-500 transition-all cursor-pointer group relative w-full max-w-md"
              >
                <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 aspect-[936/1058]">
                  <img
                    src="/images/japaneselanguageschool.jpeg"
                    alt="Which Countries Invested The Most In India - Japan #1 with 28.8% and $5.71B FDI"
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-slate-900/90 text-white text-sm font-bold shadow-md flex items-center gap-2">
                      <ZoomIn className="w-4 h-4 text-red-400" />
                      <span>Click to Enlarge</span>
                    </span>
                  </div>
                </div>

                <div className="pt-3 px-1 text-center space-y-1">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs sm:text-sm font-bold border border-red-200">
                    ★ Japan: #1 Foreign Investor in India
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    28.8% ($5.71 Billion) FDI Inflow • Source: DPIIT Official Data
                  </p>
                </div>
              </div>
            </div>

            {/* Right: 4 Key Advantages Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Reason 1 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-slate-200 shadow-2xs hover:border-red-400 hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    #1 FDI Investor & Endless Careers
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    With Japan contributing 28.8% ($5.71B) of India's total FDI inflows, Japanese MNCs (Toyota, Sony, Daikin, Honda, Suzuki) actively hire bilingual talent in India and Japan.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-sm font-bold text-red-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  <span>High starting salary packages</span>
                </div>
              </div>

              {/* Reason 2 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-slate-200 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Mandatory for Study Visa (COE)
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    Foundational Japanese proficiency (minimum 150 hours certificate or JLPT N5) is legally required by Japanese Immigration to issue your Certificate of Eligibility (COE).
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-sm font-bold text-blue-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Essential for visa approval</span>
                </div>
              </div>

              {/* Reason 3 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-slate-200 shadow-2xs hover:border-emerald-400 hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Global Japanese MNC Dominance
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    Multinational conglomerates prize candidates who speak Japanese, offering accelerated promotions, international relocations to Tokyo, and managerial perks.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-sm font-bold text-emerald-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Global prestige & job security</span>
                </div>
              </div>

              {/* Reason 4 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-slate-200 shadow-2xs hover:border-amber-400 hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Higher Part-Time Pay in Japan
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    Students with conversational Japanese easily secure higher-paying part-time jobs (baito) in hotels, convenience stores, and offices at ¥1,100 to ¥1,400+ per hour.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-sm font-bold text-amber-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Higher hourly earnings</span>
                </div>
              </div>

            </div>

          </div>

          {/* Quick CTA to Japanese Jobs in India & Courses */}
          <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-white border-2 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-black text-slate-900">Over 125+ Japanese Multinationals Hiring in India</h4>
                <p className="text-base text-slate-700 font-normal">Maruti Suzuki, Toyota, Sony, Honda, Daikin, Hitachi, Panasonic, and 100+ more hire bilingual talent.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/jobs-in-india"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-xs transition-colors flex items-center gap-2"
              >
                <span>View 125+ Companies</span>
                <ArrowRight className="w-4 h-4 text-red-400" />
              </Link>
              <Link
                to="/courses"
                className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-xs transition-colors flex items-center gap-2"
              >
                <span>JLPT Courses</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION: WHY CHOOSE JAPAN? */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-22 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Destination of Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              Why Choose Japan?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal max-w-4xl mx-auto">
              Japan offers high job demand, low tuition fees, and clear visa pathways for Indian students, making it a strong alternative to overcrowded Western destinations. Because Japan is facing a rapidly aging population and a severe shortage of young talent, Japanese companies and the government are actively recruiting Indian graduates.
            </p>
          </div>

          {/* 4 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Japan Reason 1 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#fafbfc] border-2 border-slate-200 shadow-2xs hover:shadow-lg hover:border-red-400 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Unmatched Safety & Quality of Life
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Ranked consistently among the world's safest countries with minimal crime, immaculate public hygiene, universal healthcare, and world-class bullet train infrastructure.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-sm font-bold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% peace of mind for families</span>
              </div>
            </div>

            {/* Japan Reason 2 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#fafbfc] border-2 border-slate-200 shadow-2xs hover:shadow-lg hover:border-blue-400 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Legal 28 Hours/Week Part-Time Work
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  International students on a Student Visa (COE) are legally permitted to work up to 28 hours per week (up to 40 hours during vacations), comfortably covering their daily living expenses.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-sm font-bold text-blue-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Earn while learning in Japan</span>
              </div>
            </div>

            {/* Japan Reason 3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#fafbfc] border-2 border-slate-200 shadow-2xs hover:shadow-lg hover:border-purple-400 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Affordable Tuition & Scholarships
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Tuition fees at Japanese institutions are significantly more affordable than in the UK, USA, Canada, or Australia, backed by government (MEXT) and institutional scholarships.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-sm font-bold text-purple-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
                <span>Lower costs, high return on investment</span>
              </div>
            </div>

            {/* Japan Reason 4 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#fafbfc] border-2 border-slate-200 shadow-2xs hover:shadow-lg hover:border-red-400 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Post-Study Work Visa & PR Route
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Graduates from language schools and universities can convert their student visa directly into a Japanese Engineer/Specialist Work Visa, leading to Permanent Residency (PR).
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-sm font-bold text-red-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Direct pathway to long-term career</span>
              </div>
            </div>

          </div>

          {/* Quick Link to Detailed Student Visa & Career Guide */}
          <div className="pt-2 text-center">
            <Link
              to="/student-visa"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-sm hover:shadow-md transition-all group"
            >
              <span>Explore Complete Study in Japan Guide & Career Pathways</span>
              <ArrowRight className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ======================================================== */}
          {/* SSW INFOGRAPHIC FEATURE BANNER */}
          {/* ======================================================== */}
          <div className="p-7 sm:p-9 rounded-3xl bg-slate-50 border-2 border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Work Visa Option</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Specified Skilled Worker (SSW) 19 Sectors & Application Steps
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Want to work directly in Japan? Japan's Specified Skilled Worker (SSW) visa program welcomes skilled Indian workers across 19 designated sectors with equal pay to Japanese nationals.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-sm font-bold text-slate-800 pt-1">
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center">1. Skills Test</div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center">2. Japanese Test (N4)</div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center">3. Job Offer</div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center">4. SSW Visa</div>
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/work-in-japan"
                  className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-xs transition-colors flex items-center gap-2"
                >
                  <span>Explore SSW Visa Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setSelectedDoc({ title: "Specified Skilled Worker (SSW) 19 Sectors & Steps", img: "/images/ssw.jpeg" })}
                  className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-2xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4 text-red-600" />
                  <span>Enlarge Infographic</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div 
                onClick={() => setSelectedDoc({ title: "Specified Skilled Worker (SSW) 19 Sectors & Steps", img: "/images/ssw.jpeg" })}
                className="relative rounded-2xl overflow-hidden border-2 border-slate-200 bg-white cursor-pointer group shadow-sm hover:shadow-xl hover:border-red-500 transition-all max-w-sm"
              >
                <img 
                  src="/images/ssw.jpeg" 
                  alt="Specified Skilled Worker SSW 19 Designated Industries and Steps in Japan"
                  className="w-full h-auto object-contain block group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-slate-900/90 text-white text-xs sm:text-sm font-bold shadow-md flex items-center gap-2">
                    <ZoomIn className="w-4 h-4 text-red-400" />
                    <span>Click to Enlarge</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Highlight Note */}
          <div className="p-7 sm:p-9 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs sm:text-sm text-red-400 font-extrabold uppercase tracking-wider">
                Expert Guidance • Jalandhar Head Office
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Begin Your Journey to Japan with {contactInfo.name}
              </h3>
              <p className="text-base text-slate-200 max-w-2xl font-normal">
                Personalized counseling led by Founder & CEO {contactInfo.founder}. From basic JLPT N5 coaching to Japanese school selection and COE visa filing.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <Link
                to="/student-visa"
                className="px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-bold shadow-xs transition-colors"
              >
                Student Visa Guide
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-bold border border-white/20 transition-colors"
              >
                Contact Head Office
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION: REAL STUDENT VISAS & APPROVED COEs SHOWCASE */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                Verified Approvals Proof
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
                Real Student Visas & Approved COEs
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Take a look at authentic stamped Japan visas and approved Certificates of Eligibility (COEs) issued to students trained at our BMC Chowk Jalandhar center.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shrink-0 shadow-xs transition-all"
            >
              <span>Explore All 25 Approved Documents</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* 6 Featured Real Document Cards Grid: Pure photos, zero text below */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredApprovals.map((doc) => (
              <div
                key={doc.id}
                onClick={() => setSelectedDoc({ title: doc.title, img: doc.img })}
                className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-2xs hover:border-red-400 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="relative aspect-[3/4] bg-white p-2.5 flex items-center justify-center overflow-hidden">
                  <img
                    src={doc.img}
                    alt={doc.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className={`absolute top-2 left-2 px-2.5 py-1 rounded-md text-xs font-bold ${
                    doc.type === 'COE' ? 'bg-red-600 text-white' : 'bg-emerald-600 text-white'
                  }`}>
                    {doc.type}
                  </span>
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Daily Batch Timings Banner */}
          <div className="mt-12 p-7 sm:p-9 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs sm:text-sm font-extrabold text-red-400 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-2">
                <Clock className="w-4 h-4" />
                <span>Class Schedules at Jalandhar Head Office</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Interactive Daily Batches: Morning & Afternoon
              </h3>
              <p className="text-base text-slate-200 max-w-2xl font-normal">
                Classes conducted both offline at our BMC Chowk campus in Jalandhar and live interactive online for students across Punjab.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[160px]">
                <span className="text-xs sm:text-sm text-red-400 uppercase font-bold block">Morning Regular</span>
                <strong className="text-lg sm:text-xl font-black text-white block mt-1">
                  {contactInfo.batchSchedules.morning}
                </strong>
                <span className="text-xs sm:text-sm text-slate-300 block mt-1">Mon to Sat (Sunday Off)</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[160px]">
                <span className="text-xs sm:text-sm text-blue-400 uppercase font-bold block">Afternoon Fast-Track</span>
                <strong className="text-lg sm:text-xl font-black text-white block mt-1">
                  {contactInfo.batchSchedules.afternoon}
                </strong>
                <span className="text-xs sm:text-sm text-slate-300 block mt-1">Mon to Sat (Sunday Off)</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: OUR SERVICES (4 Clean Cards) */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-22 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Educational Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              Our Core Guidance Areas
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl mx-auto">
              Clear, step-by-step guidance tailored to students planning to learn Japanese and pursue studies in Japan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Service 1: Japanese Language Learning */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  Japanese Language Learning
                </h3>
                <ul className="space-y-2 text-base text-slate-700 font-normal">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
                    <span>Introduction to Japanese script</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
                    <span>JLPT N5 to N1 level training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
                    <span>Grammar, vocabulary & Kanji</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
                    <span>Reading & listening comprehension</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-red-600 hover:text-red-700 pt-3 border-t border-slate-100"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 2: Study in Japan */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  Study in Japan
                </h3>
                <ul className="space-y-2 text-base text-slate-700 font-normal">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0"></span>
                    <span>Japanese language schools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0"></span>
                    <span>School selection guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0"></span>
                    <span>Admission procedures & forms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0"></span>
                    <span>Course & admission information</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/student-visa"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-red-600 hover:text-red-700 pt-3 border-t border-slate-100"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 3: Student Visa Assistance */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  Student Visa Assistance
                </h3>
                <ul className="space-y-2 text-base text-slate-700 font-normal">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
                    <span>Document checklist guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
                    <span>Certificate of Eligibility (COE) info</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
                    <span>Application dossier preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
                    <span>VFS & Embassy process support</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/student-visa"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-red-600 hover:text-red-700 pt-3 border-t border-slate-100"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 4: Jobs in India with Japanese MNCs */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  Jobs in India (Japanese MNCs)
                </h3>
                <ul className="space-y-2 text-base text-slate-700 font-normal">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0"></span>
                    <span>1,400+ Japanese companies in India</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0"></span>
                    <span>Bilingual IT, engineering & automotive roles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0"></span>
                    <span>30%–70% higher starting packages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0"></span>
                    <span>Fast-track intra-company transfer to Japan</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/jobs-in-india"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-red-600 hover:text-red-700 pt-3 border-t border-slate-100"
              >
                <span>View Job Opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: LEARN JAPANESE LANGUAGE */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-22 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                Language Proficiency Levels
              </span>
              {/* Exact Suggested Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
                Start Learning Japanese – From Beginner to Advanced
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl">
                The Japanese-Language Proficiency Test (JLPT) is the official standardized exam measuring Japanese language competency for non-native speakers. We guide students systematically through each stage.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/courses"
                className="px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-red-600 hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <span>Explore All Courses (N5–N1)</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* 5 Attractive Level Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
            {jlptLevels.map((lvl) => (
              <div 
                key={lvl.level}
                className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm hover:border-red-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-mono font-bold px-3 py-1 rounded-md bg-slate-900 text-white">
                      {lvl.level}
                    </span>
                    <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider">
                      {lvl.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{lvl.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-mono mt-1">{lvl.studyHours} • {lvl.kanjiCount}</p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {lvl.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 space-y-1">
                  <span className="font-bold text-slate-800 block">Focus Areas:</span>
                  <p>Hiragana, Katakana, Vocabulary, Reading & Listening.</p>
                </div>
              </div>
            ))}
          </div>

          {/* Japanese Language Learning Photography Banner */}
          <div className="rounded-3xl overflow-hidden border-2 border-slate-200 bg-slate-50 grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-7 p-6 sm:p-9 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wide">Comprehensive Pedagogy</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                What Students Learn in Our Language Program
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Our classes cover reading, writing, and communication from day one:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-sm font-bold text-slate-800">
                <span className="p-3 bg-white rounded-xl border border-slate-200">✓ Hiragana & Katakana</span>
                <span className="p-3 bg-white rounded-xl border border-slate-200">✓ Essential Kanji</span>
                <span className="p-3 bg-white rounded-xl border border-slate-200">✓ Daily Vocabulary</span>
                <span className="p-3 bg-white rounded-xl border border-slate-200">✓ Structured Grammar</span>
                <span className="p-3 bg-white rounded-xl border border-slate-200">✓ Listening Practice</span>
                <span className="p-3 bg-white rounded-xl border border-slate-200">✓ Speaking & Kaiwa</span>
              </div>
            </div>

            <div className="md:col-span-5 p-4 flex items-center justify-center bg-white border-t md:border-t-0 md:border-l border-slate-200">
              <img
                src="/images/indojapan.jpeg"
                alt="IndoJapan Japanese Language School students and learning curriculum"
                className="w-full h-auto max-h-[320px] object-contain rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: STUDY IN JAPAN (Language School Pathway & 8-Step Process) */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-22 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Study Pathways in Japan
            </span>
            {/* Exact Suggested Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              Make Your Dream of Studying in Japan a Reality
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl mx-auto">
              International students commonly begin their higher education journey in Japan through accredited Japanese language institutes before transitioning to universities or vocational careers.
            </p>
          </div>

          {/* Educational Explanation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div className="bg-white p-7 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xl font-black text-slate-900">What is a Japanese Language School?</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Japanese language schools (Nihongo Gakko) are accredited educational institutions in Japan designed specifically to teach Japanese language and cultural adaptation to international students on a full-time Student Visa.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xl font-black text-slate-900">Course Duration & Study Period</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Courses range from 1 year to 2 years structured programs. During this period, students build fluency to attain JLPT N2 or N1 required for university or employment in Japan.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xl font-black text-slate-900">General Eligibility</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Applicants must have completed a minimum of 12 years of formal education (10+2 / High School), possess basic Japanese language training (minimum 150 hours or JLPT N5), and have a genuine financial sponsor.
              </p>
            </div>
          </div>

          {/* Step-by-Step Visual Process (1 to 8 Steps) */}
          <div className="bg-white p-7 sm:p-9 rounded-3xl border-2 border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Step-by-Step Study & Visa Process (日本留学の流れ)
                </h3>
                <p className="text-sm text-slate-600 font-medium">
                  How an international student progresses from consultation to arrival in Japan.
                </p>
              </div>
              <span className="text-xs sm:text-sm font-bold px-3 py-1.5 bg-red-50 text-red-700 border border-red-200 rounded-xl self-start sm:self-auto">
                Typical Timeline: 6 to 8 Months
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {studyProcessSteps.map((step) => (
                <div key={step.step} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-red-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                    0{step.step}
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{step.title}</h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Mandatory Regulatory Disclaimer */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-sm text-amber-950 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="block font-bold">Important Regulatory Note:</strong>
                <span>
                  Admission acceptance is determined solely by the respective Japanese language school, and Certificate of Eligibility (COE) / Visa issuance is subject to the official assessment and legal requirements of the Immigration Services Agency of Japan and the Embassy of Japan.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 6: JAPAN STUDENT VISA INFORMATION */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-22 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                Official Visa Guidelines
              </span>
              {/* Exact Suggested Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
                Understanding the Japan Student Visa Process
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl">
                Navigating the Japanese immigration documentation framework requires meticulous preparation and complete transparency. Here is a clear breakdown of how the process works.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/student-visa"
                className="px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-2"
              >
                <span>Read Full Visa Guide</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Visa Milestones Detailed Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {visaMilestones.filter(m => !m.title.includes('COE) vs.')).map((milestone, idx) => (
              <div key={idx} className="bg-slate-50 p-7 rounded-2xl border-2 border-slate-200 space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">{milestone.title}</h3>
                </div>
                <p className="text-base text-slate-700 leading-relaxed font-normal pl-5">
                  {milestone.detail}
                </p>
              </div>
            ))}

            {/* Crucial Distinctions Card */}
            <div className="bg-red-50/50 p-7 rounded-2xl border-2 border-red-200 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-red-600" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Difference Between COE and Student Visa</h3>
              </div>
              <p className="text-base text-slate-700 leading-relaxed font-normal pl-8">
                <strong className="text-slate-900 font-bold">COE (Certificate of Eligibility):</strong> Issued inside Japan by the Ministry of Justice / Immigration Services Agency. It verifies you satisfy the statutory criteria for the "Student" status of residence.
                <br /><br />
                <strong className="text-slate-900 font-bold">Student Visa:</strong> The actual stamp placed into your passport by the Embassy of Japan or Consulate in India after presenting the approved COE through VFS Global.
              </p>
            </div>
          </div>

          {/* Visa Counseling Photography & Disclaimer Box */}
          <div className="p-7 rounded-2xl bg-white border-2 border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 rounded-xl overflow-hidden h-[190px] bg-slate-50 border border-slate-200 flex items-center justify-center p-2">
              <img
                src="/images/coe/coe1.jpeg"
                alt="Certificate of Eligibility (COE) official document approved by Immigration Services Agency of Japan"
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-8 space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              <span className="font-extrabold uppercase text-xs sm:text-sm block text-red-600">
                Official Verification Disclaimer
              </span>
              <p>
                Immigration regulations, documentary requirements, and processing fees are subject to revision by Japanese authorities. Applicants must ensure all submitted documents (financial, educational, and personal) are genuine, accurate, and independently verifiable.
              </p>
              <p className="font-bold text-slate-900">
                IndoJapan Japanese Language School does not promise or guarantee Certificate of Eligibility (COE) or visa approval. We assist with factual information and administrative preparation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 8: LIFE AND OPPORTUNITIES IN JAPAN */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-22 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Student Environment
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              Life and Opportunities in Japan
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl mx-auto">
              Understanding daily living, culture, transportation, and legal regulations for international students residing in Japan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Student Life & Culture */}
            <div className="bg-[#fafbfc] p-7 rounded-2xl border-2 border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Student Life & Japanese Culture</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Japan provides a remarkably safe, polite, and culturally rich environment. International students experience daily language immersion, seasonal festivals, polite community customs, and a disciplined academic culture.
              </p>
            </div>

            {/* Accommodation & Living */}
            <div className="bg-[#fafbfc] p-7 rounded-2xl border-2 border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Accommodation & Housing</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Most language schools provide or assist with student dormitories, shared houses (guesthouses), or private studio apartments. Living spaces are compact, modern, and typically located near train stations.
              </p>
            </div>

            {/* Public Transportation */}
            <div className="bg-[#fafbfc] p-7 rounded-2xl border-2 border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <Train className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Public Transportation</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Japan possesses one of the world's most punctual and extensive public transit systems. Trains, subways, and city buses are the primary mode of travel, with discounted student commuter passes (Tsukin Teiki) available.
              </p>
            </div>

            {/* Part-Time Work Regulations (MANDATORY REQUIREMENT) */}
            <div className="bg-[#fafbfc] p-7 rounded-2xl border-2 border-slate-200 space-y-3 md:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Part-Time Work Rules for International Students (Arubaito)
              </h3>
              <div className="text-base text-slate-700 leading-relaxed font-normal space-y-3">
                <p>
                  International students on a Student Visa may engage in part-time work only after obtaining official permission: the <strong>Permission to Engage in Activity other than that Permitted under the Status of Residence Previously Granted (Shikakugai Katsudo Kyoka)</strong>, typically requested upon arrival at Japanese airports.
                </p>
                <div className="p-4 bg-white rounded-xl border border-slate-200 text-sm sm:text-base text-slate-800 space-y-1.5">
                  <p><strong>Permitted Hours:</strong> Maximum <strong>28 hours per week</strong> during standard school semesters, and up to <strong>40 hours per week</strong> (8 hours/day) during official long school vacations.</p>
                  <p><strong>Restricted Sectors:</strong> Students are strictly prohibited by Japanese immigration law from working in adult entertainment establishments, bars, gambling parlors, or any businesses affecting public morals.</p>
                </div>
                <p className="text-xs sm:text-sm text-slate-500">
                  * Note: Part-time work is meant to supplement living expenses, not replace primary financial sponsorship. We do not make unrealistic income or job placement guarantees.
                </p>
              </div>
            </div>

            {/* Further Education & Career Pathway */}
            <div className="bg-[#fafbfc] p-7 rounded-2xl border-2 border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Education & Career Pathways</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                After completing language school, students who attain JLPT N2/N1 can transition to Japanese universities (Undergraduate / Master's), specialized vocational colleges (Senmon Gakko), or apply for work visas (Engineer/Specialist in Humanities/International Services or SSW).
              </p>
            </div>

          </div>

          {/* Real Document & Campus Strip: Full pictures, uncropped */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
              onClick={() => setSelectedDoc({ title: "Approved Japan Visa Stamp", img: "/images/visa/visa2.jpeg" })}
              className="rounded-2xl overflow-hidden h-[210px] border-2 border-slate-200 bg-white p-2 flex items-center justify-center cursor-pointer relative group shadow-2xs hover:shadow-md hover:border-red-400 transition-all"
            >
              <img
                src="/images/visa/visa2.jpeg"
                alt="Stamped Japan Student Visa"
                className="max-h-full max-w-full object-contain group-hover:scale-102 transition-transform"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-emerald-600 text-white text-xs font-bold shadow-xs">
                Stamped Visa
              </span>
            </div>
            <div 
              onClick={() => setSelectedDoc({ title: "Approved Certificate of Eligibility (COE)", img: "/images/coe/coe3.jpeg" })}
              className="rounded-2xl overflow-hidden h-[210px] border-2 border-slate-200 bg-white p-2 flex items-center justify-center cursor-pointer relative group shadow-2xs hover:shadow-md hover:border-red-400 transition-all"
            >
              <img
                src="/images/coe/coe3.jpeg"
                alt="Certificate of Eligibility (COE) approved by Japan Immigration"
                className="max-h-full max-w-full object-contain group-hover:scale-102 transition-transform"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-red-600 text-white text-xs font-bold shadow-xs">
                Approved COE
              </span>
            </div>
            <div 
              onClick={() => setSelectedDoc({ title: "IndoJapan Language School Jalandhar Campus", img: "/images/indojapan.jpeg" })}
              className="rounded-2xl overflow-hidden h-[210px] border-2 border-slate-200 bg-white p-2 flex items-center justify-center cursor-pointer relative group shadow-2xs hover:shadow-md hover:border-red-400 transition-all hidden lg:flex"
            >
              <img
                src="/images/indojapan.jpeg"
                alt="IndoJapan Japanese Language School Campus"
                className="max-h-full max-w-full object-contain group-hover:scale-102 transition-transform"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-bold shadow-xs">
                Jalandhar Center
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 9: WHY CHOOSE INDOJAPAN JAPANESE LANGUAGE SCHOOL */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-22 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Our Principles
            </span>
            {/* Exact Suggested Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              Why Choose IndoJapan Japanese Language School?
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl mx-auto">
              We uphold educational clarity and honest advisory for students in Jalandhar and across Punjab.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Point 1 */}
            <div className="bg-white p-7 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Absolute Transparency & Honesty
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                We believe in factual clarity. We explain every statutory rule, living expense, and processing timeline honestly without false promises or hidden charges.
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-white p-7 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Dual Office Support (India & Japan)
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                We stay by your side from enrollment in Jalandhar to post-landing settlement, residence registration, and career guidance through our Fukuoka Office (福岡営業所).
              </p>
            </div>

            {/* Point 3 */}
            <div className="bg-white p-7 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Accredited Direct School Admissions
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Direct admission pathways to accredited Japanese language institutes and colleges across Tokyo, Osaka, Kyoto, and Fukuoka with zero middle-agent commission.
              </p>
            </div>

            {/* Point 4 */}
            <div className="bg-white p-7 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Personalized Founder & CEO Mentorship
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Direct profile evaluation, financial dossier verification, statement of purpose polishing, and consular interview preparation led by {contactInfo.founder}.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 10: CONTACT US (Direct Phone, Email & Address) */}
      {/* ======================================================== */}
      <section id="contact-section" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
            {/* Background Japanese Watermark */}
            <div className="absolute right-4 bottom-2 text-white/5 font-kanji font-bold text-[140px] pointer-events-none select-none">
              日本
            </div>

            <div className="relative max-w-3xl space-y-6">
              
              {/* Direct Contact Channel Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/30 text-red-300 text-xs sm:text-sm font-semibold border border-red-500/40">
                <span>{contactInfo.headOffice} • Founder & CEO: {contactInfo.founder}</span>
              </div>

              {/* Exact Suggested Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-white leading-tight">
                Start Your Journey to Japan Today
              </h2>

              {/* Exact Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Have questions about learning Japanese or studying in Japan? Contact {contactInfo.name} for verified information and guidance.
              </p>

              {/* Clean Contact Cards with Clickable tel: and mailto: */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Clickable India Phone Number */}
                <a
                  href={`tel:${contactInfo.indiaPhone}`}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-red-500/60 transition-all group flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-slate-400 block uppercase font-medium">India Contact Number</span>
                    <strong className="text-xl sm:text-2xl text-white font-bold group-hover:text-red-400 transition-colors">
                      {contactInfo.indiaPhone}
                    </strong>
                    <span className="text-xs text-slate-400 block mt-0.5">Click to call Jalandhar office</span>
                  </div>
                </a>

                {/* Clickable Japan WhatsApp */}
                <a
                  href={contactInfo.japanWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 sm:p-6 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-sky-500/60 transition-all group flex items-start gap-4"
                  title="WhatsApp Call / Chat Japan Office"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-600/20 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-slate-400 block uppercase font-medium">Japan Contact (WhatsApp)</span>
                    <strong className="text-xl sm:text-2xl text-white font-bold group-hover:text-sky-400 transition-colors">
                      {contactInfo.japanPhone}
                    </strong>
                    <span className="text-xs text-sky-400 block mt-0.5">Click to WhatsApp Japan Office</span>
                  </div>
                </a>

              </div>

              {/* Office Address & Visiting Hours */}
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-3 text-sm sm:text-base text-slate-300 font-normal">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold text-base">Office Address:</strong>
                    <span>{contactInfo.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2.5 border-t border-slate-700/60">
                  <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold text-base">In-Person Consultation Hours:</strong>
                    <span>Monday to Saturday: 9:00 AM – 6:00 PM (Sunday Off)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs sm:text-sm text-slate-400">
                Visiting in person? Our office is centrally situated near BMC Chowk in Jalandhar, easily accessible from the bus terminal and railway station.
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal: Pure photo, no bottom bar */}
      {selectedDoc && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedDoc(null)}
        >
          <div 
            className="relative max-w-3xl max-h-[92vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-800/80 text-white hover:bg-red-600 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-2 sm:p-4 max-h-[88vh] overflow-auto flex items-center justify-center">
              <img 
                src={selectedDoc.img} 
                alt={selectedDoc.title || "Document"} 
                className="max-h-[82vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
