import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { boardMembers, boardSummary, siteMeta } from '../data/siteContent';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A foundation shaped by grace, stewardship, and meaningful service"
        text="Founded in 2018, Charis Legacy Foundation was created to support qualified nonprofit partners with a proven record of providing aid, care, support, and educational opportunity to those in need."
        imageSrc="/images/about-hero.png"
        imageAlt="People in a community conversation"
      />

      <section className="section">
        <div className="container two-column content-columns">
          <div>
            <SectionIntro
              eyebrow="Foundation story"
              title="Rooted in the idea of giving without the expectation of any reciprocal return"
              text="The name Charis Legacy comes from the Greek word charis, a word associated with grace and giving without expectation of reciprocal return. For the foundation, that idea reflects both a spiritual dimension and a practical commitment to Christ-like charity expressed through thoughtful service."
            />
            <p>
              Charis Legacy was founded with the intent to meet real needs by supporting nonprofit organizations already doing meaningful work. Rather than operating as a broad grantmaking institution, the foundation prefers focused partnerships where purpose, trust, and community benefit are clear.
            </p>
            <p>
              Though Charis Legacy has supported both its own local and international efforts, it believes the greatest difference is often made through strong local charitable and educational organizations that are already helping build and strengthen communities.
            </p>
          </div>

          <div className="info-card emphasis">
            <h3>Our mission</h3>
            <p>{siteMeta.mission}</p>

            <h3>Our approach</h3>
            <p>
              Charis Legacy seeks to be caring, thoughtful, and careful with our resources. The foundation values wise stewardship, meaningful relationships, and opportunities where practical support can strengthen both individuals and the communities around them.
            </p>
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container two-column content-columns">
          <div className="info-card">
            <h3>Local relationships matter</h3>
            <p>
              The foundation generally prefers organizations located near its board members and in communities it knows well. That local familiarity helps strengthen trust, sharpen judgment, and improve the quality of support decisions.
            </p>
          </div>
          <div className="info-card">
            <h3>Occasional broader reach</h3>
            <p>
              In select cases, Charis Legacy may support international efforts when they address urgent basic needs such as food, medicine, or similarly essential humanitarian care.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionIntro eyebrow="Leadership" title={boardSummary.title} text={boardSummary.text} align="center" />
          <div className="cards-grid two-up" style={{ marginTop: '2rem' }}>
            {boardMembers.map((member) => (
              <article key={member.name} className="info-card">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}