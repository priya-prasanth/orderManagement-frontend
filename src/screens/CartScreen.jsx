import React, { useEffect } from 'react';
import Header from '../components/profileComponents/Header';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from "./../../Redux/Actions/cartActions";


const CartScreen = ({location}) => {
    window.scrollTo(0, 0);
    const productId = id;
    const qty = location.search ? Number(location.search.split("=")[1]) : 1;
    console.log(qty);

    const dispatch = useDispatch()
    
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    return (
      <>
            <Header />
            {/* Cart */}
            <div className='container'> 
                <div className='alert alert-info text-center mt-3'>
                    Total Cart Products
                    <Link className="text-success mx-2" to="/cart">
                        (4)
                    </Link>
                </div>
                {/* cartitem */}
                <div className='cart-item row'>
                    <div className='remove-button d-flex justify-content-center align-items-center'>
                        <i className='fas fa-times'></i>
                    </div>
                    <div className='cart-image col-md-3'>
                        <img src="/images/2.png" alt="nike" />
                    </div>
                    <div className='cart-text col-md-5 d-flex align-items-center'>
                        <Link to="#">
                            <h4>Nike Girls Shoe</h4>
                        </Link>
                    </div>
                    <div className='cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-'>
                        <h6>QUANTITY</h6>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className='cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end'>
                        <h6>SUBTOTAL</h6>
                        <h4>Rs.456</h4>
                    </div>
                </div>
                
                {/* End of cart items */}
                <div className='total'>
                <span className='sub'>total:</span>
                <span className='total-price'>Rs.567</span>
                </div>
                <hr />
                <div className='cart-buttons d-flex align-items-center row'>
                    <Link to="/" className="col-md-6">
                        <button>Continue To Shopping</button>
                    </Link>
                    <div className='col-md-6 d-flex justify-content-md-end mt-3 mt-md-0'>
                        <button>
                            <Link to="/shipping" className="text-white">
                                Checkout
                            </Link>
                        </button>
                    </div>
                </div>
        </div>
      </>
    );
};

export default CartScreen;