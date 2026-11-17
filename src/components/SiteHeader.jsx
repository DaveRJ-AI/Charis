import { Link, NavLink } from 'react-router-dom';
import { siteMeta, navItems } from '../data/siteContent';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label={siteMeta.name}>
          <img src="/images/charis-logo.png" alt="Charis Legacy Foundation logo" className="brand-logo" />
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
