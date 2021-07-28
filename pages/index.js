
// react icons
import { AiOutlineShopping, AiOutlineShoppingCart, AiOutlineShop } from 'react-icons/ai'

// assets
import Video from '../assets/Video.mp4';
import hands from '../assets/hands.png';
import gardening from '../assets/gardening.png';

// styled componenets
import { CommitmentContainer, CommitmentItems, CommitmentWrapper, StoreBackground, StoreContainer, StoreHeader, StoreLanding, StoreText, StoreVideoBackground } from '../client/styleComponents/store';
import { Button, ButtonWrapper } from '../client/styleComponents/Button';
import { Column1, Column2, Container, Row, Wrapper } from '../client/styleComponents/aligment';
import { Icon, IconWrapper, Img, ImgWrapper } from '../client/styleComponents/img';
import { BoldCappedText, Heading, Text, TextCenter } from '../client/styleComponents/text';

// hooks
import { useContext, useEffect, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';

// queries and mutations
import { GET_USER } from '../client/ulits/queries/userQueries';

// state management
import Context from '../client/store/context';
import { addProductToCartClient } from '../client/store/actions';




export default function index() {

  // global state
  const { state, dispatch } = useContext(Context);

  // get the user's data and store it state 
  const { data, error, loading } = useQuery(GET_USER);

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(renderCount.current);
    // not falsy don't perform any lifecycle methods
    if(!data) return false;
    console.log(data.me.cart);

    dispatch(addProductToCartClient(data.me.cart, data.me.username))

    // whenever the data variable changes, invoked our lifecycle methods
  }, [data]);




  // configs
  const commitments = [
    {
        header: "Store",
        icon: AiOutlineShop,
        text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
        header: "Shopping",
        icon: AiOutlineShoppingCart,
        text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
        header: "Trust",
        icon: AiOutlineShopping,
        text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
  ]

  return (
    <>
      <StoreContainer>
        <StoreBackground>
          <StoreVideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
        </StoreBackground>
        <StoreLanding>
            <StoreHeader>Plant and Home Decor For You</StoreHeader>
              <StoreText>
                See Our Amazing Collections Made By Talented Vendors.
                <br/><br/> 
              </StoreText>
              <ButtonWrapper>
                <Button onClick={() => console.log('text')}>
                  Sign Up Today!
                </Button>
              </ButtonWrapper>
          </StoreLanding>
      </StoreContainer>
      <Container>
        <Wrapper>
          <Row>
            <Column1>
              <ImgWrapper>
                <Img src={hands} />
              </ImgWrapper>
            </Column1>
            <Column2>
              <BoldCappedText>Shipped With Care</BoldCappedText>
              <Heading>Every Plant Sent Will Be Safe and Protected</Heading>
              <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </Text>
              <ButtonWrapper>
                <Button>
                  Get A Collection Today!
                </Button>
              </ButtonWrapper>
            </Column2>
          </Row>
        </Wrapper>
      </Container>
      <Container background={true}>
        <Wrapper>
          <Row>
            <Column2>
              <ImgWrapper>
                <Img src={gardening} />
              </ImgWrapper>
            </Column2>
            <Column1>
              <BoldCappedText>You Can Do This</BoldCappedText>
              <Heading>Becoming a Plant Parent Has Never Been This Easy</Heading>
              <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </Text>
              <ButtonWrapper>
                <Button>
                  Learn More
                </Button>
              </ButtonWrapper>
            </Column1>
          </Row>
        </Wrapper>
      </Container>
      <CommitmentContainer backgroundDark={true}>
      <TextCenter>
          <Heading lightText={true}>Our Commitments</Heading>
        </TextCenter>
        <CommitmentWrapper>
        { commitments.map((commitment, index) => 
          <CommitmentItems key={index}>
            <TextCenter>
              <BoldCappedText>
                {commitment.header}
              </BoldCappedText>
            </TextCenter>
            <IconWrapper>
              <Icon>{commitment.icon()}</Icon>
            </IconWrapper>
            <TextCenter>
              <Text lightText={true}>
              {commitment.text1}<br/>
              </Text>
            </TextCenter>
          </CommitmentItems>) }
        </CommitmentWrapper>
        <TextCenter>
          <Text lightText={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Text>
        </TextCenter>
      </CommitmentContainer>
    </>
  )

}

