const phoneDisplay = "(902) 830-2400";
const phoneHref = "tel:19028302400";

const services = [
  {
    title: "Asphalt driveway paving",
    copy: "New asphalt driveways built with proper base preparation, clean edges, and a smooth compacted finish.",
  },
  {
    title: "Asphalt repairs & maintenance",
    copy: "Crack repair, patching, rough spots, and damaged asphalt sections handled before they spread.",
  },
  {
    title: "Concrete work - walkways, pads, and steps",
    copy: "Concrete walkways, pads, steps, and detail work finished cleanly around homes and properties.",
  },
  {
    title: "Patios & outdoor spaces",
    copy: "Outdoor living areas, patio surfaces, and practical hardscape upgrades with a clean finished look.",
  },
  {
    title: "Pool surrounds & hardscaping",
    copy: "Poolside surfaces, borders, and hardscape details designed for durability and tidy transitions.",
  },
  {
    title: "Residential & commercial projects",
    copy: "Driveways, access areas, small lots, and property improvements for homes and local businesses.",
  },
];

const galleryProjects = [
  {
    title: "Fresh asphalt driveway",
    image: "/images/driveway-1.jpg",
  },
  {
    title: "Clean driveway finish",
    image: "/images/driveway-2.jpg",
  },
  {
    title: "Driveway and stair work",
    image: "/images/driveway-stairs1.jpg",
  },
  {
    title: "Patio and outdoor fireplace",
    image: "/images/patio1.jpg",
  },
  {
    title: "Pool surround project",
    image: "/images/pool1.jpg",
  },
  {
    title: "Stairs and concrete detail",
    image: "/images/stairs.jpg",
  },
];

const benefits = [
  "Local and responsive",
  "Residential and commercial work",
  "Clear, honest quotes",
  "Clean, precise finish",
];

const reviews = [
  "Fair price and friendly service.",
  "Quick work and a clean finish.",
  "Driveway looks brand new.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dr. Driveway home">
          <img src="/images/logo.jpg" alt="Dr. Driveway Asphalt Paving & Concrete" />
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
          <h1>Asphalt paving, concrete work & outdoor surfaces in Cole Harbour.</h1>
          <p className="hero-copy">
            Precision residential and commercial paving, patios, stairs, and
            pool surrounds across Cole Harbour and HRM.
          </p>
          <p className="hero-trust">
            Local Cole Harbour contractor &bull; 4.7&#9733; Google rating &bull; 98%
            recommended on Facebook
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
        <div className="hero-visual" aria-label="Finished asphalt driveway project">
          <img src="/images/driveway-1.jpg" alt="Finished asphalt driveway by Dr. Driveway" />
        </div>
      </section>

      <section className="trust-bar" aria-label="Business reputation">
        <div>
          <strong>4.7-star</strong>
          <span>Google rating</span>
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

      <section className="section dark-section gallery-section">
        <div className="section-heading">
          <p className="eyebrow">Project Gallery</p>
          <h2>Finished surfaces that show the quality of the work.</h2>
          <p>
            Real driveway, concrete, patio, stair, and pool surround projects
            completed with clean lines and careful finishing.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryProjects.map((project) => (
            <article className="gallery-card" key={project.title}>
              <div className="gallery-media">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section light-section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Paving, concrete, and outdoor surface work for homes and businesses.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">Why Choose Us</p>
          <h2>A local contractor focused on careful prep, clean work, and strong finishes.</h2>
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
          <h2>Local feedback from driveway and paving customers.</h2>
          <p className="review-proof">
            Local Cole Harbour contractor with a 4.7-star Google rating and 98%
            recommended on Facebook.
          </p>
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
          <h2>Need paving, concrete, patio, stair, or pool surround work?</h2>
          <p>
            Call today for a free quote.
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
