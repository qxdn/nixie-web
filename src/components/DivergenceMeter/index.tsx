import React from "react";
import { DivergenceMeterProps } from "./types";
import { NixieTubeNumber } from "../NixieTube";
import NixieDisplay from "../NixieDisplay";

export const STEINS_GATE = 1.048596;

/**
 * 转换为6为小数字符串
 * @param value
 * @returns
 */
function convert2String(value: number | string): string {
  if (typeof value === "string") {
    // 转换为数字
    value = parseFloat(value);
  }
  // 检查是否为有效值
  if (value < 0 || value >= 10) {
    throw new Error(`Invalid value ${value} for NixieTube`);
  }
  return value.toFixed(6);
}

const DivergenceMeter: React.FC<DivergenceMeterProps> = ({
  worldLine = STEINS_GATE,
}) => {
  // 世界线字符串
  const worldLineStr: string = convert2String(worldLine);
  const tubes: number[] = new Array(8).fill(NixieTubeNumber.NIXIE_BLANK);
  for (let i = 0; i < worldLineStr.length; i++) {
    const char = worldLineStr[i];
    if (char === ".") {
      tubes[i] = NixieTubeNumber.NIXIE_RIGHT_DOT;
    } else {
      tubes[i] = Number(char);
    }
  }
  return (
    <NixieDisplay tubes={tubes}/>
  );
};

export default DivergenceMeter;
