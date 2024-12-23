import React, { useEffect, useState } from 'react'
import Product from './product'
import { items } from './Data'
import { useParams } from 'react-router-dom'


const Searchitem = () => {
  const {term}=useParams()
  const [filterdata,setfilterdata]=useState([])
  useEffect(()=>{
    const searchdata=()=>{
     const element=items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
     setfilterdata(element)
    }
    searchdata()
  },[term])
  return (
    <>
     <Product items={filterdata}/>
      
    </>
  )
}

export default Searchitem
