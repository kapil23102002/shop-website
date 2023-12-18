import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";
import Home from "./components/Home";
import WishlistPage from "./components/wishlistPage";
import ProductProfile from "./components/ProductProfile";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
// import ShowNav from "./components/showNavbar/ShowNav";
import ProfilePage from "./components/UserProfile";
import {
  ProtectedLoginRoute,
  ProtectedRoute,
} from "./features/PrrotectedRoute";

function App() {
  return (
    <BrowserRouter>
      {/* <ShowNav> */}
      <Navbar />
      {/* </ShowNav> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedLoginRoute>
              <LoginPage />
            </ProtectedLoginRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <ProductCard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/product/:productProfile"
          element={
            <ProtectedRoute>
              <ProductProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <WishlistPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
