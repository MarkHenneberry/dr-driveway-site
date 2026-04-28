const phoneDisplay = "(902) 830-2400";
const phoneHref = "tel:19028302400";

const services = [
  "Asphalt driveway paving",
  "Driveway resurfacing",
  "Asphalt repairs",
  "Concrete work",
  "Commercial paving",
  "Residential paving",
];

const galleryProjects = [
  {
    title: "Fresh asphalt driveway",
    image: "",
  },
  {
    title: "Clean driveway edge work",
    image: "",
  },
  {
    title: "Residential paving project",
    image: "",
  },
];

const benefits = [
  "Local and responsive",
  "Residential and commercial work",
  "Clear quotes",
  "Quality finish",
];

const reviews = [
  "Good service, friendly owner and fair price.",
  "Very quick and did quality work at a competitive price.",
  "Driveway looks brand new.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dr. Driveway home">
          <span className="brand-mark">DR</span>
          <span>
            <strong>Dr. Driveway</strong>
            <small>Asphalt Paving & Concrete</small>
          </span>
        </a>
        <a className="header-call" href={phoneHref}>
          Call {phoneDisplay}
        </a>
      </header>

      <section id="top" className="hero">
        <div className="hero-content">
          <p className="eyebrow">Cole Harbour, Nova Scotia</p>
          <h1>Driveway paving, asphalt repair & concrete work in Cole Harbour.</h1>
          <p className="hero-copy">
            Residential and commercial paving services across Cole Harbour,
            Dartmouth, Halifax, and HRM.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={phoneHref}>
              Call for a Free Quote
            </a>
            <a className="button button-secondary" href="#services">
              View Services
            </a>
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Business reputation">
        <div>
          <strong>4.7-star</strong>
          <span>Google rating</span>
        </div>
        <div>
          <strong>30</strong>
          <span>Google reviews</span>
        </div>
        <div>
          <strong>98%</strong>
          <span>recommended on Facebook</span>
        </div>
        <div>
          <strong>Local</strong>
          <span>Cole Harbour contractor</span>
        </div>
      </section>

      <section id="services" className="section light-section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Practical paving and concrete work for homes and businesses.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service}>
              <span className="service-icon" aria-hidden="true" />
              <h3>{service}</h3>
              <p>
                Reliable prep, clean edges, and a durable finish built for local
                driveways, lots, and access areas.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-heading">
          <p className="eyebrow">Project Gallery</p>
          <h2>Recent paving work, ready for real project photos.</h2>
        </div>
        <div className="gallery-grid">
          {galleryProjects.map((project, index) => (
            <article className="gallery-card" key={project.title}>
              <div className="gallery-media">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <span>Project photo {index + 1}</span>
                )}
              </div>
              <h3>{project.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">Why Choose Us</p>
          <h2>A local paving contractor focused on straight answers and clean results.</h2>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit) => (
            <div className="benefit-item" key={benefit}>
              <span aria-hidden="true">&#10003;</span>
              <strong>{benefit}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section light-section">
        <div className="section-heading">
          <p className="eyebrow">Reviews</p>
          <h2>Local feedback from customers who value fair pricing and fast work.</h2>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review}>
              <div className="stars" aria-label="Five star review">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <p>&ldquo;{review}&rdquo;</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <div>
          <p className="eyebrow">Free Quotes</p>
          <h2>Call today and get your free quote</h2>
          <p>
            Dr. Driveway Asphalt Paving & Concrete serves Cole Harbour,
            Dartmouth, Halifax, and surrounding HRM communities.
          </p>
        </div>
        <a className="phone-link" href={phoneHref}>
          {phoneDisplay}
        </a>
        <address>
          20 Otago Dr, Cole Harbour, NS B2W 4K3
        </address>
      </section>
    </main>
  );
}
