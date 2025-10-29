import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesListPage from './pages/ServicesListPage';
import AuditingPage from './pages/AuditingPage';
import BookkeepingPage from './pages/BookkeepingPage';
import SoftwarePage from './pages/SoftwarePage';
import TrainingPage from './pages/TrainingPage';
import TaxPage from './pages/TaxPage';
import ContactPage from './pages/ContactPage';
import DataAnalysisPage from './pages/DataAnalysisPage';
import BackToTopButton from './components/BackToTopButton';
import LiveChatWidget from './components/LiveChatWidget';

const App: React.FC = () => {
  const getRoute = () => window.location.hash || '#/home';
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (window.location.hash === '') {
      window.location.hash = '#/home';
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/home':
        return <HomePage />;
      case '#/about':
        return <AboutPage />;
      case '#/services':
        return <ServicesListPage />;
      case '#/auditing':
        return <AuditingPage />;
      case '#/bookkeeping':
        return <BookkeepingPage />;
      case '#/software':
        return <SoftwarePage />;
      case '#/training':
        return <TrainingPage />;
      case '#/tax':
        return <TaxPage />;
      case '#/contact':
        return <ContactPage />;
      case '#/data-analysis':
        return <DataAnalysisPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-white font-sans text-gray-800 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <BackToTopButton />
      <LiveChatWidget />
    </div>
  );
};

export default App;