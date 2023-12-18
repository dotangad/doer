"use client";

import Loading from "@/components/Loading";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <Box>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </Box>
  );
}
