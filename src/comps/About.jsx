// src/pages/About.js

import React from 'react';
import '../comps/about.css';
import w from'../pics/w.jpeg'
import a from '../pics/a.jpg'
import b from '../pics/b.webp'
const About = () => {
  return (
    <div className="about-container">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>Welcome to OneStop! We specialize in providing unique and high-quality products that reflect your personality and style.</p>
      </section>

      <section className="about-history">
        <h2>Our History</h2>
        <p>
          Founded in 2024, OneStop started as a small online shop with a big dream: to offer exceptional products that inspire creativity and joy. Over the years, we have grown into a vibrant community of artisans and customers who share a love for unique and beautifully crafted items.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide our customers with a curated collection of products that are not only beautiful but also functional. We believe in quality over quantity and strive to offer items that bring joy and inspiration to everyday life.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> We are committed to offering the highest quality products that are both durable and stylish.</li>
          <li><strong>Creativity:</strong> We celebrate creativity and believe in the power of unique designs to inspire and delight.</li>
          <li><strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do, and we strive to exceed their expectations with every interaction.</li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <p>
          Our team is made up of passionate individuals who are dedicated to bringing you the best products and customer service. From our talented designers to our friendly customer support team, everyone at OneStop is committed to making your shopping experience exceptional.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img src={a} alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={w} alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Lead Designer</p>
          </div>
          <div className="team-member">
            <img src={b} alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Customer Support Manager</p>
          </div>
        </div>
      </section>

      <section className="about-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"OneStop has the most beautiful and unique products! I've bought several items, and I'm always impressed by the quality and attention to detail." - <strong>Sarah L.</strong></p>
        </div>
        <div className="testimonial">
          <p>"Fantastic customer service! The team at OneStop went above and beyond to help me with my order. Highly recommend!" - <strong>Michael W.</strong></p>
        </div>
        <div className="testimonial">
          <p>"I love the creativity and uniqueness of OneStop's products. They always have something new and exciting!" - <strong>Rachel T.</strong></p>
        </div>
      </section>
    </div>
  );
};

export default About;
