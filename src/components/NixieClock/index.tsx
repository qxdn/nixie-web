import React, { useEffect } from "react";
import { NixieTubeNumber } from "../NixieTube";
import NixieDisplay from "../NixieDisplay";

/**
 * 辉光计时器组件
 * @returns
 */
const NixieClock: React.FC = () => {
  const [tubes, setTubes] = React.useState<number[]>(
    new Array(8).fill(NixieTubeNumber.NIXIE_BLANK)
  );

  // 设置时间
  function setTime(date: Date) {
    const _tubes: number[] = [...tubes];
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    const seconds: number = date.getSeconds();
    const dot =
      seconds % 2 === 0
        ? NixieTubeNumber.NIXIE_RIGHT_DOT
        : NixieTubeNumber.NIXIE_LEFT_DOT;
    // hours
    _tubes[0] = Math.floor(hours / 10);
    _tubes[1] = hours % 10;
    // dot
    _tubes[2] = dot;
    // minutes
    _tubes[3] = Math.floor(minutes / 10);
    _tubes[4] = minutes % 10;
    // dot
    _tubes[5] = dot;
    // seconds
    _tubes[6] = Math.floor(seconds / 10);
    _tubes[7] = seconds % 10;
    setTubes(_tubes);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <NixieDisplay tubes={tubes} />;
};

export default NixieClock;
