
// react icons
import { AiOutlineShoppingCart } from 'react-icons/ai';

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

    const { state, dispatch } = useContext(Context);

/*     useEffect(() => {
        dispatch(addToCartClient({item: 'test'}))
    }, []) */

    return (
        <>
        <Nav>
            <NavContainer>
                <Link href='/' passHref>
                    <NavLogo> Logo </NavLogo>
                </Link>
                <MobileIconNavBar onClick={toggle} >
                    <FaBars />
                </MobileIconNavBar>
                <NavMenu>
                    { state.user ? <NavItems>
                        <div style={{color: 'white'}} onClick={() => {
                            openModal()
                            console.log('text')
                        }}>Cart <AiOutlineShoppingCart/></div>
                    </NavItems> : '' }
                    <NavItems>
                        <NavLinks href="products">
                            Products
                        </NavLinks>
                    </NavItems>
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
