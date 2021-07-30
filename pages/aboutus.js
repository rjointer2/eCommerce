
// assets
import roody from '../assets/roody.png'

// hooks
import { useContext, useEffect } from 'react';

// apollo
import { GET_USER } from '../client/ulits/queries/userQueries'
import { useQuery } from '@apollo/client';

// state management
import { updateState } from '../client/store/actions';
import Context from '../client/store/context';

// styles
import { Img, ImgWrapper } from "../client/styleComponents/img";
import { Heading, Text, TextCenter } from "../client/styleComponents/text";




export default function AboutUs() {

    const { data } = useQuery(GET_USER);

    const { dispatch, state } = useContext(Context);

    useEffect(() => {
        if(!data) return false;
        console.log(data)
        dispatch(updateState(data.me.cart, data.me._id, data.me.isVendor))
    }, [data])

    return (
        <div>
            <TextCenter>
                <Heading>About The Developer</Heading>
                <ImgWrapper>
                    <Img src={roody} alt=""/>
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
        </div>
    )
}
