import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { About } from './pages/About';
import { HowToApply } from './pages/HowToApply';
import { Blog } from './pages/Blog';
import { SuccessGallery } from './pages/SuccessGallery';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-[#fafbfc] text-slate-800 antialiased selection:bg-red-600 selection:text-white relative">
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <Routes>
            {/* 1). Home */}
            <Route path="/" element={<Home />} />

            {/* 2). Courses */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/japanese-language" element={<Navigate to="/courses" replace />} />

            {/* 3). About Us */}
            <Route path="/about" element={<About />} />
            <Route path="/about-us" element={<Navigate to="/about" replace />} />

            {/* 4). Admission -> How to apply */}
            <Route path="/admission" element={<HowToApply />} />
            <Route path="/admission/how-to-apply" element={<HowToApply />} />
            <Route path="/how-to-apply" element={<HowToApply />} />
            <Route path="/study-in-japan" element={<Navigate to="/admission/how-to-apply" replace />} />
            <Route path="/japan-student-visa" element={<Navigate to="/admission/how-to-apply" replace />} />
            <Route path="/japan-intakes" element={<Navigate to="/admission/how-to-apply" replace />} />

            {/* 5). Blog */}
            <Route path="/blog" element={<Blog />} />

            {/* 6). Gallery */}
            <Route path="/gallery" element={<SuccessGallery />} />
            <Route path="/success-gallery" element={<Navigate to="/gallery" replace />} />
            <Route path="/success-stories" element={<Navigate to="/gallery" replace />} />

            {/* 7). Contact Us */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<Navigate to="/contact" replace />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp and Google Maps Logos */}
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;
