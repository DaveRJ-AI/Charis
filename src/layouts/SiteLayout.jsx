import { Outlet } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ScrollToTop from '../components/ScrollToTop';

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
