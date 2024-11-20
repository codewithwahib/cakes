import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image'; // Import Image from next/image

const Header = () => {
  return (
    <header className="header">
      {/* Replace img with Image component for optimization */}
      <Image 
        src="/logo.jpg" 
        alt="logo" 
        className="logo" 
        width={150} // Set width according to your design
        height={50} // Set height according to your design
      />
      <nav>
        <Link href="/" style={{ color: '#673D86', textDecoration: 'none', marginRight: '15px' }}>Home</Link>
        <Link href="/cakes" style={{ color: '#673D86', textDecoration: 'none', marginRight: '15px' }}>Cakes</Link>
        <Link href="/about" style={{ color: '#673D86', textDecoration: 'none', marginRight: '15px' }}>About</Link>
        <Link href="/contact" style={{ color: '#673D86', textDecoration: 'none', marginRight: '15px' }}>Contact</Link>
        <FaShoppingCart style={{ color: '#673D86', fontSize: '20px' }} /> {/* Styled Shopping Cart */}
        <span></span>
      </nav>
    </header>
  );
};

export default Header;