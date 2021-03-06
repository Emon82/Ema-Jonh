import React from 'react';

const Cart = (props) => {
    const cart=props.cart
    let total=0;
    for (let i=0;i<cart.length;i++){
        const product=cart[i]
        total=(total+product.price);
    }
    let shipping =0;
    if(total>35){
        shipping=0;
    }
    else if (total>15){
        shipping=4.99;
    }
    else if (total>10){
        shipping=12.99;
    }
    const tax=(total%10).toFixed(2);
    const grandtotal=(total +shipping +Number(tax)).toFixed(2)

    return (
        <div>
            <h4>Order summary </h4>
            
            <p>Items Ordered :{cart.length}</p>
            <p>Product Price:{total.toFixed(2)}</p>
            <p><small>Shipping Cost:{shipping} </small> </p>
            <p><small>Tax+vat:{tax} </small> </p>
            <p>Total Price:{grandtotal}</p>
        </div>
    );
};

export default Cart;