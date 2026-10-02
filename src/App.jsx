import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { products, OPTIONS } from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Menu from './components/Menu';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import { SpecialOffer, About, Contact, Footer } from './components/Sections';

export default function App() {
  const [cart, setCart] = useLocalStorage('morning-beans-cart', []);
  const [favs, setFavs] = useLocalStorage('morning-beans-favorites', []);
  const [selected, setSelected] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [favOnly, setFavOnly] = useState(false);

  const toggleFav = (p) => setFavs((f) => (f.includes(p.id) ? f.filter((id) => id !== p.id) : [...f, p.id]));
  const addToCart = (p, qty = 1, selection) => {
    const sel = selection || (OPTIONS[p.category] || []).map((g) => g.items[0]);
    const choice = sel.filter((s) => s[0] !== 'None').map((s) => s[0]).join(', ');
    const price = p.price + sel.reduce((a, s) => a + s[1], 0);
    const key = `${p.id}|${choice}`;
    setCart((c) => (c.some((i) => i.key === key) ? c.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i)) : [...c, { key, id: p.id, name: p.name, image: p.image, fallback: p.fallback, choice, price, qty }]));
    setCartOpen(true);
  };
  const cardProps = { favs, onFav: toggleFav, onAdd: (p) => addToCart(p), onOpen: setSelected };
  const showFavs = () => { setFavOnly(true); document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); };

  return (<>
    <Navbar cartCount={cart.reduce((s, i) => s + i.qty, 0)} favCount={favs.length} onCart={() => setCartOpen(true)} onFavs={showFavs} />
    <main>
      <Hero />
      <section className="section" style={{ paddingTop: 0 }}><div className="wrap">
        <div className="head"><div><h2 className="h2">Customer Favorites</h2><p className="sub">The dishes and drinks our guests come back for.</p></div></div>
        <div className="grid">{products.filter((p) => p.popular).slice(0, 4).map((p, i) => <ProductCard key={p.id} product={p} delay={i} isFav={favs.includes(p.id)} {...cardProps} />)}</div>
      </div></section>
      <Menu favOnly={favOnly} setFavOnly={setFavOnly} {...cardProps} />
      <SpecialOffer /><About /><Contact />
    </main>
    <Footer />
    {selected && <ProductModal key={selected.id} product={selected} isFav={favs.includes(selected.id)} onFav={toggleFav} onAdd={addToCart} onClose={() => setSelected(null)} />}
    {cartOpen && <CartDrawer cart={cart} setCart={setCart} onClose={() => setCartOpen(false)} />}
  </>);
}
