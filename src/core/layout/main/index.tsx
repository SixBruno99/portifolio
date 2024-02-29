import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export function MainLayout() {
  return (
    <Box>
      <Header />
      <Flex
        width="full"
        minHeight="calc(100vh - 112px)"
        bgGradient="linear(to-b, #232D3F, #3A506B)"
      >
        <Outlet />
      </Flex>
      <Footer />
    </Box>
  );
}
