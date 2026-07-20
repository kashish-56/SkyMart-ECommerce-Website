import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MyStore } from '../context/MyStore';

const products = () => {
     let {products,setProducts} = useContext(MyStore);
    //  console.log(products);

    const getProductData = async()=>{
       try {
        let res = await axios.get('https://dummyjson.com/products?limit=194');
        setProducts(res.data.products)
       } catch (error) {
        console.log("error in fetching product data", error);
       }
    }
    useEffect(() => {
      getProductData();
    }, [])
    
  return (
    <></>
  )
}

export default products