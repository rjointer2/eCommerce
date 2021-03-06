
// icons
import { AiOutlineShoppingCart } from 'react-icons/ai';

// next 
import Link from 'next/link'

// styles
import { SidebarMenu ,SidebarContainer ,CloseMenu, Menu , SidebarBtnWrapper, SidebarLink, SidebarWrapper, SidebarBtnLink } from './SidebarStyles'

// hookes
import { useContext, useState } from 'react';

// state management
import Context from '../../store/context';

// isOpen is drilled from the app's Sidebar component
// toggle is drileld from the app's Navbar component 

export default function Sidebar ({ isOpen, toggle }) {

    const { state } = useContext(Context)

    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Menu onClick={toggle} >
                <CloseMenu />
            </Menu>
            <SidebarWrapper>
                <SidebarMenu>
                    <Link href="/aboutus">
                        <SidebarLink onClick={toggle} >
                            About Us
                        </SidebarLink>
                    </Link>
                   <Link href={ state.status ? 'createproduct' : 'becomevendor' }>
                    <SidebarLink onClick={toggle} >
                        { state.status ? 'Create A Product' : 'Become A Vendor' }
                        </SidebarLink>
                    </Link>
                    <Link href="signin">
                        <SidebarLink onClick={toggle} >
                            { state.user ? 'Sign Out' : 'Sign In' }
                        </SidebarLink>
                    </Link>
                </SidebarMenu>
                <SidebarBtnWrapper>
                    <SidebarBtnLink onClick={() => {
                        toggle();
                        if(!state.user) {
                            console.log('signing in')
                            return false
                        }
                    }} >
                        { state.user ? 'View Cart' : 'Sign Up' } 
                        { state.user ? <AiOutlineShoppingCart style={{ fontSize: '2rem', transform: 'translate(0, 5px)' }}/> : ''}
                    </SidebarBtnLink>
                </SidebarBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
        </>
    ) 
}
