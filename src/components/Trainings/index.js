import React, { useState, useEffect } from "react";
import Icon1 from "../../images/factory_training.png";
//import Icon2 from "../../images/services-1.svg";
//import Icon3 from "../../images/services-2.svg";
//import Icon3 from "../../images/services-2.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH12,
  ServicesH22,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./styles";
import Aos from "aos";
import "aos/dist/aos.css";
import "./trainings.css";
function Trainings() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [hover6, setHover6] = useState(false);

  const onHover6 = () => {
    const card6 = document.querySelector(".card-6");

    setHover6((prevHover6) => !prevHover6);
    card6.classList.toggle("is-flipped-6");
  };

  return (
    <ServicesContainer id="team">
      <ServicesWrapper
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="10"
      >
        <div class="scene-6">
          <div
            class="card-6"
            //onClick={(e) => handleCard(e)}
            onMouseEnter={onHover6}
            onMouseLeave={onHover6}
          >
            {hover6 ? (
              <div class="card__face-6 card__face--back-6">
                <ServicesH2>
                  Fazemos treinamento para operadores de Caldeiras conforme NR13
                  anexo 1 item A1.1, alínea “a” que diz: “possuir certificado de
                  treinamento de segurança na operação de caldeiras expedido por
                  instituição competente e comprovação de prática profissional
                  supervisionada conforme item A1.5 deste anexo;”
                </ServicesH2>
              </div>
            ) : (
              <div class="card__face-6 card__face--front-6">
                <ServicesH12>Operadores de caldeiras</ServicesH12>
              </div>
            )}
          </div>
        </div>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Trainings;
