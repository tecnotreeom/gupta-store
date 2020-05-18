import React from 'react';
import {Route} from 'react-router-dom'
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CategoryConatiner from '../category/category.container';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop.action';
import './shop-page-style.scss';



class  ShopPage extends React.Component {

    
    componentDidMount() {
        
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
    }
    render() {
        const {match} = this.props;
        
        return (
            <div className = "shop-page">
                <Route exact path = {`${match.path}`} 
                    component ={CollectionOverviewContainer}
                />
                <Route path = {`${match.path}/:categoryId`}
                
                component ={CategoryConatiner}
                />
            </div>
        )
    }
}




const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage); 