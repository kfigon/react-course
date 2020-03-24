import React from 'react';
import {SmallItem, BigItem} from '../menu-item/MenuItem';
import './items.css';

const sections = [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      linkUrl: 'shop/mens'
    }
  ];

const getSmallItems = () => sections.filter(el => !el.size);
const getBigItems = () => sections.filter(el => !!el.size);

const Items =() => {
    return(
        <div className='items'>
                {getSmallItems().map((el,idx) => <SmallItem key={idx} image={el.imageUrl} headerName={el.title.toLocaleUpperCase()}/>)}
                {getBigItems().map((el,idx) => <BigItem key={idx} image={el.imageUrl} headerName={el.title.toLocaleUpperCase()}/>)}
            </div>
    );
}

export default Items;