import { i18n } from "../../translate/i18n";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: `${i18n.t("about.capacitation")}`,
  headline: `${i18n.t("about.abouth1")}`,
  description: `${i18n.t("about.abouth2")}`,
  imgStart: false,
  img: require("../../images/nolan-section.jpg"),
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
  buttonLabel: "Get Started",
};
export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: `${i18n.t("enterprise.company")}`,
  headline: `${i18n.t("enterprise.enterpriseh1")}`,
  description: `${i18n.t("enterprise.enterpriseh2")}`,

  imgStart: true,
  img: require("../../images/icon-nr13.png"),
  alt: "Car",
  dark: false,
  primary: true,
  darkText: true,
};
