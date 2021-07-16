

import styled from 'styled-components';

// palette
import { white } from './palette';

// regular images

export const ImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    padding-right: 0;

`;

// these are for svg's

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Icon = styled.div`
    color: ${white};
    padding: 5px 10px 5px 0;
`;