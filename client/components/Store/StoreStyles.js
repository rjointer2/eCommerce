
import styled from "styled-components";

// palette
import { primary } from "../../styleComponents/palette";

export const CommitmentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

export const CommitmentItems = styled.div`
    height: 40%;
    background: ${primary};
    margin: 5%;
    padding: 5%;
`;