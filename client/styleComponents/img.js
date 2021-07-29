

import styled from 'styled-components';

// palette
import { white } from './palette';

// regular images

export const ImgWrapper = styled.div`
`;

export const Img = styled.img`
    width: 200px;
    padding-right: 0;
    height: 200px;
`;

// these are for svg's

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Icon = styled.div`
    color: ${white};
    font-size: 3rem;
`;