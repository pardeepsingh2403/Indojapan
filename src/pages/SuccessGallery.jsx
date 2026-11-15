import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Building2, 
  GraduationCap, 
  FileCheck2, 
  X, 
  ZoomIn, 
  ArrowRight,
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
      <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
              <Award className="w-3.5 h-3.5" />
              <span>{contactInfo.headOffice} • Founder: {contactInfo.founder}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Student Visas, COE Grants & Campus Gallery
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore authentic student visa approvals, Certificate of Eligibility (COE) clearances from Japanese Immigration, classroom training in Jalandhar, and campus life across Tokyo, Osaka, and Kyoto.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Proof Highlights Strip */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-9 h-9 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">COE Approvals</span>
                <span className="block text-[11px] text-slate-500">Immigration Services Agency</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-9 h-9 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">Top Language Schools</span>
                <span className="block text-[11px] text-slate-500">Tokyo, Osaka, Kyoto & More</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-9 h-9 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">Jalandhar Center</span>
                <span className="block text-[11px] text-slate-500">SCO 14, Civil Lines</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-9 h-9 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">Transparent Guidance</span>
                <span className="block text-[11px] text-slate-500">Zero False Promises</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Filter & Grid Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === category.id
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Image Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Category / Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 text-slate-900 shadow-xs backdrop-blur-xs flex items-center gap-1">
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

                {/* Card Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-red-500" />
                        {item.subtitle}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[10px]">
                        {item.intake}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-medium text-slate-700 truncate max-w-[200px]">
                      {item.destination}
                    </span>
                    <span className="text-red-600 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy & Compliance Notice */}
          <div className="mt-12 p-5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1 leading-relaxed">
              <strong className="font-bold block text-amber-950">
                Student Data Privacy & Regulatory Compliance Note:
              </strong>
              <p>
                In compliance with personal privacy standards and consular guidelines, all sensitive personal details (such as passport numbers, complete birth dates, and residential addresses) displayed on visa vignettes or COE forms are masked. Official visas and residence clearances are granted solely by the Immigration Services Agency of Japan.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox / Modal for Photo Zoom */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-slate-950">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-red-50 text-red-700 text-xs font-bold border border-red-200">
                  {selectedPhoto.tag}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {selectedPhoto.intake}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {selectedPhoto.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedPhoto.caption}
              </p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                <div><strong>Location / Origin:</strong> {selectedPhoto.subtitle}</div>
                <div><strong>Institution / Target:</strong> {selectedPhoto.destination}</div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Direct Contact & Inquiry Banner */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Want to Be in Our Next Visa Success Gallery?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Start your Japanese language classes and Japan visa processing at {contactInfo.name} ({contactInfo.headOffice}). Founder: {contactInfo.founder}.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${contactInfo.indiaPhone}`}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {contactInfo.indiaPhone}</span>
            </a>
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold"
            >
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700"
            >
              Visit Jalandhar Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};