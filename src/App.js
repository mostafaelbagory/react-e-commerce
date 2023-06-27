import "./App.css";
import Navbar from "./Components/Navbar";
import ProductsList from "./Components/ProductsList";
import Slider from "./Components/Slider";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import Products from "./Components/Products";
import AddProduct from "./Components/AddProduct";
import ProductProvider from "./Context/ProductsContext";
import Cart from "./Components/Cart";
import BankTransactions from "./Components/BankTransactions";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <ProductsList />
              </>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="Products" element={<Products />} />
          <Route path="/Products/add" element={<AddProduct />} />
          <Route path="/BankTransactions" element={<BankTransactions />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </ProductProvider>
    </div>
  );
}

export default App;
