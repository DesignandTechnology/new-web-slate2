
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HomePage from '@/components/HomePage';

// Import these pages when needed
// import AboutPage from './app/about/page';
// import CurriculumPage from './app/curriculum/page';
// import Year1Page from './app/year-1/page';
// import Year2Page from './app/year-2/page';
// import Year3Page from './app/year-3/page';
// import Year4Page from './app/year-4/page';

const App: React.FC = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 relative overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add other routes when needed
            <Route path="/about" element={<AboutPage />} />
            <Route path="/curriculum" element={<CurriculumPage />} />
            <Route path="/year-1" element={<Year1Page />} />
            <Route path="/year-2" element={<Year2Page />} />
            <Route path="/year-3" element={<Year3Page />} />
            <Route path="/year-4" element={<Year4Page />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
