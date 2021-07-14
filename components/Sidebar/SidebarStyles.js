
import styled from 'styled-components';

// icons
import { FaTimes } from 'react-icons/fa';

// Palette
import { hover, primary, secondary, white } from '../../styleComponents/palette';


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    background: ${secondary};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0' )};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%' )};
`;


export const CloseMenu = styled(FaTimes)`
    color: ${white};

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${hover}
    }

    &.active {
        transition: all 0.2s ease-in-out;
        color: ${secondary}
    }
`;

export const Menu = styled.nav` 
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: ${white};
`;

export const SidebarLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: ${white};
    text-decoration: none;
    padding-top: 30px;

    &:hover {
        color: ${primary};
        transition: 0.2s ease-in-out;
    }

`;

export const SidebarBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarBtnLink = styled.div`
    border-radius: 50px;
    background: ${secondary};
    white-space: nowrap;
    padding: 16px 64px;
    color: ${white};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 1.5rem;
    background: ${primary};
    margin-bottom: 10px;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: ${white};
        color: ${primary}
    }

`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding: 1rem;


    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 80px);
    }
`;