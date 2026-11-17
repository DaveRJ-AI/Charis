import { Link } from 'react-router-dom';
import { navItems, siteMeta } from '../data/siteContent';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><h3>{siteMeta.name}</h3><p>{siteMeta.tagline}</p><p className="footer-policy">Nonprofit support by invitation only.</p></div>
        <nav aria-label="Footer navigation"><h4>Explore</h4><div className="footer-links">{navItems.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div></nav>
        <div><h4>Connect</h4><p>{siteMeta.location}</p><Link className="footer-filings" to="/about#public-filings">Public filings</Link></div>
      </div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} {siteMeta.name}. All rights reserved.</p><p>Built by <a href="https://www.nascenticai.com">Nascentic, LLC</a></p></div>
    </footer>
  );
}
