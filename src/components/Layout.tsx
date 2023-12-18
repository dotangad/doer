"use client";

import { ReactNode } from "react";
import Loading from "@/components/Loading";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Layout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();

  return (
    <Loading>
      <Box w="100vw" overflow="hidden">
        <Box maxW="1200px" mx="auto" py={8} px={8}>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center" columnGap={2}>
              <Image src="/logo.svg" alt="" h="30px" w="30px" />
              <Text
                casing={"uppercase"}
                fontSize="1.2rem"
                fontWeight="extrabold"
                color="gray.700"
                letterSpacing="1px"
                fontFamily={"var(--font-geist-mono)"}
              >
                Doer
              </Text>
            </Flex>
            {session ? (
              <Tooltip label="Click to sign out">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  columnGap={2}
                  cursor="pointer"
                  onClick={() => signOut()}
                >
                  <Text
                    fontSize="0.8rem"
                    color="gray.800"
                    letterSpacing="1px"
                    fontFamily={"var(--font-geist-mono)"}
                  >
                    {session.user?.email}
                  </Text>
                  {session.user?.image ? (
                    <Image
                      src={session.user?.image as string}
                      alt=""
                      h="35px"
                      w="35px"
                      userSelect={"none"}
                      rounded={"full"}
                    />
                  ) : (
                    <Avatar
                      name={session.user?.name as string}
                      src={session.user?.image as string}
                      h="35px"
                      w="35px"
                      userSelect={"none"}
                    />
                  )}
                </Flex>
              </Tooltip>
            ) : (
              <Button onClick={() => signIn()} colorScheme="purple">
                Sign in
              </Button>
            )}
          </Flex>

          <Box mt={8}>{children}</Box>
        </Box>
      </Box>
    </Loading>
  );
}
