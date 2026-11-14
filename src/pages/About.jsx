import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  Target, 
  Users, 
  BookOpen, 
  GraduationCap, 
  Phone, 
  ArrowRight,
  MapPin,
  Clock
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { contactInfo } from '../data/content';

export const About = () => {
  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="About Us | Indo Japan Language School | Jalandhar, Punjab"
        description="Learn about Indo Japan Language School in Jalandhar, Punjab. Our mission, transparent educational guidance, Japanese language training, and study in Japan advisory."
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
              <span>Established in Jalandhar, Punjab</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              About Indo Japan Language School
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Providing structured Japanese language education and honest, dependable guidance for students aspiring to study and build their future in Japan.
            </p>
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
                  <strong>Indo Japan Language School</strong> was founded in Jalandhar with a clear, singular focus: to bridge the gap between Indian students and the Japanese education ecosystem through rigorous language preparation and transparent advisory.
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
                  <span>Transparent, Zero-Exaggeration Advisory</span>
                </div>
              </div>
            </div>

            {/* Photography Column */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                  alt="Students studying collaboratively with books and notebooks in classroom"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600">
                  <strong className="text-slate-900 font-semibold block">Academic Excellence & Dedication</strong>
                  We prepare students to thrive academically and culturally in Japan.
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
              How we conduct our educational training and advisory at Indo Japan Language School.
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

      {/* Who We Assist Section */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Student Profiles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Who Can Benefit from Our Guidance?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We assist various categories of learners across Jalandhar, Doaba, and the wider Punjab region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900">10+2 / High School Passouts</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Students who have completed 12 years of formal education in India aiming to enter Japanese language schools and transition to Japanese bachelor's degrees or vocational diplomas.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900">College & University Graduates</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Graduates in engineering, computer science, arts, or commerce seeking to achieve JLPT N2/N1 fluency in Japan to qualify for Japanese master's degrees or employment visas.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900">Working Professionals</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Professionals looking to upskill with Japanese language proficiency for career progression within multinational companies or technical opportunities in Japan.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900">Hobbyists & Culture Enthusiasts</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Individuals passionate about Japanese anime, manga, traditional culture, and travel who wish to learn conversational Japanese for personal enrichment.
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
              Speak with our counselors in Jalandhar or visit our center during visiting hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call {contactInfo.phoneDisplay}</span>
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
