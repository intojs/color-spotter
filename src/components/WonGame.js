import React from 'react';

import leo from '../assets/leo.jpg';

export const WonGame = () => {
  return (
    <div className="container mt-4 text-center">
      <p>You won!</p>
      <img src={leo} alt="leo"/>
    </div>
  );
};

