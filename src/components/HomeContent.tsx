'use client'; // This tells Next.js that this component is client-side

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Image component

const HomeContent = () => {
  // Image array for the slider
  const images = [
    { src: '/slider1.jpg', alt: 'Slider Image 1' },
    { src: '/slider2.jpg', alt: 'Slider Image 2' },
    { src: '/slider3.jpg', alt: 'Slider Image 3' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array, no need to include images.length

  return (
    <div>
      <section
        className="hero"
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh', // Full screen height
          overflow: 'hidden',
        }}
      >
        <div
          className="slider-images"
          style={{
            display: 'flex',
            transition: 'transform 1s ease-in-out',
            transform: `translateX(-${currentImageIndex * 100}%)`,
            height: '100%',
            width: '100%',
          }}
        >
          {images.map((image, index) => (
            <div key={index} style={{ minWidth: '100%', height: '100%' }}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill" // Makes the image cover the entire area
                objectFit="cover" // Ensures the image is covered in the section
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
