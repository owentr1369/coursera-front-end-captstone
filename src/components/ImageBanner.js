import React from 'react';
import '../styles/main.css';

const ImageBanner = ({ src, title, subtitle }) => (
  <section className="image-banner-wrapper">
    <img className="image" src={src} alt={title} />
    {title && <h1 className="image-title">{title}</h1>}
    {subtitle && <p className="image-subtitle">{subtitle}</p>}
  </section>
);

export default ImageBanner;
