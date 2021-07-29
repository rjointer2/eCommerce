
import styled from "styled-components";

// palette
import { primary } from "../../styleComponents/palette";

// palette

export const CartContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 600px;
    overflow-y: scroll;
    

    @media screen and (max-width: 700px) {
        grid-template-columns: none;
    }
`;

export const CartItem = styled.div`
    max-height: 385px;
    background: ${primary};
    margin: 2.5%;
    padding: 2.5%;
    width: 212px;
`;
