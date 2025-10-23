export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div style={{color: 'white'}}>
        <h1>Connect Smarter with Ailin</h1>
        <p>
          Ailin is your AI-powered social companion that helps you connect, create,
          and converse effortlessly.
        </p>
        <div className="hero-buttons">
          <a href="#download" className="btn-primary">Download App</a>
          <a href="/features" className="btn-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
}
