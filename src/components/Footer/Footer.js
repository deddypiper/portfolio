import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillThunderbolt, AiOutlineMail, AiOutlineTwitter  } from 'react-icons/ai';
import {IoIosCall} from 'react-icons/io'
import  {SocialIcons}  from '../Header/HeaderStyles';
import { CompanyContainer, ContactIcons, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle><ContactIcons><IoIosCall color='#1732da' size="3rem"/></ContactIcons></LinkTitle>
          <LinkItem href="tel:+2349025419826">+234-9025419826</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle><ContactIcons><AiOutlineMail color='#fff' size="2.5rem"/></ContactIcons></LinkTitle>
          <LinkItem href="mailto:deddypiper@gmail.com">deddypiper@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> Building your Dreams!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/deddypiper'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='http://twitter.com/'>
            <AiOutlineTwitter  size='3rem' />
          </SocialIcons>
          <SocialIcons href='http://linkedin.com/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='http://instagram.com/'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
