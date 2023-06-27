import { useContext } from "react";
import {  Link } from "react-router-dom";
import { ProductsContext } from "../Context/ProductsContext";
import { useRecoilState } from "recoil";
import  productsState  from "../atoms/product-atom";
import { useSelector } from "react-redux";
function Navbar() {
  const products = useContext(ProductsContext)
  //const [recoilProducts, setProducts] = useRecoilState(productsState)
  const cartLen = useSelector(state => state.cart.length)
  console.log(products);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  mb-2" >
        <div className="container">
          <a className="navbar-brand" href="/#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Products">
                Products : {products.length} 
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="Cart">
                Cart : {cartLen} 
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="BankTransactions">
                Bank Account
                </Link>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
