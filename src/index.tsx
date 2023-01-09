import { createRoot } from 'react-dom/client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './styles.css';

const App = () => {
  useEffect(() => {
    gsap.to('.green', { rotation: 360, x: 100, duration: 1 });
  }, []);
  return (
    <>
      <h1>GSAP Typescript example</h1>
      <div className="box green"></div>
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
