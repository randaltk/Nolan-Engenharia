import React, { useEffect } from "react";
import Paulo from "../../images/factory_training.png";
import Rands from "../../images/8ca224e3dba831d1753d327f9a1adc27.jpg";
//import Danix from "../../images/danix.png";
import { AnimateSharedLayout } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./styles";

function Team() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <AnimateSharedLayout>
      <ServicesContainer>
        {/* <ServicesH1>Planos</ServicesH1> */}
        <ServicesWrapper
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="right"
        >
          <ServicesCard>
            <ServicesIcon src={Paulo} />
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Rands} />
          </ServicesCard>

          {/*  
          <ServicesCard>
          <ServicesIcon />
          <ServicesH2></ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>

         */}
        </ServicesWrapper>
      </ServicesContainer>
    </AnimateSharedLayout>
  );
}

export default Team;
