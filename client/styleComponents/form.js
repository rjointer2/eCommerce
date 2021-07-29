
import styled from "styled-components";

// palette
import { hover, primary, secondary, white } from "./palette";

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

    @media screen and (max-width: 600px) {
        width: 100%;
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

export const Select = styled.select`
  width: 20%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
