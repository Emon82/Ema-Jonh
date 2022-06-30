import { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css';
import Cart from "../cart/Cart";
const Shop = () => {
  let [fakeData, setdata] = useState(null);
  const [cart, setProduct]= useState([]);
  const fetchData = () => {
    return fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-module-54/main/src/fakeData/products.JSON"
    )
      .then((response) => response.json())
      .then((data) => setdata(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handeladdproduct=(Product)=>{
    console.log('add to product', Product)
    setProduct([...cart, Product]);
  }
  return (
    
    <div className="Shop-container">
        <div className="product-container">
           {fakeData && fakeData.slice(0,10).map ((data)=><Product handeladdproduct={handeladdproduct} PD={data}></Product>)}
            
        </div>
        <div className="cart-container">
        
       <Cart cart={cart}></Cart>
        </div>
    
    </div>
  );
};

export default Shop;
