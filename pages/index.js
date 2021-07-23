
// dispatchment functions
import { useMutation, useQuery } from '@apollo/client';

import { GET_USER } from '../client/ulits/queries/userQueries';

// components
import Store from '../client/components/Store/Store';


export default function index() {
  
  const { data, error, loading } = useQuery(GET_USER);

  return <Store userData={data} userError={error} userLoading={loading}/>

}

