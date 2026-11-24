import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { About } from './pages/About';
import { StudentVisa } from './pages/StudentVisa';
import { WorkInJapan } from './pages/WorkInJapan';
import { JobOpportunitiesInIndia } from './pages/JobOpportunitiesInIndia';
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

            {/* 3). Student Visa (Study in Japan) */}
            <Route path="/student-visa" element={<StudentVisa />} />
            <Route path="/study-in-japan" element={<StudentVisa />} />
            <Route path="/japan-student-visa" element={<StudentVisa />} />
            <Route path="/japan-intakes" element={<StudentVisa />} />

            {/* 4). Work in Japan (SSW & TITP) */}
            <Route path="/work-in-japan" element={<WorkInJapan />} />
            <Route path="/ssw" element={<WorkInJapan />} />
            <Route path="/titp" element={<WorkInJapan />} />

            {/* 5). Job Opportunities in India (Japanese Companies) */}
            <Route path="/job-opportunities-in-india" element={<JobOpportunitiesInIndia />} />
            <Route path="/jobs-in-india" element={<JobOpportunitiesInIndia />} />
            <Route path="/japanese-companies-in-india" element={<JobOpportunitiesInIndia />} />

            {/* Legacy Admission Route Redirects to Student Visa */}
            <Route path="/admission" element={<Navigate to="/student-visa" replace />} />
            <Route path="/admission/how-to-apply" element={<Navigate to="/student-visa" replace />} />
            <Route path="/how-to-apply" element={<Navigate to="/student-visa" replace />} />

            {/* 6). About Us */}
            <Route path="/about" element={<About />} />
            <Route path="/about-us" element={<Navigate to="/about" replace />} />

            {/* 7). Gallery */}
            <Route path="/gallery" element={<SuccessGallery />} />
            <Route path="/success-gallery" element={<Navigate to="/gallery" replace />} />
            <Route path="/success-stories" element={<Navigate to="/gallery" replace />} />

            {/* 8). Contact Us */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<Navigate to="/contact" replace />} />

            {/* Legacy Blog Redirect */}
            <Route path="/blog" element={<Navigate to="/student-visa" replace />} />

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
