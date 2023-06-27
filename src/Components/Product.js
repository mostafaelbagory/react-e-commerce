import img1 from "./imges/1.jpg";
import img2 from "./imges/2.jpg";
import img3 from "./imges/3.jpg";
import img4 from "./imges/4.jpg";
import img5 from "./imges/5.jpg";
import img6 from "./imges/6.jpg";
import img7 from "./imges/7.jpg";
import img8 from "./imges/8.jpg";
import img9 from "./imges/9.jpg";
import img10 from "./imges/10.jpg";
import img11 from "./imges/11.jpg";
import img12 from "./imges/12.jpg";
import img13 from "./imges/13.jpg";
import img14 from "./imges/14.jpg";
import img15 from "./imges/15.jpg";
import img16 from "./imges/16.jpg";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../rtk/slices/cart-slice";
import { useEffect, useState } from "react";

function Product(props) {
  const { product, showButton } = props;
  const { imgs, setImgs } = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16
  ]);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card mt-4" style={{ width: "18rem" }}>
        {/* { console.log(window.location.origin + `/Components/imges/${product.No}.jpg`) } */}
        <img className="card-img-top mt-4" src={img6} alt="Card image cap" />

        <div className="card-body">
          <h5 className="card-title">{product.Title}</h5>
          <p className="card-text">
            {showButton
              ? product.Description?.slice(0, 30) + "..."
              : product.Description}
          </p>
          {showButton && (
            <Link
              href="#"
              className="btn btn-primary m-2"
              to={`/product/${product.Id}`}
            >
              Details
            </Link>
          )}
          <Link
            href="#"
            className="btn btn-success m-2"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            Add to cart
          </Link>
        </div>
      </div>
    </>
  );
}
export default Product;
