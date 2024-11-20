import React from 'react';

const About = () => {
  return (
    <div>
      <section 
        className="about" 
        style={{
          backgroundImage: "url(about.jpg)", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '100vh', /* Full screen height */
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          color: 'white', 
          textAlign: 'center'
        }}
      >
        <div className="about-content" style={{ maxWidth: '800px', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
          <h2 className="fade-in" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>
            About Us
          </h2>
          <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.6' }}>
            Welcome to Watch World! <br />
            Discover the perfect timepiece to match your style and personality. At Watch World, we offer an exclusive collection of luxury, casual, and smartwatches to suit every occasion. Whether you are looking for a timeless classic or the latest tech-savvy design, we have something for everyone.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
