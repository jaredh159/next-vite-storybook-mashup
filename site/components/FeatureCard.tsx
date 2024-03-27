import Image from 'next/image';
import React from 'react';
import type { StaticImageData } from 'next/image';
import Bell from '../public/bell-final.png';

const Card: React.FC = () => (
  <div>
    <h1>Feature Card</h1>
    <MyImage src={Bell} />
  </div>
);

const MyImage: React.FC<{ src: StaticImageData }> = ({ src }) => (
  <Image src={src} alt="" />
);

export default Card;
