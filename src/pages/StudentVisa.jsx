import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Landmark, 
  Coins, 
  ArrowRight, 
  Phone, 
  FileCheck2, 
  Stamp, 
  PlaneTakeoff,
  Clock
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { contactInfo, visaMilestones } from '../data/content';

export const StudentVisa = () => {
  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="Japan Student Visa & COE Process Guidance | Jalandhar, Punjab"
        description="Comprehensive guide to the Japan Student Visa and Certificate of Eligibility (COE) process. Learn about financial sponsorship, document checklist, and immigration requirements."
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
              <span>Immigration Services Agency of Japan (出入国在留管理庁)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Understanding the Japan Student Visa & COE Process
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A comprehensive, factual guide to the legal stages, document verifications, financial sponsorship standards, and embassy procedures required to obtain a Student Visa for Japan.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Distinction: COE vs. Visa */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Legal Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              The Critical Difference Between COE and Student Visa
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Many students confuse the Certificate of Eligibility with the visa itself. Here is how Japanese immigration law defines both instruments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Stage 1: COE */}
            <div className="p-7 rounded-2xl bg-slate-50 border-2 border-red-200/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-red-600 text-white font-mono font-bold text-sm flex items-center justify-center">
                    01
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700">
                    Issued Inside Japan
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Certificate of Eligibility (COE) — 在留資格認定証明書
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The COE is an official document issued by the <strong>Immigration Services Agency of Japan (Ministry of Justice)</strong> before you travel. It certifies that the applicant has met the statutory prerequisites for the "Student" (Ryugaku) status of residence under the Immigration Control and Refugee Recognition Act.
                </p>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p><strong>Issued By:</strong> Regional Immigration Bureaus across Japan (Tokyo, Osaka, Nagoya, etc.)</p>
                  <p><strong>Submitted By:</strong> Your accepted Japanese language school acting as legal proxy</p>
                  <p><strong>Processing Time:</strong> Typically 8 to 12 weeks after filing</p>
                </div>
              </div>
              <div className="pt-2 text-xs font-semibold text-red-700">
                A valid COE is mandatory before applying for a student visa at the Embassy.
              </div>
            </div>

            {/* Stage 2: Student Visa */}
            <div className="p-7 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-slate-900 text-white font-mono font-bold text-sm flex items-center justify-center">
                    02
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700">
                    Stamped in India
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Japan Student Visa — 査証 (Vignette in Passport)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The Student Visa is the consular endorsement stamped directly into your Indian passport by the <strong>Embassy of Japan in New Delhi</strong> or the <strong>Consulates-General of Japan</strong> (via designated VFS Global centers) after presenting the original COE, valid passport, and completed visa application dossier.
                </p>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p><strong>Submitted Through:</strong> VFS Global Visa Application Centers</p>
                  <p><strong>Authority:</strong> Ministry of Foreign Affairs of Japan (MOFA) / Embassy of Japan</p>
                  <p><strong>Processing Time:</strong> Typically 5 to 10 working days</p>
                </div>
              </div>
              <div className="pt-2 text-xs font-semibold text-slate-700">
                Grants permission to board flights and present yourself at Japanese border inspection.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Document Checklist & Sponsor Rules */}
      <section className="py-16 lg:py-20 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Document Checklist
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Essential Documents Required for COE Application
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Japanese immigration requires complete documentation verified for accuracy, consistency, and legal authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Box 1: Applicant Documents */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-red-600" />
                <h3 className="text-base font-bold text-slate-900">Applicant Documents</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Valid Indian Passport (minimum 1-year validity remaining)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>10th & 12th Standard Marksheets and Passing Certificates</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Degree / Diploma marksheets and degree certificate (if graduate)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>150-Hour Japanese Study Certificate or JLPT N5 Passing Certificate</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Statement of Purpose (SOP / Reason for Study in Japan)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Color passport photographs (4cm x 3cm, white background)</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Financial Sponsor Documents */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-red-600" />
                <h3 className="text-base font-bold text-slate-900">Sponsor Documents</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Letter of Financial Sponsorship (Keihi Shiben-sho) signed by sponsor</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Bank Balance Certificate (approx. 20–25 Lakh INR seasoned)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Bank Statement (last 6 months to 1 year showing clear transaction history)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Income Tax Returns (ITR / Form 16) for the last 3 consecutive years</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Employment / Business Registration Certificate and salary slips</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Official Relationship Proof Certificate (Birth certificate / Family register)</span>
                </li>
              </ul>
            </div>

            {/* Box 3: SOP & Translation Guidance */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-red-600" />
                <h3 className="text-base font-bold text-slate-900">SOP & Translations</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Reason for Study must logically connect previous education to Japan</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Explanation of post-study career trajectory in India or abroad</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Certified Japanese translations of all non-English documents</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Work experience verification letters for any education gaps</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Zero-tolerance check for conflicting birth dates or name spellings</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Consultation Photography Banner */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-slate-200 bg-white grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 h-[240px] md:h-full">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
                alt="Passport, boarding pass and student visa documentation ready for travel"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 space-y-3">
              <span className="text-xs font-bold text-red-600 uppercase">Pre-Departure Preparedness</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                What Happens Upon Arrival in Japan?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At major Japanese international airports (Narita, Haneda, Kansai, Chubu), your Student Visa is validated, and immigration officers stamp your passport with the official landing permission while issuing your <strong>Residence Card (Zairyu Card)</strong>. You can also apply on arrival for part-time work permission (Shikakugai Katsudo Kyoka).
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Official Legal Disclaimer (Mandatory Requirement) */}
      <section className="py-14 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Important Compliance Notice Regarding Visa Approval
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Indo Japan Language School provides educational information, document verification guidance, and administrative compilation assistance. We do not claim official government authorization, nor do we promise guaranteed Certificate of Eligibility (COE) or visa approvals.
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            All visa screening decisions are under the sole sovereign authority of the Immigration Services Agency of Japan and the Embassy of Japan. Requirements can change periodically, and applicants are advised to verify details with our counselors or the latest official publications.
          </p>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Have Questions About Financial Documents or COE Rules?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak with our education counselors in Jalandhar for factual, step-by-step guidance.
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
