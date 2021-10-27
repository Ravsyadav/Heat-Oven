import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userActions'
import logo from '../image/logo.png'

export default function Navbar() {

    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
                <a className="navbar-brand" href="/">
                    <div className="logo">
                        <img src={logo} alt="image not found" height="65"/>
                    </div>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i style={{color:'black'}} className="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        {currentUser ? (

                            <div className="dropdown mt-2">
                                <a style={{ color: 'black' }} className="me-2 text-decoration-none" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    {currentUser.name}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="/orders">Orders</a>
                                    <a className="dropdown-item" href="#" onClick={() => { dispatch(logoutUser()) }}><li>Logout</li></a>
                                </div>
                            </div>
                        ) : (
                            <li className="nav-item">
                                <span className="me-3">
                                <a className="nav-link" href="/login">
                                <span className="me-5">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                </span>
                                </a>
                                </span>
                            </li>
                        )}

                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                            <span className="me-4">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            <span className="size ms-2">
                                {cartstate.cartItems.length}
                            </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}