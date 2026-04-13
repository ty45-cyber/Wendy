import React, { useState } from 'react';

export default function ApologyApp() {
  const [forgiven, setForgiven] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {!forgiven ? (
          <>
            <h1 style={styles.header}>To My Dearest Wendy ❤️</h1>
            <p style={styles.text}>
              I am so incredibly sorry. I know I messed up, and I hate knowing that I've caused you any distress. 
            </p>
            <p style={styles.text}>
              You mean the absolute world to me, and my life is infinitely better because you are in it. I am committed to doing better for you, and for us.
            </p>
            <p style={styles.text}>
              I love you more than words can say.
            </p>
            <button
              style={styles.button}
              onClick={() => setForgiven(true)}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#be185d')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#db2777')}
            >
              Can you find it in your heart to forgive me?
            </button>
          </>
        ) : (
          <>
            <h1 style={styles.header}>Thank You, My Love! 💖</h1>
            <p style={styles.text}>
              You have no idea how much this means to me. I promise to make it up to you. 
            </p>
            <p style={styles.text}>
              You are my everything, Wendy. Forever and always.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// Styling object to keep everything contained in one file
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#fdf2f8', // Soft pink background
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    padding: '20px',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(219, 39, 119, 0.15)', // Tinted shadow
    maxWidth: '550px',
    textAlign: 'center',
    transition: 'all 0.5s ease',
  },
  header: {
    color: '#be185d', // Deep pink/rose
    marginBottom: '20px',
    fontSize: '2.2em',
    fontWeight: 'bold',
  },
  text: {
    color: '#4b5563', // Soft dark gray for readability
    fontSize: '1.15em',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#db2777', // Vibrant pink
    color: 'white',
    border: 'none',
    padding: '15px 35px',
    fontSize: '1.1em',
    fontWeight: '600',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '15px',
  },
};