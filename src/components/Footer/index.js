import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./styles";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Endereço </FooterLinkTitle>
              <FooterLink to="/">
                R. André de Leão, 138 - Vila Socorro São Paulo - SP 04762-030
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Nolan
            </SocialLogo>
            <WebsiteRights>
              {" "}
              Nolan © {new Date().getFullYear()} - Todos os Direitos Reservados
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              {/*  */}{" "}
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Youtube"
              ></SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Twitter"
              ></SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Linkedin"
              ></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
