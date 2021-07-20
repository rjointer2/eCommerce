
// images
import signin from '../assets/signin.png'

// styles
import { Column1, Column2, Container, Row, Wrapper } from "../client/styleComponents/aligment";
import { Input, SignInContainer } from '../client/styleComponents/form';
import { Img, ImgWrapper } from "../client/styleComponents/img";
import { Heading, Subtitle, Text } from '../client/styleComponents/text';


export default function SignIn() {

  return (
    <>
      <Container>
        <Wrapper>
          <Row>
            <Column1>
                <ImgWrapper>
                    <Img alt="sign in picture" src={signin} />
                </ImgWrapper>
            </Column1>
            <Column2>
                <SignInContainer>
                    <Heading>
                        Logo
                    </Heading>
                    <Subtitle>
                        Sign In
                    </Subtitle>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br/>
                    <br/>
                    <br/>
                    </Text>
                    <Column1>
                        <Input placeholder="Enter Username" />
                        <Input placeholder="Enter Email" />
                    </Column1>
                    <Column2>
                        <Input placeholder="Enter Password" />
                        <Input placeholder="Enter Confrim Password" />
                    </Column2>
                </SignInContainer>
            </Column2>
          </Row>
        </Wrapper>
      </Container>
    </>
  )
}