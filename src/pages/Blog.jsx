import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search, 
  X, 
  BookOpen
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { blogPosts, contactInfo } from '../data/content';

export const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Admissions & Visa', 'Japanese Language', 'Student Life in Japan', 'Study in Japan'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#fafbfc] text-slate-800">
      <SEOHead 
        title="Japan Education Blog & Guides | IndoJapan Japanese Language School | Jalandhar"
        description="Read official guides and insights on JLPT preparation, Japan student visa (COE) procedures, living costs, and part-time jobs in Japan by IndoJapan Japanese Language School."
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
              <span>{contactInfo.headOffice} • Founder: {contactInfo.founder}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Japan Education & Visa Blog
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Factual, up-to-date articles, JLPT preparation tips, immigration regulations, and genuine student experiences shared by our team in Jalandhar.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Category Filter Bar */}
      <section className="py-8 bg-white border-b border-slate-200/80 sticky top-20 z-30 shadow-2xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles & topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 lg:py-20 bg-[#fafbfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No articles matched your search</h3>
              <p className="text-xs text-slate-500 mt-1">Try searching for "Visa", "JLPT", "COE" or "Jobs".</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 rounded-full bg-slate-900/90 text-white text-[11px] font-bold backdrop-blur-xs">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-slate-400 text-xs">
                        <span className="flex items-center gap-1 font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{post.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h2 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h2>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-semibold truncate max-w-[180px]">
                      {post.author}
                    </span>
                    <span className="text-red-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative my-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold">
                {selectedPost.category}
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close reader"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedPost.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedPost.readTime}</span>
                  </span>
                  <span>•</span>
                  <span className="font-semibold text-slate-800">
                    By {selectedPost.author}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {selectedPost.title}
                </h1>
              </div>

              {/* Cover Image inside modal */}
              <div className="rounded-2xl overflow-hidden h-64 sm:h-80 bg-slate-100">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Prose */}
              <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 whitespace-pre-line space-y-4">
                {selectedPost.content}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                {selectedPost.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Modal Bottom CTA */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm">Have Questions on this topic?</h4>
                  <p className="text-xs text-slate-300">Connect with Founder {contactInfo.founder} at our Jalandhar Head Office.</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold"
                  >
                    WhatsApp Us
                  </a>
                  <a
                    href={`tel:${contactInfo.indiaPhone}`}
                    className="px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold"
                  >
                    Call {contactInfo.indiaPhone}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Want to Know More About Japanese Admissions?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Visit our Jalandhar Head Office at SCO 14, Civil Lines, Near BMC Chowk, or contact our helpline directly.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              to="/admission/how-to-apply"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold shadow-xs"
            >
              View How to Apply Guide
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
