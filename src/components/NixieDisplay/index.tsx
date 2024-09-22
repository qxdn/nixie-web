import React from "react";
import { NixieDisplayProps } from "./types";
import NixieTube, { NixieTubeNumber } from "../NixieTube";

const NixieDisplay: React.FC<NixieDisplayProps> = ({
  tubes = new Array(8).fill(NixieTubeNumber.NIXIE_BLANK),
}) => {
  if (tubes.length !== 8) {
    throw new Error("Invalid tubes length");
  }
  return (
    <>
      {tubes.map((tube, index) => (
        <NixieTube number={tube} key={index} />
      ))}
    </>
  );
};

export default NixieDisplay;
