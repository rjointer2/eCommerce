

// styles
import { AiFillGithub, AiFillLinkedin, AiFillShop, AiOutlineTwitter, AiOutlineUser } from 'react-icons/ai'
import { FooterBottomWrapper, FooterContainer, FooterLink, FooterLinkContainer, FooterLinkItem, FooterLinkTitle, FooterLinkWrapper, FooterLogo, FooterTextSmall, FooterWrapper } from './FooterStyles'


export default function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                Twitter
                            </FooterLinkTitle>
                            <FooterLink href="https://twitter.com/rosejoint_"><AiOutlineTwitter/></FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                Github
                            </FooterLinkTitle>
                            <FooterLink href="https://github.com/rjointer2"><AiFillGithub/></FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                LinkedIn
                            </FooterLinkTitle>
                            <FooterLink href="https://www.linkedin.com/in/roosevelt-jointer-bbaa901b2/"><AiFillLinkedin/></FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                Portfolio
                            </FooterLinkTitle>
                            <FooterLink href="https://portfolioroody.herokuapp.com/"><AiOutlineUser/></FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <FooterBottomWrapper>
                    <FooterLogo>
                        <AiFillShop/>
                    </FooterLogo>
                    <FooterTextSmall>
                        Created by Roosevelt Jointer
                    </FooterTextSmall>
                </FooterBottomWrapper>
            </FooterWrapper>
        </FooterContainer>
    )
}