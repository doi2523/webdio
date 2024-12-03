import React from 'react';
import 'ldrs/tailspin';

const TailSpin = ({ size = 40, stroke = 5, speed = 0.9, color = 'black' }) => {
  return (
    <l-tailspin
      size={size}
      stroke={stroke}
      speed={speed}
      color={color}
    ></l-tailspin>
  );
};

export default TailSpin;
