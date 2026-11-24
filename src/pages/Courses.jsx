import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  CheckCircle2, 
  GraduationCap, 
  Clock, 
  ArrowRight, 
  Phone,
  Calendar,
  Users
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { jlptLevels, contactInfo } from '../data/content';

export const Courses = () => {
  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="Japanese Language Courses | IndoJapan Japanese Language School | Jalandhar"
        description="Comprehensive Japanese language courses from JLPT N5 to N1 at IndoJapan Japanese Language School, Jalandhar Punjab Head Office. Master Hiragana, Katakana, Kanji, and conversational Japanese."
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              <span className="font-bold">日本語コース • JLPT対策</span>
              <span className="text-red-300">•</span>
              <span>{contactInfo.headOffice} • Founder & CEO: {contactInfo.founder}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Japanese Language Courses <span className="text-red-600 block sm:inline">(日本語 JLPT N5〜N1)</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
              Explore our structured curriculum designed for Indian students aiming for study visas, academic degrees, and high-paying professional careers in Japan.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm sm:text-base font-bold flex items-center gap-2 shadow-xs transition-colors"
              >
                <span>WhatsApp for Course Batch Info</span>
              </a>
              <a
                href={`tel:${contactInfo.indiaPhone}`}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm sm:text-base font-bold flex items-center gap-2 shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call {contactInfo.indiaPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview of the 3 Writing Systems */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Writing Systems
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              The Three Scripts of the Japanese Language
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl mx-auto">
              Japanese is written using a combination of three distinct scripts. Understanding their roles is the first step in your learning journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Hiragana */}
            <div className="p-7 rounded-2xl bg-[#fafbfc] border-2 border-slate-200 space-y-3 shadow-2xs hover:border-red-400 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-kanji text-red-600">ひらがな</span>
                <span className="text-xs sm:text-sm font-mono font-bold px-2.5 py-1 rounded bg-slate-200 text-slate-800">46 Characters</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">Hiragana (平仮名)</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                The primary phonetic syllabary in Japanese. Every character represents a specific sound. Used for native Japanese words, grammatical particles, and verb/adjective inflections (okurigana). This is the very first script every beginner learns.
              </p>
            </div>

            {/* Katakana */}
            <div className="p-7 rounded-2xl bg-[#fafbfc] border-2 border-slate-200 space-y-3 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-kanji text-slate-900">カタカナ</span>
                <span className="text-xs sm:text-sm font-mono font-bold px-2.5 py-1 rounded bg-slate-200 text-slate-800">46 Characters</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">Katakana (片仮名)</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                A parallel phonetic syllabary with sharper, angular strokes. Used primarily to transcribe foreign loanwords, names of foreign people and countries, technical and scientific terms, and for sound effects (onomatopoeia).
              </p>
            </div>

            {/* Kanji */}
            <div className="p-7 rounded-2xl bg-[#fafbfc] border-2 border-slate-200 space-y-3 shadow-2xs hover:border-emerald-400 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-kanji text-slate-900">漢字</span>
                <span className="text-xs sm:text-sm font-mono font-bold px-2.5 py-1 rounded bg-slate-200 text-slate-800">2,136 Joyo Kanji</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">Kanji (漢字)</h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Ideographic characters adapted from Chinese, where each character represents a distinct concept or meaning rather than just a sound. Most Kanji possess multiple readings (Onyomi - Chinese reading, and Kunyomi - Japanese reading).
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Course Levels (JLPT N5 to N1) */}
      <section className="py-16 lg:py-22 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Curriculum Breakdown
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              JLPT Levels (N5 to N1) & Course Modules
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl mx-auto">
              The Japanese Language Proficiency Test is organized into 5 standardized levels, with N5 being the beginner milestone and N1 representing full native-level fluency.
            </p>
          </div>

          <div className="space-y-8">
            {jlptLevels.map((lvl) => (
              <div 
                key={lvl.level}
                className="bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Level Tag & Quick Stats */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-14 h-14 rounded-2xl bg-red-600 text-white font-black text-2xl flex items-center justify-center shadow-xs">
                      {lvl.level}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">{lvl.title}</h3>
                      <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80 mt-1">
                        {lvl.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    {lvl.description}
                  </p>

                  <div className="pt-2 grid grid-cols-3 gap-2.5 text-center">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <Clock className="w-4 h-4 mx-auto text-red-600 mb-1" />
                      <span className="text-xs text-slate-500 block font-bold uppercase">Hours</span>
                      <strong className="text-sm sm:text-base font-black text-slate-900">{lvl.studyHours}</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <BookOpen className="w-4 h-4 mx-auto text-blue-600 mb-1" />
                      <span className="text-xs text-slate-500 block font-bold uppercase">Kanji</span>
                      <strong className="text-sm sm:text-base font-black text-slate-900">{lvl.kanjiCount}</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <GraduationCap className="w-4 h-4 mx-auto text-emerald-600 mb-1" />
                      <span className="text-xs text-slate-500 block font-bold uppercase">Vocab</span>
                      <strong className="text-sm sm:text-base font-black text-slate-900">{lvl.vocabCount}</strong>
                    </div>
                  </div>
                </div>

                {/* Skills Learned & Target Audience */}
                <div className="lg:col-span-8 space-y-5 border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-8 pt-4 lg:pt-0">
                  <div className="space-y-3">
                    <h4 className="text-base font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-600" />
                      <span>Key Competencies Mastered</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-slate-700">
                      {lvl.skillsLearned.map((skill, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-[#fafbfc] border border-slate-200 flex items-start gap-2.5">
                          <span className="text-red-600 font-bold mt-0.5">•</span>
                          <span className="font-normal">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div>
                      <span className="text-xs sm:text-sm text-slate-500 uppercase font-bold block">Recommended Target Audience:</span>
                      <strong className="text-base text-slate-900 font-semibold">{lvl.targetAudience}</strong>
                    </div>
                    <a
                      href={contactInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm whitespace-nowrap transition-colors flex items-center gap-1.5 shrink-0"
                    >
                      <span>Inquire for {lvl.level} Batch</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Batch Formats and Schedules */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              Offline & Online Classes • Monday to Saturday
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              Class Schedules at Jalandhar Head Office
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl mx-auto">
              Classes are conducted Monday to Saturday both offline at our BMC Chowk campus in Jalandhar and live interactive online for students across Punjab. Sunday is off.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Morning Batch */}
            <div className="p-7 rounded-2xl bg-[#fafbfc] border-2 border-slate-200 space-y-4 hover:border-red-400 transition-colors shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs sm:text-sm font-bold">
                  Morning Batch
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">Morning Batch</h3>
                <div className="text-lg font-black text-red-600 mt-0.5">
                  10:00 AM – 12:00 PM
                </div>
              </div>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Daily 2-hour intensive Japanese training covering Hiragana, Katakana, Kanji, grammar, and listening. Ideal for 10+2 students and visa applicants.
              </p>
              <div className="pt-3 border-t border-slate-200 space-y-2 text-sm sm:text-base">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Days:</span>
                  <strong className="text-slate-900 font-bold">Monday – Saturday</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Mode:</span>
                  <strong className="text-emerald-700 font-bold">Offline & Online</strong>
                </div>
              </div>
            </div>

            {/* Afternoon Batch */}
            <div className="p-7 rounded-2xl bg-[#fafbfc] border-2 border-slate-200 space-y-4 hover:border-blue-400 transition-colors shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-bold">
                  Afternoon Batch
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">Afternoon Batch</h3>
                <div className="text-lg font-black text-blue-600 mt-0.5">
                  1:00 PM – 3:00 PM
                </div>
              </div>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Daily 2-hour interactive sessions for rapid JLPT syllabus completion, conversation fluency, and embassy/college interview readiness.
              </p>
              <div className="pt-3 border-t border-slate-200 space-y-2 text-sm sm:text-base">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Days:</span>
                  <strong className="text-slate-900 font-bold">Monday – Saturday</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Mode:</span>
                  <strong className="text-emerald-700 font-bold">Offline & Online</strong>
                </div>
              </div>
            </div>

            {/* Weekly Schedule & Delivery Mode */}
            <div className="p-7 rounded-2xl bg-[#fafbfc] border-2 border-slate-200 space-y-4 hover:border-emerald-400 transition-colors shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-bold">
                  Weekly Schedule
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">Class Schedule & Mode</h3>
                <div className="text-lg font-black text-emerald-700 mt-0.5">
                  Mon – Sat (Sunday Off)
                </div>
              </div>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Flexible learning delivery: Join offline classes in-person at our Jalandhar campus or attend live interactive online classes from home.
              </p>
              <div className="pt-3 border-t border-slate-200 space-y-2 text-sm sm:text-base">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Classes:</span>
                  <strong className="text-slate-900 font-bold">Monday to Saturday</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Sunday:</span>
                  <strong className="text-red-600 font-bold">Off / Closed</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white">Ready to Start Learning Japanese?</h3>
            <p className="text-base text-slate-300 font-normal">
              Visit our Jalandhar Head Office or connect with Founder & CEO {contactInfo.founder} for enrollment.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${contactInfo.indiaPhone}`}
              className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-bold flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {contactInfo.indiaPhoneDisplay}</span>
            </a>
            <Link
              to="/student-visa"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm sm:text-base font-bold border border-slate-700 transition-colors"
            >
              Explore Student Visa Guide
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
