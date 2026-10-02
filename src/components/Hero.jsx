export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap">
        <div className="txt">
          <p className="eyebrow">CAFÉ &amp; RESTAURANT</p>
          <h1>Good Food. Great Coffee. Better Moments.</h1>
          <p>A premium café and restaurant experience built around freshly prepared food, carefully crafted coffee, and memorable moments.</p>
          <div className="row"><a href="#menu" className="btn btn-dark">Explore Menu</a><a href="#about" className="btn btn-line">Our Story</a></div>
        </div>
        <figure><img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=75" alt="A cappuccino served on a wooden table" /></figure>
      </div>
    </section>
  );
}
