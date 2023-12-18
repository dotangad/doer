"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Box>Loading...</Box>;
  }

  if (session) {
    return (
      <Box>
        <Box>Signed in as {session.user?.email}</Box>
        <Button onClick={() => signOut()}>Sign out</Button>
      </Box>
    );
  }

  return (
    <Box>
      <Button onClick={() => signIn()}>Sign in</Button>
    </Box>
  );
}
