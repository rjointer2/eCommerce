
// SEO
import Head from 'next/head';

// hooks
import { useContext, useEffect, useState } from "react";

// apollo
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER } from "../client/ulits/queries/userQueries";
import { UPDATE_VENDOR_STATUS } from "../client/ulits/mutations/userMutations";


// state management
import Context from "../client/store/context";
import { updateState } from "../client/store/actions";

// styles
import { Form, FormContainer, FormHeader } from "../client/styleComponents/form";
import { Text } from "../client/styleComponents/text";

// components
import ToggleSwitch from "../client/components/ToggleSwitch/ToggleSwitch";
import { ViewContainer } from "../client/styleComponents/aligment";
import { Img, ImgWrapper } from "../client/styleComponents/img";
import Navbar from '../client/components/Navbar/Navbar';
import Sidebar from '../client/components/Sidebar/Sidebar';



export default function BecomeVendor() {

    // local state
    const [vendor, setVendor] = useState(false)

    // global state
    const { state, dispatch } = useContext(Context);


    // get the user and cart
    const { data, error, loading } = useQuery(GET_USER);
    // update vendor status
    const [ updateVendorStatus ] = useMutation(UPDATE_VENDOR_STATUS, {
        onCompleted: () => window.location.assign('/')
    });

    const handleClick = async () => {
        try {
            await updateVendorStatus({ variables: { "userId": state.user } })
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(!data) return false;
        dispatch(updateState(data.me.cart, data.me._id, data.me.isVendor))
        setVendor(data.me.isVendor)
        console.log(vendor)
    }, [data])

    // we will psss the components and pages as props 
    const [isOpen, setIsOpen] = useState(false);
    // for the sidebar if the prop is a bool then the style will show
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Head>
                <title>Plant Shop Become A Vendor</title>
            </Head>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <FormContainer>
                <ImgWrapper>
                    <Img src="/vendor.svg" alt="vendor"/>
                </ImgWrapper>
                <Form>
                    <ViewContainer>
                    { 
                        data ? <> 
                            <Text lightText={true}>
                                { vendor ? 'Your already Vendor! Would Like to remove your status?' : 'Would you like to become a vendor?' }
                            </Text>
                            <ToggleSwitch stateValue={false} setStateValue={setVendor} callback={handleClick}  />  </> : 
                            <Text lightText={true}>
                                You Must Have An Account to sell items!
                            </Text>
                    }
                    </ViewContainer>
                </Form>
            </FormContainer>
        </div>
    )
}
