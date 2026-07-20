import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { MyStore } from '../context/MyStore';

const DealData = () => {
    let {setDeals}= useContext(MyStore);
    const getRandomProducts = async () => {

  const res = await axios.get(
    "https://dummyjson.com/products?limit=200"
  );


  const randomProducts = res.data.products
    .sort(() => Math.random()-0.5).splice(0,20);


  setDeals(randomProducts);
};


useEffect(() => {
  getRandomProducts();
  return ()=>{
   console.log("data aa gya")
  }
}, []);


  return (
    <div></div>
  )
}

export default DealData