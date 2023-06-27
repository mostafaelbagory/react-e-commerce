import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const url = "http://localhost:5251/Product/Create";

  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .post(url, {
        title,
        category,
        price,
        description,
      })
      .then((data) => {
        console.log(data);
      });
    navigate("/Products");
  };

  return (
    <>
      <div className="container">
        <h1>Create Product</h1>
        <form className="mt-4" onSubmit={formSubmit}>
          <div className="row text-center">
            <div className="col-md-3">
              <label for="Title" className="form-label">
                {" "}
                Title{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label for="Category" className="form-label">
                {" "}
                Category{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label for="Price" className="form-label">
                {" "}
                Price{" "}
              </label>
              <input
                type="number"
                className="form-control"
                id="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label for="Description" className="form-label">
                {" "}
                Description{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Confirm
          </button>
        </form>
      </div>
    </>
  );
}
export default AddProduct;
