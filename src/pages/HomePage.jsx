import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Charis Legacy Foundation · Established 2018</p>
            <h1>Supporting essential needs. Expanding educational opportunity.</h1>
            <p className="hero-text">We support qualified nonprofit organizations serving individuals, families, and communities, with an emphasis on trusted local relationships.</p>
            <div className="button-row">
              <Link className="button button-primary" to="/what-we-support">What We Support</Link>
              <Link className="text-link" to="/about">About the Foundation <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="hero-image-panel">
            <img src="/images/home-hero.png" alt="Scenes of charity, food assistance, and community care" className="hero-image" width="1024" height="1536" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Our focus</p><h2>Practical care. Lasting opportunity.</h2></div>
          </div>
          <div className="cards-grid two-up">
            <article className="info-card"><p className="eyebrow">01 / Essential needs</p><h3>Helping sustain and strengthen lives</h3><p>Food, safety, care, and relief for individuals and families facing hardship.</p></article>
            <article className="info-card"><p className="eyebrow">02 / Education</p><h3>Opening doors through learning</h3><p>Language learning, scholarships, and educational opportunities for people with limited resources.</p></article>
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Selected organizations we have supported</p><h2>Service through partnership.</h2></div>
            <Link className="text-link" to="/what-we-support#partners">Explore our partners <span aria-hidden="true">→</span></Link>
          </div>
          <div className="partner-preview">
            <div><img src="/images/partners/capsa_logo.webp" alt="CAPSA" loading="lazy" /><p>Safety &amp; recovery</p></div>
            <div><img src="/images/partners/elc_logo.webp" alt="English Language Center" loading="lazy" /><p>Learning &amp; opportunity</p></div>
            <div><img src="/images/partners/cvfh_logo.avif" alt="Cache Valley for Hope" loading="lazy" /><p>Care through hardship</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
