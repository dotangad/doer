// app/providers.tsx
"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { SessionProvider } from "next-auth/react";

const theme = extendTheme({});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CacheProvider>
        <SessionProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </SessionProvider>
      </CacheProvider>
    </>
  );
}
