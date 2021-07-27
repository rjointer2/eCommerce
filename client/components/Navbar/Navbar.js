
// next link 
import Link from 'next/link'

// hooks
import { useContext, useEffect } from 'react';

// icons
import { FaBars } from 'react-icons/fa'

// state management
import { addToCartClient } from '../../store/actions';
import Context from '../../store/context';

// styles for Nav
import { MobileIconNavBar, Nav, NavContainer, NavItems, NavLinks, NavLogo, NavMenu, WelcomeText } from "./NavbarStyles";

export default function Navbar({ toggle }) {

    const { state, dispatch } = useContext(Context);

/*     useEffect(() => {
        dispatch(addToCartClient({item: 'test'}))
    }, []) */

    return (
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
                        <NavLinks href='cart'>
                           Your Cart
                        </NavLinks>
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
    )
}
