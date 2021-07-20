
// next 
import Link from 'next/link'

// hooks
import { useEffect, useRef, useState } from 'react';
import { useMutation } from '@apollo/client';

// mutations
import { ADD_USER } from '../client/ulits/userMutation';

// styles
import { Container, Wrapper } from "../client/styleComponents/aligment";
import { Form, FormButton, FormContainer, FormFooter, FormHeader, FormInput, FormLabel, FormLink } from '../client/styleComponents/form';
import { BoldCappedText } from '../client/styleComponents/text';
import ToggleSwitch from '../client/components/ToggleSwitch/ToggleSwitch';



export default function SignIn() {

  // mutation to sign up user
  const [addUser] = useMutation(ADD_USER);

  // conditionally display text on form error
  const [formError, setFormError] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState('');


  // form states
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // for toggle to pass props to component
  const [stateValue, setStateValue] = useState(false)

  // make sure the input are filled out
  const submitForm = (e) => {
    e.preventDefault();

    console.log(username, email, password)

    if( password !== confirmPassword ) {
      setFormError(true)
      setFormErrorMessage('Password do not match');
      return false
    }

    if( !username || !password || !confirmPassword || !email ) {
      setFormError(true)
      setFormErrorMessage('Please submit form entirely');
      return false
    }

    // sign up add with variables 
    (async () => {
        console.log('clicked')
      try {
        await addUser({
          variables: {
            "username": username,
            "email": email,
            "password": password,
            "cart": '',
            "products": '',
            "isVendor": stateValue,
          }
        })
        console.log('success')
      } catch(err) {
        setFormError(true)
        setFormErrorMessage('Please make sure email address is vaild and username is unique');
        console.log(err)
      }

    })()

  }

  /* Specifically for checking rerenders */
  const renderCount = useRef(0);
  // count rerenders
  useEffect(() => {
      renderCount.current = renderCount.current + 1;
      console.log(renderCount)
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <FormContainer>
            <Form onSubmit={submitForm}>
              <FormHeader>Sign Up Today</FormHeader>
              { formError && <BoldCappedText> { formErrorMessage } </BoldCappedText> }
              <FormLabel>Username</FormLabel>
              <FormInput placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
              <FormLabel>Email</FormLabel>
              <FormInput placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
              <FormLabel>Password</FormLabel>
              <FormInput placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required type='password' />
              <FormLabel>Confirm Password</FormLabel>
              <FormInput placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required type='password' />
              <br/>
              <FormFooter>
                <FormLabel>Are You a Company Vendor?</FormLabel>
                <ToggleSwitch stateValue={stateValue} setStateValue={setStateValue} />
              </FormFooter>
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