import PageHero from '../components/PageHero';
import { invitationPolicy, partnerDetails } from '../data/siteContent';

export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow="What we support" title="Essential care. Opportunity to grow." text="Our support centers on humanitarian needs and education, through qualified nonprofit organizations with trusted leadership and strong community connections." imageSrc="/images/support-hero.png" imageAlt="Illustration of Christ offering a helping hand to a man in need" />

      <section className="section">
        <div className="container two-column">
          <div><p className="eyebrow">Our priorities</p><h2>Close to the need.<br />Grounded in relationships.</h2></div>
          <div className="prose"><h3>Basic needs and humanitarian care</h3><p>Food, medicine, safety, and practical relief that help sustain life and reduce hardship.</p><h3>Educational opportunity</h3><p>Learning, language access, and scholarships that expand opportunity for people with limited resources.</p><p>We generally favor local organizations in communities known to the board. International support is selective and focused on urgent essential needs.</p></div>
        </div>
      </section>

      <section className="section surface" id="partners">
        <div className="container">
          <div className="section-heading image-heading"><div><p className="eyebrow">Our partners</p><h2>Organizations carrying the work forward.</h2><p>Selected organizations Charis Legacy has supported across education, community care, and humanitarian service.</p></div><img src="/images/partners-hero.png" alt="People holding hands in support around a table" loading="lazy" width="1024" height="1536" /></div>
          <div className="cards-grid partner-grid">{partnerDetails.map((partner) => <article key={partner.name} className="info-card partner-card"><div className="partner-card-logo-wrap"><img src={partner.logoSrc} alt={partner.logoAlt} className="partner-card-logo" loading="lazy" /></div><p className="eyebrow">{partner.category}</p><h3>{partner.name}</h3><p>{partner.text}</p></article>)}</div>
        </div>
      </section>

      <section className="section" id="impact">
        <div className="container two-column impact-layout">
          <div className="supporting-image"><img src="/images/impact-hero.png" alt="Adults helping children read and write together" loading="lazy" width="1024" height="1536" /></div>
          <div><p className="eyebrow">Support in practice</p><h2>Care that reaches people.</h2><div className="story-list"><article><h3>Safety and recovery</h3><p>Support for CAPSA contributes alongside others to services helping people affected by abuse find safety and professional care.</p></article><article><h3>Food and medicine</h3><p>Support for Rise and Rebuild helps sustain food and medicine programs for children and families in the Philippines.</p></article><article><h3>Relief during cancer treatment</h3><p>Support for Cache Valley for Hope helps ease financial hardship so families can focus on treatment and recovery.</p></article></div></div>
        </div>
      </section>

      <section className="section surface">
        <div className="container two-column"><div><p className="eyebrow">Stewardship &amp; boundaries</p><h2>Focused support.<br />Sustainable organizations.</h2></div><div className="prose"><p>Support is directed to recognized 501(c)(3) nonprofit organizations for humanitarian, charitable, or educational purposes. We look for a defined use of funds and clear community benefit.</p><p>Foundation support does not exceed 50% of an organization’s total funding. Partners should have a plan for sustainability beyond our support. In some relationships, board experience may also be helpful alongside funding.</p><p>We do not support individuals, building or construction projects, or technology purchases and upgrades.</p></div></div>
      </section>

      <section className="policy-band" aria-label="Invitation-only support"><div className="container policy-inner"><h2>Funding by invitation</h2><p>{invitationPolicy}</p></div></section>
    </>
  );
}
