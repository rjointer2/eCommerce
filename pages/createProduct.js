
// images from server
import upload from '../assets/upload.png'

// hooks
import { useMutation } from "@apollo/client";

// mutations
import { UPLOAD_IMAGE } from "../client/ulits/imageMutations";

// styles
import { useState } from "react";
import { Column1, Column2, Container, Row, Wrapper } from "../client/styleComponents/aligment";
import { Img, ImgWrapper } from "../client/styleComponents/img";
import { Heading, Subtitle, Text } from "../client/styleComponents/text";
import { Input, InputContainer, TextArea } from '../client/styleComponents/form';


export default function createProduct() {

    const [ uploadImage, { error } ] = useMutation(UPLOAD_IMAGE)

    // Uploading Images to Cloundinary

    // the state used to send base64Strings to the Cloudinary
    const [ fileInput, setFileInput ] = useState('');
    const [ previewFileInput, setPreviewFileInput ] = useState('');

    // get the first file selected
    const handleInputChange = (e) => previewFile(e.target.files[0]);
    // using the API read the image as base64 image
    const previewFile = file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            // update the state as the new base64 image
            setPreviewFileInput(reader.result)
        }
    }

    const handleSubmitFile = (e) => {
        console.log('submitting')
        e.preventDefault();
        if(!previewFileInput) return console.log('no file');

        ( async () => {
            try {
                await uploadImage({
                    variables: { "image": previewFileInput, "fileName": "test" }
                });
                console.log('success')
                
            } catch (err) {
                console.log(err);
            }
        })()
    }

    

    return (
        <>
            <Container>
                <Wrapper>
                    <Row>
                        <Column1>
                            <ImgWrapper>
                                <Img src={upload} alt="uplaod some pictures" />
                            </ImgWrapper>
                            <Heading>
                            Upload your Product Today!
                        </Heading>
                        </Column1>
                        <Column2>
                            <Heading lightText={false} >
                                It Starts Here!
                            </Heading>
                            <Subtitle lightText={false} >
                                Upload Your Product Today!
                            </Subtitle>
                            <Text lightText={false} >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Text>
                            <form onSubmit={handleSubmitFile}>

                                <InputContainer>
                                    Name
                                    <Input />
                                    Price
                                    <Input />
                                    Department
                                    <Input />
                                    Summary
                                    <TextArea />
                                </InputContainer>
                                <input 
                                    type="file" 
                                    name="image" 
                                    onChange={handleInputChange} 
                                    value={fileInput}
                                />
                            <button type="submit">
                                Submit Image
                            </button>
                            </form>
                            { previewFileInput && (
                                <Img src={previewFileInput} alt="selected file" />
                            ) }
                        </Column2>
                    </Row>
                </Wrapper>
            </Container>
        </>
    )
}
