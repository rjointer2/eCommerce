
import styled from "styled-components";

// palette
import { hover, primary, white } from "./palette";

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export const Button = styled.button`
    background: ${primary};
	color: ${white};
	border: none;
	padding: 10px;
	cursor: pointer;

    &:hover {
        color: ${hover}
    }
`;

export const ImageButton = styled.button`
    background: ${primary};
	color: ${white};
	border: none;
	padding: 10px;
	cursor: pointer;
    margin-right: 50%;


    &:hover {
        color: ${hover}
    }

    @media screen and (max-width: 800px) {
        margin-right: 25%;
    }

`;
