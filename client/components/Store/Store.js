
// hooks
import { useQuery } from "@apollo/client";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { PRODUCTS } from "../../ulits/queries/productQueries";

// components
import Products from "../Product/Products"

export default function Store({userLoading, userError, userData}) {

    const dispatch = useDispatch();

    const cartState = useSelector(state => state.cart);


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

            you have {cartState.cart.length} items in your cart<br/>
            <button onClick={() => dispatch(addToCart('apple'))}>Add to Cart</button>

            <Products />
        </div>
    )

}
