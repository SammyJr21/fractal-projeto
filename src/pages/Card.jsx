import React from 'react';
import CardBeer from '../components/Card/Card';

export default function Card() {
  return (
    <div>
      <CardBeer key={Math.random} />
    </div>
  );
}
