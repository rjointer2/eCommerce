
// apollo 
import { GET_USER } from "../../ulits/queries/userQueries"

// hooks
import { useQuery } from "@apollo/client";
import { useContext } from "react";

// styles

import { Button } from "../../styleComponents/Button"
import { Img, ImgWrapper } from "../../styleComponents/img"
import { BoldCappedText, Text, TextCenter } from "../../styleComponents/text"
import { CartContainer, CartItem } from "./CartStyles"

// state management
import Context from "../../store/context"
import { addProductToCartClient } from "../../store/actions";
import { Select } from "../../styleComponents/form";


export default function Cart() {

    const { state, dispatch } = useContext(Context);
    console.log(state.cart)



 
    return (
        <div>
            <TextCenter><BoldCappedText>Your Cart</BoldCappedText></TextCenter>
            <CartContainer>
                { state.cart.length <= 0 ? 'You Have No Items In Your Cart' : 
                    state.cart.map((item, index) => <CartItem key={index}>
                        {console.log(item)}
                        <ImgWrapper><Img src={item.image} alt="item" /></ImgWrapper>
                        <br/>
                        <BoldCappedText>{item.name}</BoldCappedText>
                        <Text lightText={true}>price: ${item.price}<br/></Text>
                        <Button backgroundDark={true} >Remove From Cart</Button>
                    </CartItem>)
                }
            </CartContainer>
        </div>
    )
}
