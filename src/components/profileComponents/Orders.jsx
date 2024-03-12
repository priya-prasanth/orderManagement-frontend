import React from 'react';
import Loading from '../LoadingError/Loading';
import Message from '../LoadingError/Error';
import { Link } from 'react-router-dom';

const Orders = (props) => {
  const { loading, error, orders } = props;
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            {orders.length === 0 ? (
              <div className="col-12 alert alert-info text-center mt-3">
                No Orders
                <Link
                  className="btn btn-success mx-2 px-3 py-2"
                  to="/"
                  style={{ fontSize: "12px" }}
                >
                  START SHOPPING
                </Link>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>STATUS</th>
                      <th>DATE</th>
                      <th>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr
                        className={`${order.isPaid ? "alert-success" : "alert-danger"
                          }`}
                        key={order._id}
                      >
                        <td>
                          <a href={`/order/${order._id}`} className="link">
                            {order._id}
                          </a>
                        </td>
                        <td>Paid</td>
                        <td>Dec 28 2023</td>
                        <td>{order.totalPrice}</td>
                      </tr>
                    ))}

                    {/* <tr className={"alert-danger"}>
                      <td>
                        <a href={`/`} className="link">
                          2
                        </a>
                      </td>
                      <td>Not Paid</td>
                      <td>Dec 28 2023</td>
                      <td>Rs.155</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    );
};

export default Orders;