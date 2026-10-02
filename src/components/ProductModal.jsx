import { useState } from 'react';
import { Heart, Minus, Plus, X } from 'lucide-react';
import { OPTIONS } from '../data/products';
import useDialog from '../hooks/useDialog';
export default function ProductModal({ product: p, isFav, onFav, onAdd, onClose }) {
  useDialog(onClose);
  const groups = OPTIONS[p.category] || [];
  const [pick, setPick] = useState(groups.map(() => 0));
  const [qty, setQty] = useState(1);
  const selection = groups.map((g, i) => g.items[pick[i]]);
  const price = p.price + selection.reduce((a, s) => a + s[1], 0);
  return (<>
    <div className="ov" onClick={onClose} />
    <div className="modal" role="dialog" aria-modal="true" aria-label={p.name}>
      <button className="x" onClick={onClose} aria-label="Close"><X size={18} /></button>
      <img src={p.image} alt={p.name} onError={(e) => { if (!e.currentTarget.dataset.fb) { e.currentTarget.dataset.fb = 1; e.currentTarget.src = p.fallback; } }} />
      <div className="in">
        <span className="cat">{p.category}{p.popular && ' · Popular'}</span>
        <h2 style={{ fontSize: '2rem' }}>{p.name}</h2>
        <p style={{ color: 'var(--muted)' }}>{p.description}</p>
        {groups.map((g, gi) => (
          <fieldset key={g.name}><legend>{g.name}</legend>
            <div className="opts">{g.items.map(([label, extra], ii) => (
              <button key={label} className="opt" aria-pressed={pick[gi] === ii} onClick={() => setPick(pick.map((v, k) => (k === gi ? ii : v)))}>{label}{extra ? ` +${extra}` : ''}</button>))}</div>
          </fieldset>))}
        <div className="foot"><span className="price" style={{ fontSize: '1.6rem' }}>{price * qty} EGP</span>
          <div className="qty"><button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity"><Minus size={16} /></button><span>{qty}</span><button onClick={() => setQty(qty + 1)} aria-label="Increase quantity"><Plus size={16} /></button></div></div>
        <div className="row">
          <button className="btn btn-dark" style={{ flex: 1 }} onClick={() => { onAdd(p, qty, selection); onClose(); }}>Add to Cart</button>
          <button className="icon-btn btn-line fav-m" style={{ border: '1px solid var(--line)', borderRadius: 6 }} onClick={() => onFav(p)} aria-pressed={isFav} aria-label="Toggle favorite"><Heart size={18} fill={isFav ? 'var(--accent-d)' : 'none'} /></button>
        </div>
      </div>
    </div></>);
}
