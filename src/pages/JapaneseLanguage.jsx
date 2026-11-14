import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  CheckCircle2, 
  GraduationCap, 
  Clock, 
  Award, 
  FileText, 
  ArrowRight, 
  Phone,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { jlptLevels, contactInfo } from '../data/content';

export const JapaneseLanguage = () => {
  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="Japanese Language Learning & JLPT N5 to N1 Classes | Jalandhar, Punjab"
        description="Learn Japanese from beginner to advanced (JLPT N5 to N1) at Indo Japan Language School in Jalandhar. Master Hiragana, Katakana, Kanji, grammar, and speaking."
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
              <span>JLPT N5 • N4 • N3 • N2 • N1</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Japanese Language Learning & JLPT Levels
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore the structured stages of learning Japanese, from mastering phonetic scripts (Hiragana and Katakana) to advanced JLPT N1 proficiency for university and career success in Japan.
            </p>
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

      {/* Comprehensive JLPT Levels Breakdown (N5 to N1) */}
      <section className="py-16 lg:py-20 bg-[#fafbfc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Detailed Syllabi
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              JLPT Levels Explained: N5 to N1
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              The Japanese-Language Proficiency Test is categorized into 5 standardized levels. Below is an overview of what is taught and expected at each level.
            </p>
          </div>

          <div className="space-y-8">
            {jlptLevels.map((lvl) => (
              <div 
                key={lvl.level}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Level Title & Badge */}
                <div className="lg:col-span-4 space-y-3 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-mono font-black px-3.5 py-1.5 rounded-xl bg-slate-900 text-white">
                      {lvl.level}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{lvl.title}</h3>
                      <span className="text-xs font-semibold text-red-600 uppercase">{lvl.badge}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lvl.description}
                  </p>

                  <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-400 block uppercase">Study Hours</span>
                      <strong className="text-slate-800 font-mono">{lvl.studyHours}</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-400 block uppercase">Kanji Count</span>
                      <strong className="text-slate-800 font-mono">{lvl.kanjiCount}</strong>
                    </div>
                  </div>
                </div>

                {/* Skills Learned & Competency */}
                <div className="lg:col-span-8 space-y-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Core Competencies & Learning Modules:
                  </h4>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                    {lvl.skillsLearned.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 text-xs text-slate-500">
                    <strong>Primary Target:</strong> {lvl.targetAudience}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Japanese Matters for Study Visa */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-red-600 uppercase">Visa Relevance</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Why Prior Japanese Language Training is Essential for Your COE
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
                <p>
                  The Immigration Services Agency of Japan scrutinizes student visa applications to ensure applicants possess genuine academic motivation. A documented certificate of at least <strong>150 hours of structured Japanese study</strong> or a <strong>JLPT N5 / NAT-TEST 5Q passing certificate</strong> is strongly recommended and widely considered the benchmark for basic student eligibility.
                </p>
                <p>
                  Beyond visa approvals, students who land in Japan with solid N5 or N4 foundations adapt much faster: they can navigate train stations, read convenience store signs, complete local city office (Kuyakusho) resident registrations, and secure suitable part-time work without unnecessary stress.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/japan-student-visa"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  <span>Explore Japan Student Visa Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                  alt="Traditional Japanese calligraphy and structured character study"
                  className="w-full h-[320px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* JLPT Exam Schedule Information */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
              Examination Information
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Official JLPT Exam Schedule in India
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The official JLPT is held internationally twice a year on the <strong>first Sunday of July</strong> and the <strong>first Sunday of December</strong>. Exam application windows generally open in March (for July exam) and August (for December exam). We guide our students on registration and official test preparation.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Inquire About Current Japanese Batches: {contactInfo.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
