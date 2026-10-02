import { Clock, Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { categories } from '../data/products';
export function SpecialOffer() {
  return (
    <section className="section offer"><div className="wrap">
      <div><p className="eyebrow" style={{ color: 'var(--sand)' }}>SPECIAL OFFER</p><h2 className="h2">Coffee &amp; Croissant</h2>
        <p>Start your morning right.</p><a href="#menu" className="btn">Explore Offer</a></div>
      <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=70" alt="Croissant beside a cup of coffee" loading="lazy" />
    </div></section>);
}
export function About() {
  const stats = [['10+', 'Years of Experience'], ['20K+', 'Happy Guests'], ['30+', 'Menu Favorites']];
  return (
    <section id="about" className="section about"><div className="wrap">
      <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=70" alt="Inside the café" loading="lazy" />
      <div><h2 className="h2">More Than a Café</h2>
        <p>We believe great food is about more than taste. It’s about the conversations, the people, and the moments shared around the table.</p>
        <div className="stats">{stats.map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></div>
    </div></section>);
}
export function Contact() {
  const rows = [[MapPin, 'Location', 'Zagazig, Egypt'], [Clock, 'Opening Hours', 'Every Day — 8:00 AM – 12:00 AM'], [Phone, 'Phone', '+20 XXX XXX XXXX'], [Mail, 'Email', 'hello@morningbeans.example']];
  return (
    <section id="contact" className="section contact"><div className="wrap">
      <h2 className="h2">Visit Us</h2>
      <div className="info">{rows.map(([Icon, t, v]) => <div key={t}><Icon size={22} /><b>{t}</b><span>{v}</span></div>)}</div>
      <a className="btn btn-dark" href="https://www.google.com/maps/search/?api=1&query=Zagazig+Egypt" target="_blank" rel="noopener noreferrer">Get Directions</a>
    </div></section>);
}
export function Footer() {
  return (
    <footer><div className="wrap">
      <div className="cols">
        <div><h4>MORNING &amp; BEANS</h4><p style={{ fontSize: '.92rem', maxWidth: '30ch' }}>Coffee. Food. Good Moments.</p>
          <div className="row" style={{ marginTop: 12 }}><a href="#home" aria-label="Instagram"><Instagram size={20} /></a><a href="#home" aria-label="Facebook"><Facebook size={20} /></a></div></div>
        <div><h4>Navigate</h4><ul>{['Home', 'Menu', 'About', 'Contact'].map((l) => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}</ul></div>
        <div><h4>Menu</h4><ul>{categories.slice(1, 6).map((c) => <li key={c}><a href="#menu">{c}</a></li>)}</ul></div>
        <div><h4>Contact</h4><ul><li>Zagazig, Egypt</li><li>8:00 AM – 12:00 AM</li><li>hello@morningbeans.example</li></ul></div>
      </div>
      <div className="copy"><span>© 2026 MORNING &amp; BEANS. All rights reserved.</span></div>
    </div></footer>);
}
