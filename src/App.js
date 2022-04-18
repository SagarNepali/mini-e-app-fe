import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { Container } from "react-bootstrap";
import { Products } from "./components/Products/Products";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { RegisterPage } from "./pages/Register/Register";
import { Cart } from "./components/Cart/Cart";
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage";
import { ShippingPage } from "./pages/ShippingPage/ShippingPage";
import { PlaceOrderPage } from "./pages/PlaceOrderPage/PlaceOrderPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/place-order" element={<PlaceOrderPage />} />
          </Routes>
        </Container>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
