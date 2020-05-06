import React from 'react';


import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_9iPzKvYeJlHCB3Cq2TdZEnnp00b4YLs9so';

    const onToken = token => {
        console.log(token);
        alert('payment succcessfull');

    }
    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'GUpta Store Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is ${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}

         
        />
    )
};


export default StripeCheckoutButton;