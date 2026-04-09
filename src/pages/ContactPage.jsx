import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { siteMeta } from '../data/siteContent';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="A clear path for thoughtful inquiry"
        text="Charis Legacy Foundation welcomes contact from aligned nonprofit organizations, community stakeholders, and others seeking to better understand the foundation’s mission, priorities, or areas of support."
        imageSrc="/images/contact-hero.png"
        imageAlt="Person working at a laptop and writing notes"
      />

      <section className="section">
        <div className="container two-column content-columns">
          <div>
            <SectionIntro
              eyebrow="General inquiries"
              title="The best first step is a concise, mission-aligned introduction"
              text="Organizations reaching out for the first time do not need to prepare a formal packet. A thoughtful summary is usually the best way to begin."
            />

            <div className="cards-grid two-up">
              <article className="info-card">
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
                </p>
              </article>

              <article className="info-card">
                <h3>Location</h3>
                <p>{siteMeta.location}</p>
              </article>
            </div>
          </div>

          <article className="info-card emphasis">
            <h3>Helpful first-contact information</h3>
            <ul className="bullet-list">
              <li>Name of organization</li>
              <li>501(c)(3) status</li>
              <li>Primary mission or area of work</li>
              <li>Community served</li>
              <li>Short description of the need or opportunity</li>
              <li>Why the request aligns with Charis Legacy’s priorities</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section surface">
        <div className="container two-column content-columns">
          <div>
            <SectionIntro
              eyebrow="Who should reach out"
              title="The contact page is intended for serious and relevant inquiry"
              text="Charis Legacy’s public contact path is best suited to nonprofit organizations, community partners, and stakeholders whose questions or requests are connected to the foundation’s mission."
            />
          </div>

          <article className="info-card">
            <h3>This page is a good fit for</h3>
            <ul className="bullet-list">
              <li>Mission-aligned nonprofit organizations</li>
              <li>Community and partner organizations</li>
              <li>Board and stakeholder inquiries</li>
              <li>Questions about mission, priorities, or transparency materials</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Direct contact</p>
            <h2>We'd like to hear from you!</h2>
            <p>
              If you are a partner or potential partner, please reach out by email.
            </p>
          </div>
          <div className="button-row">
            <a className="button button-primary" href={`mailto:${siteMeta.email}`}>
              Email the Board
            </a>
          </div>
        </div>
      </section>
    </>
  );
}