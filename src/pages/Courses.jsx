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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
              <span>{contactInfo.headOffice} • Founder: {contactInfo.founder}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Japanese Language Courses (JLPT N5 to N1)
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our structured curriculum designed for Indian students aiming for study visas, academic degrees, and high-paying professional careers in Japan.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs"
              >
                <span>WhatsApp for Course Batch Info</span>
              </a>
              <a
                href={`tel:${contactInfo.indiaPhone}`}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call {contactInfo.indiaPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview of the 3 Writing Systems */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Writing Systems
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              The Three Scripts of the Japanese Language
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Japanese is written using a combination of three distinct scripts. Understanding their roles is the first step in your learning journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Hiragana */}
            <div className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-kanji text-red-600">ひらがな</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">46 Characters</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Hiragana (平仮名)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The primary phonetic syllabary in Japanese. Every character represents a specific sound. Used for native Japanese words, grammatical particles, and verb/adjective inflections (okurigana). This is the very first script every beginner learns.
              </p>
            </div>

            {/* Katakana */}
            <div className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-kanji text-slate-800">カタカナ</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">46 Characters</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Katakana (片仮名)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A parallel phonetic syllabary with sharper, angular strokes. Used primarily to transcribe foreign loanwords, names of foreign people and countries, technical and scientific terms, and for sound effects (onomatopoeia).
              </p>
            </div>

            {/* Kanji */}
            <div className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-kanji text-slate-900">漢字</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">2,136 Joyo Kanji</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Kanji (漢字)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ideographic characters adapted from Chinese, where each character represents a distinct concept or meaning rather than just a sound. Most Kanji possess multiple readings (Onyomi - Chinese reading, and Kunyomi - Japanese reading).
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Course Levels (JLPT N5 to N1) */}
      <section className="py-16 lg:py-20 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Curriculum Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              JLPT Levels (N5 to N1) & Course Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              The Japanese Language Proficiency Test is organized into 5 standardized levels, with N5 being the beginner milestone and N1 representing full native-level fluency.
            </p>
          </div>

          <div className="space-y-8">
            {jlptLevels.map((lvl) => (
              <div 
                key={lvl.level}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Level Tag & Quick Stats */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-14 h-14 rounded-2xl bg-red-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-xs">
                      {lvl.level}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{lvl.title}</h3>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 text-xs font-semibold">
                        {lvl.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {lvl.description}
                  </p>

                  <div className="pt-2 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <Clock className="w-4 h-4 mx-auto text-slate-500 mb-1" />
                      <span className="text-[10px] text-slate-400 block font-semibold">Study Hours</span>
                      <strong className="text-slate-800">{lvl.studyHours}</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <BookOpen className="w-4 h-4 mx-auto text-slate-500 mb-1" />
                      <span className="text-[10px] text-slate-400 block font-semibold">Kanji</span>
                      <strong className="text-slate-800">{lvl.kanjiCount}</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <GraduationCap className="w-4 h-4 mx-auto text-slate-500 mb-1" />
                      <span className="text-[10px] text-slate-400 block font-semibold">Vocabulary</span>
                      <strong className="text-slate-800">{lvl.vocabCount}</strong>
                    </div>
                  </div>
                </div>

                {/* Skills Learned & Target Audience */}
                <div className="lg:col-span-8 space-y-5 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-8 pt-4 lg:pt-0">
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-red-600" />
                      <span>Key Competencies Mastered</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-600">
                      {lvl.skillsLearned.map((skill, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-[#fafbfc] border border-slate-200/70 flex items-start gap-2">
                          <span className="text-red-600 font-bold mt-0.5">•</span>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs">
                      <span className="text-slate-400 uppercase font-semibold block">Recommended Target Audience:</span>
                      <strong className="text-slate-800 font-medium">{lvl.targetAudience}</strong>
                    </div>
                    <a
                      href={contactInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-1"
                    >
                      <span>Inquire for {lvl.level} Batch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Batch Formats and Schedules */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Flexible Timings
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Class Schedules at Jalandhar Head Office
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Classes are conducted both offline at our Civil Lines campus in Jalandhar and live interactive online for students across Punjab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Morning Regular Batch</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ideal for 10+2 and college graduates preparing for upcoming Japan intake deadlines. Daily 2-hour intensive sessions.
              </p>
              <div className="pt-2 text-xs font-mono font-bold text-slate-700">
                9:30 AM – 11:30 AM (Mon to Fri)
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Afternoon Fast-Track</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Focused on completing 150 hours of Japanese language training rapidly for upcoming Certificate of Eligibility (COE) filing.
              </p>
              <div className="pt-2 text-xs font-mono font-bold text-slate-700">
                1:30 PM – 3:30 PM (Mon to Fri)
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Weekend Special Batch</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specially tailored for working professionals and university students who cannot attend weekday classes.
              </p>
              <div className="pt-2 text-xs font-mono font-bold text-slate-700">
                Saturday & Sunday (3.5 Hours/day)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Ready to Start Learning Japanese?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Visit our Jalandhar Head Office or connect with Founder {contactInfo.founder} for enrollment.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${contactInfo.indiaPhone}`}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {contactInfo.indiaPhoneDisplay}</span>
            </a>
            <Link
              to="/admission/how-to-apply"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700"
            >
              View Admission Process
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
