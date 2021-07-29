
// react icons
import { AiOutlineShoppingCart } from 'react-icons/ai';

// react scroll
import { animateScroll as scroll } from 'react-scroll';

// next link 
import Link from 'next/link'

// hooks
import { useContext, useEffect, useState } from 'react';

// icons
import { FaBars } from 'react-icons/fa'

// state management
import { addToCartClient } from '../../store/actions';
import Context from '../../store/context';
import { Button, ButtonWrapper, ModalButton } from '../../styleComponents/Button';
import { Icon } from '../../styleComponents/img';

// styles for Nav
import { MobileIconNavBar, Nav, NavContainer, NavItems, NavLinks, NavLogo, NavMenu, WelcomeText } from "./NavbarStyles";
import Modal from '../Modal/Modal';


export default function Navbar({ toggle, openModal, showModal }) {

    // scroll function
    const toggleHome = () => scroll.scrollToTop();

    const { state, dispatch } = useContext(Context);

/*     useEffect(() => {
        dispatch(addToCartClient({item: 'test'}))
    }, []) */

    console.log(state)

    return (
        <>
        <Nav>
            <NavContainer>
                <Link href='/' passHref>
                    <NavLogo onClick={toggleHome} > Logo </NavLogo>
                </Link>
                <MobileIconNavBar onClick={toggle} >
                    <FaBars />
                </MobileIconNavBar>
                <NavMenu>
                    { state.user ? <NavItems>
                        <div style={{color: 'white'}} onClick={() => {
                            openModal()
                            console.log('text')
                        }}>{state.cart.length} Items In Your Cart <AiOutlineShoppingCart/></div>
                    </NavItems> : '' }
                    <NavItems>
                        <NavLinks href="aboutus">
                            About Us
                        </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks href="vendor">
                            Become a Vendor!
                        </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks href='signin' onClick={() => state.user ? console.log('signing in') : console.log('signing out') }>
                            { state.user ? 'Sign Out' : 'Sign In' }
                        </NavLinks>
                    </NavItems>
                </NavMenu>
            </NavContainer>
        </Nav>
        { showModal && <Modal openModal={openModal} /> }
        </>
    )
}
