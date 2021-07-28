
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
import Modal from '../Modal/Modal';

// isOpen is drilled from the app's Sidebar component
// toggle is drileld from the app's Navbar component 

export default function Sidebar ({ isOpen, toggle, showModal, openModal }) {

    const { state, dispatch } = useContext(Context)

    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Menu onClick={toggle} >
                <CloseMenu />
            </Menu>
            <SidebarWrapper>
                <SidebarMenu>
                    <Link href="/products">
                        <SidebarLink>
                            Products
                        </SidebarLink>
                    </Link>
                    <Link href="/aboutus">
                        <SidebarLink onClick={toggle} >
                            About Us
                        </SidebarLink>
                    </Link>
                   <Link href="becomevendor">
                    <SidebarLink onClick={toggle} >
                            Become a Vendor!
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
                        openModal()
                    }} >
                        { state.user ? 'View Cart' : 'Sign Up' } 
                        { state.user ? <AiOutlineShoppingCart style={{ fontSize: '2rem', transform: 'translate(0, 5px)' }}/> : ''}
                    </SidebarBtnLink>
                </SidebarBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
        { showModal && <Modal openModal={openModal} /> }
        </>
    ) 
}
