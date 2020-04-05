import React from 'react';
import CollectionItem from '../../components/collection-item/CollectionItem'
import './product-category.css';

const ProductCategoryPage =  ({ title, items }) => {
    console.log(items);
    
    return (
        <div>
            <h1>{title}</h1>
            <div className='product-category-preview'>
                {
                    items[0].map(i =>{                        
                     return <CollectionItem key={i.id} {...i}/>
                    })
                }
            </div>
        </div>
    );
};

export default ProductCategoryPage;