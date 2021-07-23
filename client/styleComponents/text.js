
import styled from "styled-components";

// palette
import { hover, secondary, white } from "./palette";

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
    margin-bottom: 15px;
    font-size: 28px;
    line-height: 24px;
    color: ${({ lightText }) => ( lightText ? white : secondary )};
`;

export const TextCenter = styled.p`
    text-align: center;
`;

export const Text = styled.p`
    font-size: 14px;
    color: ${({ lightText }) => ( lightText ? white : secondary )};
`;

export const BoldCappedText = styled.div`
    color: ${hover};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;