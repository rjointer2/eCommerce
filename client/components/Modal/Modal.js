
// assest
import cartImage from '../../../assets/cartImage.png'
import { Button, ButtonWrapper } from '../../styleComponents/Button';

// styles
import { Background, ModalContext, ModalWrapper } from "./ModalStyles";


export default function Modal({ openModal }) {
    return (
        <Background>
            <ModalWrapper>
                <ModalContext>
                    <h1>Your Cart</h1>
                </ModalContext>
                <ButtonWrapper>
                    <Button onClick={() => openModal(prevState => !prevState)}>Close Cart</Button>
                </ButtonWrapper>
            </ModalWrapper>
        </Background>
    )
}
