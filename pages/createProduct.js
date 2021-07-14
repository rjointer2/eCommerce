
import Image from 'next/image'
import upload from '../assets/upload.png';

// styles
import { Column1, Column2, Container, Row, Wrapper } from "../styleComponents/aligment";
import { Img, ImgWrapper } from "../styleComponents/img";
import { Heading, Subtitle, Text } from "../styleComponents/text";



export default function createProduct() {

    return (
        <>
            <Container>
                <Wrapper>
                    <Row>
                        <Column1>
                            <Heading lightText={false} >
                                It Starts Here!
                            </Heading>
                            <Subtitle lightText={false} >
                                Upload Your Product Today!
                            </Subtitle>
                            <Text lightText={false} >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Text>
                        </Column1>
                        <Column2>
                            <ImgWrapper>
                                <Image src={upload} height="200px" width="200px" />
                            </ImgWrapper>
                        </Column2>
                    </Row>
                </Wrapper>
            </Container>
        </>
    )
}
