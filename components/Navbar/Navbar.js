
// next link 
import Link from 'next/link'

// icons
import { FaBars } from 'react-icons/fa'

// styles for Nav
import { MobileIconNavBar, Nav, NavContainer, NavItems, NavLinks, NavLogo, NavMenu } from "./NavbarStyles";

export default function Navbar({ toggle }) {
    return (
        <Nav>
            <NavContainer>
                <Link href='#' passHref>
                    <NavLogo> Logo </NavLogo>
                </Link>
                <MobileIconNavBar onClick={toggle} >
                    <FaBars />
                </MobileIconNavBar>
                <NavMenu>
                    <NavItems>
                        <NavLinks href="#">
                            Categories
                        </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks href="#">
                            What's New
                        </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks href="#">
                            Sign In
                        </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks href="#">
                            Become a Vendor!
                        </NavLinks>
                    </NavItems>
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}
