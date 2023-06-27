import { useEffect, useState } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

function ProductsList() {
  const prod_URL = "http://localhost:5251/Product/GetAll";

  const products = useSelector((state)=> state.products)

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-3" key={product.Id}>
                <Product product={product} showButton={true}/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductsList;
