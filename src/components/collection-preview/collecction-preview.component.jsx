import React from 'react';
import './collection-preview-style.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview  = ({title, items}) => (

    <div className = "collection-preview">
        <h2 className = "title">{title.toUpperCase()}</h2>
        <div className = "preview">
            {   
                items.filter((item, idx ) => idx < 4)
                .map(({id, ...otherCollectionItem}) => (
                    <CollectionItem key = {id}  {...otherCollectionItem}/>
                        
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;