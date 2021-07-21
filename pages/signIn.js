
// middleware
import AuthenticationMiddleware from '../client/ulits/middleware/auth'

// mutations
import { SIGN_IN } from "../client/ulits/queries/userMutation";

// hooks
import { useEffect, useRef, useState } from "react";
import { useMutation } from '@apollo/client';

// styles
import { Container, Wrapper } from "../client/styleComponents/aligment";
import { Form, FormButton, FormContainer, FormFooter, FormHeader, FormInput, FormLabel, FormLink } from "../client/styleComponents/form";



export default function SignIn() {

    const [ signInUser ] = useMutation(SIGN_IN);

    // conditionally display text on form error
    const [formError, setFormError] = useState(false);
    const [formErrorMessage, setFormErrorMessage] = useState('');


    // form states
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();

        console.log(username, password)

        if( !username || !password ) {
        setFormError(true)
        setFormErrorMessage('Please submit form entirely');
        return false
        }

        try {
            const { data } = await signInUser({ variables: { "username": username, "password": password } });
            console.log(data.signIn.token)
            AuthenticationMiddleware.login(data.signIn.token)
        } catch (err) {
            console.log(err)
        }

    }

    /* Specifically for checking rerenders */
    const renderCount = useRef(0);
    // count rerenders
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        console.log(renderCount)
    }, []);


    return (
        <Container>
            <Wrapper>
                <FormContainer>
                <Form onSubmit={submitForm}>
                    <FormHeader>Sign In</FormHeader>
                    { formError && <BoldCappedText> { formErrorMessage } </BoldCappedText> }
                    <FormLabel>Username</FormLabel>
                    <FormInput placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required autoComplete="on"/>
                    <FormLabel>Password</FormLabel>
                    <FormInput placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required type='password' autoComplete="on"/>
                    <br/>
                    <FormButton type="submit">Submit</FormButton>
                    <FormFooter>
                    <FormLink href="#" >Don't Have an Account?</FormLink>
                    <FormLink href="#" >See Products</FormLink>
                    </FormFooter>
                </Form>
                </FormContainer>
            </Wrapper>
        </Container>
    )
}
