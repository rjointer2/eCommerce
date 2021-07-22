
// hooks
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

// dispatchment functions
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

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(renderCount)
  }, [user]);

  /* 
  
    let's clear the previous redux stuff for the user and 
    replace it with the cart stuff instead

    reset up the redux folders

    make the actions, reducers, and store
  
    connect with useSelector and useDispatch hooks
  
  
  
  */




  return (
    <div>
      Number of Items in Cart<br/>
      <button> Add to Cart </button>
    </div>
  )
}

