import fs from 'fs';

import { json } from '../src';
import { CompiledContract } from '../src/types';

const readContract = (name: string): CompiledContract =>
  json.parse(fs.readFileSync(`./__mocks__/${name}.json`).toString('ascii'));

const readContractJSON = (name: string): CompiledContract =>
  JSON.parse(fs.readFileSync(`./__mocks__/${name}.json`).toString('ascii'));

export const compiledArgentAccount = readContract('ArgentAccount');
export const compiledErc20 = readContract('ERC20');
export const compiledTypeTransformation = readContract('contract');
export const compiledMulticall = readContract('multicall');
export const compiledTestDapp = readContract('TestDapp');

export const compiledArgentAccountRPC = readContractJSON('ArgentAccount');
export const compiledErc20RPC = readContractJSON('ERC20');
export const compiledTestDappRPC = readContractJSON('TestDapp');
