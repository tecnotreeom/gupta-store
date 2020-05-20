import React, {useEffect} from 'react';

import {connect} from 'react-redux';

import {selectCollection} from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './category.style.scss';

import {firestore} from '../../firebase/firebase.utils';
const CategoryPage = ({collections}) => {

    useEffect(() => {
        console.log('Hi I am Subscribe');
        const unsubscribeFromCollection = firestore
            .collection('collections')
            .onSnapshot(snapshot => console.log(snapshot));
        return () => {
            console.log('Hi i am unSubscribe');
            unsubscribeFromCollection();
        }
    });
    const {title, items} = collections;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => 
                    <CollectionItem key = {item.id}  item = {item}/>)
                }
            </div>
        </div>
    );
}

const  mapStateToProps = (state, ownProps) => ({
    collections: selectCollection(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(CategoryPage);