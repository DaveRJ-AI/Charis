import { Link } from 'react-router-dom';
import SectionIntro from '../components/SectionIntro';
import {
  heroStats,
  impactStories,
  partnerExamples,
  supportAreas,
} from '../data/siteContent';

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid hero-hero-image-right">
          <div className="hero-copy">
            <p className="eyebrow">Thoughtful giving. Responsible stewardship. Meaningful local impact.</p>
            <h1 className="home-hero-title">
              Supporting basic needs and educational opportunity through qualified nonprofit partners.
            </h1>
            <p className="hero-text" style={{ maxWidth: '58ch' }}>
              Charis Legacy Foundation helps mission-aligned nonprofit organizations provide for life-sustaining needs,
              educational opportunity, and professional experience that strengthens individuals, families, and communities.
            </p>
            <div className="button-row">
              <Link className="button button-primary" to="/what-we-support">
                What We Support
              </Link>
              <Link className="button button-secondary" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="hero-image-panel home-hero-image-panel">
            <img
              src="/images/home-hero.png"
              alt="Volunteers preparing community support packages"
              className="hero-image home-hero-image"
            />
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container cards-grid three-up">
          {heroStats.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="What we support"
            title="Support priorities shaped by human need and practical stewardship"
            text="Charis Legacy is not a broad-spectrum grantmaker. The foundation prefers mission-aligned opportunities where purpose, need, and expected impact are clear."
          />
          <div className="cards-grid four-up">
            {supportAreas.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section accent-surface">
        <div className="container">
          <SectionIntro
            eyebrow="A simple qualification guide"
            title="Is Charis Legacy a partnership fit?"
            text="For the full criteria and priorities, visit What We Support."
          />
          <Link className="button button-primary" to="/what-we-support">
            View What We Support
          </Link>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <SectionIntro
            eyebrow="Partners"
            title="Organizations and initiatives already reflected in the foundation’s work"
            text="These examples reflect the kinds of nonprofit partnerships Charis Legacy values and the areas where support has been directed."
          />
<div className="cards-grid three-up">
            {partnerExamples.slice(0, 3).map((partner) => (
              <article key={partner.name} className="info-card">
                <span className="pill">Partner</span>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="button button-secondary" to="/partners">
              View All Partners
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Impact"
            title="Examples of the outcomes Charis Legacy seeks to support"
            text="The foundation’s work is oriented toward practical care, reduced hardship, educational opportunity, and meaningful benefit in the lives of the people around us."
          />
          <div className="cards-grid three-up">
            {impactStories.map((story) => (
              <article key={story.title} className="info-card">
                <h3>{story.title}</h3>
                <p>{story.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Transparency and contacting</p>
            <h2>Compliance reporting and thoughtful inquiry</h2>
            <p>
              This includes the foundations annual reports, financial documents, and a dedicated
              contact path for aligned nonprofit organizations and community stakeholders.
            </p>
          </div>
          <div className="button-row">
            <Link className="button button-secondary" to="/transparency">
              Transparency
            </Link>
            <Link className="button button-primary" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
