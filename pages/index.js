
// react scroll
import { animateScroll as scroll } from 'react-scroll';

// react icons
import { AiOutlineShopping, AiOutlineShoppingCart, AiOutlineShop } from 'react-icons/ai';

// assets
import Video from '../assets/Video.mp4';

// styled componenets
import { StoreBackground, StoreContainer, StoreHeader, StoreLanding, StoreText, StoreVideoBackground } from '../client/styleComponents/store';
import { Button, ButtonWrapper } from '../client/styleComponents/button';
import { Container, ViewContainer, ViewWrapper } from '../client/styleComponents/aligment';

// hooks
import { useContext, useEffect, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';

// queries and mutations
import { GET_USER } from '../client/ulits/queries/userQueries';

// state management
import Context from '../client/store/context';
import { updateState } from '../client/store/actions';

// components
import Products from '../client/components/Product/Products';
import Cart from '../client/components/Cart/Cart';




export default function index() {

  // scroll function
  const toggleToView = () => scroll.scrollTo(500)

  // cart and products
  const [ view, setView ] = useState('');

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
    console.log(data.me_id)

    dispatch(updateState(data.me.cart, data.me._id, data.me.isVendor))

    // whenever the data variable changes, invoked our lifecycle methods
  }, [data]);

  console.log(console.log(state.status))

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
      <ViewContainer>
          <ViewWrapper>
            <Button onClick={() => {
              setView('VIEW_CART')
              toggleToView();
            }}>View Cart</Button>
          </ViewWrapper>
          <ViewWrapper>
            <Button onClick={() => {
              setView('VIEW_PRODUCTS')
              toggleToView();
            }}>View Products</Button>
          </ViewWrapper>
      </ViewContainer>
      { view === 'VIEW_CART' ? <Container><Cart/></Container> : null}
      { view === 'VIEW_PRODUCTS' ? <Container><Products/></Container> : null}
    </>
  )

}

