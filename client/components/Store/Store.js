
// hooks
import { useQuery } from "@apollo/client";
import { useEffect, useRef } from "react";

// components
import Products from "../Product/Products"

export default function Store({userLoading, userError, userData}) {

    // variables from the product
    // const { data, error, loading } = useQuery(PRODUCTS);

    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        console.log(renderCount);
    }, []);
    
    if( userLoading ) return <p>Loading...</p>

    console.log(userError)
    console.log(userData)

    return (
        <div>
            <h1> { userData ? `Hello ${userData.user.username}` : 'Hello'} </h1> 

            <Products />
        </div>
    )

}
