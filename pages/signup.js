
// next 
import Link from 'next/link'

// images
import signin from '../assets/signin.png'

// styles
import { Container, Wrapper } from "../client/styleComponents/aligment";
import { Form, FormButton, FormContainer, FormFooter, FormHeader, FormInput, FormLabel, FormLink } from '../client/styleComponents/form';


export default function SignIn() {

  return (
    <>
      <Container>
        <Wrapper>
          <FormContainer>
            <Form>
              <FormHeader>Sign Up Today</FormHeader>
              <FormLabel>Username</FormLabel>
              <FormInput placeholder="Username"/>
              <FormLabel>Email</FormLabel>
              <FormInput placeholder="Email"/>
              <FormLabel>Password</FormLabel>
              <FormInput placeholder="Password"/>
              <FormLabel>Confirm Password</FormLabel>
              <FormInput placeholder="Confirm Password"/>
              <FormButton>Submit</FormButton>
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