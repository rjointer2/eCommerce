

// styles
import { FooterBottomWrapper, FooterContainer, FooterLink, FooterLinkContainer, FooterLinkItem, FooterLinkTitle, FooterLinkWrapper, FooterLogo, FooterTextSmall, FooterWrapper } from './FooterStyles'


export default function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>
                            <FooterLink href="#">Learn More</FooterLink>
                            <FooterLink href="#">Inspiration</FooterLink>
                            <FooterLink href="#">Fair Usage</FooterLink>
                            <FooterLink href="#">View Source</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                Social Media
                            </FooterLinkTitle>
                            <FooterLink href="#">Twitter</FooterLink>
                            <FooterLink href="#">Instagram</FooterLink>
                            <FooterLink href="#">Snapchat</FooterLink>
                            <FooterLink href="#">Facebook</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                Learn More
                            </FooterLinkTitle>
                            <FooterLink href="#">Careers</FooterLink>
                            <FooterLink href="#">Report An Issue</FooterLink>
                            <FooterLink href="#">Donations</FooterLink>
                            <FooterLink href="#">Become a Vender</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                Contact Us
                            </FooterLinkTitle>
                            <FooterLink href="#">+1 (234) 567-8901</FooterLink>
                            <FooterLink href="#">Corperate Number</FooterLink>
                            <FooterLink href="#">Find a Local Store</FooterLink>
                            <FooterLink href="#">Email Us</FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrapper>
                    
                </FooterLinkContainer>
                <FooterBottomWrapper>
                    <FooterLogo>
                        Logo
                    </FooterLogo>
                    <FooterTextSmall>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </FooterTextSmall>
                </FooterBottomWrapper>
            </FooterWrapper>
        </FooterContainer>
    )
}