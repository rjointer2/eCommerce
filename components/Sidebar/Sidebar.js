
// next link 
import Link from 'next/link'

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
                            Categories
                        </SidebarLink>
                    </Link>
                    <Link href="#">
                        <SidebarLink onClick={toggle} >
                                What's New
                        </SidebarLink>
                    </Link>
                   <Link href="createProduct">
                    <SidebarLink onClick={toggle} >
                            Become a Vendor!
                        </SidebarLink>
                    </Link>
                    <Link href="#">
                        <SidebarLink onClick={toggle} >
                            About Us
                        </SidebarLink>
                    </Link>
                </SidebarMenu>
                <SidebarBtnWrapper>
                    <SidebarBtnLink href="#" onClick={toggle} >
                        Sign In
                    </SidebarBtnLink>
                </SidebarBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
