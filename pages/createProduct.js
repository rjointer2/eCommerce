

// styles
import { useState } from "react";
import { Column1, Column2, Container, Row, Wrapper } from "../styleComponents/aligment";
import { Img, ImgWrapper } from "../styleComponents/img";
import { Heading, Subtitle, Text } from "../styleComponents/text";



export default function createProduct() {


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

    const handleSubmitFile = async (e) => {
        console.log('submitting')
        e.preventDefault();
        if(!previewFileInput) return console.log('no file');
        (() => {
            try {
                // use mutation here from apollo client
                // set up backend to perform this
                // we have to set a proxy and then 
                // have the backend use either use localhost or heroku
            } catch (err) {

            }
        })()
    }

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
                            <form onSubmit={handleSubmitFile}>
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
                        </Column1>
                        <Column2>

                        </Column2>
                    </Row>
                </Wrapper>
            </Container>
        </>
    )
}