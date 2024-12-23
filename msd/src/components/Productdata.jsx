import React, { useEffect, useState } from 'react'
import Product from './product'
import { items } from './Data'
import { useParams } from 'react-router-dom'

const Productdata = () => {
  const {id}=useParams()
  const [data,setdata]=useState({})
  const [relproduct,setrelproduct]=useState([])
  useEffect(()=>{
    
    const fi=items.filter((product)=>product.id==id)
  setdata(fi[0])
   const rp=items.filter((suman)=>suman.category==data.category)
    setrelproduct(rp)
  },[id,data.category])

  return (
    <>
     <div className='card' style={{width:"18rem",height:"580px" ,padding:"25px",borderRadius:"35px",border:"3px solid black",width:"350px",marginTop:"10px", backgroundColor: "#FFDEE1",float:"initial"}}>
              <img src={data.imgSrc} />

              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.description}</p>
              <p className="card-price">price: {data.price}</p>
              <button className='btn btn-warning'>Add to cart</button>
              </div>  <br></br>

              <h1 style={{textAlign:"center",backgroundColor:"gray"}}>Relevent Products</h1><br></br>
              <Product items={relproduct}/> 
      
    </>
  )
}

export default Productdata
