import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import theme from "../theme";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="yellow"
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
        sx={{
          ".chakra-switch__thumb": {
            bg:
              colorMode === "dark"
                ? theme.colors.yellow[600]
                : theme.colors.gray[500],
          },
        }}
      />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
