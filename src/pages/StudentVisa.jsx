import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Globe, 
  Briefcase, 
  ShieldCheck, 
  Building2,
  BookOpen,
  X,
  Award,
  Cpu,
  Gamepad2,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { contactInfo } from '../data/content';

export const StudentVisa = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const featuredDocs = [
    { id: 1, type: "COE", title: "Certificate of Eligibility (COE)", image: "/images/coe/coe1.jpeg" },
    { id: 2, type: "Visa", title: "Japan Student Visa", image: "/images/visa/visa1.jpeg" },
    { id: 3, type: "COE", title: "Certificate of Eligibility (COE)", image: "/images/coe/coe2.jpeg" },
    { id: 4, type: "Visa", title: "Japan Student Visa", image: "/images/visa/visa2.jpeg" },
    { id: 5, type: "COE", title: "Certificate of Eligibility (COE)", image: "/images/coe/coe3.jpeg" },
    { id: 6, type: "Visa", title: "Japan Student Visa", image: "/images/visa/visa3.jpeg" }
  ];


  const eligibilityCriteria = [
    {
      title: "Academic Background",
      req: "Minimum 12 Years Formal Education",
      detail: "Completion of 10+2 (Higher Secondary), Diploma, or Bachelor's / Master's degree from a recognized Indian education board or university. Reasonable study gaps are accepted with valid employment or justification."
    },
    {
      title: "Japanese Language Proficiency",
      req: "Minimum 150 Hours Certificate or JLPT N5",
      detail: "Japanese Immigration requires proof of foundational Japanese language study. Passing JLPT N5, NAT-TEST 5Q, or an official 150-hour learning certificate from IndoJapan Japanese Language School satisfies this requirement."
    },
    {
      title: "Financial Sponsorship",
      req: "Genuine Financial Sponsor (Parents / Guardian)",
      detail: "Sponsor must demonstrate stable annual income (supported by 3 years of Income Tax Returns / J-Forms) and a bank savings balance certificate (approx. ₹15 to ₹20 Lakhs) as proof of tuition and living fee capability."
    },
    {
      title: "Genuine Intent & Clean Record",
      req: "Statement of Purpose (SOP) & Police Clearance",
      detail: "A well-crafted, honest Statement of Purpose explaining study motivations and future career plans in Japan, along with clear personal identity and police verification."
    }
  ];

  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="Japan Student Visa & Study in Japan Guide | IndoJapan Japanese Language School Jalandhar"
        description="Complete guide on Study in Japan, Japanese language school admissions, Certificate of Eligibility (COE), and Student Visa processing. Founder & CEO: NAVDEEP VIRK, Jalandhar Head Office."
      />

      {/* Hero Banner */}
      <section className="relative bg-white border-b border-slate-200/80 py-14 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 jp-dots-pattern opacity-40 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                <GraduationCap className="w-4 h-4 text-red-600" />
                <span className="font-bold">日本留学ビザ • 留学サポート</span>
                <span className="text-red-300">•</span>
                <span>{contactInfo.headOffice} • Founder & CEO: {contactInfo.founder}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Study in Japan: <span className="text-red-600">Complete Student Visa & COE Guide (日本留学)</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl">
                Your journey to studying and building a career in Japan starts here. Learn about accredited Japanese language schools, the Certificate of Eligibility (COE) process, financial sponsorship standards, and legal part-time work rights.
              </p>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/courses"
                  className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-sm transition-all flex items-center gap-2"
                >
                  <span>Explore Courses (JLPT N5-N1)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>Contact Visa Counseling Desk</span>
                </Link>

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
              </div>

              {/* Factual Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-700 border-t border-slate-100">
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Legal 28 Hrs/Wk Work</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>4 Yearly Intakes</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Accredited Schools</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>COE & Visa Guidance</span>
                </div>
              </div>
            </div>

            {/* Real Founder / Campus Spotlight Card */}
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
                    "We guide students with authentic information. Japan offers immense academic and career avenues, but the key is acquiring solid Japanese language competence before departure."
                  </p>
                  <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 space-y-1">
                    <span className="text-xs text-slate-400 uppercase font-mono block font-bold">Head Office Address:</span>
                    <strong className="text-white block text-sm font-bold">{contactInfo.address.full}</strong>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block text-center w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base transition-colors"
                >
                  Book Free In-Person Counseling
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: WHY INDIAN STUDENTS CHOOSE JAPAN */}
      <section className="py-16 lg:py-24 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Strong Alternative to Western Destinations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              Why Indian Students Choose Japan
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl mx-auto">
              Japan offers high job demand, low tuition fees, and clear visa pathways for Indian students, making it a strong alternative to overcrowded Western destinations. Because Japan is facing a rapidly aging population and a severe shortage of young talent, Japanese companies and the government are actively recruiting Indian graduates.
            </p>
          </div>

          {/* 5 Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 hover:border-red-400 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Affordable Tuition Fees</h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  National and public universities charge around <strong className="font-bold text-slate-900">₹3.12 Lakhs to ₹3.15 Lakhs per year</strong>, which is comparable to top Indian institutes and much cheaper than Western universities charging ₹25L–₹45L/year.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-red-600">
                ★ Low cost, high return on investment
              </div>
            </div>

            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Generous Scholarships</h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Programs like the <strong className="font-bold text-slate-900">MEXT Scholarship</strong> cover 100% of tuition fees, return airfare, and a monthly living stipend, while many universities offer <strong className="font-bold text-slate-900">50% to 100% tuition waivers</strong>.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-blue-600">
                ★ 100% funded MEXT & tuition waivers
              </div>
            </div>

            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">English-Taught Programs</h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Over <strong className="font-bold text-slate-900">300 degree tracks</strong> are taught completely in English, allowing students to enroll without prior Japanese language skills while studying Japanese after arrival.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-emerald-600">
                ★ 300+ English degree options
              </div>
            </div>

            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Favorable Work & Stay Visas</h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Students can work part-time up to 28 hours a week during their studies. After graduation, visas like the <strong className="font-bold text-slate-900">J-Find Visa</strong> (up to 2 years to job hunt) and the <strong className="font-bold text-slate-900">Highly Skilled Professional Visa</strong> provide smooth transitions to long-term residency.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-amber-600">
                ★ 28 hrs/wk work + J-Find 2-yr stay
              </div>
            </div>

            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all space-y-4 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Safety and Less Competition</h3>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Japan ranks consistently among the safest countries globally. Unlike Western markets saturated with international applicants facing strict lottery caps, Indians currently make up a very small percentage of foreign students in Japan, giving you a <strong className="font-bold text-slate-900">unique, decisive competitive advantage</strong>.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-sky-600">
                ★ High recruiter priority & low competition
              </div>
            </div>

          </div>

          {/* CAREER SCOPE SUBSECTION */}
          <div className="pt-6 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                Post-Graduation Avenues
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Career Scope for Indians in Japan
              </h3>
              <p className="text-base sm:text-lg text-slate-700 font-normal">
                Indian professionals and graduates are in high demand across several high-growth industries:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-lg sm:text-xl font-black text-slate-900">IT, AI, and Engineering</h4>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Japan is investing billions into semiconductors, robotics, AI, and IoT, creating massive demand for Indian tech and engineering talent.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg sm:text-xl font-black text-slate-900">Animation and Game Design</h4>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  As a global hub for gaming and anime, Japan offers strong career opportunities and competitive salaries in digital design and development.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg sm:text-xl font-black text-slate-900">International Business & Supply Chain</h4>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Multinational companies seek graduates with MBA or business degrees to bridge global markets, including growing India-Japan business ties.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-lg sm:text-xl font-black text-slate-900">Research and Emerging Tech</h4>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Fields like biotechnology, climate engineering, and space technology offer extensive research roles at top Japanese institutions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-7 rounded-2xl border border-slate-700 space-y-4 md:col-span-2 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-red-600 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                    Salary Standard
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white">Competitive Entry-Level Salaries</h4>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  Fresh graduates typically earn between <strong className="text-red-400 font-bold">₹17.5 Lakhs and ₹29.15 Lakhs per year</strong>, alongside strong corporate job security and permanent employment contracts.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    

      {/* SECTION: ELIGIBILITY & DOCUMENTATION CRITERIA */}
      <section className="py-16 lg:py-24 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Admission Criteria
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              General Eligibility for Japan Student Visa
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              The statutory requirements established by the Immigration Services Agency of Japan (出入国在留管理庁) for granting the Certificate of Eligibility (COE).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {eligibilityCriteria.map((crit, idx) => (
              <div key={idx} className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-3.5">
                  <span className="w-9 h-9 rounded-xl bg-red-600 text-white font-mono font-bold text-base flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">{crit.title}</h3>
                    <span className="text-xs sm:text-sm font-bold text-red-600">{crit.req}</span>
                  </div>
                </div>
                <p className="text-base text-slate-700 leading-relaxed font-normal pl-12">
                  {crit.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: COE & STUDENT VISA DIFFERENCE EXPLAINED */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                Official Immigration Concepts
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
                Understanding the Certificate of Eligibility (COE) vs Student Visa
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  A common point of confusion for Indian students is the difference between a <strong className="text-slate-900 font-bold">COE</strong> and the actual <strong className="text-slate-900 font-bold">Visa Stamp</strong>:
                </p>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded bg-red-600 text-white font-black text-xs font-mono">STEP 1</span>
                    <strong className="text-slate-900 text-base sm:text-lg font-black">Certificate of Eligibility (COE - 在留資格認定証明書)</strong>
                  </div>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    The COE is issued directly by regional immigration bureaus in Japan (such as Tokyo, Osaka, or Fukuoka Immigration). It certifies that your Japanese school acceptance and sponsor finances meet the statutory criteria for the "Student" (留学) status of residence.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded bg-slate-900 text-white font-black text-xs font-mono">STEP 2</span>
                    <strong className="text-slate-900 text-base sm:text-lg font-black">Student Visa Passport Stamp (査証)</strong>
                  </div>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    Once your Japanese school sends the original or digital approved COE to our Jalandhar center, we submit your passport and COE to the Embassy of Japan in New Delhi or the nearest VFS Global center to receive the official entry visa stamped in your passport.
                  </p>
                </div>
              </div>
            </div>

            {/* Document Preview Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={() => setSelectedImage("/images/coe/coe1.jpeg")}
                className="bg-white p-2.5 rounded-2xl border border-slate-200 cursor-pointer hover:border-red-400 hover:shadow-md transition-all group"
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-white relative flex items-center justify-center p-1">
                  <img 
                    src="/images/coe/coe1.jpeg" 
                    alt="Certificate of Eligibility (COE) Sample" 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-1 bg-red-600 text-white text-xs font-bold rounded">
                    Official COE
                  </span>
                </div>
              </div>

              <div 
                onClick={() => setSelectedImage("/images/visa/visa1.jpeg")}
                className="bg-white p-2.5 rounded-2xl border border-slate-200 cursor-pointer hover:border-red-400 hover:shadow-md transition-all group"
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-white relative flex items-center justify-center p-1">
                  <img 
                    src="/images/visa/visa1.jpeg" 
                    alt="Stamped Japan Student Visa in Passport" 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-1 bg-emerald-600 text-white text-xs font-bold rounded">
                    Stamped Visa
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: REAL VISAS & COE SHOWCASE GALLERY */}
      <section className="py-16 lg:py-24 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                <Award className="w-4 h-4" />
                <span>Document Proof</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
                Authentic Approved COEs & Stamped Visas
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Inspect authentic Certificates of Eligibility (COEs) and stamped visas issued to students guided through our Jalandhar center.
              </p>
            </div>

            <Link
              to="/gallery"
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shrink-0 shadow-xs transition-colors flex items-center gap-2"
            >
              <span>View All Approvals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Pure photo cards - no written text below */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredDocs.map((doc) => (
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
                    doc.type === 'COE' ? 'bg-red-600 text-white' : 'bg-emerald-600 text-white'
                  }`}>
                    {doc.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: PART-TIME WORK REGULATIONS (28 HOURS/WEEK) */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-amber-500/30">
              <Clock className="w-4 h-4" />
              <span>Japanese Ministry of Justice Regulations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight">
              Part-Time Work Rules for International Students (Arubaito)
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              International students holding a Student status of residence in Japan are permitted to work part-time upon obtaining the official <strong className="text-white font-bold">Permission to Engage in Activity Other than that Permitted under the Status of Residence (資格外活動許可)</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-red-400">Standard Semesters</span>
                <strong className="text-xl sm:text-2xl font-black text-white block">Maximum 28 Hours / Week</strong>
                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  During active class terms, students can legally work up to 28 hours per week across permitted employers.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-emerald-400">Official Vacations</span>
                <strong className="text-xl sm:text-2xl font-black text-white block">Up to 40 Hours / Week (8 Hrs/Day)</strong>
                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  During official summer, winter, and spring holidays designated by the school, students may work up to full-time 40 hours per week.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-950/40 border border-amber-600/40 text-sm sm:text-base text-amber-100 space-y-1.5 leading-relaxed font-normal">
              <strong className="font-bold text-amber-300 block">Strict Regulatory Restriction:</strong>
              <p>
                International students are strictly prohibited under Japanese Immigration Control Act from working in adult entertainment establishments, night clubs, hostess clubs, gambling or Pachinko parlors.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">Ready to Start Your Study in Japan Application?</h3>
            <p className="text-base sm:text-lg text-slate-300 font-normal">
              Visit Founder & CEO {contactInfo.founder} at our Jalandhar Head Office near BMC Chowk.
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
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-bold border border-white/20"
            >
              Contact Visa Desk
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
