import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterPizzas } from '../actions/pizzaActions';

export default function Filter(props) {
    const dispatch = useDispatch()
    const [searchkey, setsearchkey] = useState('')
    const [category, setcategory] = useState('all')
    return (
        <div className="container">
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
                
                <div className="col-md-3 me-2">
                    <input
                        onChange={(e) => { setsearchkey(e.target.value) }}
                        value={searchkey} 
                        type="text" 
                        className="form-control w-100" 
                        placeholder="search pizzas" 
                    />
                </div>

                <div className="col-md-3 me-2">
                    <select
                        onChange={(e) => { setcategory(e.target.value) }}
                        value={category} className="form-control w-100 mt-2">
                        <option value="all">All</option>
                        <option value="veg">Veg</option>
                        <option value="nonveg">Non-veg</option>
                    </select>
                </div>

                <div className="col-md-3 me-2">
                    <button className="btn w-100 mt-2" onClick={() => { dispatch(filterPizzas(searchkey, category)) }}>
                        FILTER
                    </button>
                </div>

            </div>

        </div>
    )
}
