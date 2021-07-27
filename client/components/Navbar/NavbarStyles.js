
import styled from "styled-components";

// palette
import { hover, primary, white } from "../../styleComponents/palette";


export const Nav = styled.nav`
    background: ${primary};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

// this will be a regular archor tag but it's wrapped with the next/link
export const NavLogo = styled.a`
    color: ${white};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: 24px;
    font-weight: bold;
    text-decoration: none;
    transform: translate(-0%, 25%);
`;

export const MobileIconNavBar = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        top: 0;
        right: 0;
        transform: translate(-100%, 25%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${white};
    }

`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    transform: translate(0%, 25%);

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItems = styled.li`
    height: 80px;
`;

export const NavLinks = styled.a`
    color: ${white};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;

    &:hover {
        color: ${hover}
    }
`;

export const WelcomeText = styled.p`
    color: ${white};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
`;
