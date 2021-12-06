import hre from "hardhat";
const { web3 } = hre;

import { encodeSpells } from "./encodeSpells.js";

export default function encodeFlashcastData(spells: any) {
  const encodeSpellsData = encodeSpells(spells);
  const targetType = "string[]";
  let argTypes = [targetType, "bytes[]"];
  return web3.eth.abi.encodeParameters(argTypes, [
    encodeSpellsData[0],
    encodeSpellsData[1],
  ]);
};