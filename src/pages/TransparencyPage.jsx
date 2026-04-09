import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';

const filingFiles = import.meta.glob('/public/docs/990s/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

const irsFilings = Object.keys(filingFiles)
  .map((path) => {
    const fileName = path.split('/').pop() || '';
    const yearMatch = fileName.match(/(20\d{2})/);
    const year = yearMatch ? Number(yearMatch[1]) : 0;
    const publicPath = path.replace('/public', '');

    return {
      fileName,
      year,
      label: year ? `${year} IRS Form 990` : fileName,
      url: publicPath,
    };
  })
  .sort((a, b) => b.year - a.year || a.fileName.localeCompare(b.fileName));

const transparencyItems = [
  {
    title: 'Annual reports',
    text: 'Annual summaries, foundation activity updates, and other materials that help communicate the work and direction of the organization.',
  },
  {
    title: 'Financial documents and 990s',
    text: 'Public-facing financial documents and required filings can be listed here as the site continues to develop.',
  },
  {
    title: 'Organizational legitimacy',
    text: 'The foundation is committed to presenting information with clarity, accuracy, and simplicity for stakeholders, partners, and community members.',
  },
];

export default function TransparencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparency"
        title="A foundation designed for continuity, stewardship, and trust"
        text="Charis Legacy Foundations public presence reflects seriousness of purpose, thoughtful governance, and a clear commitment to responsible support."
        imageSrc="/images/transparency-hero.png"
        imageAlt="Documents and thoughtful discussion"
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Public-facing materials"
            title="Key stakeholder information"
            text="Annual reports, financial documents, organizational updates, and other materials that help communicate transparency and accountability."
          />
          <div className="cards-grid four-up">
            {transparencyItems.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">IRS Filings</p>
            <h2>Annual 990 filings available for review</h2>
            <p>
              Filings placed in `public/docs/990s` will appear here automatically, with the most recent year shown
              first.
            </p>
            {irsFilings.length ? (
              <div className="filings-list">
                {irsFilings.map((filing) => (
                  <a
                    key={filing.fileName}
                    href={filing.url}
                    target="_blank"
                    rel="noreferrer"
                    className="filing-link"
                  >
                    <span>{filing.label}</span>
                    <span>Open PDF</span>
                  </a>
                ))}
              </div>
            ) : (
              <p>No IRS filings are available yet.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
