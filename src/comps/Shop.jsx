// src/components/Shop.js

import React from 'react';
import { useCart } from '../context/Cartcont';
import './shop.css';
import clock from '../pics/clock.jpg'
import mug from '../pics/mug.jpg'
import earbuds from '../pics/ear.webp'
import sunglass from '../pics/glass.webp'
import shoes from '../pics/shoe.webp'
import phone from '../pics/stand.jpg'
import vase from '../pics/vase.jpg'
import wood from '../pics/wood.jpg'
import bag from '../pics/bag.jpeg'
import neck from '../pics/neck.webp'
import bot from '../pics/bot.webp'
import lap from '../pics/mac.webp'


const Shop = () => {
  const { addToCart } = useCart();
  
    const products = [
      { id: 1, name: 'Antique Clock', price: '$249.99', image:clock },
      { id: 2, name: 'Leather Handbag', price: '$159.99', image: bag },
      { id: 3, name: 'Wireless Earbuds', price: '$69.99', image:earbuds  },
      { id: 4, name: 'Classic Sunglasses', price: '$79.99', image:sunglass },
      { id: 5, name: 'Vase', price: '$129.99', image: vase  },
      { id: 6, name: 'Wooden Chair', price: '$99.99', image: wood },
      { id: 7, name: 'Smartphone Stand', price: '$189.99', image: phone  },
      { id: 8, name: 'Mug', price: '$209.99', image: mug },
      { id: 9, name: 'Running Shoes', price: '$89.99', image: shoes },
      { id: 10, name: 'Necklace', price: '$809.99', image: neck },
      { id: 11, name: 'Bottle', price: '$87.99', image: bot },
      { id: 12, name: 'Laptop', price: '$2349.99', image: lap},
    ];
  return (
    <div className="shop-container">
      <h2 className="shop-title">Shop</h2>
      <div className="shop-items">
        {products.map((product) => (
          <div key={product.id} className="shop-item">
            <img src={product.image} alt={product.name} className="shop-item-image" />
            <div className="shop-item-details">
              <h3 className="shop-item-name">{product.name}</h3>
              <p className="shop-item-price">{product.price}</p>
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(product)}
                oncl
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
