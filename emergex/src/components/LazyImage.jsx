import React, { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <div
      {...props}
      style={{
        backgroundImage: loaded ? `url(${src})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      {!loaded && <div>Loading...</div>}
    </div>
  );
};

export default LazyImage;