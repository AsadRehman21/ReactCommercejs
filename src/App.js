import React, { Component,useState,useEffect } from 'react';
import {Products,Navbar} from './components';
import { commerce } from './lib/commerce';
const App=()=>  {
    
  

    const [products,setproducts]=useState([]);
    const [cart,setCart]=useState({});
     

    const fetchProducts=async()=>{
        const {data} =await commerce.products.list();
        setproducts(data);
    }


    const fetchCart=async()=>{
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart=async(productid,quantity)=>{
        const item= await commerce.cart.add(productid,quantity);
        console.log(item);
        setCart(item.cart);
    }

    useEffect(()=>{
            fetchProducts();
            fetchCart();
    },[])
  
    return (<div>
        <Navbar totalItems={cart.total_items}/>
        <Products products={products} onAddToCart={handleAddToCart}/>
        </div>);
  
}
export default App;