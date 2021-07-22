
// auth middleware
import AuthClient from '../client/ulits/middleware/auth'

// hooks
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

// dispatchment functions
import { getUserDetails as getUserData } from "../client/redux/dispatchments/userDispatcher";
import { useMutation, useQuery } from '@apollo/client';

import { GET_USER } from '../client/ulits/queries/userQueries';



export default function index() {

  // For testing we will reference the rerenders to make things mounting 
  // and not excessively being recalled
  const renderCount = useRef(1)
  // dispatch function
  const dispatch = useDispatch();

  // we will use the data and error to update the global state
  // with the dispatcher functions
  const { data, error } = useQuery(GET_USER);

  // we could use state, but we are saving a extra rerender with a plain var
  const user = data || error;
  
  const getUserDetails = useSelector( state => state.getUserDetails );
  const { failure, pending, userObject } = getUserDetails;

  useEffect(() => {
    dispatch(getUserData(user));
    renderCount.current = renderCount.current + 1;
    console.log(renderCount)
  }, [])

  console.log(user)



  return (
    <div>
      
    </div>
  )
}

