
// SEO
import Head from 'next/head';

// mutations
import { SIGN } from "../client/ulits/mutations/userMutations";

// hooks
import { useState } from "react";
import { useMutation } from '@apollo/client';

// styles
import { Container, Wrapper } from "../client/styleComponents/aligment";
import { Form, FormButton, FormContainer, FormFooter, FormHeader, FormInput, FormLabel, FormLink } from "../client/styleComponents/form";

export default function SignIn() {

    const [ signInUser ] = useMutation(SIGN);

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
            await signInUser({ variables: { "username": username, "password": password, "type": "sign_in" } });
            window.location.assign('/');
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
        <Head>
            <title>Plant Shop Sign In Page</title>
        </Head>
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
        </>
    )
}
