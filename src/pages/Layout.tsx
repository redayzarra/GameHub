import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={0}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
