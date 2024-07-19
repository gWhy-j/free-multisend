'use client';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
  WagmiProvider,
  cookieStorage,
  createStorage,
  cookieToInitialState,
  type State,
} from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { NextUIProvider } from '@nextui-org/react';

const config = getDefaultConfig({
  appName: 'Token Pipeline',
  projectId: '60ae94c93ecd2ecfe87c1898affc643c',
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
});

const queryClient = new QueryClient();
export default function Provider({
  children,
  cookie,
}: {
  children: React.ReactNode;
  cookie?: string | null;
}) {
  const initialState = cookieToInitialState(config, cookie);

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider locale="en">
          <NextUIProvider>{children}</NextUIProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
