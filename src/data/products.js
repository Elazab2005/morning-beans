const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=70`;
export const CATEGORY_IMAGES = {
  Pizza: u('1513104890138-7c749659a591'), Pasta: u('1621996346565-e3dbc646d9a9'), Croissant: u('1555507036-ab1f4038808a'),
  Sandwiches: u('1528735602780-2552fd46c7af'), Breakfast: u('1525351484163-7529414344d8'), Desserts: u('1551024601-bec78aea704b'),
  'Hot Drinks': u('1509042239860-f550ce710b93'), 'Cold Drinks': u('1461023058943-07fcbe16d735'),
  'Fresh Juices': u('1600271886742-f049cd451bba'), Milkshakes: u('1572490122747-3968b75cc699'),
};
// Per-category choices shown in the product modal. Items: [label, extra price in EGP]
export const OPTIONS = {
  Pizza: [{ name: 'Size', items: [['Regular', 0], ['Large', 60]] }, { name: 'Add-on', items: [['None', 0], ['Extra Cheese', 25]] }],
  'Hot Drinks': [{ name: 'Add-on', items: [['None', 0], ['Extra Shot', 20]] }],
  'Cold Drinks': [{ name: 'Add-on', items: [['None', 0], ['Extra Shot', 20]] }],
};
let n = 0;
export const slug = (t) => t.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const p = (category, name, description, price, popular = false) => ({ id: ++n, name, category, description, price, popular, image: `/images/${slug(name)}.jpg`, fallback: CATEGORY_IMAGES[category] });
export const products = [
  p('Pizza', 'Margherita Pizza', 'Tomato sauce, fresh mozzarella and basil.', 180, true),
  p('Pizza', 'Chicken Ranch Pizza', 'Grilled chicken, ranch, mozzarella and red onion.', 220),
  p('Pizza', 'Pepperoni Pizza', 'Beef pepperoni, tomato sauce and mozzarella.', 210),
  p('Pizza', 'Four Cheese Pizza', 'Mozzarella, cheddar, parmesan and blue cheese.', 230),
  p('Pasta', 'Creamy Chicken Alfredo', 'Fettuccine, grilled chicken and parmesan cream.', 190, true),
  p('Pasta', 'Spaghetti Bolognese', 'Slow-cooked beef ragù with fresh herbs.', 170),
  p('Pasta', 'Penne Arrabbiata', 'Spicy tomato sauce, garlic and chili.', 150),
  p('Pasta', 'Pesto Gnocchi', 'Potato gnocchi, basil pesto and pine nuts.', 185),
  p('Croissant', 'Butter Croissant', 'Flaky, golden and baked fresh every morning.', 60, true),
  p('Croissant', 'Almond Croissant', 'Almond cream filling, toasted flaked almonds.', 85),
  p('Croissant', 'Turkey & Cheese Croissant', 'Smoked turkey and melted cheddar.', 95),
  p('Croissant', 'Chocolate Croissant', 'Dark chocolate batons in laminated dough.', 75),
  p('Sandwiches', 'Club Sandwich', 'Chicken, turkey, lettuce, tomato and mayo.', 165),
  p('Sandwiches', 'Grilled Halloumi', 'Halloumi, roasted peppers and rocket on ciabatta.', 140),
  p('Sandwiches', 'Roast Beef Panini', 'Roast beef, caramelised onion and swiss cheese.', 175),
  p('Sandwiches', 'Tuna Melt', 'Tuna salad and melted cheese on toasted sourdough.', 130),
  p('Breakfast', 'Shakshuka', 'Eggs poached in spiced tomato sauce with bread.', 120, true),
  p('Breakfast', 'Avocado Toast', 'Sourdough, smashed avocado and poached egg.', 135),
  p('Breakfast', 'Pancake Stack', 'Fluffy pancakes, maple syrup and butter.', 110),
  p('Breakfast', 'Full Breakfast Plate', 'Eggs, beef sausage, beans, mushrooms and toast.', 160),
  p('Desserts', 'Tiramisu', 'Mascarpone cream, espresso-soaked sponge and cocoa.', 95, true),
  p('Desserts', 'Basque Cheesecake', 'Burnt-top cheesecake with a creamy centre.', 105),
  p('Desserts', 'Chocolate Lava Cake', 'Warm cake with a molten dark chocolate core.', 100),
  p('Desserts', 'Crème Brûlée', 'Vanilla custard under a caramelised sugar crust.', 90),
  p('Hot Drinks', 'Cappuccino', 'Double espresso with steamed milk and foam.', 90, true),
  p('Hot Drinks', 'Flat White', 'Velvety microfoam over a double ristretto.', 95),
  p('Hot Drinks', 'Espresso', 'Rich, concentrated single-origin shot.', 55),
  p('Hot Drinks', 'Spanish Latte', 'Espresso, steamed milk and condensed milk.', 105),
  p('Hot Drinks', 'Hot Chocolate', 'Dark chocolate melted into steamed milk.', 85),
  p('Cold Drinks', 'Iced Latte', 'Espresso over cold milk and ice.', 95),
  p('Cold Drinks', 'Cold Brew', 'Steeped 18 hours for a smooth, low-acid cup.', 100),
  p('Cold Drinks', 'Iced Spanish Latte', 'Sweet, creamy and served over ice.', 110),
  p('Cold Drinks', 'Lemon Mint Cooler', 'Fresh lemon, mint and sparkling water.', 70),
  p('Cold Drinks', 'Iced Matcha', 'Ceremonial matcha with cold milk.', 115),
  p('Fresh Juices', 'Orange Juice', 'Freshly squeezed Egyptian oranges.', 65),
  p('Fresh Juices', 'Mango Juice', 'Seasonal mango, no added sugar.', 80),
  p('Fresh Juices', 'Strawberry Juice', 'Ripe strawberries blended with a touch of honey.', 80),
  p('Fresh Juices', 'Pomegranate Juice', 'Pressed to order.', 90),
  p('Milkshakes', 'Chocolate Milkshake', 'Dark chocolate and vanilla ice cream.', 95, true),
  p('Milkshakes', 'Vanilla Milkshake', 'Madagascan vanilla and whole milk.', 85),
  p('Milkshakes', 'Strawberry Milkshake', 'Strawberries and cream.', 90),
  p('Milkshakes', 'Oreo Milkshake', 'Crushed cookies, vanilla ice cream and milk.', 100),
];
export const categories = ['All', ...new Set(products.map((x) => x.category))];
