import React from 'react';

const LazyImage = ({ src, alt }) => {
  return (
    <img
      style={{ maxWidth: '100%', height: 'auto' }}
      src={src}
      alt={alt}
    />
  );
};

export default LazyImage;