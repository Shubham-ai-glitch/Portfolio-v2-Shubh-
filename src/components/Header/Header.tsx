import React from 'react';
// Yahan se purana PDF import hata diya gaya hai taaki build error na aaye

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 8%',
      background: '#161b22',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '2px solid #23ce6b'
    }}>
      <div className="logo" style={{ fontSize: '1.5rem', fontWeight: '800', color: '#23ce6b' }}>
        SHUBHAM SINGH
      </div>
      
      <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <a href="#about" style={{ color: '#f0f6fc', textDecoration: 'none', fontWeight: '500' }}>About</a>
        <a href="#details" style={{ color: '#f0f6fc', textDecoration: 'none', fontWeight: '500' }}>Education</a>
        <a href="#contact" style={{ color: '#f0f6fc', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
        
        {/* Instagram hata diya gaya hai aur direct Drive link lagayi gayi hai */}
        <a 
          href="https://drive.google.com/file/d/1t-0UB9Lswk4KDu2El6-GO-0Swh90ZbAF/view?usp=drivesdk" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            background: '#23ce6b',
            color: '#0d1117',
            padding: '8px 20px',
            borderRadius: '6px',
            fontWeight: 'bold',
            textDecoration: 'none',
            transition: '0.3s'
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = '#1eb95e')}
          onMouseOut={(e) => (e.currentTarget.style.background = '#23ce6b')}
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
