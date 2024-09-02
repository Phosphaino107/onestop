// src/components/Cart.js

import React from 'react';
import { useCart } from '../context/Cartcont';
import './cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Ensure item.price and item.quantity are numbers
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity, 10) || 0;
      return total + price * quantity;
    }, 0);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is currently empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">{item.price}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <button className="remove-item-button" onClick={() => removeFromCart(item.id)}>
                  <i className="fas fa-trash"></i> Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
            <button className="checkout-button" onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
