import React, { useState, useEffect } from "react";
import Icon1 from "../../images/8fa35872-1cd6-4297-8c2d-65645415b1f6.jpg";
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
import "./cards.css";
function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    const card = document.querySelector(".card");

    setHover((prevHover) => !prevHover);
    card.classList.toggle("is-flipped");
  };

  const [hover2, setHover2] = useState(false);
  const onHover2 = () => {
    const card2 = document.querySelector(".card-2");

    setHover2((prevHover2) => !prevHover2);
    card2.classList.toggle("is-flipped-2");
  };

  const [hover3, setHover3] = useState(false);
  const onHover3 = () => {
    const card3 = document.querySelector(".card-3");

    setHover3((prevHover3) => !prevHover3);
    card3.classList.toggle("is-flipped-3");
  };

  const [hover4, setHover4] = useState(false);
  const onHover4 = () => {
    const card4 = document.querySelector(".card-4");
    setHover4((prevHover4) => !prevHover4);
    card4.classList.toggle("is-flipped-4");
  };

  const [hover5, setHover5] = useState(false);
  const onHover5 = () => {
    const card5 = document.querySelector(".card-5");
    setHover5((prevHover5) => !prevHover5);
    card5.classList.toggle("is-flipped-5");
  };
  // const handleCard = () => {
  //   const card = document.querySelector(".card");
  //   console.log("foi0");
  //   card.addEventListener("click", function () {
  //     card.classList.toggle("is-flipped");
  //   });
  // };

  return (
    <ServicesContainer id="services">
      <ServicesWrapper
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="10"
      >
        <div class="scene">
          <div
            class="card"
            //onClick={(e) => handleCard(e)}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            {hover ? (
              <div class="card__face card__face--back">
                <ServicesH2>
                  A inspeção em Caldeiras é feita com base na norma NR13 de
                  acordo com o item 13.4.1.1: “Caldeiras a vapor são
                  equipamentos destinados a produzir e acumular vapor sob
                  pressão superior à atmosférica utilizando qualquer fonte de
                  energia, projetados conforme códigos pertinentes executando-se
                  refervedores e similares.”
                </ServicesH2>
              </div>
            ) : (
              <div class="card__face card__face--front">
                <ServicesH1>Caldeiras</ServicesH1>
              </div>
            )}
          </div>
        </div>

        <div class="scene-2">
          <div
            class="card-2"
            //onClick={(e) => handleCard(e)}
            onMouseEnter={onHover2}
            onMouseLeave={onHover2}
          >
            {hover2 ? (
              <div class="card__face-2 card__face--back-2">
                <ServicesH2>
                  Os Vasos de pressão são inspecionados conforme a NR13 item
                  13.5, de acordo com item 13.5.12 “Para efeito desta NR os
                  vasos de pressão são classificados em categorias segundo a
                  classe de fluido e o potencial de risco.”
                </ServicesH2>
              </div>
            ) : (
              <div class="card__face-2 card__face--front-2">
                <ServicesH12>Vasos de pressão</ServicesH12>
              </div>
            )}
          </div>
        </div>

        <div class="scene-3">
          <div
            class="card-3"
            //onClick={(e) => handleCard(e)}
            onMouseEnter={onHover3}
            onMouseLeave={onHover3}
          >
            {hover3 ? (
              <div class="card__face-3 card__face--back-3">
                <ServicesH2>
                  Esse tipo de inspeção também é feito com base na NR13 no item
                  13.6 da norma, de acordo com o item 13.6.1.1 “As empresas que
                  possuem tubulações e sistemas de tubulação enquadrados nesta
                  NR devem possuir um programa e um plano de inspeção que
                  considere, no mínimo, as variáveis, condições e premissas
                  descritas abaixo:”{" "}
                  {/*  <ServicesP>a) Os fluidos transportados;</ServicesP>
                  <ServicesP> b) A pressão de trabalho;</ServicesP>
                  <ServicesP> c) A temperatura de trabalho;</ServicesP>
                  <ServicesP>d) Os mecanismos de danos previsíveis</ServicesP>
                  <ServicesP>
                    e) As consequências para os trabalhadores, instalações e
                    meio ambiente trazidas por possíveis falhas das tubulações.
                  </ServicesP>  */}
                </ServicesH2>
              </div>
            ) : (
              <div class="card__face-3 card__face--front-3">
                <ServicesH1>Tubulações</ServicesH1>
              </div>
            )}
          </div>
        </div>

        <div class="scene-4">
          <div
            class="card-4"
            //onClick={(e) => handleCard(e)}
            onMouseEnter={onHover4}
            onMouseLeave={onHover4}
          >
            {hover4 ? (
              <div class="card__face-4 card__face--back-4">
                <ServicesH22>
                  A inspeção de Tanques metálicos também é feita conforme NR13
                  item 13.7, de acordo item 13.7.1.1 “As empresas que possuem
                  tanques metálicos de armazenamento e estocagem enquadrados
                  nesta NR devem possuir um programa e um plano de inspeção que
                  considere, no mínimo, as variáveis, condições e premissas
                  descritas abaixo: (vide prazo vigência no art. 7° da portaria
                  MTE n° 1.082, de 18 de dezembro de 2018){" "}
                  {/*  <ServicesP>a) Os fluidos transportados;</ServicesP>
                  <ServicesP> b) A pressão de trabalho;</ServicesP>
                  <ServicesP> c) A temperatura de trabalho;</ServicesP>
                  <ServicesP>d) Os mecanismos de danos previsíveis</ServicesP>
                  <ServicesP>
                    e) As consequências para os trabalhadores, instalações e
                    meio ambiente trazidas por possíveis falhas das tubulações.
                  </ServicesP>  */}
                </ServicesH22>
              </div>
            ) : (
              <div class="card__face-4 card__face--front-4">
                <ServicesH1>Tanques Metálicos</ServicesH1>
              </div>
            )}
          </div>
        </div>

        <div class="scene-5">
          <div
            class="card-5"
            //onClick={(e) => handleCard(e)}
            onMouseEnter={onHover5}
            onMouseLeave={onHover5}
          >
            {hover5 ? (
              <div class="card__face-5 card__face--back-5">
                <ServicesH2>
                  Executamos inspeções de solda como liquido penetrante,
                  Ultrassom, partícula magnética e inspeção visual
                </ServicesH2>
              </div>
            ) : (
              <div class="card__face-5 card__face--front-5">
                <ServicesH1>Soldas</ServicesH1>
              </div>
            )}
          </div>
        </div>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
