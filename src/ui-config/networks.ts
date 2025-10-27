import { BaseNetworkConfig } from '../helpers/config/types';

export const SEPOLIA_CHAIN_ID = 11155111;

export const networkConfigs: Record<string, BaseNetworkConfig> = {
  [SEPOLIA_CHAIN_ID]: {
    name: 'Sepolia',
    publicJsonRPCUrl: ['https://ethereum-sepolia.publicnode.com', 'https://rpc.sepolia.org'],
    addresses: {
      walletBalanceProvider: '0x63200D91BE781f513893B86e84FfcEbd4BEb2848',
      uiPoolDataProvider: '0x90320fe489094F44Fad4270799cBCa240aE443A8',
    },
    protocolDataUrl:
      process.env.REACT_APP_PROTOCOL_DATA_URL ||
      'https://sepolia-api.thegraph.com/subgraphs/name/aave/protocol-v2',
    baseAsset: 'ETH',
    baseAssetWrappedAddress: '0x260c3eF1d747fCd520F7e25DfC9923e447263e3C',
    rewardTokenSymbol: 'AAVE',
    rewardTokenAddress: '0x0000000000000000000000000000000000000000',
    rewardTokenDecimals: 18,
    explorerLink: 'https://sepolia.etherscan.io',
    rpcOnly: false,
    isTestnet: true,
  },
} as const;
