import React from 'react';
import SHOP_DATA from '../../mockedData/shopdata';
import PreviewCollection from '../preview-collection/PreviewCollection'

class ShopPage extends React.Component {

    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        return (
            <div className='shop-page'>
                <h1>Shop PAGE</h1>
                {
                    this.state.collections.map(col => <PreviewCollection key={col.id} {...col} />)
                }
            </div>
        );
    }
};

export default ShopPage;