"use client";

import { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { Box, Flex, Image, Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Loading({ children }: { children: ReactNode }) {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <Flex
        h="100vh"
        w="100vw"
        alignItems="center"
        justifyContent="center"
        bg="purple.50"
      >
        <Box>
          <motion.img
            src="/logo.svg"
            alt=""
            style={{
              height: "80px",
              width: "80px",
            }}
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ repeat: Infinity }}
          />
        </Box>
      </Flex>
    );
  }

  return (
    <Box w="100vw" minH="100vh" bg="purple.50">
      {children}
    </Box>
  );
}
