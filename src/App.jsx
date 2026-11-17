import { Routes, Route, Navigate } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/what-we-support" element={<SupportPage />} />
        <Route path="/impact" element={<Navigate to="/what-we-support#impact" replace />} />
        <Route path="/partners" element={<Navigate to="/what-we-support#partners" replace />} />
        <Route path="/transparency" element={<Navigate to="/about#public-filings" replace />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
