import Products from "../Product/Products"

export default function Store({loading, error, data}) {
    
    if( loading ) return <p>Loading...</p>

    return (
        <div>
            <h1>{ data && `Hi ${data.me.username}` }</h1>

            <Products />
        </div>
    )

}
