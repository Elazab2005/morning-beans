import { useEffect, useState } from 'react';
import { Heart, Menu as MenuIcon, ShoppingBag, X } from 'lucide-react';
const LINKS = [['Home', '#home'], ['Menu', '#menu'], ['About', '#about'], ['Contact', '#contact']];
export default function Navbar({ cartCount, favCount, onCart, onFavs }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 12); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f); }, []);
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap">
        <a href="#home" className="logo" style={{ textDecoration: 'none' }}>MORNING &amp; BEANS</a>
        <nav className="links" aria-label="Primary">{LINKS.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</nav>
        <a href="#menu" className="btn btn-dark vm">View Menu</a>
        <button className="icon-btn" onClick={onFavs} aria-label={`Favorites (${favCount})`}><Heart size={20} />{favCount > 0 && <span className="badge">{favCount}</span>}</button>
        <button className="icon-btn" onClick={onCart} aria-label={`Open cart (${cartCount} items)`}><ShoppingBag size={20} />{cartCount > 0 && <span className="badge">{cartCount}</span>}</button>
        <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X size={22} /> : <MenuIcon size={22} />}</button>
      </div>
      <nav className={`mobile ${open ? 'open' : ''}`} aria-label="Mobile" inert={!open ? '' : undefined}>
        {LINKS.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
      </nav>
    </header>
  );
}
