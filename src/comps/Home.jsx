import React from 'react';
import '../comps/home.css'; 
import wood from '../pics/wood.jpg'
import vase from '../pics/vase.jpg'
import clock from '../pics/clock.jpg'
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/shop");
  };

  return (
    <div className="home-container">
      {/* Banner Section */}
      <section className="home-banner">
        <h1>Welcome to OneStop</h1>
        <p>Your one-stop shop for unique and high-quality products!</p>
        <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
      </section>

      {/* Introduction Section */}
      <section className="home-intro">
        <h2>Discover Our Collection</h2>
        <p>
          At OneStop, we offer a curated selection of products designed to inspire and delight. From handmade crafts to modern gadgets, our collection has something for everyone.
        </p>
      </section>

      {/* Featured Products Section */}
      <section className="home-featured">
        <h2>Featured Products</h2>
        <div className="featured-items">
          <div className="featured-item">
            <img src={wood} alt="Featured Product 1" />
            <h3>Wooden Chair</h3>
            <p>$49.99</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="featured-item">
            <img src={vase} alt="Featured Product 2" />
            <h3>Vase</h3>
            <p>$39.99</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="featured-item">
            <img src={clock} alt="Featured Product 3" />
            <h3>Antique Clock</h3>
            <p>$29.99</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="home-cta">
        <h2>Join Our Community</h2>
        <p>
          Sign up for our newsletter and be the first to know about new arrivals, exclusive offers, and more!
        </p>
        <button className="subscribe-btn" >Subscribe</button>
      </section>
    </div>
  );
};

export default Home;
