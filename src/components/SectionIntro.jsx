export default function SectionIntro({ eyebrow, title, text, align = 'left' }) {
  const className = `section-intro section-intro-${align}`;

  return (
    <div className={className}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p className="section-intro-text">{text}</p> : null}
    </div>
  );
}