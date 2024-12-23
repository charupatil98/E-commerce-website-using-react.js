import React from "react";
import { items } from "./Data";
import { Link } from "react-router-dom";


const Product = ({ items, cart, setcart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setcart([...cart, obj]);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {items.map((product) => (
            <div key={product.id} className="col-lg-4">
              <div
                className="card"
                style={{
                  width: "18rem",
                  height: "500px",
                  padding: "25px",
                  borderRadius: "35px",
                  border: "2px solid black",
                  width: "350px",
                  marginTop: "20px",
                  marginBottom:"20px",
                  backgroundColor: "#FFDEE1",
                }}
              >
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt="..." style={{height:"240px",width:"300px"}}
                  ></img>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-price"> Price: {product.price}</p>
                  <button className="btn btn-primary" 
                     onClick={() =>
                      addToCart(
                        product.id,
                        product.price,
                        product.title,
                        product.description,
                        product.imgSrc
                      )     
                    } 
                    >Add to cart</button>
                    <Link to={`/shop`}>
                    <button className="btn btn-danger" style={{margin:"10px"}}>Buy now</button>
                    </Link>
                   
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
