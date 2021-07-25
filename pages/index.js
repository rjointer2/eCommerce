
// dispatchment functions
import { useMutation, useQuery } from '@apollo/client';

import { GET_USER } from '../client/ulits/queries/userQueries';

// components
import Store from '../client/components/Store/Store';


import Context from '../client/store/context';
import { useContext, useEffect } from 'react';


export default function index() {

  const { state } = useContext(Context);

  useEffect(() => {

  }, [])
  
  const { data, error, loading } = useQuery(GET_USER);

  return <Store userData={data} userError={error} userLoading={loading}/>

}

