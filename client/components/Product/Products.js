
// react scroll
import { animateScroll as scroll } from "react-scroll";

// hooks 
import { useContext, useEffect, useReducer, useRef, useState } from "react";

// apollo client
import { useMutation, useQuery } from "@apollo/client"
import { PRODUCTS } from "../../ulits/queries/productQueries"

// components
import { ProductContainer, ProductItem } from "./ProductStyles";
import { BoldCappedText, Text, TextCenter } from "../../styleComponents/text";
import { Img, ImgWrapper } from "../../styleComponents/img";

// state managemnet
import Context from '../../store/context';
import { ADD_PRODUCT_TO_CART } from "../../ulits/mutations/productMutations";
import { Button } from "../../styleComponents/button";
import { ViewContainer, ViewWrapper } from "../../styleComponents/aligment";
import { Select } from "../../styleComponents/form";
import { updateCart } from "../../store/actions";



export default function Products() {

    // local state
    const [array, setArray] = useState([]);
    const [message, setMessage] = useState('Filter By Department');

    // global state
    const { state, dispatch } = useContext(Context);

    // all products
    const { data, error, loading } = useQuery(PRODUCTS);
    const [addProductToCartServer] = useMutation(ADD_PRODUCT_TO_CART, {
        onCompleted: serverData => dispatch(updateCart(serverData.addProductToCart.cart, state.user))
    })

    const handleClick = async () => {
        if(!state.user) {
            setMessage(`You don't have a account`);
            scroll.scrollTo(500)
            return false
        }
        try {
            await addProductToCartServer({
                variables: { "userId": state.user, "productId": item._id }
            })                             
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(!data) return false;
        setArray(data.products);
    }, [data]);

    if(loading) return <p>Loading</p>

    if(error) return <ProductContainer>
        <ProductItem>
            error
        </ProductItem>
    </ProductContainer>

    // lifecycle functions
    const filterByDept = (dept) => {
        if(dept === "All") {
            setArray(data.products);
            return false
        }
        console.log(dept)
        setArray( data.products.filter(products => products.department === dept) );
    }

    return (
        <div>
            <TextCenter><BoldCappedText>{message}</BoldCappedText></TextCenter>
            <ViewContainer>
                <ViewWrapper>
                    <Button onClick={() => filterByDept('Home')} >Home</Button>
                </ViewWrapper>
                <ViewWrapper>
                    <Button onClick={() => filterByDept('Plants')} >Plants</Button>
                </ViewWrapper>
                <ViewWrapper>
                    <Button onClick={() => filterByDept('Decor')} >Decor</Button>
                </ViewWrapper>
                <ViewWrapper>
                    <Button onClick={() => filterByDept('All')} >All</Button>
                </ViewWrapper>
            </ViewContainer>
            <ProductContainer>
                { array.map((item, index) => <ProductItem key={index}>
                <ImgWrapper><Img src={item.image} alt="item" /></ImgWrapper>
                        <br/>
                        <BoldCappedText>{item.name}</BoldCappedText>
                        <Text lightText={true}>price: ${item.price}</Text>
                        <Button backgroundDark={true} onClick={handleClick}>Add To Cart</Button>
                        <Select>
                            <option value="" hidden>1</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Select>
                        <Text lightText={true}>{item.summary.substring(0, 25)}...<br/><br/></Text>
                </ProductItem>)}
            </ProductContainer>
        </div>
    )
}