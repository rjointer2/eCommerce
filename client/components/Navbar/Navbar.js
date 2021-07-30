
// react icons
import { AiFillShop, AiOutlineShoppingCart } from 'react-icons/ai';

// react scroll
import { animateScroll as scroll } from 'react-scroll';

// next link 
import Link from 'next/link'

// hooks
import { useContext } from 'react';

// icons
import { FaBars } from 'react-icons/fa'

// state management
import Context from '../../store/context';

// styles for Nav
import { MobileIconNavBar, Nav, NavContainer, NavItems, NavLinks, NavLogo, NavMenu, WelcomeText } from "./NavbarStyles";


export default function Navbar({ toggle }) {

    // scroll function
    const toggleHome = () => scroll.scrollToTop();

    // global state
    const { state, dispatch } = useContext(Context);


    return (
        <Nav>
            <NavContainer>
                <Link href='/' passHref>
                    <NavLogo onClick={toggleHome} > <AiFillShop/> </NavLogo>
                </Link>
                <MobileIconNavBar onClick={toggle} >
                    <FaBars />
                </MobileIconNavBar>
                <NavMenu>
                    { state.user ? <NavItems>
                        <div style={{color: 'white'}}>{state.cart.length} Items In Your Cart <AiOutlineShoppingCart/></div>
                    </NavItems> : '' }
                    <NavItems>
                        <NavLinks href="aboutus">
                            About Us
                        </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks href={ state.status ? 'createproduct' : 'becomevendor' }>
                            { state.status ? 'Create A Product' : 'Become A Vendor' }
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
