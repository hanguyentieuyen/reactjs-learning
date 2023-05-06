import React from 'react';
import { Button } from '../../globalStyles';
import{ 
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    
} from 'react-icons/fa'
import {
    Form,
    FormInput,
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItem,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialIcon
}  from './Footer.elements'
const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Join our exclusive membership to receive the lastest news and trends
            </FooterSubHeading>
            <FooterSubText>You can unsubscribe at any time</FooterSubText>
            <Form>
                <FormInput name="email" type="email" placeholder="Your Email"/>
                    <Button fontBig>
                        Subscribe
                    </Button>

            </Form>
        </FooterSubscription>

        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinksItem>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to = '/sign-up'>How it works</FooterLink>
                    <FooterLink to = '/sign-up'>Testimonials</FooterLink>
                    <FooterLink to = '/sign-up'>Careers</FooterLink>
                    <FooterLink to = '/sign-up'>Investors</FooterLink>
                    <FooterLink to = '/sign-up'>Terms of Services</FooterLink>    
                </FooterLinksItem>
                <FooterLinksItem>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to = '/sign-up'>How it works</FooterLink>
                    <FooterLink to = '/sign-up'>Testimonials</FooterLink>
                    <FooterLink to = '/sign-up'>Careers</FooterLink>
                    <FooterLink to = '/sign-up'>Investors</FooterLink>
                    <FooterLink to = '/sign-up'>Terms of Services</FooterLink>    
                </FooterLinksItem>
            </FooterLinksWrapper> 
            <FooterLinksWrapper>    
                <FooterLinksItem>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to = '/sign-up'>How it works</FooterLink>
                    <FooterLink to = '/sign-up'>Testimonials</FooterLink>
                    <FooterLink to = '/sign-up'>Careers</FooterLink>
                    <FooterLink to = '/sign-up'>Investors</FooterLink>
                    <FooterLink to = '/sign-up'>Terms of Services</FooterLink>    
                </FooterLinksItem>
                <FooterLinksItem>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to = '/sign-up'>How it works</FooterLink>
                    <FooterLink to = '/sign-up'>Testimonials</FooterLink>
                    <FooterLink to = '/sign-up'>Careers</FooterLink>
                    <FooterLink to = '/sign-up'>Investors</FooterLink>
                    <FooterLink to = '/sign-up'>Terms of Services</FooterLink>    
                </FooterLinksItem>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to = '/'>
                    <SocialIcon/>ULTRA
                </SocialLogo>
                <WebsiteRights>UTRA 2022</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'><FaLinkedin/></SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
                    
                </SocialIcons>
            </SocialMediaWrap>

        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer