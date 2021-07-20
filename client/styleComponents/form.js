
import styled from "styled-components";

import Link from 'next/link'

// palette
import { hover, primary, secondary, white } from "./palette";

/* export const InputContainer = styled.div`
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

    &::placeholder {
        color: ${secondary}
    }
`;
*/

/* 


export const FormWrapper = styled.div`
    

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`; */

export const FormContainer = styled.div`
    height: 100%;
    display: flex;;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 16px;
    margin-bottom: 16px;
`;

export const Form = styled.form`

    background: ${primary};
    max-width: 400px;
    height: auto;
    width: 555px;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;


export const FormHeader = styled.h1`
    margin-bottom: 40px;
    color: ${white};
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14;
    color: ${white};

    &:hover {
        color: ${hover}
    }
`;

export const FormInput = styled.input`
    margin-bottom: 8px;
    font-size: 14px;
    color: ${white};

    &:focus {
        color: ${hover}
    }
`;

export const FormSelect = styled.select`
    outline: none;
    border: none;
    border-bottom: 1px black solid;
    margin-bottom: 5px;
`;

export const TextArea = styled.textarea`
    outline: none;
    border: none;
    border-bottom: 1px black solid;
    margin-bottom: 5px;

    &::placeholder {
        color: ${secondary}
    }
`; 

export const FormButton = styled.button`
    background: ${secondary};
    padding: 16px 0;
    margin: 16px 0;
    border: none;
    border-radius: 4px;
    color: ${white};
    font-size: 20px;

    &:hover {
        color: ${hover}
    }
`;

export const FormFooter = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FormLink = styled.a`
    padding: 2px;
    text-decoration: none;
    color: ${white};

    &:hover {
        color: ${hover}
    }
`;
