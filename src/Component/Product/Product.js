import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props);
    const{seller,price,stock}=props.PD
    return (
        <div className='product'>
            <div className="">
            <img src={props.PD.img} alt="" />
            </div>
            <div className="">
            <h4 className='product-name'>{props.PD.name}</h4>
            <br />
            <p><small>By:{seller}</small></p>
            <p><small>${price}</small></p>
            <p><small>Only{stock} left in stock-order soon</small></p>
            <button className='btn btn-warning' onClick={()=>props.handeladdproduct(props.PD)}> <FontAwesomeIcon icon={faShoppingCart}/>add to card </button>
            </div>
            
        </div>
    );
};

export default Product;