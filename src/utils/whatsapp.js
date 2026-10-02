export const WHATSAPP_NUMBER = '201000000000'; // change me: country code + number, digits only
export const BRAND = 'MORNING & BEANS';
export const total = (cart) => cart.reduce((s, i) => s + i.price * i.qty, 0);
export function whatsappUrl(cart) {
  const lines = cart.map((i) => `${i.name}${i.choice ? ` (${i.choice})` : ''} × ${i.qty}`).join('\n');
  const msg = `Hello ${BRAND},\n\nI would like to place an order:\n\n${lines}\n\nTotal: ${total(cart)} EGP\n\nThank you.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
