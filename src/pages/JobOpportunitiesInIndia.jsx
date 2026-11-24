import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Search, 
  MapPin, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Phone, 
  Globe, 
  TrendingUp,
  Car,
  Laptop,
  Building,
  Pill,
  FlaskConical,
  HardHat,
  Truck,
  Coins,
  Factory,
  Clock,
  ChevronRight,
  Filter
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { contactInfo } from '../data/content';
import { japaneseCompanies, companyCategories, careerBenefitsInIndia } from '../data/japaneseCompanies';

export const JobOpportunitiesInIndia = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');

  // Distinct major locations for quick filter
  const majorLocations = [
    { id: 'all', label: 'All Regions' },
    { id: 'gurugram', label: 'Gurugram / NCR' },
    { id: 'bengaluru', label: 'Bengaluru / Karnataka' },
    { id: 'mumbai', label: 'Mumbai / Pune' },
    { id: 'chennai', label: 'Chennai / Tamil Nadu' },
    { id: 'gujarat', label: 'Gujarat / Rajasthan' }
  ];

  // Filtered companies based on category, search query, and region
  const filteredCompanies = useMemo(() => {
    return japaneseCompanies.filter((company) => {
      // Category match
      const matchesCategory = selectedCategory === 'all' || company.category === selectedCategory;

      // Location match
      let matchesLocation = true;
      if (selectedLocation !== 'all') {
        const locLower = company.locations.join(' ').toLowerCase();
        if (selectedLocation === 'gurugram') {
          matchesLocation = locLower.includes('gurugram') || locLower.includes('manesar') || locLower.includes('delhi') || locLower.includes('noida') || locLower.includes('faridabad') || locLower.includes('haryana');
        } else if (selectedLocation === 'bengaluru') {
          matchesLocation = locLower.includes('bengaluru') || locLower.includes('bangalore') || locLower.includes('karnataka') || locLower.includes('bidadi');
        } else if (selectedLocation === 'mumbai') {
          matchesLocation = locLower.includes('mumbai') || locLower.includes('pune') || locLower.includes('maharashtra');
        } else if (selectedLocation === 'chennai') {
          matchesLocation = locLower.includes('chennai') || locLower.includes('tamil nadu') || locLower.includes('sri city');
        } else if (selectedLocation === 'gujarat') {
          matchesLocation = locLower.includes('hansalpur') || locLower.includes('ahmedabad') || locLower.includes('vadodara') || locLower.includes('bhavnagar') || locLower.includes('rajasthan') || locLower.includes('neemrana') || locLower.includes('tapukara');
        }
      }

      // Search match (name, japaneseName, operations, locations, keyRoles)
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = !query || 
        company.name.toLowerCase().includes(query) ||
        company.japaneseName.toLowerCase().includes(query) ||
        company.operations.toLowerCase().includes(query) ||
        company.locations.join(' ').toLowerCase().includes(query) ||
        company.keyRoles.toLowerCase().includes(query);

      return matchesCategory && matchesLocation && matchesSearch;
    });
  }, [selectedCategory, searchQuery, selectedLocation]);

  const getCategoryIcon = (catId) => {
    switch (catId) {
      case 'auto': return <Car className="w-4 h-4" />;
      case 'tech': return <Laptop className="w-4 h-4" />;
      case 'trading': return <Building className="w-4 h-4" />;
      case 'pharma': return <Pill className="w-4 h-4" />;
      case 'chemicals': return <FlaskConical className="w-4 h-4" />;
      case 'engineering': return <HardHat className="w-4 h-4" />;
      case 'logistics': return <Truck className="w-4 h-4" />;
      case 'finance': return <Coins className="w-4 h-4" />;
      case 'manufacturing': return <Factory className="w-4 h-4" />;
      default: return <Building2 className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="Job Opportunities in India | Japanese Companies in India | IndoJapan Language School"
        description="Comprehensive directory of 125+ top Japanese companies hiring in India across Automotive, IT, Electronics, Finance, Pharma, and Engineering. Learn Japanese with IndoJapan in Jalandhar."
      />

      {/* ======================================================== */}
      {/* 1. HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-[#f8f9fa] border-b border-slate-200/80 pt-10 pb-14 lg:pt-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 jp-dots-pattern opacity-25 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-red-700 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="font-bold">日系企業就職情報 • 日印連携</span>
              <span className="text-red-300">•</span>
              <span>1,400+ Japanese Business Establishments in India</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Japanese Companies in India & <br className="hidden sm:block" />
              <span className="text-red-600">Career Opportunities (インドにおける日系企業)</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-normal">
              You don’t have to fly to Tokyo to build a thriving, high-income career with Japanese multinationals. With Japan ranking as <strong className="text-slate-900 font-bold">India’s #1 top foreign investor (28.8% FDI equity inflows / $5.71 Billion)</strong>, mastering Japanese at <strong className="text-slate-900 font-bold">IndoJapan Japanese Language School</strong> opens immediate, premium employment across 125+ Japanese MNCs operating across Gurugram, Bengaluru, Pune, Mumbai, Chennai, and throughout India.
            </p>

            {/* Hero CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#companies-directory"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-bold text-white bg-red-600 hover:bg-red-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Browse All 125+ Companies</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <Link
                to="/courses"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs hover:shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5 text-red-600" />
                <span>View JLPT N5–N1 Courses</span>
              </Link>

              <a
                href={`tel:${contactInfo.indiaPhone}`}
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-base font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-emerald-600" />
                <span>Call Helpline: {contactInfo.indiaPhone}</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. STATS & KEY METRICS STRIP */}
      {/* ======================================================== */}
      <section className="bg-slate-900 text-white py-8 border-b border-slate-800 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <strong className="text-lg sm:text-xl font-black text-white block">
                  125+ Top MNCs
                </strong>
                <span className="text-sm text-slate-300 font-medium block">
                  Automotive, IT, Finance & Pharma
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <strong className="text-lg sm:text-xl font-black text-white block">
                  28.8% FDI Inflows
                </strong>
                <span className="text-sm text-slate-300 font-medium block">
                  Japan: #1 Foreign Investor in India
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center shrink-0">
                <Coins className="w-6 h-6" />
              </div>
              <div>
                <strong className="text-lg sm:text-xl font-black text-white block">
                  30% – 70% Higher Pay
                </strong>
                <span className="text-sm text-slate-300 font-medium block">
                  Bilingual Salary Premium in India
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <strong className="text-lg sm:text-xl font-black text-white block">
                  JLPT N5 to N1
                </strong>
                <span className="text-sm text-slate-300 font-medium block">
                  Target Proficiency for Hiring
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. WHY LEARN JAPANESE FOR CAREERS IN INDIA */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Market Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              Why Japanese Language is a Career Superpower in India
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl mx-auto">
              While lakhs of job seekers compete for English-only roles, Japanese-speaking talent enjoys unmatched demand, higher starting packages, and rapid corporate promotion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerBenefitsInIndia.map((benefit, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-[#fafbfc] border-2 border-slate-200 hover:border-red-400 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-wider">
                    {benefit.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">{benefit.title}</h3>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">{benefit.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-sm font-bold text-red-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-red-600" />
                  <span>Trained at IndoJapan Jalandhar</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. INTERACTIVE DIRECTORY OF JAPANESE COMPANIES IN INDIA */}
      {/* ======================================================== */}
      <section id="companies-directory" className="py-16 lg:py-20 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Explore 125+ Japanese Employers in India
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              Directory of Japanese Companies in India
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-normal max-w-3xl mx-auto">
              Filter by industry sector or search by company name, Japanese kanji, city, or operations.
            </p>
          </div>

          {/* Search Bar & Region Quick Filter */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-slate-200 shadow-xs mb-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
              
              {/* Search Input */}
              <div className="md:col-span-8 relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search company (e.g. Suzuki, Sony, Honda, Toyota, スズキ, IT, Gurugram, Bengaluru)..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 text-base font-medium text-slate-900 placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 hover:text-slate-700 font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Region Filter */}
              <div className="md:col-span-4 flex items-center gap-2">
                <Filter className="w-5 h-5 text-slate-500 shrink-0 hidden sm:block" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full py-3.5 px-4 rounded-xl border border-slate-300 bg-white text-sm sm:text-base font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 cursor-pointer"
                >
                  {majorLocations.map((loc) => (
                    <option key={loc.id} value={loc.id}>{loc.label}</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Category Tabs Strip */}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              {companyCategories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                      isSelected
                        ? 'bg-red-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {getCategoryIcon(cat.id)}
                    <span>{cat.label}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      isSelected ? 'bg-red-700 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-sm sm:text-base text-slate-600 font-medium mb-6 px-1">
            <span>
              Showing <strong className="text-slate-900 font-black">{filteredCompanies.length}</strong> Japanese companies in India
              {selectedCategory !== 'all' && ` in ${companyCategories.find(c => c.id === selectedCategory)?.label}`}
              {selectedLocation !== 'all' && ` (${majorLocations.find(l => l.id === selectedLocation)?.label})`}
            </span>
            {(selectedCategory !== 'all' || selectedLocation !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedLocation('all');
                  setSearchQuery('');
                }}
                className="text-red-600 hover:text-red-700 font-bold underline cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Company Cards Grid */}
          {filteredCompanies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanies.map((company) => (
                <div
                  key={company.id}
                  className="bg-white rounded-2xl border-2 border-slate-200 hover:border-red-400 hover:shadow-lg transition-all p-7 flex flex-col justify-between space-y-4 group"
                >
                  {/* Top info */}
                  <div className="space-y-3">
                    
                    {/* Header line: Category tag + Min JLPT */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold">
                        {getCategoryIcon(company.category)}
                        <span className="truncate max-w-[150px]">{company.categoryName}</span>
                      </span>
                      <span className="px-3 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-black border border-emerald-300 shrink-0">
                        {company.minJLPT}
                      </span>
                    </div>

                    {/* Company Names */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-red-600 transition-colors">
                        {company.name}
                      </h3>
                      <div className="text-base font-japanese font-bold text-slate-600 mt-0.5">
                        {company.japaneseName}
                      </div>
                    </div>

                    {/* Locations */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <MapPin className="w-4 h-4 text-red-500 shrink-0 mr-0.5" />
                      {company.locations.map((loc, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>

                    {/* Operations in India */}
                    <p className="text-base text-slate-700 leading-relaxed font-normal pt-2 border-t border-slate-100">
                      {company.operations}
                    </p>

                  </div>

                  {/* Bottom Roles Strip */}
                  <div className="pt-3 border-t border-slate-100 space-y-1">
                    <span className="text-xs sm:text-sm text-slate-500 uppercase font-black tracking-wider block">
                      In-Demand Bilingual Roles:
                    </span>
                    <p className="text-base font-bold text-slate-900 leading-snug">
                      {company.keyRoles}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-12 text-center space-y-4">
              <Building2 className="w-14 h-14 text-slate-300 mx-auto" />
              <h3 className="text-xl font-black text-slate-800">No companies matched your filter</h3>
              <p className="text-base text-slate-600 max-w-md mx-auto">
                Try searching with a broader keyword, removing the location filter, or switching to "All Companies".
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedLocation('all');
                  setSearchQuery('');
                }}
                className="mt-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-bold transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. HOW INDOJAPAN HELPS YOU CRACK JOBS IN JAPANESE MNCS */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
                Career Training in Jalandhar
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
                How IndoJapan Prepares You for Japanese Corporate Hiring
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                <p>
                  Getting hired by Japanese MNCs like Maruti Suzuki, Toyota, Sony, Hitachi, or Daikin requires more than basic vocabulary. Japanese recruiters look for solid <strong className="text-slate-900 font-bold">JLPT test certifications (N5, N4, N3, N2)</strong>, clear conversational competence, and an understanding of Japanese corporate culture.
                </p>
                <p>
                  At <strong className="text-slate-900 font-bold">IndoJapan Japanese Language School</strong>, Founder & CEO <strong className="text-slate-900 font-bold">{contactInfo.founder}</strong> and our expert instructors coach students through comprehensive milestones:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-base text-slate-800 font-medium">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-bold">JLPT N5 to N1 Syllabus:</strong> Hiragana, Katakana, Kanji, grammar, listening drills.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-bold">Business Japanese (Keigo):</strong> Formal polite expressions expected in Japanese boardrooms.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-bold">Corporate Culture & Hou-Ren-Sou:</strong> Japanese reporting standards, business card exchange.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-bold">Interview Readiness:</strong> Japanese resume (Rirekisho) preparation and mock interview drills.</span>
                </div>
              </div>

              {/* Batch Timings Note */}
              <div className="p-5 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2.5 text-base text-red-950 font-bold">
                  <Clock className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Daily Batches: 10:00 AM – 12:00 PM & 1:00 PM – 3:00 PM (Mon – Sat, Sunday Off)</span>
                </div>
                <span className="text-xs sm:text-sm font-black text-red-700 bg-red-100 px-3 py-1 rounded-full border border-red-200">Offline & Live Online</span>
              </div>
            </div>

            {/* Right Card: Spotlight on Founder & Center */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 text-white p-7 sm:p-9 rounded-3xl border border-slate-800 shadow-xl space-y-6">
                
                <div className="flex items-center gap-4 pb-5 border-b border-slate-800">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-red-500 shrink-0">
                    <img 
                      src="/images/navdeepvirk/n2.jpeg" 
                      alt="Founder & CEO NAVDEEP VIRK"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <strong className="text-xl font-black text-white block">{contactInfo.founder}</strong>
                    <span className="text-sm font-bold text-red-400 block">{contactInfo.founderTitle}</span>
                    <span className="text-sm text-slate-300 font-medium">{contactInfo.headOffice}</span>
                  </div>
                </div>

                <div className="space-y-3.5 text-base text-slate-200 leading-relaxed font-normal">
                  <p>
                    "Students often assume they have to immediately move to Japan to benefit from learning Japanese. But the reality is that Japanese companies in India are desperately seeking bilingual candidates for engineering, supply chain, and management positions, paying substantial salary premiums."
                  </p>
                  <p className="text-sm text-slate-300 font-medium">
                    Whether you plan to work in India or eventually transition to Japan via an intra-company transfer, starting your JLPT preparation at our Jalandhar center gives you a decisive head start.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 space-y-2.5 text-sm sm:text-base">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Center Address:</span>
                    <strong className="text-white text-right">BMC CHOWK, Near Bus Stand, Jalandhar</strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">India Helpline:</span>
                    <strong className="text-white">{contactInfo.indiaPhone}</strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Japan Desk:</span>
                    <a 
                      href={contactInfo.japanWhatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 font-bold"
                    >
                      WhatsApp: {contactInfo.japanPhone}
                    </a>
                  </div>
                </div>

                <Link
                  to="/courses"
                  className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-base text-center transition-colors block shadow-md cursor-pointer"
                >
                  Join Next Japanese Batch (N5–N1)
                </Link>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. CALL TO ACTION BANNER */}
      {/* ======================================================== */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs sm:text-sm text-red-400 font-black uppercase tracking-wider">
              Start Your Language Journey
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Ready to Work for Top Japanese Companies?
            </h3>
            <p className="text-base text-slate-300 font-normal">
              Enroll today in our Morning (10 AM–12 PM) or Afternoon (1 PM–3 PM) Batches at BMC Chowk, Jalandhar.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${contactInfo.indiaPhone}`}
              className="px-7 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-bold flex items-center gap-2 shadow-xs transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call India: {contactInfo.indiaPhone}</span>
            </a>
            <a
              href={contactInfo.japanWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm sm:text-base font-bold flex items-center gap-2 shadow-xs transition-all"
            >
              <Globe className="w-5 h-5" />
              <span>WhatsApp Japan Desk</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
