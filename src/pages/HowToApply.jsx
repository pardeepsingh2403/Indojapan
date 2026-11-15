import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Phone, 
  MapPin
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { contactInfo, intakeData, studyProcessSteps } from '../data/content';

export const HowToApply = () => {
  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="Admission & How to Apply | IndoJapan Japanese Language School | Jalandhar"
        description="Step-by-step admission and application process for Japanese language schools and Japan student visa (COE) from Punjab, India. Head Office: Jalandhar."
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
              <span>Admission Guide • {contactInfo.headOffice}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Admission: How to Apply to Japan
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Complete, transparent roadmap for students from Punjab and across India. From initial profile assessment at IndoJapan Japanese Language School in Jalandhar to Japanese language school acceptance and student visa (COE) stamping.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-colors"
              >
                <span>Chat with Admission Desk ({contactInfo.indiaPhone})</span>
              </a>
              <a
                href={`tel:${contactInfo.indiaPhone}`}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call India: {contactInfo.indiaPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Application Process (8-Step Roadmap) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Step-by-Step Walkthrough
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              8-Step Roadmap to Japan
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Under the personal guidance of Founder <strong>{contactInfo.founder}</strong>, we walk you through each milestone with 100% clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyProcessSteps.map((s) => (
              <div 
                key={s.step}
                className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200 shadow-2xs space-y-3 relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-xl bg-red-600 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                      {s.step}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 font-bold uppercase">
                      Stage 0{s.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-red-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Managed by IndoJapan Team</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Intakes & Timelines */}
      <section className="py-16 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Admission Cycles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Japanese Language School Intakes
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Japan has 4 official admission windows every year. Applications must be initiated 5 to 6 months before the class commencement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {intakeData.map((item, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-600"></span>
                    <span>{item.intake}</span>
                  </h3>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {item.season}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div>
                    <span className="text-slate-400 block font-semibold">Course Duration:</span>
                    <strong className="text-slate-800">{item.courseDuration}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">COE Result:</span>
                    <strong className="text-slate-800">{item.coeResult}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">School Deadline:</span>
                    <strong className="text-red-600">{item.schoolDeadline}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Classes Start:</span>
                    <strong className="text-slate-800">{item.classesCommence}</strong>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Best for:</strong> {item.idealFor}
                </p>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Intake Features:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5">
                        <span className="text-red-500 font-bold">•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Eligibility and Required Documents Checklist */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            {/* Left: Eligibility */}
            <div className="space-y-5">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                Who Can Apply?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Eligibility Criteria for Indian Students
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 font-bold block">1. 12 Years of Formal Education (10+2)</strong>
                  <p>Students must have completed 10+2 from CBSE, PSEB, ICSE or any recognized state/national education board.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 font-bold block">2. Japanese Language Study (150 Hours / JLPT N5)</strong>
                  <p>Immigration authorities require documented study of at least 150 hours or a JLPT N5 / NAT-TEST 5Q passing certificate.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 font-bold block">3. Financial Sponsor (Parents / Relatives)</strong>
                  <p>A legitimate financial sponsor with 3 years of Income Tax Returns (ITR) and proof of funds to support tuition and living costs.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 font-bold block">4. Genuine Intent & Clean Record</strong>
                  <p>Clear statement of purpose explaining your career goals in Japan and clean background with no prior immigration rejections.</p>
                </div>
              </div>
            </div>

            {/* Right: Document Checklist */}
            <div className="space-y-5">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                Documentation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Required Documents Checklist
              </h2>
              <div className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200 space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Valid Indian Passport (Minimum 2 years validity)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>10th & 12th Marksheets & Passing Certificates</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Graduation Marksheets & Degree (if applying after Bachelor's)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Japanese Language Certificate (150 Hours / JLPT N5)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sponsor's 3 Years Income Tax Returns (ITRs)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sponsor's Bank Statement & Solvency Certificate</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Family Relationship Certificate / Affidavit</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>White Background Passport Photos (3cm x 4cm)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Contact & Inquiry Card (Clean, responsive contact instead of form) */}
      <section className="py-16 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm text-center space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                Direct Application Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Connect Directly with our Head Office Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                Discuss your educational credentials, gap years, course selection, and COE visa processing directly with our counselors in Jalandhar.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <span>Chat on WhatsApp: {contactInfo.indiaPhone}</span>
              </a>

              <a
                href={`tel:${contactInfo.indiaPhone}`}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Helpline: {contactInfo.indiaPhone}</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Visit Jalandhar Office</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Direct Assistance */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs text-red-400 font-bold uppercase tracking-wider">Direct Founder Advisory</span>
            <h3 className="text-xl sm:text-2xl font-bold">{contactInfo.founder}</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Personal consultation for admission files and visa documentation at {contactInfo.headOffice}.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${contactInfo.indiaPhone}`}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call India: {contactInfo.indiaPhone}</span>
            </a>
            <a
              href={`tel:${contactInfo.japanPhone.replace(/[\s+]/g, '')}`}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700"
            >
              <span>Japan: {contactInfo.japanPhone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
