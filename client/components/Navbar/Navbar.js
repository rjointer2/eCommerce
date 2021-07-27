
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
                    <NavItems>
                        <WelcomeText>
                            Welcome, {"User"}!
                        </WelcomeText>
                    </NavItems>
                    <NavItems>
                        <NavLinks href="/products">
                            Products
                        </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks href="/aboutus">
                            About Us
                        </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks href="vendor">
                            Become a Vendor!
                        </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks href="/signin">
                            Sign In
                        </NavLinks>
                    </NavItems>
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}
