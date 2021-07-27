
// hooks 
import { useContext, useEffect, useRef, useState } from "react";

// apollo client
import { useMutation, useQuery } from "@apollo/client"
import { PRODUCTS } from "../../ulits/queries/productQueries"

// components
import { ProductContainer, ProductItem } from "./ProductStyles";
import { BoldCappedText, Heading, Text } from "../../styleComponents/text";
import { Img, ImgWrapper } from "../../styleComponents/img";

// state managemnet
import Context from '../../store/context';
import { addToCartClient } from '../../store/actions';
import { ADD_PRODUCT_TO_CART } from "../../ulits/mutations/productMutations";


export default function Products() {

    /* const [ addToCartServer, { data: serverData } ] = useMutation(ADD_PRODUCT_TO_CART, {
        onCompleted: () => dispatch(addToCartClient(serverData))
    }); */

    const { state, dispatch } = useContext(Context);

    console.log(state)

    // all products
    const { data, error, loading } = useQuery(PRODUCTS);

    if(loading) return <p>Loading</p>

    if(error) return <ProductContainer>
        <ProductItem>
            error
        </ProductItem>
    </ProductContainer>

    console.log(data.products);
    

    return (
        <div>
            <ProductContainer>
                {data.products.map((product, index) => <ProductItem key={index}>
                    <ImgWrapper>
                        <Img src={product.image}/>
                    </ImgWrapper>
                    <Heading>{product.name}</Heading>
                    <BoldCappedText>
                    Price: ${ product.price }
                    </BoldCappedText>
                    <Text lightText={true}>
                        Department: {product.department} <br/><br/>
                        {product.summary}
                    </Text>
                    <button
                onClick={async () => {
                    console.log( product._id)
                   try {
                    await addToCartServer({
                        // use the user id here, when logged in 
                        variables: {
                            "userId": '60fa4d6159c77f61bcc68422',
                            "productId": product._id
                        }
                    })
                   } catch(err) {
                       console.log(err)
                   }
                }}
               >Click</button>
                </ProductItem>)}
            </ProductContainer>
        </div>
    )

}
