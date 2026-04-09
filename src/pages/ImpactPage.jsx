import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { impactHighlights, impactStories } from '../data/siteContent';

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Partnerships designed for meaningful human impact"
        text="Charis Legacy Foundation looks for opportunities where support can help sustain life, reduce hardship, and strengthen charitable or educational work with practical and lasting benefit."
        imageSrc="/images/impact-hero.png"
        imageAlt="Volunteers helping in a community setting"
        imageClassName="impact-hero-image"
        gridClassName="impact-hero-grid"
      />

      <section className="section">
        <div className="container cards-grid three-up">
          {impactHighlights.map((item) => (
            <article key={item.title} className="info-card emphasis">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <SectionIntro
            eyebrow="Selected examples"
            title="Early examples of the kinds of outcomes Charis Legacy seeks to support"
            text="These examples help illustrate the foundation’s emphasis on basic needs, careful stewardship, and educational or humanitarian work with real-world outcomes."
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
    </>
  );
}