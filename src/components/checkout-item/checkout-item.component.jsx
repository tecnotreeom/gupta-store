import React from 'react';

import {connect} from 'react-redux';

import {removeItem, addItem, decmtItem} from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';


        const CheckoutItem = ({cartItem, removeItemFormCart, addItem, decmtItem}) => {
            const {name, price, quantity, imageUrl} = cartItem;
            return (

                <div className="checkout-item">
                <div className="image-container">
                    <img src = {imageUrl} alt= 'item' />
                </div>
                <span className="name">{name}</span>
                <span className="quantity">
                    <div className="arrow" onClick = {() => decmtItem(cartItem)}> &#10094;</div>
                    <span className="value">{quantity}</span>
                    <div className="arrow" onClick = {() => addItem(cartItem)}>&#10095;</div>
                    </span>
                <span className="price">{price}</span>
                <div className="remove-button" onClick = {() => removeItemFormCart(cartItem)}>&#10005;</div>
                </div>
                )
        }

const  mapDispatchToprops = dispatch => ({
    removeItemFormCart: item  => dispatch(removeItem(item)),
    addItem : item => dispatch(addItem(item)),
    decmtItem : item => dispatch(decmtItem(item))
})
export default connect(null,mapDispatchToprops)(CheckoutItem);