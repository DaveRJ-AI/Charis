import { Routes, Route } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import ImpactPage from './pages/ImpactPage';
import PartnersPage from './pages/PartnersPage';
import TransparencyPage from './pages/TransparencyPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/what-we-support" element={<SupportPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/transparency" element={<TransparencyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
