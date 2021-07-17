
// images from server
import upload from '../assets/upload.png'

// hooks
import { useMutation } from "@apollo/client";

// mutations
import { UPLOAD_IMAGE } from "../client/ulits/imageMutations";
import { ADD_PRODUCT } from '../client/ulits/productMutations';

// styles
import { useState } from "react";
import { Column1, Column2, Container, Row, Wrapper } from "../client/styleComponents/aligment";
import { Img, ImgWrapper } from "../client/styleComponents/img";
import { Heading, Subtitle, Text } from "../client/styleComponents/text";
import { Input, InputContainer, Option, Select, TextArea } from '../client/styleComponents/form';


export default function createProduct() {

    // mutations
    const [ uploadImage, { error } ] = useMutation(UPLOAD_IMAGE);
    const [ addProduct, { productError } ] = useMutation(ADD_PRODUCT);

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

    // Form State
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [department, setDepartment] = useState('');
    const [summary, setSummary] = useState('');
    // options array to map on the selection options
    const options = ['Market', 'Toys', 'Plants', 'Home']

    const handleSubmitFile = (e) => {
        console.log('submitting')
        e.preventDefault();
        if(!previewFileInput) return console.log('no file');

        // form data to send


        // uploads picture to cloudinary
        (async () => {
            try {
                /* await uploadImage({
                    variables: { "image": previewFileInput, "fileName": "test" }
                });
                console.log('success: Image Added to Cloud API') */
                // createdBy prop will be hard coded as Test for now until redux is added
                await addProduct({
                    variables: { 
                        "name": name, "price": price, "department": department, 
                        "summary": summary, "createdBy": "Test", "image": previewFileInput
                    }
                });
                console.log('success: Product Details Added')
            } catch (err) {
                console.log(err);
            }
        })();

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
                                    <Input placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
                                    Price
                                    <Input placeholder="Product Price" value={price}  onChange={(e) => setPrice(e.target.value)} required />
                                    Department
                                    <Select name="Department" onChange={(e) => setDepartment(e.target.value)} required >
                                        { options.map((option, index) => <Option value={option} key={index}>
                                            {option}
                                        </Option>) }
                                    </Select>
                                    Summary
                                    <TextArea placeholder="Product Summary" value={summary} onChange={(e) => setSummary(e.target.value)} required />
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
