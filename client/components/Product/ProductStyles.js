
import styled from "styled-components";

// palette
import { primary } from "../../styleComponents/palette";

// palette

export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    

    @media screen and (max-width: 700px) {
        grid-template-columns: none;
    }
`;

export const ProductItem = styled.div`
    min-height: 200px;
    max-height: 485px;
    background: ${primary};
    margin: 2.5%;
    padding: 2.5%;
`;