import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
import AOS from 'aos'
import 'aos/dist/aos.css';


export default function Ordersscreen()  {

    AOS.init({
        duration:1000
    })

    const dispatch = useDispatch()
    const orderstate = useSelector(state => state. getUserOrdersReducer)
    const { orders, error, loading } = orderstate

    useEffect(() => {
        dispatch(getUserOrders())
    }, [])

    return (
        <div  data-aos="zoom-in-down">
            <h2 style={{ fontSize: "35px" }}>My Orders</h2>
            <hr/>
            <div className="row justify-content-center p-2">
                {loading && (<Loading/>)}
                {error && (<Error error='Something went wrong'/>)}
                {orders && orders.map(order=>{
                    return <div className="col-md-8 m-2 p-1" style={{backgroundColor: '#ff6347', color:'white'}}>

                        <div className="flex-container">
                            <div className="text-start w-100 m-1">
                                <h2 style={{ fontSize: '25px' }}>Items</h2>
                                <hr/>
                                {order.orderItems.map(item => {
                                    return <div>
                                        <p>{item.name}<br/> {item.varient} * {item.quantity} = {item.price}</p>
                                    </div>
                                })}
                            </div>  
                            <div className="text-start w-100 m-1">
                                <h2 style={{ fontSize: '25px' }}>Address</h2>
                                <hr/>
                                <p>Street : {order.shippingAddress.street}</p>
                                <p>City : {order.shippingAddress.city}</p>
                                <p>Country : {order.shippingAddress.country}</p>
                                <p>Pincode : {order.shippingAddress.pincode}</p>
                            </div>  
                            <div className="text-start w-100 m-1">
                                <h2 style={{ fontSize: '25px' }}>Order Info</h2>
                                <hr/>
                                <p>Order Amout  : {order.orderAmount}</p>
                                <p>Date : {order.createdAt.substring(0, 10)}</p>
                                <p>Transaction Id : <br/>{order.transactionId}</p>
                                <p>Order Id :<br/> {order._id}</p>
                            </div>  
                        </div>

                    </div>
                })}
            </div>
        </div>
    )
}
