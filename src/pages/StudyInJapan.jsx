import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Building2, 
  Coins,
  AlertCircle,
  Award
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { studyProcessSteps, contactInfo, intakeData } from '../data/content';

export const StudyInJapan = () => {
  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="Study in Japan Guide | Japanese Language Schools & Admission | Jalandhar, Punjab"
        description="Complete guide on studying in Japan through Japanese language schools. Learn about eligibility, course duration, admission steps, living costs, and university pathways."
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
              <span>Higher Education in Japan</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Study in Japan: Language School Pathway
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Understand how international students study Japanese at accredited language schools in Tokyo, Osaka, Kyoto and across Japan to prepare for university degrees or career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Why Study in Japan */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                Language School Pathway
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Why Begin With a Japanese Language School?
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Most degree and diploma programs at Japanese national, public, and private universities are taught in Japanese. International students must typically demonstrate <strong>JLPT N2 or N1</strong> proficiency to qualify for admission.
                </p>
                <p>
                  Enrolling in an accredited <strong>Japanese language school (Nihongo Gakko)</strong> provides full-time linguistic immersion (approximately 20 class hours per week), dedicated EJU (Examination for Japanese University Admission) preparation, interview practice, and direct teacher guidance on choosing higher education institutions in Japan.
                </p>
                <p>
                  This structured preparatory period ensures students adapt to Japanese daily life, master academic vocabulary, and make informed choices about universities, vocational colleges (Senmon Gakko), or career paths.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Full-Time Student Status of Residence</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>University & College Entrance Prep</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Legal 28 Hr/Week Part-Time Work Permit</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>National Health Insurance Coverage</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=900&q=80"
                  alt="Students on modern Japanese university campus courtyard"
                  className="w-full h-[360px] sm:h-[400px] object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600">
                  <strong className="text-slate-900 font-semibold block">Academic Campuses Across Japan</strong>
                  Modern facilities, dedicated student support, and international student communities.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pathways After Language School */}
      <section className="py-16 lg:py-20 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Educational Progression
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Where Can You Go After Language School?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Upon achieving intermediate or advanced Japanese fluency (JLPT N2/N1), several distinct educational and career pathways become available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pathway 1: Universities */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Japanese Universities (Daigaku)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Undergraduate (4-year Bachelor's degree) and Graduate (2-year Master's degree) programs across disciplines such as engineering, business administration, international relations, robotics, and economics.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500">
                <strong>Benchmark Requirement:</strong> JLPT N2/N1 or EJU (Japanese as Foreign Language) scores.
              </div>
            </div>

            {/* Pathway 2: Vocational Colleges */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Vocational Colleges (Senmon Gakko)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                2 to 3-year hands-on technical programs focusing on practical career skills such as IT and software development, automotive technology, culinary arts, graphic design, animation, and hospitality.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500">
                <strong>Benchmark Requirement:</strong> JLPT N2 or at least 6 months of language school study.
              </div>
            </div>

            {/* Pathway 3: Career Employment */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Career Employment in Japan</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Graduates holding Indian university degrees (e.g. B.Tech, BCA, B.Sc) who achieve Japanese fluency (N2 or N1) can transition directly to Japanese corporate employment under working visa statuses.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500">
                <strong>Benchmark Requirement:</strong> Degree certificate + Business Japanese fluency.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* General Eligibility & Documents Required */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Academic Eligibility */}
            <div className="p-7 rounded-2xl bg-[#fafbfc] border border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-bold text-slate-900">Academic Eligibility Guidelines</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                  <span><strong>12 Years of Formal Education:</strong> Completion of 10+2 (CBSE, PSEB, ICSE, or equivalent State Board) or recognized diploma/degree.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                  <span><strong>Study Gap Justification:</strong> Gaps between studies must be logically explained and supported by work experience certificates or genuine documentation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                  <span><strong>Prior Japanese Study Proof:</strong> Certificate showing at least 150 hours of structured Japanese language classes or JLPT N5 passing certificate.</span>
                </li>
              </ul>
            </div>

            {/* Financial Requirements */}
            <div className="p-7 rounded-2xl bg-[#fafbfc] border border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-bold text-slate-900">Financial Sponsor Guidelines</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                  <span><strong>Immediate Family Sponsor:</strong> Typically parents (father, mother) or legal guardian acting as financial guarantor (Keihi Shiben-sha).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                  <span><strong>Income Tax Returns (ITRs):</strong> Sponsor's 3 consecutive years of audited Income Tax Returns demonstrating stable financial capacity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                  <span><strong>Bank Balance Seasoning:</strong> Bank statement and balance certificate demonstrating adequate funds (typically equivalent to approx. 20–25 Lakh INR) to cover living and educational costs.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* The 4 Japanese Language School Intakes */}
      <section id="intakes" className="py-16 lg:py-20 bg-white border-b border-slate-200/80 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Academic Cycles & Application Windows
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Japan Language School Intakes & Timelines
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Japanese language schools admit international students across four seasonal intakes: April, July, October, and January. Each intake offers a tailored course duration to align with university and vocational admissions.
            </p>
          </div>

          {/* 6 to 8 Months Advance Notice */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div className="space-y-1">
              <span className="text-xs font-bold text-red-600 uppercase">Strategic Planning</span>
              <h3 className="text-lg font-bold text-slate-900">
                Why You Must Plan 6 to 8 Months in Advance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                Japanese language school applications must be submitted to regional immigration bureaus in Japan approximately 4 to 5 months before classes begin. Starting your Japanese language classes in Jalandhar early ensures you have your 150-hour study certificate or JLPT certificate ready in time.
              </p>
            </div>
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Inquire: {contactInfo.phoneDisplay}</span>
            </a>
          </div>

          {/* The 4 Intakes Deep Dive Grid */}
          <div className="space-y-8">
            
            {/* April Intake */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg">
                    🌸
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">April Intake (Primary Academic Intake)</h3>
                    <span className="text-xs font-semibold text-red-600 uppercase">Spring • 2-Year Full Duration Track</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The April intake is the largest and most important intake across Japanese educational institutions. It offers the maximum permissible language school duration of <strong>2 full academic years</strong>. Because the Japanese school and university year officially starts in April, graduating from an April intake allows direct, seamless entry into Japanese universities or vocational colleges.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Start Language Study:</span>
                    <strong className="text-slate-900">June – July (Prev Year)</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">School Filing Deadline:</span>
                    <strong className="text-red-700 font-mono">Mid-Oct to Mid-Nov</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">COE Announcement:</span>
                    <strong className="text-slate-900">Late February</strong>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <strong className="text-slate-800 block">Best Suited For:</strong>
                  <p>Students starting from scratch (complete beginners) who require the maximum 2-year timeline to achieve JLPT N2 or N1 before progressing to university degrees or specialized careers in Japan.</p>
                </div>
              </div>

              <div className="lg:col-span-4 h-[220px] rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80"
                  alt="Cherry blossoms in Japan during April spring intake"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* July Intake */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-lg">
                    ☀️
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">July Intake (Summer Intake)</h3>
                    <span className="text-xs font-semibold text-slate-600 uppercase">Summer • 1 Year 9 Months Track</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The July intake provides a course duration of <strong>1 year and 9 months</strong>. It is particularly popular among Indian students who finish their 12th standard CBSE/PSEB board examinations or graduation degrees in March/April, allowing a relatively quick transition abroad without a lengthy study gap.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Start Language Study:</span>
                    <strong className="text-slate-900">October – November</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">School Filing Deadline:</span>
                    <strong className="text-red-700 font-mono">Late Jan to Mid-Feb</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">COE Announcement:</span>
                    <strong className="text-slate-900">Late May</strong>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <strong className="text-slate-800 block">Best Suited For:</strong>
                  <p>Students looking for a swift departure after spring examinations in India who are dedicated to intensive language study.</p>
                </div>
              </div>

              <div className="lg:col-span-4 h-[220px] rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=800&q=80"
                  alt="Summer greenery and peaceful Japanese garden in Kyoto"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* October Intake */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-lg">
                    🍁
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">October Intake (Major Autumn Intake)</h3>
                    <span className="text-xs font-semibold text-amber-700 uppercase">Autumn • 1 Year 6 Months Track</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The October intake is the <strong>second largest intake</strong> in Japan. With a duration of <strong>1.5 years (18 months)</strong>, it allows students to complete their language studies by March and commence university or vocational college in April. It is heavily chosen by university graduates from Punjab.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Start Language Study:</span>
                    <strong className="text-slate-900">January – February</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">School Filing Deadline:</span>
                    <strong className="text-red-700 font-mono">Late April to Mid-May</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">COE Announcement:</span>
                    <strong className="text-slate-900">Late August</strong>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <strong className="text-slate-800 block">Best Suited For:</strong>
                  <p>Students who have already commenced N5 or N4 level learning in India and seek a well-paced 1.5-year trajectory.</p>
                </div>
              </div>

              <div className="lg:col-span-4 h-[220px] rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                  alt="Autumn red momiji leaves in traditional Japanese courtyard"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* January Intake */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-lg">
                    ❄️
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">January Intake (Winter Intake)</h3>
                    <span className="text-xs font-semibold text-blue-700 uppercase">Winter • 1 Year 3 Months Short Track</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The January intake is the <strong>shortest available track (1 year and 3 months)</strong>. Not all language schools offer a January intake. Because 15 months is relatively short, schools generally require students to have a verified intermediate foundation (such as JLPT N4 or N3) before admission.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Start Language Study:</span>
                    <strong className="text-slate-900">May – June (Prev Year)</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">School Filing Deadline:</span>
                    <strong className="text-red-700 font-mono">Late Aug to Mid-Sept</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">COE Announcement:</span>
                    <strong className="text-slate-900">Late November</strong>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <strong className="text-slate-800 block">Best Suited For:</strong>
                  <p>Students who already possess JLPT N4 or higher and only require a brief immersion to clear university entrance examinations.</p>
                </div>
              </div>

              <div className="lg:col-span-4 h-[220px] rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=80"
                  alt="Clear winter day in Tokyo city center"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            * Note: Exact application cutoffs, available intakes, and course durations depend on individual Japanese language school policies and regional immigration quotas.
          </div>

        </div>
      </section>

      {/* Complete Step-by-Step 8-Stage Roadmap */}
      <section className="py-16 lg:py-20 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Step-by-Step Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              The 8-Stage Process of Language School Admission & Visa
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Clear milestone progression from your first inquiry in Jalandhar to landing in Japan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {studyProcessSteps.map((step) => (
              <div key={step.step} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-red-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                    0{step.step}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">Stage {step.step}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Official Compliance Disclaimer */}
          <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold">Important Regulatory Note:</strong>
              <span>
                School admission acceptance is determined strictly by the relevant educational institution in Japan. Certificate of Eligibility (COE) and Student Visa approvals are subject to official evaluation by the Immigration Services Agency of Japan and the Embassy of Japan. Requirements can change and must be verified against current official guidelines.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Have Questions About Choosing a Japanese Language School?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Contact Indo Japan Language School in Jalandhar for factual, step-by-step guidance.
            </p>
          </div>
          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
            className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {contactInfo.phoneDisplay}</span>
          </a>
        </div>
      </section>

    </div>
  );
};
