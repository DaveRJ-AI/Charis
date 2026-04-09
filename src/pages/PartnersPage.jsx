import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';

const partnerDetails = [
  {
    name: 'English Language Center',
    category: 'Education / Community',
    logoSrc: '/images/partners/elc_logo.webp',
    logoAlt: 'English Language Center logo',
    text: 'Support for programs that expand English as a second language learning, community participation, and educational opportunity for individuals building stronger futures.',
  },
  {
    name: 'Cache Valley for Hope',
    category: 'Humanitarian / Local care',
    logoSrc: '/images/partners/cvfh_logo.avif',
    logoAlt: 'Cache Valley for Hope logo',
    text: 'Support for families facing cancer-related hardship, helping relieve financial pressure so greater attention can be given to treatment, healing, and recovery.',
  },
  {
    name: 'CAPSA',
    category: 'Safety / Family support',
    logoSrc: '/images/partners/capsa_logo.webp',
    logoAlt: 'CAPSA logo',
    text: 'Support for services that help individuals and families find safety, stability, and renewed hope in the face of abuse, crisis, and serious hardship.',
  },
  {
    name: 'Utah State University',
    category: 'Education',
    logoSrc: '/images/partners/usu_logo.png',
    logoAlt: 'Utah State University logo',
    text: 'Support connected to educational opportunity, scholarship, and broader access to learning and long-term development.',
  },
  {
    name: 'Rise and Rebuild',
    category: 'International humanitarian aid',
    logoSrc: '/images/partners/rise_rebuild_logo.png',
    logoAlt: 'Rise and Rebuild logo',
    text: 'Support for food and medicine efforts serving vulnerable children and families where urgent basic needs are present and practical intervention can make a real difference.',
  },
  {
    name: 'Cache Valley Humanitarian Center',
    category: 'Local Basic Needs Support',
    logoSrc: '/images/partners/cvhc_logo.png',
    logoAlt: 'Cache Valley Humanitarian Center logo',
    text: 'Helping to provide sleeping mats, quilts, school and personal supplies, and other basic needs to individuals and families in need across Cache Valley.',
  },
  {
    name: 'RODS Heroes',
    category: 'Life Sustaining Support',
    logoSrc: '/images/partners/rods_logo.png',
    logoAlt: 'RODS Heroes logo',
    text: 'RODS Heroes provides financial support to families adopting children with down syndrome, helping cover adoption costs and providing ongoing support to help these children thrive in their new homes.',
  },
  {
    name: 'Community Link',
    category: 'Local Basic Needs Support',
    logoSrc: '/images/partners/community_link_logo.png',
    logoAlt: 'Community Link logo',
    text: 'Community Link grows fresh produce in a hydroponic greenhouse and distributes it to local food pantries, helping provide healthy food options to individuals and families facing food insecurity.',
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Mission-aligned organizations at the center of the foundation’s work"
        text="Charis Legacy Foundation seeks to support nonprofit partners whose work reflects practical care, responsible leadership, and meaningful benefit for the people and communities they serve."
        imageSrc="/images/partners-hero.png"
        imageAlt="Community partners planning together"
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Current examples"
            title="A growing record of thoughtful partnership"
            text="These organizations represent the kinds of relationships Charis Legacy has valued: clear mission fit, credible service, and practical impact in the lives of others."
          />
          <div className="cards-grid three-up">
            {partnerDetails.map((partner) => (
              <article key={partner.name} className="info-card">
                <span className="pill">{partner.category}</span>
                {partner.logoSrc ? (
                  <div className="partner-card-logo-wrap">
                    <img src={partner.logoSrc} alt={partner.logoAlt || `${partner.name} logo`} className="partner-card-logo" />
                  </div>
                ) : null}
                <h3>{partner.name}</h3>
                <p>{partner.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container two-column content-columns">
          <div>
            <SectionIntro
              eyebrow="What partnership means"
              title="The foundation values more than transactional giving"
              text="Charis Legacy prefers relationships where support is tied to real need, thoughtful stewardship, and service that clearly benefits others."
            />
          </div>
          <div className="info-card emphasis">
            <h3>What Charis Legacy looks for</h3>
            <ul className="bullet-list">
              <li>Clear charitable, humanitarian, or educational purpose</li>
              <li>Trusted leadership and responsible stewardship</li>
              <li>Defined use of support and meaningful expected benefit</li>
              <li>Preference for local connection and community familiarity</li>
              <li>In some cases, opportunity for board experience to be useful beyond funding</li>
              <li>Working with other donors to have a sustainable, independent, long-term financial model</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
