import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import {
  qualificationGoodFit,
  qualificationNotFit,
  supportAreas,
} from '../data/siteContent';

const supportPrinciples = [
  {
    title: 'Basic needs come first',
    text: 'Charis Legacy gives particular attention to organizations helping meet essential human needs such as food, safety, practical care, and similar forms of humanitarian support.',
  },
  {
    title: 'Education also matters',
    text: 'The foundation also values educational opportunities that open doors for individuals with limited resources and help strengthen long-term flourishing.',
  },
  {
    title: 'Local familiarity enables',
    text: 'Preference is generally given to organizations serving communities near board members and places where relationships, credibility, and needs are better understood.',
  },
  {
    title: 'International support is limited',
    text: 'Occasional international support may be considered, but typically only when urgent and essential needs such as food or medicine are involved.',
  },
];

export default function WhatWeSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Support"
        title="Support priorities shaped by human need, stewardship, and mission fit"
        text="Charis Legacy Foundation is selective in the opportunities it supports. The foundation looks for serious nonprofit organizations whose work reflects humanitarian care, educational opportunity, thoughtful stewardship, and meaningful benefit to the communities they serve."
        imageSrc="/images/support-hero.png"
        imageAlt="Children learning in a classroom"
        imageClassName="support-hero-image"
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Support priorities"
            title="What generally aligns well with the foundation’s work"
            text="The foundation is not designed to serve as a broad-spectrum grantmaker. It prefers focused opportunities where purpose, leadership, need, and expected impact are clear."
          />
          <div className="cards-grid four-up">
            {supportPrinciples.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section accent-surface">
        <div className="container two-column content-columns">
          <div>
            <SectionIntro
              eyebrow="A good fit"
              title="Organizations most likely to align with Charis Legacy"
              text="The following characteristics generally describe the kinds of partners the foundation is most interested in hearing from."
            />
          </div>

          <article className="info-card emphasis">
            <h3>Generally a good fit</h3>
            <ul className="bullet-list">
              {qualificationGoodFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container two-column content-columns">
          <div>
            <SectionIntro
              eyebrow="Usually not supported"
              title="Requests that are generally outside the foundation’s focus"
              text="The foundation generally does not support requests that are outside its core mission and focus areas."
            />
          </div>

          <article className="info-card">
            <h3>Also generally not a fit</h3>
            <ul className="bullet-list">
              {qualificationNotFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section surface">
        <div className="container two-column content-columns">
          <div>
            <SectionIntro
              eyebrow="Beyond funding"
              title="Partnership may sometimes include experience and perspective"
              text="In addition to financial support, Charis Legacy may in some situations offer board experience, perspective, and practical insight that can strengthen partner organizations in meaningful ways."
            />
          </div>

          <article className="info-card emphasis">
            <h3>What strong inquiries usually include</h3>
            <ul className="bullet-list">
              <li>A clear explanation of the organization’s mission and nonprofit status</li>
              <li>A practical description of the need or opportunity</li>
              <li>The expected use of requested support</li>
              <li>A brief explanation of expected benefit or impact</li>
              <li>Why the organization appears to fit the foundation’s priorities</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
