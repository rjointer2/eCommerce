
// hooks
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

// dispatchment functions
import { useMutation, useQuery } from '@apollo/client';

import { GET_USER } from '../client/ulits/queries/userQueries';

// components
import Store from '../client/components/Store/Store';




export default function index() {
  
  const { data, error, loading } = useQuery(GET_USER);

  


  return <Store data={data} error={error} loading={loading}/>

  




  /* // For testing we will reference the rerenders to make things mounting 
  // and not excessively being recalled
  const renderCount = useRef(1)
  // dispatch function
  const dispatch = useDispatch();

  // we will use the data and error to update the global state
  // with the dispatcher functions
  const { data, error } = useQuery(GET_USER);

  // we could use state, but we are saving a extra rerender with a plain var
  const user = data || error;

  console.log(user)

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(renderCount)
  }, [user]); */

  /* 
    apollo get data from api
    redux to store api filter data as state globally


  
  
  
  */

}

