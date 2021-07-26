
// icons
import { AiOutlineShoppingCart } from 'react-icons/ai';

// next link 
import Link from 'next/link'

// styles

// components
import { SidebarMenu ,SidebarContainer ,CloseMenu, Menu , SidebarBtnWrapper, SidebarLink, SidebarWrapper, SidebarBtnLink } from './SidebarStyles'

// isOpen is drilled from the app's Sidebar component
// toggle is drileld from the app's Navbar component 

export default function Sidebar ({ isOpen, toggle }) {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Menu onClick={toggle} >
                <CloseMenu />
            </Menu>
            <SidebarWrapper>
                <SidebarMenu>
                    <Link href="#">
                        <SidebarLink>
                            Products
                        </SidebarLink>
                    </Link>
                    <Link href="#">
                        <SidebarLink onClick={toggle} >
                            About Us
                        </SidebarLink>
                    </Link>
                   <Link href="createProduct">
                    <SidebarLink onClick={toggle} >
                            Become a Vendor!
                        </SidebarLink>
                    </Link>
                    <Link href="#">
                        <SidebarLink onClick={toggle} >
                            {/* user state sign in / out */}
                            Sign Out
                        </SidebarLink>
                    </Link>
                </SidebarMenu>
                <SidebarBtnWrapper>
                    <SidebarBtnLink href="#" onClick={toggle} >
                        View Cart <AiOutlineShoppingCart style={{ fontSize: '2rem', transform: 'translate(0, 5px)' }}/>
                    </SidebarBtnLink>
                </SidebarBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
