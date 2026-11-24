import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  ArrowRight, 
  Globe, 
  BookOpen, 
  Users, 
  HeartHandshake,
  X,
  ZoomIn,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { contactInfo, sswIndustries } from '../data/content';

export const WorkInJapan = () => {
  const [activeTab, setActiveTab] = useState('ssw');
  const [selectedImage, setSelectedImage] = useState(null);

  const realApprovals = [
    { id: 1, title: "Certificate of Eligibility (COE)", image: "/images/coe/coe4.jpeg", cat: "COE" },
    { id: 2, title: "Japan Stamped Visa", image: "/images/visa/visa4.jpeg", cat: "Visa" },
    { id: 3, title: "Certificate of Eligibility (COE)", image: "/images/coe/coe5.jpeg", cat: "COE" },
    { id: 4, title: "Japan Stamped Visa", image: "/images/visa/visa5.jpeg", cat: "Visa" }
  ];

  const comparisonRows = [
    {
      feature: "Primary Objective",
      student: "Higher Education & Japanese Language Mastery",
      ssw: "Direct Full-Time Employment in Designated Industries",
      titp: "Technical Skill Acquisition & On-the-job Training"
    },
    {
      feature: "Typical Duration",
      student: "1 to 2 Years (Language School), then Univ/Career",
      ssw: "SSW (i): 5 Years | SSW (ii): Indefinite Renewal",
      titp: "3 to 5 Years (Can convert to SSW 1 afterwards)"
    },
    {
      feature: "Japanese Language Requirement",
      student: "JLPT N5 / 150 Hours for basic entry",
      ssw: "JLPT N4 or JFT-Basic (A2 level)",
      titp: "JLPT N5 or basic elementary Japanese"
    },
    {
      feature: "Skill Test Requirement",
      student: "None (Admission based on school screening)",
      ssw: "Industry-specific Prometric Skill Evaluation Test",
      titp: "Interview & basic trade aptitude test"
    },
    {
      feature: "Monthly Remuneration",
      student: "Part-time (28 hrs/wk): ¥100,000–¥140,000/mo",
      ssw: "Full-time: ¥180,000–¥260,000+/mo (₹1.1–1.6L+)",
      titp: "Stipend/Wage: ¥150,000–¥190,000/mo"
    },
    {
      feature: "Bring Family (Spouse/Children)",
      student: "Possible during university/specialized degree",
      ssw: "No in SSW 1; YES in SSW 2 (Indefinite)",
      titp: "Not permitted during internship term"
    },
    {
      feature: "Pathway to Permanent Residency",
      student: "Yes (Convert to work visa post-graduation)",
      ssw: "Yes (Eligible after advancing to SSW 2)",
      titp: "Must convert to SSW or work visa first"
    }
  ];

  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="Work in Japan: SSW & TITP Visa Guide | IndoJapan Japanese Language School Jalandhar"
        description="Comprehensive guide on Specified Skilled Worker (SSW Tokutei Ginou) and TITP Technical Intern Training Program visas in Japan. 12 designated industries, JLPT N4 coaching at Jalandhar Head Office. Founder & CEO: NAVDEEP VIRK."
      />

      {/* Hero Banner */}
      <section className="relative bg-white border-b border-slate-200/80 py-14 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 jp-dots-pattern opacity-40 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                <Briefcase className="w-4 h-4 text-red-600" />
                <span className="font-bold">特定技能 • 技能実習制度</span>
                <span className="text-red-300">•</span>
                <span>{contactInfo.headOffice} • Founder & CEO: {contactInfo.founder}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Work in Japan: <span className="text-red-600">SSW & TITP Visa Programs (日本就労ビザ)</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl">
                Explore official employment pathways to Japan. Learn about the <strong>Specified Skilled Worker (SSW / 特定技能)</strong> and <strong>Technical Intern Training Program (TITP / 技能実習)</strong>, requirements (JLPT N4 & skill tests), salary standards, and 12 designated sectors.
              </p>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={`tel:${contactInfo.indiaPhone}`}
                  className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-sm transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {contactInfo.indiaPhone}</span>
                </a>

                <a
                  href={contactInfo.japanWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 font-bold text-sm sm:text-base transition-all flex items-center gap-2"
                  title="WhatsApp Call / Chat Japan Office"
                >
                  <Globe className="w-4 h-4 text-sky-600" />
                  <span>WhatsApp Japan: {contactInfo.japanPhone}</span>
                </a>

                <Link
                  to="/courses"
                  className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm sm:text-base transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-slate-700" />
                  <span>JLPT N4 Preparation</span>
                </Link>
              </div>

              {/* Factual Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-700 border-t border-slate-100">
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Equal Pay to Japanese Staff</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>12 Approved Industries</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>JLPT N4 / JFT-Basic</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Health Insurance & Pension</span>
                </div>
              </div>
            </div>

            {/* Founder Spotlight Card */}
            <div className="lg:col-span-4">
              <div className="bg-slate-900 text-white p-6 sm:p-7 rounded-3xl border border-slate-800 shadow-xl space-y-5">
                <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-red-500/80 shrink-0">
                    <img 
                      src="/images/navdeepvirk/n2.jpeg" 
                      alt="Founder & CEO NAVDEEP VIRK" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <strong className="text-white block font-black text-lg">{contactInfo.founder}</strong>
                    <span className="text-xs sm:text-sm text-red-400 font-bold block">{contactInfo.founderTitle}</span>
                    <span className="text-xs text-slate-400 font-medium">IndoJapan Language School</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-200 leading-relaxed font-normal">
                  <p>
                    "Japan's labor market offers unprecedented legal opportunities for skilled young Indians. However, clearing the required JLPT N4 exam and sector skill evaluations is essential. We train students rigorously in Jalandhar."
                  </p>
                  <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 space-y-1">
                    <span className="text-xs text-slate-400 uppercase font-mono block font-bold">Jalandhar Head Office:</span>
                    <strong className="text-white block text-sm font-bold">{contactInfo.address.full}</strong>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block text-center w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base transition-colors"
                >
                  Visit Jalandhar Head Office
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Program Selector Tabs */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex border-b border-slate-200 -mb-px">
            <button
              onClick={() => setActiveTab('ssw')}
              className={`py-4 px-6 sm:px-8 text-sm sm:text-base font-bold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'ssw'
                  ? 'border-red-600 text-red-600 bg-red-50/30'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Specified Skilled Worker (SSW / 特定技能)</span>
            </button>
            <button
              onClick={() => setActiveTab('titp')}
              className={`py-4 px-6 sm:px-8 text-sm sm:text-base font-bold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'titp'
                  ? 'border-red-600 text-red-600 bg-red-50/30'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Technical Intern Training Program (TITP / 技能実習)</span>
            </button>
          </div>
        </div>
      </section>

      {/* SSW DETAILS TAB */}
      {activeTab === 'ssw' && (
        <section className="py-16 lg:py-24 bg-[#fafbfc] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                Immigration Status of Residence
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
                Specified Skilled Worker (SSW - 特定技能)
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Introduced by the Government of Japan to welcome foreign nationals who possess specific professional skills and Japanese language ability to work in industries experiencing critical workforce shortages.
              </p>
            </div>

            {/* SSW OFFICIAL INFOGRAPHIC SHOWCASE */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-red-200 shadow-md space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
                <div className="space-y-2.5 max-w-2xl">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                    <Sparkles className="w-4 h-4" />
                    <span>Official Immigration Infographic</span>
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                    Specified Skilled Worker (SSW) 19 Sectors & Application Roadmap
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    Review all official designated industries in Japan and the 4 fundamental milestones from skills assessment to visa issuance. Click the infographic below to enlarge in high resolution.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage('/images/ssw.jpeg')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-xs transition-colors shrink-0 cursor-pointer self-start md:self-auto"
                >
                  <ZoomIn className="w-4 h-4 text-red-400" />
                  <span>Click to Enlarge Infographic</span>
                </button>
              </div>

              {/* Infographic Photo Card with Lightbox Trigger */}
              <div 
                onClick={() => setSelectedImage('/images/ssw.jpeg')}
                className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer group shadow-sm hover:shadow-xl hover:border-red-500 transition-all"
              >
                <img 
                  src="/images/ssw.jpeg" 
                  alt="Specified Skilled Worker SSW 19 Designated Industries and Basic Steps in Japan"
                  className="w-full h-auto max-h-[700px] object-contain mx-auto block group-hover:scale-[1.01] transition-transform duration-300"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-5 py-2.5 rounded-full bg-slate-900/90 text-white text-sm font-bold shadow-lg flex items-center gap-2">
                    <ZoomIn className="w-4 h-4 text-red-400" />
                    <span>Click to View Full Size</span>
                  </span>
                </div>
              </div>

              {/* 4 Basic Steps Highlight Strip (Matching bottom of ssw.jpeg) */}
              <div className="pt-2 space-y-3">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700 block">
                  The 4 Standard Steps to Secure an SSW Visa:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  
                  <div className="p-5 rounded-2xl bg-red-50 border border-red-200 space-y-2">
                    <div className="flex items-center gap-2 text-red-700 font-black text-base sm:text-lg">
                      <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-mono font-bold">1</span>
                      <span>Skills Test</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                      Pass the Prometric Skill Evaluation Test for your chosen industry (conducted at official test centers in India or Japan).
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
                    <div className="flex items-center gap-2 text-blue-700 font-black text-base sm:text-lg">
                      <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-mono font-bold">2</span>
                      <span>Japanese Test</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                      Attain minimum <strong>JLPT N4</strong> or <strong>JFT-Basic (A2 level)</strong> certification proving conversational everyday Japanese.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 font-black text-base sm:text-lg">
                      <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-mono font-bold">3</span>
                      <span>Job Offer</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                      Interview and receive an official direct employment contract from an accredited Japanese accepting company with equal salary to Japanese workers.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                    <div className="flex items-center gap-2 text-amber-800 font-black text-base sm:text-lg">
                      <span className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs font-mono font-bold">4</span>
                      <span>SSW Visa</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                      Company files Certificate of Eligibility (COE) with Japanese Immigration; visa stamped at the Embassy of Japan / VFS Global.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SSW 1 vs SSW 2 Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                  <span>Entry Level Work Visa</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Specified Skilled Worker (i) — SSW 1
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  For foreign nationals with considerable operational knowledge or practical experience in designated sectors.
                </p>

                <div className="pt-2 space-y-3.5 text-base text-slate-800 font-normal">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span><strong>Period of Stay:</strong> Renewed annually for up to <strong>5 years in total</strong>.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span><strong>Language Level:</strong> JLPT N4 or JFT-Basic (A2 level).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span><strong>Skill Exam:</strong> Passing the Prometric Skill Evaluation test for your sector.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span><strong>Support Organization:</strong> Registered Support Organization (RSO) assists with housing and life setup.</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-emerald-300">
                  <span>Advanced Long-Term Route</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Specified Skilled Worker (ii) — SSW 2
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  For experienced professionals possessing proficient supervisor-level skills in designated industries.
                </p>

                <div className="pt-2 space-y-3.5 text-base text-slate-800 font-normal">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Period of Stay:</strong> <strong>Indefinite renewals</strong> (no 5-year cap).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Family Accompaniment:</strong> Permitted to bring spouse and dependent children to Japan.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Permanent Residency:</strong> Direct pathway to applying for Japanese PR after required residency.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Supervisor Pay:</strong> Higher corporate managerial scale salaries.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* 12 DESIGNATED INDUSTRIES GRID */}
            <div className="space-y-6">
              <div className="text-left space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  Key Designated SSW Industries in Japan
                </h3>
                <p className="text-base sm:text-lg text-slate-700 font-normal">
                  These sectors accept foreign workers under the bilateral memorandum of cooperation between India and Japan.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sswIndustries && sswIndustries.map((ind) => (
                  <div key={ind.id} className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs hover:border-red-400 hover:shadow-md transition-all space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-lg bg-red-50 text-red-600 font-mono font-black text-sm flex items-center justify-center">
                        {ind.id}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-kanji font-bold">{ind.japanese}</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-black text-slate-900">{ind.title}</h4>
                    <p className="text-base text-slate-700 leading-relaxed font-normal">{ind.desc}</p>
                    <div className="pt-2 text-xs sm:text-sm font-bold text-slate-700 border-t border-slate-100 flex items-center justify-between">
                      <span>Requirement:</span>
                      <span className="text-red-600 font-mono font-black">{ind.tests}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* TITP DETAILS TAB */}
      {activeTab === 'titp' && (
        <section className="py-16 lg:py-24 bg-[#fafbfc] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                Technical Training Route
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
                Technical Intern Training Program (TITP - Ginou Jisshusei)
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                The Technical Intern Training Program was established by the Japanese Government to foster international cooperation by transferring advanced technical skills, industrial technology, and know-how to developing countries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Internship Duration</h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Structured in 3 phases: Technical Intern Training (i) for 1 year, (ii) for 2 years, and (iii) for 2 years (total up to 5 years upon passing practical trade evaluations).
                </p>
              </div>

              <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Transition to SSW 1</h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Trainees who satisfactorily complete 3 years of TITP (Training ii) can transition directly to a <strong>Specified Skilled Worker (SSW 1)</strong> visa without taking the Prometric skill test or JLPT exam!
                </p>
              </div>

              <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Legal Wage Protections</h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Japanese labor standards acts apply to all TITP interns. Trainees receive standard hourly wages, overtime pay, occupational accident insurance, health insurance, and welfare pension.
                </p>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* COMPREHENSIVE COMPARISON TABLE */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Pathways Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              Student Visa vs SSW Work Visa vs TITP
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Clear side-by-side analysis to help you decide which pathway aligns best with your academic background and career goals.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 sm:p-5 font-black border-b border-slate-800">Key Criteria</th>
                  <th className="p-4 sm:p-5 font-black border-b border-slate-800 text-red-400">Japan Student Visa</th>
                  <th className="p-4 sm:p-5 font-black border-b border-slate-800 text-sky-400">SSW Work Visa (Tokutei Ginou)</th>
                  <th className="p-4 sm:p-5 font-black border-b border-slate-800 text-emerald-400">TITP Internship Program</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-slate-700 font-normal">{row.student}</td>
                    <td className="p-4 sm:p-5 text-slate-800 font-semibold">{row.ssw}</td>
                    <td className="p-4 sm:p-5 text-slate-700 font-normal">{row.titp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* REAL DOCUMENT APPROVALS STRIP */}
      <section className="py-16 lg:py-24 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                <Award className="w-4 h-4" />
                <span>Verified Approvals</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
                Authentic Japanese Visa Approvals & COEs
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Genuinely stamped visas and approved Certificates of Eligibility (COEs).
              </p>
            </div>

            <Link
              to="/gallery"
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shrink-0 shadow-xs transition-colors flex items-center gap-2"
            >
              <span>View All Approvals in Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {realApprovals.map((doc) => (
              <div 
                key={doc.id}
                onClick={() => setSelectedImage(doc.image)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-pointer hover:border-red-400 hover:shadow-md transition-all group p-1.5"
              >
                <div className="aspect-[3/4] bg-white rounded-xl p-1 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src={doc.image} 
                    alt={doc.title} 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <span className={`absolute top-2 left-2 px-2 py-0.5 text-xs font-bold rounded ${
                    doc.cat === 'COE' ? 'bg-red-600 text-white' : 'bg-emerald-600 text-white'
                  }`}>
                    {doc.cat}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW INDOJAPAN HELPS */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Jalandhar Training & Support
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              How IndoJapan Prepares You for Japan Employment
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Direct guidance from Founder & CEO NAVDEEP VIRK and experienced Japanese instructors at our Jalandhar center.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            <div className="bg-[#fafbfc] p-7 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">JLPT N4 & JFT-Basic Coaching</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Dedicated batches covering grammar, listening, Kanji, and sector-specific Japanese vocabulary needed to pass the required A2-level language test.
              </p>
            </div>

            <div className="bg-[#fafbfc] p-7 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">Skill Test Prep & Registration</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Step-by-step guidance on booking Prometric skill test slots in India, textbook study resources, and mock tests for Nursing Care, Food Service, and other trades.
              </p>
            </div>

            <div className="bg-[#fafbfc] p-7 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">Interview & Culture Training</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Comprehensive training on Japanese business etiquette (Aisatsu, Hou-Ren-Sou, bowing customs), Japanese resume (Rirekisho) writing, and live video mock interviews.
              </p>
            </div>

          </div>

          {/* Schedule Strip */}
          <div className="mt-12 p-7 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs sm:text-sm text-red-400 font-extrabold uppercase tracking-wider">Daily Classes</span>
              <h4 className="text-xl sm:text-2xl font-black text-white">Morning (10 AM–12 PM) & Afternoon (1 PM–3 PM) Batches</h4>
              <p className="text-sm sm:text-base text-slate-300 font-normal">Monday to Saturday (Sunday Off) • Offline at BMC Chowk & Live Online</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${contactInfo.indiaPhone}`}
                className="px-6 sm:px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base transition-colors"
              >
                Call: {contactInfo.indiaPhone}
              </a>
              <Link
                to="/courses"
                className="px-6 sm:px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 transition-colors"
              >
                Explore Courses
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Regulatory Notice Banner */}
      <section className="py-8 bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm sm:text-base text-amber-950 flex items-start gap-3.5 font-normal leading-relaxed">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-amber-900">Employment & Immigration Disclaimer:</strong> IndoJapan Japanese Language School provides language education, skill exam coaching, and transparent immigration informational guidance. Employment contracts and Certificates of Eligibility are granted exclusively by Japanese accepting companies and the Immigration Services Agency of Japan. We do not make false employment guarantees or charge unverified placement fees.
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* DIRECT WORK IN JAPAN INQUIRY & ENROLLMENT CTA */}
      {/* ======================================================== */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs sm:text-sm text-red-400 font-extrabold uppercase tracking-wider block">
              SSW & TITP Career Pathway • 就労支援
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Ready to Start Your SSW or TITP Journey to Japan?
            </h3>
            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl">
              Master Japanese (JLPT N4 / JFT-Basic), prepare for Prometric skill evaluation exams, and receive authentic guidance from Founder & CEO {contactInfo.founder} at our Jalandhar Head Office.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={`tel:${contactInfo.indiaPhone}`}
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-bold flex items-center gap-2 shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {contactInfo.indiaPhone}</span>
            </a>
            <a
              href={contactInfo.japanWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-sm sm:text-base font-bold flex items-center gap-2 shadow-xs transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>WhatsApp Fukuoka Office</span>
            </a>
            <Link
              to="/courses"
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm sm:text-base font-bold border border-slate-700 transition-colors"
            >
              JLPT N4 Batches
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal: Pure photo, no bottom bar */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-3xl max-h-[92vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-800/80 text-white hover:bg-red-600 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-2 sm:p-4 max-h-[88vh] overflow-auto flex items-center justify-center">
              <img 
                src={selectedImage} 
                alt="Document preview" 
                className="max-h-[82vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
