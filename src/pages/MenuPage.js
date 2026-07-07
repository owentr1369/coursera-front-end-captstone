import React, { useState } from 'react';
import '../styles/app.css';

const categories = ['All', 'Appetizers', 'Kebabs', 'Vegetarian', 'Entrees'];

const allMenuItems = [
  // Appetizers
  { name: 'Romaine Salad', desc: 'Romaine, scallions, dill, red-wine vinaigrette', price: '$17', cat: 'Appetizers', img: '/little-lemon-images/image5.jpeg' },
  { name: 'Beet Salad', desc: 'Beets, arugula, walnuts, manouri, red-wine vinaigrette', price: '$17', cat: 'Appetizers', img: '/little-lemon-images/image6.jpeg' },
  { name: 'Village Salad', desc: 'Tomato, red onion, cucumber, kalamata olives, feta, olive oil', price: '$22', cat: 'Appetizers', img: '/little-lemon-images/image7.jpeg' },
  { name: 'Octopus', desc: 'Octopus, red wine, onions, bell peppers, capers, fava puree', price: '$25', cat: 'Appetizers', img: '/little-lemon-images/image8.jpeg' },
  { name: 'Calamari', desc: 'Calamari, arugula, lemon, olive oil', price: '$21', cat: 'Appetizers', img: '/little-lemon-images/image9.jpeg' },
  { name: 'Salmon Tartare', desc: 'Salmon, shredded phyllo, horseradish, lemon, shallots, chives, yogurt, dill', price: '$22', cat: 'Appetizers', img: '/little-lemon-images/image10.jpeg' },
  // Kebabs
  { name: 'Grilled Swordfish', desc: 'Grilled swordfish, pita, mixed lettuce, parsley, spiced yogurt, sumac', price: '$28', cat: 'Kebabs', img: '/little-lemon-images/image11.jpeg' },
  { name: 'Grilled Shrimp', desc: 'Grilled shrimp, garlic, pita, parsley, spiced yogurt, sumac, onions', price: '$23', cat: 'Kebabs', img: '/little-lemon-images/image12.jpeg' },
  { name: 'Grilled Lamb', desc: 'Grilled lamb, garlic, jalapeno, pita, parsley, spiced yogurt, sumac', price: '$24', cat: 'Kebabs', img: '/little-lemon-images/image13.jpeg' },
  { name: 'Sirloin Steak Kebab', desc: 'Sirloin steak, jalapeno, pita, red peppers, spiced yogurt, sumac', price: '$25', cat: 'Kebabs', img: '/little-lemon-images/image14.jpeg' },
  // Vegetarian
  { name: 'Roasted Cauliflower', desc: 'Maghreb spices, lemon tahini', price: '$15', cat: 'Vegetarian', img: '/little-lemon-images/image15.jpeg' },
  { name: 'Ricotta Gnocchi', desc: 'Truffle cream sauce', price: '$18', cat: 'Vegetarian', img: '/little-lemon-images/image2.jpeg' },
  { name: 'Wild Mushrooms', desc: 'Sauteed with garlic, ginger, pinenuts, lemon, olive oil, over spinach', price: '$18', cat: 'Vegetarian', img: '/little-lemon-images/image3.jpeg' },
  { name: 'Burrata', desc: 'Roasted tomatoes, basil pesto, aged balsamic vinegar, toasted baguette', price: '$18', cat: 'Vegetarian', img: '/little-lemon-images/image4.jpeg' },
  // Entrees
  { name: 'Seafood Grill', desc: 'Salmon kebab, sea scallops, mini tuna burger, shrimp, basmati rice', price: '$32', cat: 'Entrees', img: '/little-lemon-images/image16.jpeg' },
  { name: 'Seafood Linguine', desc: 'Scallops, shrimp, mussels, fresh tomato, garlic, basil, jalepeño', price: '$27', cat: 'Entrees', img: '/little-lemon-images/image17.jpeg' },
  { name: 'Mushroom Ravioli', desc: 'Portobello mushroom, walnuts, parmesan, truffle oil', price: '$26', cat: 'Entrees', img: '/little-lemon-images/image1.jpeg' },
  { name: 'Mussels', desc: 'Mussels, white wine, lemon, olive oil, green pepper, greek oregano', price: '$31', cat: 'Entrees', img: '/little-lemon-images/image2.jpeg' },
];

const MenuPage = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? allMenuItems : allMenuItems.filter(i => i.cat === active);

  return (
    <div>
      {/* Banner */}
      <div className="menu-banner">
        <img src="/little-lemon-images/image11.jpeg" alt="Menu" />
        <div className="menu-banner-title">MENU</div>
      </div>

      {/* Category chips */}
      <div className="categories-list">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-chip${active === cat ? ' active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu items */}
      <div className="menu-items-list">
        {filtered.map((item) => (
          <div key={item.name} className="special-card">
            <img src={item.img} alt={item.name} className="special-card-img" />
            <div className="special-card-body">
              <span className="special-card-name">{item.name}</span>
              <span className="special-card-desc">{item.desc}</span>
              <span className="special-card-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
