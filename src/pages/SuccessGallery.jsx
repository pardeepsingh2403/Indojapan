import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Building2, 
  GraduationCap, 
  FileCheck2, 
  X, 
  ZoomIn, 
  Sparkles,
  Info
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { contactInfo, galleryCategories, galleryItems } from '../data/content';

export const SuccessGallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="Gallery | IndoJapan Japanese Language School | Jalandhar"
        description="View real student visa grants, Certificate of Eligibility (COE) approvals, Japanese language classroom sessions in Jalandhar, and student life in Japan at IndoJapan Japanese Language School."
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-red-200/80">
              <Award className="w-4 h-4 text-red-600" />
              <span className="font-bold">ビザ実績 • ギャラリー</span>
              <span className="text-red-300">•</span>
              <span>{contactInfo.headOffice} • Founder & CEO: {contactInfo.founder}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Student Visas, COE Grants & Campus Gallery <span className="text-red-600 block sm:inline">(ビザ・COE実績)</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Explore authentic student visa approvals, Certificate of Eligibility (COE) clearances from Japanese Immigration, classroom training in Jalandhar, and campus life across Tokyo, Osaka, and Kyoto.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Proof Highlights Strip */}
      <section className="bg-slate-50 border-b border-slate-200 py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3.5 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm sm:text-base font-black text-slate-900">COE Approvals</span>
                <span className="block text-xs font-semibold text-slate-600">Official Visa Clearance</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm sm:text-base font-black text-slate-900">Top Language Schools</span>
                <span className="block text-xs font-semibold text-slate-600">Tokyo, Osaka, Kyoto & More</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm sm:text-base font-black text-slate-900">Jalandhar Center</span>
                <span className="block text-xs font-semibold text-slate-600">BMC CHOWK, Near Bus Stand</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm sm:text-base font-black text-slate-900">Transparent Guidance</span>
                <span className="block text-xs font-semibold text-slate-600">Zero False Promises</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Filter & Grid Section */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-all cursor-pointer ${
                  activeTab === category.id
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Image Cards Grid: Pure photos, zero text below */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-red-400 transition-all overflow-hidden cursor-pointer"
              >
                {/* Photo Container: Full picture, uncropped, zero text below */}
                <div className="relative aspect-[3/4] w-full bg-white p-2.5 sm:p-3 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Category / Status Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white/95 text-slate-900 shadow-xs backdrop-blur-xs flex items-center gap-1.5">
                      {item.tag === 'Visa Granted' || item.tag === 'Visa Stamped' || item.tag === 'COE Issued' ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                      ) : (
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      )}
                      <span>{item.tag}</span>
                    </span>
                  </div>

                  {/* Zoom Preview Overlay */}
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy & Compliance Notice */}
          <div className="mt-12 p-6 rounded-3xl bg-amber-50 border border-amber-200/80 text-sm sm:text-base text-amber-950 flex items-start gap-3.5 font-normal leading-relaxed">
            <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1.5 leading-relaxed">
              <strong className="font-bold block text-amber-950 text-sm sm:text-base">
                Student Data Privacy & Regulatory Compliance Note:
              </strong>
              <p>
                In compliance with personal privacy standards and consular guidelines, all sensitive personal details (such as passport numbers, complete birth dates, and residential addresses) displayed on visa vignettes or COE forms are masked. Official visas and residence clearances are granted solely by the Immigration Services Agency of Japan.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox / Modal for Photo Zoom: Pure photo, no bottom bar */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-3xl max-h-[92vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-800/80 text-white hover:bg-red-600 transition-colors cursor-pointer"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-2 sm:p-4 max-h-[88vh] overflow-auto flex items-center justify-center">
              <img 
                src={selectedPhoto.image} 
                alt={selectedPhoto.title || "Document"} 
                className="max-h-[82vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Direct Contact & Inquiry Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Want to Be in Our Next Visa Success Gallery?
            </h3>
            <p className="text-base sm:text-lg text-slate-300 font-normal">
              Start your Japanese language classes and Japan visa processing at {contactInfo.name} ({contactInfo.headOffice}). Founder & CEO: {contactInfo.founder}.
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
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm sm:text-base font-bold"
            >
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm sm:text-base font-bold border border-slate-700"
            >
              Visit Jalandhar Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};