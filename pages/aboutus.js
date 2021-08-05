
// SEO
import Head from 'next/head';

// hooks
import { useContext, useEffect, useState } from 'react';

// apollo
import { GET_USER } from '../client/ulits/queries/userQueries'
import { useQuery } from '@apollo/client';

// state management
import { updateState } from '../client/store/actions';
import Context from '../client/store/context';

// styles
import { Img, ImgWrapper } from "../client/styleComponents/img";
import { Heading, Text, TextCenter } from "../client/styleComponents/text";
import Navbar from '../client/components/Navbar/Navbar';
import Sidebar from '../client/components/Sidebar/Sidebar';




export default function AboutUs() {

    const { data } = useQuery(GET_USER);

    const { dispatch, state } = useContext(Context);

    useEffect(() => {
        if(!data) return false;
        console.log(data)
        dispatch(updateState(data.me.cart, data.me._id, data.me.isVendor))
    }, [data])

    // we will psss the components and pages as props 
    const [isOpen, setIsOpen] = useState(false);
    // for the sidebar if the prop is a bool then the style will show
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Head>
                <title>Plant Shop About Dev</title>
            </Head>
            <Navbar toggle={toggle} /> 
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <TextCenter>
                <Heading>About The Developer</Heading>
                <ImgWrapper>
                    <Img src="/roody.png" alt=""/>
                </ImgWrapper>
                <br/>
                <Text>Thanks for stopping by and viewing my simple application.</Text>
                <Text>This was developed using ReactJS, NextJS, and Apollo GraphQL.</Text>
                <br/>
                <Text>
                    I hope it helps inspiring developers to migrate from Redux or <br/>
                    other standard state management libraries to use more out of the <br/>
                    box hooks with Apollo as an alternative for state management.
                </Text>
                <br/>
                <Text>
                    Apollo and State Management can be extremely overwhelming and <br/>
                    difficult to intergate into legacy code. More example or tips please <br/>
                    feel free to use the links in the footer below to contact me!
                </Text>
            </TextCenter>
        </>
    )
}
