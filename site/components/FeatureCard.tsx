import Image from 'next/image';
import React from 'react';
import Bell from '../public/bell-final.png';

const Card: React.FC = () => (
  <div>
    <h1>Feature Card</h1>
    <Image src={Bell} alt="" />
  </div>
);

export default Card;
