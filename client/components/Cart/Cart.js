
// apollo 
import { GET_USER } from "../../ulits/queries/userQueries"

// hooks
import { useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect, useRef, useState } from "react";

// apollo
import { REMOVE_PRODUCT_FROM_CART } from "../../ulits/mutations/productMutations";


// styles

import { Button } from "../../styleComponents/Button"
import { Img, ImgWrapper } from "../../styleComponents/img"
import { BoldCappedText, Text, TextCenter } from "../../styleComponents/text"
import { CartContainer, CartItem } from "./CartStyles"

// state management
import Context from "../../store/context"
import { updateCart } from "../../store/actions";
import { Select } from "../../styleComponents/form";


export default function Cart() {

    // local state
    const [message, setMessage] = useState('Your Cart');

    // global state
    const { state, dispatch } = useContext(Context);

    const [removeProductFromCart] = useMutation(REMOVE_PRODUCT_FROM_CART, {
        onCompleted: serverData => dispatch(updateCart(serverData.removeProductFromCart.cart, state.user))
    })

    const renderCount = useRef(1)

    useEffect(() => {
        renderCount.current = renderCount.current + 1
        console.log(renderCount.current)
    }, [])

 
    return (
        <div>
            <TextCenter><BoldCappedText>{ state.cart.length <= 0 ? 'You have no items in your cart' : 'Your Cart' }</BoldCappedText></TextCenter>
            <CartContainer>
                { 
                    state.cart.map((item, index) => <CartItem key={index}>
                    {console.log(item)}
                    <ImgWrapper><Img src={item.image} alt="item" /></ImgWrapper>
                    <br/>
                    <BoldCappedText>{item.name}</BoldCappedText>
                    <Text lightText={true}>price: ${item.price}<br/></Text>
                    <Button backgroundDark={true} onClick={async () => {

                        try{
                            await removeProductFromCart({
                                variables: { "userId": state.user, "productId": item._id }
                            })
                        }catch(err) {
                            console.log(err)
                        }

                    }}>Remove From Cart</Button>
                </CartItem>)
                }
            </CartContainer>
        </div>
    )
}
