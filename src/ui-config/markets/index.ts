import { ChainId } from '@aave/contract-helpers';
import { MarketDataType } from '../../helpers/config/types';
import { SEPOLIA_CHAIN_ID } from '../networks';

import * as logos from './images';

export enum CustomMarket {
  proto_sepolia = 'proto_sepolia',
}

export const marketsData: { [key in keyof typeof CustomMarket]: MarketDataType } = {
  [CustomMarket.proto_sepolia]: {
    chainId: SEPOLIA_CHAIN_ID as ChainId,
    logo: logos.aavev2Logo,
    activeLogo: logos.aavev2ActiveLogo,
    aTokenPrefix: 'A',
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0x3721e7f22433E640edfF49c3d2788046CFd7360C',
      LENDING_POOL: '0x4d5ca36eab6B68f5B08B374A0613fBB17dD034c6',
      WETH_GATEWAY: '0x50eB5847A83F8b013CE10621897fBAEE96Ff1541',
    },
  },
} as const;
