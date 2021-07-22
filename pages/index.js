
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

  const { loading, data, error } = useQuery(GET_USER);

  console.log(error)

  const user = data || {};

  console.log(user)



  return (
    <div>
      
    </div>
  )
}

