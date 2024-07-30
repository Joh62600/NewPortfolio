// src/components/Banner.js

import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = ({ title, text, image, quotes }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    if (quotes && quotes.length > 0) {
      const interval = setInterval(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 5000); 

      return () => clearInterval(interval);
    }
  }, [quotes]);

  const currentQuote = quotes ? quotes[currentQuoteIndex] : null;

  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-overlay"></div> {/* Overlay ajouté */}
      <div className="banner-text">
        {title && <h2 className="banner-title">{title}</h2>}
        {text && <p>{text}</p>}
        {currentQuote && (
          <>
            <p className="banner-quote">{currentQuote.text}</p>
            <p className="banner-author">- {currentQuote.author}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Banner;
