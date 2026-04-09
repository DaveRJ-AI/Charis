export default function PageHero({ eyebrow, title, text, imageSrc, imageAlt, imageClassName = '', gridClassName = '' }) {
  if (!imageSrc) {
    return (
      <section className="section page-hero">
        <div className="container">
          <div className="page-hero-inner">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h1 className="page-hero-title">{title}</h1>
            {text ? <p className="page-hero-text">{text}</p> : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero section">
      <div className={`container hero-grid ${gridClassName}`.trim()}>
        <div className="hero-copy page-hero-inner">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="page-hero-title">{title}</h1>
          {text ? <p className="page-hero-text">{text}</p> : null}
        </div>

        <div className="hero-image-panel">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className={`hero-image ${imageClassName}`.trim()}
          />
        </div>
      </div>
    </section>
  );
}
