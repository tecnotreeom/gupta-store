import React from 'react';
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CategoryPage from '../category/category.component';
import './shop-page-style.scss'
const ShopPage = ({match}) =>{
    console.log(';hi i am match', match);
    return (


        <div className = "shop-page">
            <Route exact path = {`${match.path}`} component  ={CollectionOverview} />
            <Route path = {`${match.path}/:categoryId`} component ={CategoryPage}  />
        </div>
    )
}


export default ShopPage;