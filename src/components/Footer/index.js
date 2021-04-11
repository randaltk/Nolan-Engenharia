import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { i18n } from "../../translate/i18n";
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
              <FooterLinkTitle>{i18n.t("footer.address")} </FooterLinkTitle>
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
              Nolan © {new Date().getFullYear()} - {i18n.t("footer.rights")}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/Nolan-Engenharia-Inspe%C3%A7%C3%B5es-101094468655978/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/geovanecarvalho94/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              {/*  */}{" "}
              <SocialIconLink
                href="https://www.linkedin.com/company/nolanengenharia/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
