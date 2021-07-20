
// next 
import Link from 'next/link'

// hooks
import { useState } from 'react';

// styles
import { Container, Wrapper } from "../client/styleComponents/aligment";
import { Form, FormButton, FormContainer, FormFooter, FormHeader, FormInput, FormLabel, FormLink } from '../client/styleComponents/form';
import { BoldCappedText } from '../client/styleComponents/text';


export default function SignIn() {

  // conditionally display text on form error
  const [formError, setFormError] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState('');


  // form states
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // make sure the input are filled out
  const sumbitForm = e => {
    e.preventDefault();

    if( !username || !password || !confirmPassword || !email ) {
      setFormError(true)
      setFormErrorMessage('Please submit form entirely');
      return false
    }

    if( password !== confirmPassword ) {
      setFormError(true)
      setFormErrorMessage('Password do not match');
      return false
    }

  }

  return (
    <>
      <Container>
        <Wrapper>
          <FormContainer>
            <Form onSubmit={sumbitForm}>
              <FormHeader>Sign Up Today</FormHeader>
              { formError && <BoldCappedText> { formErrorMessage } </BoldCappedText> }
              <FormLabel>Username</FormLabel>
              <FormInput placeholder="Username" value={username} onClick={e => setUsername(e.target.value)} required />
              <FormLabel>Email</FormLabel>
              <FormInput placeholder="Email" value={email} onClick={e => setEmaild(e.target.value)} required/>
              <FormLabel>Password</FormLabel>
              <FormInput placeholder="Password" value={password} onClick={e => setPassword(e.target.value)} required />
              <FormLabel>Confirm Password</FormLabel>
              <FormInput placeholder="Confirm Password" value={confirmPassword} onClick={e => setConfirmPassword(e.target.value)} required />
              <FormButton type="submit">Submit</FormButton>
              <FormFooter>
                <FormLink href="#" >Have An Account?</FormLink>
                <FormLink href="#" >See Products</FormLink>
              </FormFooter>
            </Form>
          </FormContainer>
        </Wrapper>
      </Container>
    </>
  )
}