import './card-list.styles.css';

import { Card } from '../Card/Card';
import React from 'react';

export const CardList = props => (
  <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);