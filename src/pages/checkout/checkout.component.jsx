import React from 'react';


import {connect} from 'react-redux';
 import {createStructuredSelector} from 'reselect';
 import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


import './checkout,style.scss';

const CheckoutPage  = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span className="">Products</span>
            </div>
            <div className="header-block">
                <span className="">Description</span>
            </div>
            <div className="header-block">
                <span className="">Quanity</span>
            </div>
            <div className="header-block">
                <span className="">Price</span>
            </div>
            <div className="header-block">
                <span className="">Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key = {cartItem.id} cartItem = {cartItem}/>
            ))
            
        }
        <div className="total">
    <span className="">Total: ${total}</span>
        </div>
    </div>
)



const mspStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total : selectCartTotal
})
export default connect(mspStateToProps)(CheckoutPage);