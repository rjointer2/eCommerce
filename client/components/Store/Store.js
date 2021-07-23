
// icons
import { AiOutlineShop, AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";

// hooks
import { useQuery } from "@apollo/client";
import { useEffect, useRef } from "react";

// components
import Products from "../Product/Products"

// styles
import { CommitmentItems, CommitmentWrapper } from "./StoreStyles";
import { BoldCappedText, Text, TextCenter } from '../../styleComponents/text';
import { Icon, IconWrapper, Img, ImgWrapper } from '../../styleComponents/img';

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

            <CommitmentWrapper>
            <CommitmentItems>
                    <IconWrapper>
                        <Icon>
                            <AiOutlineShopping/>
                        </Icon>
                    </IconWrapper>
                    <TextCenter>
                        <BoldCappedText>Lorem ipsum</BoldCappedText>
                        <Text lightText={true}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore. <br/> <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore.
                        </Text>
                    </TextCenter>
                </CommitmentItems>
                <CommitmentItems>
                    <IconWrapper>
                        <Icon>
                            <AiOutlineShoppingCart/>
                        </Icon>
                    </IconWrapper>
                    <TextCenter>
                        <BoldCappedText>Lorem ipsum</BoldCappedText>
                        <Text lightText={true}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore. <br/> <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore.
                        </Text>
                    </TextCenter>
                </CommitmentItems>
                <CommitmentItems>
                    <IconWrapper>
                        <Icon>
                            <AiOutlineShop/>
                        </Icon>
                    </IconWrapper>
                    <TextCenter>
                        <BoldCappedText>Lorem ipsum</BoldCappedText>
                        <Text lightText={true}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore. <br/> <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore.
                        </Text>
                    </TextCenter>
                </CommitmentItems>
            </CommitmentWrapper>
        </div>
    )

}
