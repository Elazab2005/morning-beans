import { Minus, Plus, X } from 'lucide-react';
import useDialog from '../hooks/useDialog';
import { total, whatsappUrl } from '../utils/whatsapp';
export default function CartDrawer({ cart, setCart, onClose }) {
  useDialog(onClose);
  const change = (key, d) => setCart(cart.map((i) => (i.key === key ? { ...i, qty: i.qty + d } : i)).filter((i) => i.qty > 0));
  return (<>
    <div className="ov" onClick={onClose} />
    <aside className="drawer" role="dialog" aria-modal="true" aria-label="Your order">
      <header><h2>Your Order</h2><button className="icon-btn" onClick={onClose} aria-label="Close cart"><X size={20} /></button></header>
      {cart.length === 0 ? (
        <div className="items"><div className="empty"><h3>Your cart is empty</h3><p>Explore our menu and add something delicious.</p>
          <a href="#menu" className="btn btn-dark" onClick={onClose}>Browse Menu</a></div></div>
      ) : (<>
        <ul className="items" style={{ listStyle: 'none' }}>{cart.map((i) => (
          <li key={i.key} className="item"><img src={i.image} alt="" onError={(e) => { if (!e.currentTarget.dataset.fb) { e.currentTarget.dataset.fb = 1; e.currentTarget.src = i.fallback; } }} />
            <div><b>{i.name}</b>{i.choice && <small>{i.choice}</small>}<small>{i.price} EGP</small>
              <button className="rm" onClick={() => change(i.key, -i.qty)}>Remove</button></div>
            <div className="qty"><button onClick={() => change(i.key, -1)} aria-label={`Decrease ${i.name}`}><Minus size={14} /></button><span>{i.qty}</span><button onClick={() => change(i.key, 1)} aria-label={`Increase ${i.name}`}><Plus size={14} /></button></div>
          </li>))}</ul>
        <footer>
          <div className="sum"><span>Subtotal</span><span>{total(cart)} EGP</span></div>
          <button className="btn btn-line" onClick={() => setCart([])}>Clear Cart</button>
          <a className="btn btn-dark" href={whatsappUrl(cart)} target="_blank" rel="noopener noreferrer">Order via WhatsApp</a>
        </footer></>)}
    </aside></>);
}
