import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/YT_logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justify={"space-between"} padding="10px">
      <Image src={logo} boxSize="75px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
