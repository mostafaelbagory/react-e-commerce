import { useDispatch, useSelector } from "react-redux";
// import { deposite, withdrow } from "../redux/actions/atm-action";
import { useState } from "react";
import { deposite, withdraw } from "../rtk/slices/atm-slice";
import { Link } from "react-router-dom";
import { clearCart, deleteFromCart } from "../rtk/slices/cart-slice";

function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartProducts.reduce((acc, product) =>{
      acc += product.Price * product.Qty;
      console.log(acc);
      return acc;
  }, 0)

  return (
    <>
      <div className="container">
        <h1>All Products</h1>
        <p>totalPrice : {totalPrice}$</p>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => dispatch(clearCart())}
        >
          Clear
        </button>
        <table className="table table-striped">
          <thead className="table-info">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => {
              return (
                <tr key={product.No}>
                  <th scope="row">{product.No}</th>
                  <td>{product.Title}</td>
                  <td>{product.Price}$</td>
                  <td>{product.Qty}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm m-2"
                      onClick={() => dispatch(deleteFromCart(product))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;
