import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUsers } from '../actions/userActions';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function Userslist() {

    const dispatch = useDispatch();
    const usersstate = useSelector(state=>state.getAllUsersReducer)
    const{ error, loading, users} = usersstate
    
    useEffect(() => {

      dispatch(getAllUsers())

    }, [])

    return (
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <h4 className="text-start">Users List</h4> 
            {loading && (<Loading />)}
            {error && (<Error error="Something went wrong" />)}
            <table className="table table-striped table-bordered table-responsive-sm">
              <thead className= "table-danger">
                <tr>
                  <th>User Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users && users.map(user=>{
                  return <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><i className ="fa fa-trash" onClick={()=> {dispatch(deleteUser(user._id))}}></i></td>
                  </tr>
                })}
              </tbody>
            </table>

        </div>
    )
}
