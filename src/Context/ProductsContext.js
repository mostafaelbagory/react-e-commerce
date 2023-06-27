import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

function ProductProvider(props){
    const prod_URL = "http://localhost:5251/Product";
    const [products, setProducts] = useState([]);
    useEffect(() => {
      getAllData();
    }, []);
  
    const getAllData = () => {
      fetch(`${prod_URL}/GetAll`).then((res) =>
        res.json().then((data) => {
          setProducts(data);
        })
      );
    };

    return(
    <ProductsContext.Provider value={products}>
        {props.children}
    </ProductsContext.Provider>
    ) ;
}
export default ProductProvider;
