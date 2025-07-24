import React from 'react';

const HeroSection = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {/* Background Image */}
      <img
        src="/f0b61763-fc06-4fa5-9db5-ab03f13fd77c.png"
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      />

      {/* Mask Center to hide embedded logo */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          color: '#fff',
          padding: '0 1rem',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#FFD700', // Yellow
            lineHeight: '1.2',
          }}
        >
          CHAMPION <br /> LIFESTYLE
        </h1>

        <p
          style={{
            fontSize: '1.25rem',
            marginTop: '1rem',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Want to be a part of TeamCLC? Watch this... <br />
          Your transformation begins with a single decision.
        </p>

        {/* Buttons */}
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <a
            href="#programs"
            style={{
              backgroundColor: '#FFD700',
              color: '#000',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '999px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Begin Transformation →
          </a>

          <a
            href="#transformations"
            style={{
              border: '2px solid #fff',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '999px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            ▶ Watch Transformations
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
