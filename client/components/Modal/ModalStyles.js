
import styled from 'styled-components';

// palette
import { white } from '../../styleComponents/palette';

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ModalWrapper = styled.div`
    width: 600px;
    height: 300px;
    box-shadow: 10px 10px 10px 1000px rgba(0, 0, 0, .2);
    background: ${white};
    position: fixed;
    z-index: 10;
    transform: translateY(80%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ModalContext = styled.div`
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ModalCart = styled.div`
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: auto;
    height: 75%;
`;
