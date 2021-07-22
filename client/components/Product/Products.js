
// hooks 
import { useEffect, useRef, useState } from "react";

// apollo client
import { useQuery } from "@apollo/client"
import { PRODUCTS } from "../../ulits/queries/productQueries"


export default function Products() {

    

    const { data, error, loading } = useQuery(PRODUCTS);

    if(loading) return <p>loading...</p>

    return data ? <>
        {data.products.map(product => <div>
            {product.name} <button>Add to Cart</button><br/><br/>
        </div>)}
    </> : <p>{error}</p>

}
