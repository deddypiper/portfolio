import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+2349025419826">+234-9025419826</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:deddypiper@gmail.com">deddypiper@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> Building your Dreams!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='http://github.com/'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='http://twitter.com/'>
            <AiFillTwitter size='3rem' />
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
