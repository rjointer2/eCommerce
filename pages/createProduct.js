
// SEO
import Head from 'next/head';

// hooks
import { useState, useRef, useEffect, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";

// mutations
import { ADD_PRODUCT } from "../client/ulits/mutations/productMutations";

// styles
import { Column1, Column2, Container, Row, Wrapper } from "../client/styleComponents/aligment";
import { Img, ImgWrapper } from "../client/styleComponents/img";
import { BoldCappedText, Heading, Text } from "../client/styleComponents/text";
import { Form, FormButton, FormInput, FormLabel, FormSelect, TextArea } from '../client/styleComponents/form';

// apollo
import { GET_USER } from '../client/ulits/queries/userQueries';

// state management
import Context from '../client/store/context';
import { updateState } from '../client/store/actions';

// next
import Link from 'next/link';



export default function createProduct() {

    // get user data
    const { data, error, loading } = useQuery(GET_USER);

    // global state
    const { dispatch, state } = useContext(Context);

    useEffect(() => {
        if(!data) return false;
        dispatch(updateState(data.me.cart, data.me._id, data.me.isVendor));
    }, [data]);

    // product
    const [addedProduct, setAddedProduct] = useState(null);

    // refernce to hidden input for file upload 
    const hiddenInput = useRef(null);
    // target hidden input click's and invoke on event
    const handleFileUploadClick = e => hiddenInput.current.click();

    // mutation hook to add product to db
    const [ addProduct ] = useMutation(ADD_PRODUCT, {
        onCompleted: data => setAddedProduct(data)
    });

    // Form State
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [department, setDepartment] = useState('Decor');
    const [summary, setSummary] = useState('');

    // form error to help set messages on form conditionally
    const [ formError, setFormError ] = useState(false);
    const [ formErrorMessage, setFormErrorMessage ] = useState('');

    // options array to map on the selection options
    const options = ['Decor', 'Plants', 'Home']

    // Uploading Images to Cloundinary and DB
    // the state used to send base64Strings to the Cloudinary
    const [ fileInput, setFileInput ] = useState('');
    const [ previewFileInput, setPreviewFileInput ] = useState('');

    // get the first file selected
    const handleInputChange = (e) => {
        if(!name || !price || !summary ) {
            setFormError(true)
            setFormErrorMessage('Please Complete The Form Correctly')
            return false
        }
        // check price is valid
        if(!parseFloat(price)) {
            setFormError(true)
            setFormErrorMessage('Please Enter Valid Price')
            return false
        }
        previewFile(e.target.files[0]);
    }
    // using the API read the image as base64 image
    const previewFile = file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        // update the state as the new base64 image
        reader.onloadend = () => setPreviewFileInput(reader.result);
    }

    const handleSubmitFile = (e) => {
        console.log('submitting')
        e.preventDefault();

        setFormError(true)
        setFormErrorMessage('No File Presented')
        if(!previewFileInput) return console.log('no file');
        // uploads picture to cloudinary and data to db
        (async () => {
            try {
                // createdBy prop will be hard coded as Test for now until redux is added
                await addProduct({
                    variables: { 
                        "name": name, "price": price, "department": department, 
                        "summary": summary, "createdBy": data.me._id, "image": previewFileInput,
                        "viewCount": "0", "amount": "0"
                    }
                });
                window.location.assign('/')
            } catch (err) {
                console.log(err);
            }
        })();
    }

    return (
        <>
            <Head>
                <title>Plant Shop Create Product</title>
            </Head>
            <Container>
                <Wrapper>
                    <Row>
                        <Column1>
                            <ImgWrapper>
                                <Img src='/upload.png' alt="uplaod some pictures" />
                            </ImgWrapper>
                            <Heading>
                            Upload your Product Today!
                        </Heading>
                        <Text style={{ textAlign: "center" }}>
                                <br/>Image will be displayed here<br/><br/>
                            </Text>
                            { previewFileInput && (
                                <Img src={previewFileInput} alt="selected file" />
                            )}
                        </Column1>
                        <Column2>
                            <Form onSubmit={handleSubmitFile} >
                                <BoldCappedText>
                                    Start Today
                                </BoldCappedText>
                                <Heading lightText={true} >
                                    Upload Your Product To Our Store!
                                </Heading>
                                <Text lightText={true} >
                                    Create Your Product quick and simple! Follow the form and fill all input fields.
                                </Text>
                                <br/>
                                {
                                    formError && <BoldCappedText style={{ textAlign: "center" }} >  {formErrorMessage}  </BoldCappedText>
                                }
                                <FormLabel>Name</FormLabel>
                                <FormInput placeholder="Product Name" value={name} onChange={(e) => { setName(e.target.value), setFormError(false) }} required />
                                <FormLabel>Price</FormLabel>
                                <FormInput placeholder="Product Price" value={price}  onChange={(e) => { setPrice(e.target.value), setFormError(false) }} required />
                                <FormLabel>Department</FormLabel>
                                <FormSelect name="Department" onChange={(e) => setDepartment(e.target.value)} required >
                                    { options.map((option, index) => <option value={option} key={index}>
                                        {option}
                                    </option>)}
                                </FormSelect>
                                <FormLabel>Summary</FormLabel>
                                <TextArea placeholder="Product Summary" value={summary} onChange={(e) => {setSummary(e.target.value), setFormError(false)}} required/>
                                <br/>
                                <Text lightText={true}>
                                    Click Submit to upload your image
                                </Text>
                                <FormButton type="button" onClick={handleFileUploadClick}>
                                    Upload File
                                </FormButton>
                                <input 
                                    ref={hiddenInput}
                                    style={{ display: 'none' }}
                                    type="file" 
                                    name="image" 
                                    onChange={handleInputChange} 
                                    value={fileInput}
                                />
                                <FormButton type="submit">
                                    Submit Product
                                </FormButton>
                                <Link href="/becomevendor">Don't want to be a Vendor?</Link>
                            </Form>
                        </Column2>
                    </Row>
                </Wrapper>
            </Container>
        </>
    )
}
