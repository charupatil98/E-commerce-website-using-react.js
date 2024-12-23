import React, { useState } from "react";
import { items } from "./Data";
import Cart from "./Cart";
import {Link, useNavigate } from "react-router-dom";

const Navbar = ({setdata,cart}) => {
  const[searchi,setsearchi]=useState("")
  const navigate=useNavigate()
  const filterbycat=(category)=>{
    const element= items.filter((product)=>product.category===category)
    setdata(element)
  }
  const filterbyprice=(price)=>{
    const ele=items.filter((product)=>product.price>=price)
    setdata(ele)
  }
  const handleform=(e)=>{
    e.preventDefault()
    navigate(`/search/${searchi}`)
  }
  return (
    <>
      <div className="navbar" id="head" >
        <div className="logo">
          <h1 style={{fontSize:"50px",fontWeight:"bolder"}}>Shopyy</h1>
        </div>
        <div className="search">
          <form onSubmit={handleform}>
            <input type="text" placeholder="Search here"  onChange={(e)=>setsearchi(e.target.value)} />
          </form>
        </div>
        <div className="cart"> 
        <Link to={'/cartinfo'}>  
        <button>Cart</button>  
        </Link>
        </div>
      </div>
      <div className="navbar-wrap">
      <div className="child1"  onClick={()=>filterbycat('cloths')}>cloths</div>
      <div className="child1"  onClick={()=>filterbycat('jewellery')}>jewellery</div>
      <div className="child1"  onClick={()=>filterbycat('beauty-products')}>beauty-products</div>
      <div className="child1" onClick={()=> filterbyprice('199')}>{'>='}199</div>
      <div className="child1" onClick={()=> filterbyprice('399')}>{'>='}399</div>
      <div className="child1" onClick={()=> filterbyprice('499')}>{'>='}499</div>
      <div className="child1" onClick={()=> filterbyprice('699')}>{'>='}699</div>
      <div className="child1" onClick={()=> filterbyprice('899')}>{'>='}899</div>
    </div>
    </>
  );
};

export default Navbar;
