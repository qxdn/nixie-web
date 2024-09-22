import React from "react";
import { NixieTubeProps } from "./types";

// import images
import nixie0 from "../../assets/nixie/0.png";
import nixie1 from "../../assets/nixie/1.png";
import nixie2 from "../../assets/nixie/2.png";
import nixie3 from "../../assets/nixie/3.png";
import nixie4 from "../../assets/nixie/4.png";
import nixie5 from "../../assets/nixie/5.png";
import nixie6 from "../../assets/nixie/6.png";
import nixie7 from "../../assets/nixie/7.png";
import nixie8 from "../../assets/nixie/8.png";
import nixie9 from "../../assets/nixie/9.png";
import nixieBlank from "../../assets/nixie/10.png";
import nixieRightDot from "../../assets/nixie/11.png";
import nixieLeftDot from "../../assets/nixie/12.png";

export enum NixieTubeNumber {
  NIXIE_0 = 0,
  NIXIE_1,
  NIXIE_2,
  NIXIE_3,
  NIXIE_4,
  NIXIE_5,
  NIXIE_6,
  NIXIE_7,
  NIXIE_8,
  NIXIE_9,
  NIXIE_BLANK,
  NIXIE_RIGHT_DOT,
  NIXIE_LEFT_DOT,
}

const NixieTubeImage = [
  nixie0,
  nixie1,
  nixie2,
  nixie3,
  nixie4,
  nixie5,
  nixie6,
  nixie7,
  nixie8,
  nixie9,
  nixieBlank,
  nixieRightDot,
  nixieLeftDot,
];

function convert2Image(value: number): string {
  return NixieTubeImage[value];
}

/**
 * 辉光管子组件
 * @param number 管子数值
 * @returns 
 */
const NixieTube: React.FC<NixieTubeProps> = ({ number = NixieTubeNumber.NIXIE_BLANK }) => {
  const image = convert2Image(number);
  return (
    <div>
      <img src={image} alt="nixie" />
    </div>
  );
};

export default NixieTube;
