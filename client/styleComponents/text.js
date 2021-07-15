
import styled from "styled-components";

// palette
import { secondary, white } from "./palette";

export const Heading = styled.p`
    margin-bottom: 24px;
    font-size: 42px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => ( lightText ? white : secondary )};

    @media screen and (max-width) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 28px;
    line-height: 24px;
    color: ${({ lightText }) => ( lightText ? white : secondary )};
`;

export const Text = styled.p`
    font-size: 14px;
    padding-top: 20px;
    color: ${({ lightText }) => ( lightText ? white : secondary )};
`;