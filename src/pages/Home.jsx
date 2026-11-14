import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Compass, 
  Users, 
  Award, 
  Building2, 
  Briefcase, 
  Train, 
  Home as HomeIcon,
  HelpCircle,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { contactInfo, jlptLevels, intakeData, studyProcessSteps, visaMilestones } from '../data/content';

export const Home = () => {
  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="Indo Japan Language School | Japanese Language & Japan Study Visa Guidance | Jalandhar, Punjab"
        description="Learn Japanese (JLPT N5 to N1) and receive authentic guidance for Japanese language school admission and student visa (COE) processing in Jalandhar, Punjab."
      />

      {/* ======================================================== */}
      {/* SECTION 1: HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative bg-white border-b border-slate-200/80 pt-12 pb-16 lg:pt-18 lg:pb-24 overflow-hidden">
        {/* Subtle Japanese Background Pattern */}
        <div className="absolute inset-0 jp-dots-pattern opacity-40 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Region & Mission Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-xs font-semibold text-red-700">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                <span>Japanese Language Institute & Study Visa Guidance • Jalandhar</span>
              </div>

              {/* Exact Suggested Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                Your Journey to Japan Starts Here
              </h1>

              {/* Exact Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Learn Japanese, explore study opportunities in Japan and get professional guidance throughout your Japanese language school admission and student visa journey.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/study-in-japan"
                  className="px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-red-600 hover:bg-red-700 shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Explore Study in Japan</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>Contact Us</span>
                </Link>
              </div>

              {/* Factual Core Highlights */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>JLPT N5 to N1 Curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Language School Admission</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Student Visa (COE) Guidance</span>
                </div>
              </div>

            </div>

            {/* Right Split Photography Column */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-red-100 to-slate-100 rounded-3xl transform rotate-1 pointer-events-none"></div>
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80"
                    alt="Mount Fuji and traditional Japanese pagoda in spring cherry blossom season"
                    className="w-full h-[380px] sm:h-[420px] object-cover"
                    loading="eager"
                  />
                  {/* Subtle info pill on image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-md">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-slate-900 block">Guidance for Studying in Japan</span>
                        <span className="text-[11px] text-slate-500">Tokyo, Osaka, Fukuoka & Major Cities</span>
                      </div>
                      <span className="px-2 py-1 bg-red-50 text-red-700 font-semibold rounded text-[10px] border border-red-200">
                        Intakes 2026–2027
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: ABOUT INDO JAPAN LANGUAGE SCHOOL */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Classroom Photography */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
                  alt="Teacher and students learning Japanese in an interactive classroom setting"
                  className="w-full h-[340px] sm:h-[380px] object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600">
                  <strong className="text-slate-900 font-semibold block">Focused Classroom Guidance in Jalandhar</strong>
                  Structured Japanese language learning with comprehensive reading, writing, and conversational drills.
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>About Our Institute</span>
              </div>

              {/* Exact Suggested Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Guiding Your Journey from India to Japan
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  <strong>Indo Japan Language School</strong> is an educational institute established in Jalandhar, Punjab, dedicated to providing authentic Japanese language education and comprehensive guidance for students aspiring to study in Japan.
                </p>
                <p>
                  We understand that studying abroad is a significant academic and life decision. Our objective is to guide students with factual, transparent information regarding Japanese language learning milestones (JLPT N5 to N1), Japanese language school admissions, Certificate of Eligibility (COE) procedures, and student visa application standards.
                </p>
                <p>
                  Rather than making exaggerated claims or unrealistic promises, we focus on genuine preparation: teaching proper Japanese language skills, helping students select suitable educational institutions, and ensuring documentation is compiled accurately in accordance with Japanese Immigration guidelines.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  <span>Read More About Our Background</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-slate-300">•</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
                >
                  <span>Visit Our Jalandhar Center</span>
                </Link>
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
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Educational Services
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Our Core Guidance Areas
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Clear, step-by-step guidance tailored to students planning to learn Japanese and pursue studies in Japan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Service 1: Japanese Language Learning */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Japanese Language Learning
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-500"></span>
                    <span>Introduction to Japanese script</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-500"></span>
                    <span>JLPT N5 to N1 level training</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-500"></span>
                    <span>Grammar, vocabulary & Kanji</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-500"></span>
                    <span>Reading & listening comprehension</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/japanese-language"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 pt-3 border-t border-slate-100"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service 2: Study in Japan */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Study in Japan
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                    <span>Japanese language schools</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                    <span>School selection guidance</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                    <span>Admission procedures & forms</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                    <span>Course & intake information</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/study-in-japan"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 pt-3 border-t border-slate-100"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service 3: Student Visa Assistance */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Student Visa Assistance
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-500"></span>
                    <span>Document checklist guidance</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-500"></span>
                    <span>Certificate of Eligibility (COE) info</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-500"></span>
                    <span>Application dossier preparation</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-500"></span>
                    <span>VFS & Embassy process support</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/japan-student-visa"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 pt-3 border-t border-slate-100"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service 4: Admission and Intake Guidance */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Admission & Intake Guidance
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                    <span>April intake (2-year major track)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                    <span>July intake (1.9-year summer track)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                    <span>October intake (1.5-year major track)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                    <span>January intake (1.3-year track)</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/study-in-japan#intakes"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 pt-3 border-t border-slate-100"
              >
                <span>View Intakes</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                Language Proficiency Levels
              </span>
              {/* Exact Suggested Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Start Learning Japanese – From Beginner to Advanced
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                The Japanese-Language Proficiency Test (JLPT) is the official standardized exam measuring Japanese language competency for non-native speakers. We guide students systematically through each stage.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/japanese-language"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <span>Explore Japanese Language</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 5 Attractive Level Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
            {jlptLevels.map((lvl) => (
              <div 
                key={lvl.level}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-red-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 text-white">
                      {lvl.level}
                    </span>
                    <span className="text-[10px] font-semibold text-red-600 uppercase">
                      {lvl.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">{lvl.title}</h3>
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">{lvl.studyHours} • {lvl.kanjiCount}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lvl.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                  <span className="font-semibold text-slate-700 block">Focus Areas:</span>
                  <p>Hiragana, Katakana, Vocabulary, Reading & Listening.</p>
                </div>
              </div>
            ))}
          </div>

          {/* Japanese Language Learning Photography Banner */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-7 p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold text-red-600 uppercase">Comprehensive Pedagogy</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                What Students Learn in Our Language Program
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our classes cover reading, writing, and communication from day one:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700 font-medium">
                <span className="p-2 bg-white rounded-lg border border-slate-200">✓ Hiragana & Katakana</span>
                <span className="p-2 bg-white rounded-lg border border-slate-200">✓ Essential Kanji</span>
                <span className="p-2 bg-white rounded-lg border border-slate-200">✓ Daily Vocabulary</span>
                <span className="p-2 bg-white rounded-lg border border-slate-200">✓ Structured Grammar</span>
                <span className="p-2 bg-white rounded-lg border border-slate-200">✓ Listening Practice</span>
                <span className="p-2 bg-white rounded-lg border border-slate-200">✓ Speaking & Kaiwa</span>
              </div>
            </div>

            <div className="md:col-span-5 h-[240px] md:h-full">
              <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
                alt="Student studying Japanese writing with notebook, textbook, and stationery"
                className="w-full h-full object-cover"
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
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Study Pathways in Japan
            </span>
            {/* Exact Suggested Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Make Your Dream of Studying in Japan a Reality
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              International students commonly begin their higher education journey in Japan through accredited Japanese language institutes before transitioning to universities or vocational careers.
            </p>
          </div>

          {/* Educational Explanation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900">What is a Japanese Language School?</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Japanese language schools (Nihongo Gakko) are accredited educational institutions in Japan designed specifically to teach Japanese language and cultural adaptation to international students on a full-time Student Visa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900">Course Duration & Intakes</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Courses range from 1 year to 2 years depending on the enrollment intake (April, July, October, or January). During this period, students build fluency to attain JLPT N2 or N1 required for university or employment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900">General Eligibility</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Applicants must have completed a minimum of 12 years of formal education (10+2 / High School), possess basic Japanese language training (minimum 150 hours or JLPT N5), and have a genuine financial sponsor.
              </p>
            </div>
          </div>

          {/* Step-by-Step Visual Process (1 to 8 Steps) */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Step-by-Step Admission & Visa Process
                </h3>
                <p className="text-xs text-slate-500">
                  How an international student progresses from consultation to arrival in Japan.
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-red-50 text-red-700 rounded-lg self-start sm:self-auto">
                Typical Timeline: 6 to 8 Months
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {studyProcessSteps.map((step) => (
                <div key={step.step} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-red-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                    0{step.step}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Mandatory Regulatory Disclaimer */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">Important Regulatory Note:</strong>
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
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                Official Visa Guidelines
              </span>
              {/* Exact Suggested Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Understanding the Japan Student Visa Process
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                Navigating the Japanese immigration documentation framework requires meticulous preparation and complete transparency. Here is a clear breakdown of how the process works.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/japan-student-visa"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-2"
              >
                <span>Read Full Visa Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Visa Milestones Detailed Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {visaMilestones.map((milestone, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <h3 className="text-base font-bold text-slate-900">{milestone.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
                  {milestone.detail}
                </p>
              </div>
            ))}

            {/* Crucial Distinctions Card */}
            <div className="bg-red-50/50 p-6 rounded-2xl border border-red-200 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-600" />
                <h3 className="text-base font-bold text-slate-900">Difference Between COE and Student Visa</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-7">
                <strong>COE (Certificate of Eligibility):</strong> Issued inside Japan by the Ministry of Justice / Immigration Services Agency. It verifies you satisfy the statutory criteria for the "Student" status of residence.
                <br /><br />
                <strong>Student Visa:</strong> The actual stamp placed into your passport by the Embassy of Japan or Consulate in India after presenting the approved COE through VFS Global.
              </p>
            </div>
          </div>

          {/* Visa Counseling Photography & Disclaimer Box */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 rounded-xl overflow-hidden h-[180px]">
              <img
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80"
                alt="Professional education counselor reviewing Japanese visa documents with student"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-8 space-y-2 text-xs text-slate-600 leading-relaxed">
              <span className="font-bold text-slate-900 uppercase text-[11px] block text-red-600">
                Official Verification Disclaimer
              </span>
              <p>
                Immigration regulations, documentary requirements, and processing fees are subject to revision by Japanese authorities. Applicants must ensure all submitted documents (financial, educational, and personal) are genuine, accurate, and independently verifiable.
              </p>
              <p className="font-medium text-slate-800">
                Indo Japan Language School does not promise or guarantee Certificate of Eligibility (COE) or visa approval. We assist with factual information and administrative preparation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 7: JAPAN ADMISSION INTAKES */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-22 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Academic Timelines
            </span>
            {/* Exact Suggested Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Choose Your Japan Language School Intake
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Japanese language schools admit international students in four seasonal intakes. Preparation and application deadlines are generally several months before the intake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {intakeData.map((item) => (
              <div 
                key={item.intake}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                      {item.season}
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {item.courseDuration.split(' ')[0]} {item.courseDuration.split(' ')[1]}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{item.intake}</h3>
                    <p className="text-xs text-slate-500 mt-1">Course Duration: <strong>{item.courseDuration}</strong></p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Recommended Prep:</span>
                      <strong className="text-slate-800">{item.recommendedPreparation}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">School Application Deadline:</span>
                      <strong className="text-red-700 font-mono">{item.schoolDeadline}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">COE Result Issued:</span>
                      <strong className="text-slate-800">{item.coeResult}</strong>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.idealFor}
                  </p>
                </div>

                <Link
                  to="/study-in-japan#intakes"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 pt-3 border-t border-slate-100"
                >
                  <span>Explore Intake Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            * Note: Available intakes, course duration and application deadlines vary by educational institution in Japan.
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 8: LIFE AND OPPORTUNITIES IN JAPAN */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-22 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Student Environment
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Life and Opportunities in Japan
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Understanding daily living, culture, transportation, and legal regulations for international students residing in Japan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Student Life & Culture */}
            <div className="bg-[#fafbfc] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Student Life & Japanese Culture</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Japan provides a remarkably safe, polite, and culturally rich environment. International students experience daily language immersion, seasonal festivals, polite community customs, and a disciplined academic culture.
              </p>
            </div>

            {/* Accommodation & Living */}
            <div className="bg-[#fafbfc] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                <HomeIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Accommodation & Housing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Most language schools provide or assist with student dormitories, shared houses (guesthouses), or private studio apartments. Living spaces are compact, modern, and typically located near train stations.
              </p>
            </div>

            {/* Public Transportation */}
            <div className="bg-[#fafbfc] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <Train className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Public Transportation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Japan possesses one of the world's most punctual and extensive public transit systems. Trains, subways, and city buses are the primary mode of travel, with discounted student commuter passes (Tsukin Teiki) available.
              </p>
            </div>

            {/* Part-Time Work Regulations (MANDATORY REQUIREMENT) */}
            <div className="bg-[#fafbfc] p-6 rounded-2xl border border-slate-200 space-y-3 md:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Part-Time Work Rules for International Students (Arubaito)
              </h3>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                <p>
                  International students on a Student Visa may engage in part-time work only after obtaining official permission: the <strong>Permission to Engage in Activity other than that Permitted under the Status of Residence Previously Granted (Shikakugai Katsudo Kyoka)</strong>, typically requested upon arrival at Japanese airports.
                </p>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                  <p><strong>Permitted Hours:</strong> Maximum <strong>28 hours per week</strong> during standard school semesters, and up to <strong>40 hours per week</strong> (8 hours/day) during official long school vacations.</p>
                  <p><strong>Restricted Sectors:</strong> Students are strictly prohibited by Japanese immigration law from working in adult entertainment establishments, bars, gambling parlors, or any businesses affecting public morals.</p>
                </div>
                <p className="text-[11px] text-slate-500">
                  * Note: Part-time work is meant to supplement living expenses, not replace primary financial sponsorship. We do not make unrealistic income or job placement guarantees.
                </p>
              </div>
            </div>

            {/* Further Education & Career Pathway */}
            <div className="bg-[#fafbfc] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Education & Career Pathways</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                After completing language school, students who attain JLPT N2/N1 can transition to Japanese universities (Undergraduate / Master's), specialized vocational colleges (Senmon Gakko), or apply for work visas (Engineer/Specialist in Humanities/International Services or SSW).
              </p>
            </div>

          </div>

          {/* Life in Japan Photography Gallery Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden h-[200px] border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80"
                alt="Tokyo city streets, pedestrian crossing, and modern architecture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-[200px] border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=800&q=80"
                alt="Japanese suburban street with traditional and modern residential housing"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-[200px] border border-slate-200 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=800&q=80"
                alt="Japanese public garden and serene cultural environment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 8.5: STUDENT VISA & CAMPUS SUCCESS GALLERY SHOWCASE */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Verified Student Success</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Student Visas, COE Grants & Campus Gallery
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Take a look at authentic student visa approvals, COE clearances, and daily classroom training at our Civil Lines Jalandhar center.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shrink-0 shadow-xs transition-all"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Featured Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {/* Card 1: Visa Approval */}
            <div className="bg-[#fafbfc] rounded-2xl border border-slate-200 overflow-hidden shadow-2xs group flex flex-col justify-between">
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                  alt="Student holding Japan visa approval and passport"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/95 text-slate-900 text-xs font-bold shadow-xs flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                  <span>Visa Granted</span>
                </span>
              </div>
              <div className="p-5 space-y-2">
                <span className="text-xs font-semibold text-slate-500">Student from Jalandhar • April Intake</span>
                <h4 className="text-base font-bold text-slate-900">Japan Student Visa Granted — Tokyo Academy</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Smooth visa issuance after clearing JLPT N5 language classes and complete sponsor verification.
                </p>
              </div>
            </div>

            {/* Card 2: Classroom Batch */}
            <div className="bg-[#fafbfc] rounded-2xl border border-slate-200 overflow-hidden shadow-2xs group flex flex-col justify-between">
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                  alt="Students studying in classroom in Jalandhar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/95 text-slate-900 text-xs font-bold shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Jalandhar Classes</span>
                </span>
              </div>
              <div className="p-5 space-y-2">
                <span className="text-xs font-semibold text-slate-500">Civil Lines Center • Daily Batch</span>
                <h4 className="text-base font-bold text-slate-900">JLPT N5 & N4 Language Training</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Interactive classroom instruction covering Hiragana, Katakana, Kanji, and conversational Kaiwa.
                </p>
              </div>
            </div>

            {/* Card 3: Japan Campus Life */}
            <div className="bg-[#fafbfc] rounded-2xl border border-slate-200 overflow-hidden shadow-2xs group flex flex-col justify-between">
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80"
                  alt="Students on Japanese university and language school campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/95 text-slate-900 text-xs font-bold shadow-xs flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-800" />
                  <span>Campus in Japan</span>
                </span>
              </div>
              <div className="p-5 space-y-2">
                <span className="text-xs font-semibold text-slate-500">Higher Education Pathways</span>
                <h4 className="text-base font-bold text-slate-900">University & College Progression</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Language school graduates advancing into Japanese universities and specialized vocational degrees.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 9: WHY CHOOSE INDO JAPAN LANGUAGE SCHOOL */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-22 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Our Principles
            </span>
            {/* Exact Suggested Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Why Choose Indo Japan Language School?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We uphold educational clarity and honest advisory for students in Jalandhar and across Punjab.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Point 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Clear Information and Guidance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe in factual transparency. We explain every rule, expense, and timeline honestly without making unverified promises or hidden claims.
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Japanese Language Learning Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Structured curriculum aligned with the official JLPT standards (N5 to N1), emphasizing solid phonetic foundations, Kanji comprehension, and practical listening.
              </p>
            </div>

            {/* Point 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Japan Admission Assistance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Guidance on choosing accredited Japanese language institutes suited to your academic background, city preferences, and career plans.
              </p>
            </div>

            {/* Point 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Student Visa Process Guidance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Systematic compilation of the Certificate of Eligibility (COE) petition, sponsor financial documents, translation guidance, and consular submission checks.
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
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 text-red-300 text-xs font-semibold border border-red-500/40">
                <span>Direct Contact Channel • Jalandhar Office</span>
              </div>

              {/* Exact Suggested Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Start Your Journey to Japan Today
              </h2>

              {/* Exact Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Have questions about learning Japanese or studying in Japan? Contact Indo Japan Language School for information and guidance.
              </p>

              {/* Clean Contact Cards with Clickable tel: and mailto: */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Clickable Phone Number */}
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                  className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-red-500/60 transition-all group flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-medium">Telephone / WhatsApp</span>
                    <strong className="text-lg text-white font-semibold group-hover:text-red-400 transition-colors">
                      {contactInfo.phoneDisplay}
                    </strong>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Click to call directly</span>
                  </div>
                </a>

                {/* Clickable Email Address */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-red-500/60 transition-all group flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-medium">Official Inquiry Email</span>
                    <span className="text-sm sm:text-base text-white font-medium break-all group-hover:text-blue-300 transition-colors">
                      {contactInfo.email}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Click to compose email</span>
                  </div>
                </a>

              </div>

              {/* Office Address & Visiting Hours */}
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Office Address:</strong>
                    <span>{contactInfo.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-700/60">
                  <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">In-Person Consultation Hours:</strong>
                    <span>{contactInfo.operatingHours.weekdays} | {contactInfo.operatingHours.saturday}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                Visiting in person? Our office is centrally situated near BMC Chowk in Jalandhar, easily accessible from the bus terminal and railway station.
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
