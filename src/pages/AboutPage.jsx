import PageHero from '../components/PageHero';
import { boardMembers, siteMeta } from '../data/siteContent';

const filings = Object.keys(import.meta.glob('/public/docs/990s/*.pdf', { eager: true, query: '?url', import: 'default' }))
  .map((path) => ({ url: path.replace('/public', ''), year: path.match(/(20\d{2})/)?.[1] }))
  .sort((a, b) => Number(b.year) - Number(a.year));

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Charis Legacy" title="A legacy of grace and service." text="Founded in 2018, Charis Legacy Foundation brings a relationship-centered approach to supporting nonprofit organizations and the communities they serve." imageSrc="/images/about-hero.png" imageAlt="A volunteer serving a warm meal to a child" />

      <section className="section surface" id="mission">
        <div className="container two-column">
          <div><p className="eyebrow">Our mission</p><h2>Care for today.<br />Opportunity for tomorrow.</h2></div>
          <div className="prose"><p className="lead">{siteMeta.mission}</p><p>Our work emphasizes communities where the board has local knowledge and relationships. We value clear purpose, responsible use of resources, and support that helps organizations remain sustainable.</p></div>
        </div>
      </section>

      <section className="section" id="history">
        <div className="container two-column">
          <div className="supporting-image"><img src="/images/transparency-hero.png" alt="A food bank volunteer handing a bag of groceries to a community member" loading="lazy" width="1024" height="1536" /></div>
          <div className="prose"><p className="eyebrow">Our history</p><h2>Rooted in giving.</h2><p>The foundation was established in 2018 to support nonprofit partners with a record of providing aid, care, and educational opportunity.</p><p>The name <em>Charis</em> reflects grace and giving without expectation of return. Inspired by Christ-like charity, the foundation seeks to put those values into practice through service and thoughtful stewardship.</p><p>Our emphasis is local. Selected international support has also helped meet urgent needs such as food and medicine.</p></div>
        </div>
      </section>

      <section className="section surface" id="board">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Our board</p><h2>People entrusted with the mission.</h2></div><p>The board oversees the foundation’s direction, resources, and nonprofit partnerships.</p></div>
          <div className="board-grid">{boardMembers.map((member) => <article className="board-member" key={member.name}><h3>{member.name}</h3><p>{member.role}</p></article>)}</div>
        </div>
      </section>

      <section className="section" id="public-filings">
        <div className="container filings-grid">
          <div><p className="eyebrow">Public filings</p><h2>Information you can review.</h2></div>
          <div><p>Annual IRS filings are available below for partners and others seeking information about the foundation.</p><div className="filings-list">{filings.map((filing) => <a key={filing.url} className="filing-link" href={filing.url} target="_blank" rel="noreferrer"><span>{filing.year ? `${filing.year} IRS Form 990` : 'IRS filing'}</span><span>PDF <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></span></a>)}</div></div>
        </div>
      </section>
    </>
  );
}
