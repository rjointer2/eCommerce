
// pictures
import guestShopping from '../../../assets/guestShopping.png';

// icons
import { AiOutlineShop, AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";

// hooks
import { useQuery } from "@apollo/client";
import { useContext, useEffect, useRef } from "react";

// components
import Products from "../Product/Products"

// styles
import { Column1, Column2, Container, Row, Wrapper } from '../../styleComponents/aligment';
import { CommitmentItems, CommitmentWrapper } from "./StoreStyles";
import { BoldCappedText, Heading, Text, TextCenter } from '../../styleComponents/text';
import { Icon, IconWrapper, Img, ImgWrapper } from '../../styleComponents/img';
import { Button, ButtonWrapper } from '../../styleComponents/Button';

import Context from '../../store/context';
import { addToCartClient } from '../../store/actions';

export default function Store({userLoading, userError, userData}) {

    const { state, dispatch } = useContext(Context);
    console.log(state);

    // set add cart initially

    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        console.log(renderCount);
    }, []);

    

    
    
    if( userLoading ) return <p>Loading...</p>



    return (
       <Container>
           <Wrapper>
               <Row>
                   <Column1>
                        <BoldCappedText>Lorem ipsum</BoldCappedText>
                        <Heading>Lorem ipsum</Heading>
                        <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        </Text>
                        <br/>
                        <ButtonWrapper>
                            <Button>Click Me</Button>
                        </ButtonWrapper>
                   </Column1>
                   <Column2>
                    <ImgWrapper>
                        <Img src={guestShopping} alt="guest shopping" />
                    </ImgWrapper>
                   </Column2>
               </Row>
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
                            </Text>
                        </TextCenter>
                    </CommitmentItems>
                </CommitmentWrapper>
           </Wrapper>
       </Container>
    )

}
