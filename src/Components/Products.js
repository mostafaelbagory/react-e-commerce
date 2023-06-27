import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchProducts } from "../rtk/slices/products-slice";

function Products() {
  const prod_URL = "http://localhost:5251/Product";
  const products = useSelector((state) => state.products);
  console.log("from products", products);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

  // const getAllData = () => {
  //   fetch(`${prod_URL}/GetAll`).then((res) =>
  //     res.json().then((data) => {
  //       setProducts(data);
  //     })
  //   );
  // };

  const deleteProduct = (product) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Delete",
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`${prod_URL}/Delete?id=${product.Id}`, { method: "delete" }).then(
          (res) =>
            res.json().then((data) => {
              //getAllData();
            })
        );
      }
    });

    // console.log(id);
  };

  return (
    <>
      <div className="container">
        <h1>All Products</h1>
        <Link to={"/products/add"} className="btn btn-primary m-3 float-lift">
          Create
        </Link>
        <table className="table table-striped">
          <thead className="table-info">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.No}>
                  <th scope="row">{product.No}</th>
                  <td>{product.Title}</td>
                  <td>{product.Category}</td>
                  <td>{product.Price}</td>
                  <td>{product.Description?.slice(0, 30)}...</td>
                  <td>
                    <Link
                      className="btn btn-primary btn-sm m-2"
                      to={`/product/${product.Id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-info btn-sm m-2"
                      to={`/product/${product.Id}`}
                    >
                      View
                    </Link>
                    <button
                      className="btn btn-danger btn-sm m-2"
                      onClick={() => deleteProduct(product)}
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
export default Products;
