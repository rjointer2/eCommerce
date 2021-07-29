
import styled from 'styled-components';

// palette
import { primary, secondary, white } from './palette';

export const StoreContainer = styled.div`
    background: ${primary};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    height: 470px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 700px) {
        height: 450px;
    }
`;

export const StoreBackground = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const StoreVideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: ${secondary};
`;

export const StoreLanding = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StoreHeader = styled.h1`
    color: ${white};
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 700px) {
        font-size: 40px;
    }
`;

export const StoreText = styled.p`
    text-align: center;
    margin-top: 20px;
    color: ${white};
    font-size: 22px;
    max-width: 600px;

    @media screen and (max-width: 700px) {
        font-size: 18px;
    }
`;

export const CommitmentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${secondary};
    height: 500px;

    @media screen and (max-width: 700px) {
        height: 900px;
        margin-top: 20%;
        padding-top: 10%;
    }
`;

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
