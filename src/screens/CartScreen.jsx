import React, { useEffect } from "react";
import Header from "../components/profileComponents/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removefromcart } from "./../../Redux/Actions/cartActions";
import { useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useNavigate } from "react-router-dom";

const CartScreen = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const { id } = useParams();
  const productId = id;
  let history = createBrowserHistory();
  let navigate = useNavigate();

  const qty = window.location.search
    ? Number(window.location.search.split("=")[1])
    : 1;
  // console.log(qty);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const checkOutHandler = () => {
    navigate("/login?redirect=/shipping");
  };
  //
  const removeFromCartHandle = (id) => {
    dispatch(removefromcart(id));
  };

  return (
    // <div>
    <>
      <Header />
      {/* Cart */}
      <div className="container">
        {cartItems.length === 0 ? (
          <div className="alert alert-info text-center mt-3">
            Your cart is empty
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{
                fontSize: "12px",
              }}
            >
              SHOPPING NOW
            </Link>
          </div>
        ) : (
          <>
            <div className="alert alert-info text-center mt-3">
              Total Cart Products
              <Link className="text-success mx-2" to="/cart">
                ({cartItems.length})
              </Link>
            </div>
            {/* cartitem */}
            {cartItems.map((item, index) => (
              <div className="cart-item row" key={index}>
                <div
                  onClick={() => removeFromCartHandle(item.product)}
                  className="remove-button d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link
                    to={`https://shiny-kelpie-c61860.netlify.app/products/${item.product}`}
                  >
                    <h4>{item.name}</h4>
                  </Link>
                </div>
                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-">
                  <h6>QUANTITY</h6>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end">
                  <h6>PRICE</h6>
                  <h4>${item.price}</h4>
                </div>
              </div>
            ))}

            {/* End of cart items */}
            <div className="total">
              <span className="sub">total:</span>
              <span className="total-price">${total}</span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-6">
                <button>Continue To Shopping</button>
              </Link>
              {total > 0 && (
                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                  <button onClick={checkOutHandler}>Checkout</button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartScreen;
