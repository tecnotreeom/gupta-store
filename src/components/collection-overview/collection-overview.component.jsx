import React from 'react';
import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect';

import {selectCollectionForPreview} from '../../redux/shop/shop.selector';

import CollectionPreview from '../collection-preview/collecction-preview.component';
import './collection-overview.style.scss';



const CollectionOverview = ({collections}) => {
    console.log('overview map', collections)
    return (
        <div className="collections-overview">
        
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key = {id} {...otherCollectionProps}/>
            ))
        }
        </div>
        
        );
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
    
});
export default connect(mapStateToProps)(CollectionOverview);

