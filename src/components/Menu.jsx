import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';
export default function Menu({ favOnly, setFavOnly, favs, ...card }) {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => (category === 'All' || p.category === category) && (!favOnly || favs.includes(p.id)) &&
      (!q || [p.name, p.description, p.category].some((t) => t.toLowerCase().includes(q))));
  }, [category, query, favOnly, favs]);
  const clear = () => { setCategory('All'); setQuery(''); setFavOnly(false); };
  const noFavs = favOnly && favs.length === 0;
  return (
    <section id="menu" className="section"><div className="wrap">
      <div className="head">
        <div><h2 className="h2">Our Menu</h2><p className="sub">Freshly prepared favorites, crafted for every moment.</p></div>
        <label className="search"><Search size={18} aria-hidden /><span style={{ position: 'absolute', left: -9999 }}>Search menu</span>
          <input type="search" placeholder="Search menu..." value={query} onChange={(e) => setQuery(e.target.value)} /></label>
      </div>
      <div className="cats" role="group" aria-label="Menu categories">
        {categories.map((c) => <button key={c} className="chip" aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>)}
        <button className="chip" aria-pressed={favOnly} onClick={() => setFavOnly(!favOnly)}>Favorites</button>
      </div>
      {shown.length ? (
        <div className="grid" key={category + favOnly}>{shown.map((p, i) => <ProductCard key={p.id} product={p} delay={i} isFav={favs.includes(p.id)} {...card} />)}</div>
      ) : (
        <div className="empty">
          <h3>{noFavs ? 'No favorites yet' : 'No items found'}</h3>
          <p>{noFavs ? 'Save your favorite dishes and drinks for later.' : 'Try searching for another dish or drink.'}</p>
          <button className="btn btn-dark" onClick={clear}>{noFavs ? 'Browse Menu' : 'Clear Filters'}</button>
        </div>
      )}
    </div></section>
  );
}
