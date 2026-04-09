import { Link } from 'react-router-dom';
import { siteMeta } from '../data/siteContent';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{siteMeta.name}</h3>
          <p>{siteMeta.mission}</p>
        </div>

        <div>
          <h4>Explore</h4>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/what-we-support">What We Support</Link>
            <Link to="/impact">Impact</Link>
            <Link to="/partners">Partners</Link>
            <Link to="/transparency">Transparency</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4>Contact</h4>
          <p>{siteMeta.location}</p>
          <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {siteMeta.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
