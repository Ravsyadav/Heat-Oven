import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliverOrder, getAllOrders } from '../actions/orderActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Filter from '../components/Filter';

export default function Orderslist() {

    const dispatch = useDispatch();
    const getordersstate = useSelector(state => state.getAllOrdersReducer);
    const { loading, error, orders } = getordersstate;

    useEffect(() => {
        dispatch(getAllOrders())
    }, [])
    return (
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <h4 className="text-start">Orders List</h4>
            {loading && (<Loading />)}
            {error && (<Error error="Something went wrong" />)}

            <table className="table table-striped table-bordered table-responsive-sm">
                <thead className= "table-danger">
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {orders && orders.map(order => {
                        return <tr>
                            <td> {order._id} </td>
                            <td> {order.email} </td>
                            <td> {order.userid} </td>
                            <td> {order.orderAmount}</td>
                            <td> {order.createdAt.substring(0, 10)}</td>
                            <td> {order.isDelivered ? (<h6>Delivered</h6>
                            ):(
                            <button className='btn' onClick={()=>{dispatch(deliverOrder(order._id))}}> 
                            Deliver 
                            </button>)}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
