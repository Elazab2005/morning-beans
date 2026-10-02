import { Heart, Plus } from 'lucide-react';
export default function ProductCard({ product: p, isFav, onFav, onAdd, onOpen, delay = 0 }) {
  const stop = (fn) => (e) => { e.stopPropagation(); fn(p); };
  return (
    <article className="card" style={{ animationDelay: `${Math.min(delay, 8) * 40}ms` }} onClick={() => onOpen(p)}>
      {p.popular && <span className="pill">Popular</span>}
      <button className={`fav ${isFav ? 'on' : ''}`} onClick={stop(onFav)} aria-pressed={isFav} aria-label={`${isFav ? 'Remove' : 'Save'} ${p.name} ${isFav ? 'from' : 'to'} favorites`}><Heart size={18} /></button>
      <div className="pic"><img src={p.image} alt={p.name} loading="lazy" onError={(e) => { if (!e.currentTarget.dataset.fb) { e.currentTarget.dataset.fb = 1; e.currentTarget.src = p.fallback; } }} /></div>
      <div className="body">
        <span className="cat">{p.category}</span>
        <h3><button onClick={(e) => { e.stopPropagation(); onOpen(p); }} style={{ font: 'inherit', textAlign: 'left' }}>{p.name}</button></h3>
        <p>{p.description}</p>
        <div className="foot"><span className="price">{p.price} EGP</span>
          <button className="add" onClick={stop(onAdd)} aria-label={`Add ${p.name} to cart`}><Plus size={16} />Add</button></div>
      </div>
    </article>
  );
}
