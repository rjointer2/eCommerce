
import styled from "styled-components";

// palette
import { hover } from "./palette";

export const InputContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px black solid;
    margin-bottom: 5px;

    &:focus {
        color: ${hover}
    }
`;

export const TextArea = styled.textarea`
    outline: none;
    border: none;
    border-bottom: 1px black solid;
    margin-bottom: 5px;
`;

export const Select = styled.select`
    outline: none;
    border: none;
    border-bottom: 1px black solid;
    margin-bottom: 5px;
`;

export const SignInContainer = styled.div`
    height: 500px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

