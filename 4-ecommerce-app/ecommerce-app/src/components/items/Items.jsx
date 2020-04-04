import React from 'react';
import Item  from '../menu-item/MenuItem';
import './items.css';

const sections = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    linkUrl: 'hats'
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    linkUrl: 'jackets'
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    linkUrl: 'sneakers'
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    linkUrl: 'womens'
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    linkUrl: 'mens'
  }
];


const Items = () => {
  return (
    <div className='items'>
      {sections.map((el, idx) => <Item key={idx} {...el} />)}
    </div>
  );
}

export default Items;