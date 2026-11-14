import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { JapaneseLanguage } from './pages/JapaneseLanguage';
import { StudyInJapan } from './pages/StudyInJapan';
import { StudentVisa } from './pages/StudentVisa';
import { SuccessGallery } from './pages/SuccessGallery';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-800 antialiased selection:bg-red-600 selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/japanese-language" element={<JapaneseLanguage />} />
            <Route path="/study-in-japan" element={<StudyInJapan />} />
            <Route path="/japan-student-visa" element={<StudentVisa />} />
            <Route path="/gallery" element={<SuccessGallery />} />
            <Route path="/success-gallery" element={<Navigate to="/gallery" replace />} />
            <Route path="/success-stories" element={<Navigate to="/gallery" replace />} />
            <Route path="/japan-intakes" element={<Navigate to="/study-in-japan" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
