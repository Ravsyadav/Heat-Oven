import React, { useEffect, useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Addpizza from './Addpizza'
import Orderslist from './Orderslist'
import Pizzaslist from './Pizzaslist'
import Userslist from './Userslist'
import {Route, Switch} from 'react-router'
import { Link } from 'react-router-dom'
import Editpizza from './Editpizza'

export default function Adminscreen(props) {

    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center p-3">
                <div className="col-md-10">
                    <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>
                    <ul className="adminfunctions mt-3">
                        <li>
                            <Link to= {"/admin/userslist"} className="text-decoration-none">
                                Users List
                            </Link>
                        </li>
                        <li>
                            <Link to= {"/admin/pizzaslist"} className="text-decoration-none">
                                Pizzas List
                            </Link>
                        </li>
                        <li>
                            <Link to= {"/admin/addpizza"} className="text-decoration-none">
                                Add New Pizza
                            </Link>
                        </li>
                        <li>
                            <Link to= {"/admin/orderslist"}className="text-decoration-none">
                                Orders List
                            </Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/admin" component={Userslist} exact/>    
                        <Route path="/admin/userslist" component={Userslist} exact/>
                        <Route path="/admin/pizzaslist" component={Pizzaslist} exact/>
                        <Route path="/admin/addpizza" component={Addpizza} exact/>
                        <Route path="/admin/orderslist" component={Orderslist} exact/>
                        <Route path="/admin/editpizza/:pizzaid" component={Editpizza} exact/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
