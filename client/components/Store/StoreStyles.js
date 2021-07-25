
import styled from "styled-components";

// palette
import { primary } from "../../styleComponents/palette";

export const CommitmentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

export const CommitmentItems = styled.div`
    min-height: 200px;
    max-height: 485px;
    background: ${primary};
    margin: 2.5%;
    padding: 2.5%;
`;