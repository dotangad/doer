// app/providers.tsx
"use client";

import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";

const theme = extendBaseTheme({});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraBaseProvider>{children}</ChakraBaseProvider>;
}
