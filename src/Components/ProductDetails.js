import { useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";

function ProductDetails(){
    const prod_URL = "http://localhost:5251/Product/Get?id=";
    const params = useParams();
  const [product, setProduct] = useState({});
  console.log(params);
    useEffect(() => {
        fetch(`${prod_URL}${params.id}`).then((res) =>
          res.json().then((data) => {
            setProduct(data);
          })
        );
      }, []);
    return (
        <>
            <h1>Product Details</h1>
            <Product product={product} showButton={false}/>
        </>
    )
}
export default ProductDetails;