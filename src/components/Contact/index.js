import React, { useEffect } from "react";

import ReactWhatsapp from "react-whatsapp";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from "./styles";

function Contact({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const wppStyle = {
    borderRadius: "50px",
    background: "#01bf71",
    whiteSpace: "nowrap",
    padding: "14px 48px",
    color: "#fff",
    fontSize: "16px",
    outline: "none",
    cursor: "pointer",
    border: "none",
  };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper data-aos="fade-right">
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>

                <BtnWrap>
                  <ReactWhatsapp
                    style={wppStyle}
                    number="55-11-95166-1499"
                    message="Olá! Gostaria de obter mais informações"
                    to=""
                    //onClick={() => setIsOpen(!isOpen)}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    disp={primary ? 1 : 0}
                  >
                    Iniciar Conversa
                  </ReactWhatsapp>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default Contact;
