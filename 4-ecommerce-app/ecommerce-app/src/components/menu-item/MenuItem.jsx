import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuItem.css'

// is wrapped with with router, so we can use history and all good stuff to link
// other way - we must prop drill `history` object from the Router in App
const Item = (props) => {    
    return (
        <div style={{ backgroundImage: `url(${props.image}` }}
            className={props.size === 'large' ? 'big-item' : 'small-item'}
            onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>

            <div className="item-description">
                <h1>{props.title.toUpperCase()}</h1>
                <span>SHOP NOW</span>
            </div>
        </div>
    );
}


export default withRouter(Item);