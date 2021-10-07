import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Filter from '../components/Filter';
import { deletePizza, getAllPizzas } from '../actions/pizzaActions';
import { Link } from 'react-router-dom'

export default function Pizzaslist() {
    const dispatch = useDispatch();

    const pizzasstate = useSelector(state => state.getAllPizzasReducer);

    const { pizzas, error, loading } = pizzasstate;
    useEffect(() =>{
        dispatch(getAllPizzas())
    },[])
    return (
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <h4 className="text-start">Pizzas List</h4>
            {loading && (<Loading/>)}
            {error && (<Error error='Something went wrong'/>)}

            <table className="table table-striped table-bordered table-responsive-sm">
                <thead className="table-danger">
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody className="table-light">
                    {pizzas && pizzas.map(pizza=>{
                        return <tr>
                            <td>{pizza.name}</td>
                            <td>
                                Small : {pizza.prices[0]['small']}<br/>
                                Medium : {pizza.prices[0]['medium']}<br/>
                                Large : {pizza.prices [0]['large']}                            
                            </td>
                            <td>{pizza.category}</td>
                            <td>
                                <i className="fa fa-trash m-2" onClick={()=>{dispatch(deletePizza(pizza._id))}}></i>
                               <Link to={`/admin/editpizza/${pizza._id}`}> <i className="fa fa-edit"></i></Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
