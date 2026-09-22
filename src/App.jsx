import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgrammesPage from './pages/ProgrammesPage';
import ProgrammeAi900Page from './pages/ProgrammeAi900Page';
import AlgoTradingPage from './pages/AlgoTradingPage';
import MentorsPage from './pages/MentorsPage';
import ResearchPage from './pages/ResearchPage';
import CareersPage from './pages/CareersPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import CapstonePage from './pages/CapstonePage';
import AlphaEdgeOneYearPage from './pages/AlphaEdgeOneYearPage';

import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Ensure splash screen shows on page load
    setShowSplash(true);
  }, []);

  return (
    <HelmetProvider>
      <SplashScreen onComplete={() => setShowSplash(false)} />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programmes" element={<ProgrammesPage />} />
          <Route path="/programmes/ai-900" element={<ProgrammeAi900Page />} />
          <Route path="/algo-trading" element={<AlgoTradingPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/alphaedge-1Year" element={<AlphaEdgeOneYearPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/capstone" element={<CapstonePage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
