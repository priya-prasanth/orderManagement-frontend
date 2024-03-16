import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/profileComponents/Header';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../../Redux/Actions/userActions';
import Message from '../components/LoadingError/Error.jsx';
import Loading from '../components/LoadingError/Loading.jsx';
import { register } from '../Redux/Actions/userActions.js';

const Register = () => {
    window.scrollTo(0, 0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userRegister = useSelector((state) => state.userRegister);
    const { error, loading, userInfo } = userRegister;

    useEffect(() => {
      if (userInfo) {
        navigate(redirect);
      }
    }, [userInfo, navigate, redirect]);

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(register(name, email, password));
    };
    return (
      <>
        <Header />
        <div className="container d-flex flex-column justify-content-center align-items-center">
          {error && <Message variant="alert-danger">{error}</Message>}
          {loading && <Loading />}

          <form
            className="Login col-md-8 col-lg-4 col-11"
            onSubmit={submitHandler}
          >
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Register</button>
         <p>
         <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
             
                I Have Account <strong>Login</strong>
              </Link>
            </p>
          </form>
        </div>
      </>
    );
};

export default Register;