
import Products from "../Product/Products"

export default function Store({loading, error, data}) {

    // if a user is auth then take the dat from the useQuery hook
    // and grab the cart properties

    // if the cart is null then the cart is a []


    // on the backend we have to get cart

    /* 
    
        add to cart function will take a product arg and push the 
        product name and product id as a dictionary as the property
        in the inTheirCart, then 

        the me resolver will have a helper function in the property
        inTheirCart and the function will return product object that 
        wiil be refernce by the apollo server 
    
    */

    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        console.log(renderCount)
    }, []);
    
    if( loading ) return <p>Loading...</p>

    return (
        <div>
            <h1>{ data && `Hi ${data.me.username}` }</h1> 

            {/* 
            
                when the client clicks the button, it dispatches the state globally
                on every component the state is rendered in    

            */}

            you have 0 items in your cart

            <Products />
        </div>
    )

}
