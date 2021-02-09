import React, { useEffect } from "react";
import Icon1 from "../../images/maintenance2.jpg";
import Icon2 from "../../images/services-1.svg";
import Icon3 from "../../images/services-2.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./styles";
import Aos from "aos";
import "aos/dist/aos.css";
function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <ServicesContainer id="services">
      <ServicesWrapper
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="10"
      >
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Caldeiras</ServicesH2>
          <ServicesP>
            As inspeções de caldeiras são realizadas por um inspetor
            profissional[..]
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Soldas</ServicesH2>
          <ServicesP>
            As inspeções de solda são realizadas por um inspetor de solda,
            profissional[..]
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Vasos de pressão</ServicesH2>
          <ServicesP>
            As inspeções de vasos de pressão são realizadas por um inspetor
            profissional [..]
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Tanques metálicos</ServicesH2>
          <ServicesP>
            As inspeções de tanques são realizadas por um inspetor profissional
            capacitado[..]
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Tubulações</ServicesH2>
          <ServicesP>
            As inspeções de tubulações são realizadas por um inspetor
            profissional[..]
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
