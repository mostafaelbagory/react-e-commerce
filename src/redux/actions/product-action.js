export const productActionsType = {
    Add: "ADD",
    Update: "UPDATE",
    Delete: "DLETE",
    Get: "GET",
  };
const baseURL = "http://localhost:5251/";
  
export const addProduct = (product) => {
    return {
      type: productActionsType.Add,
      payload: product,
    };
  };
  
  export const getProducts = (products) => {
    return {
      type: productActionsType.Get,
      payload: products,
    };
  };
  
  export const fetchProducts = () => {
    return async (dispatch) => {
      const res = await fetch(baseURL + "Product/GetAll");
      console.log("sfsdfsdfsdfds",res);
      if (res.ok == true) {
        const data = await res.json();
        dispatch(getProducts(data));
      }else{
        alert("Sdfsd")
        //ispatch(deposite(0))
        document.querySelector("#productsTable").innerHTML = "can't reach the api products you can add by yourself";
      }
    };
  };
  