import React from "react";
import { Box, Menu } from "@chakra-ui/react";
import { MenuButton } from "@chakra-ui/react";
import { MenuList } from "@chakra-ui/react";
import { MenuItem } from "@chakra-ui/react";
import { Button } from "@radix-ui/themes";
import { LanguageSupportApi } from "./Language";
import { Text } from "@chakra-ui/react";

const LanguageSelectorBtn = () => {
  //entreis means which gives you the arr of the object
  const Languages = Object.entries(LanguageSupportApi);

  return (
    <div>
      <Box>
        <Menu>
          <MenuButton
            className=" bg-white text-black p-2 rounded-md"
            as={Button}
          >
            Languages
          </MenuButton>
          <MenuList>
            {Languages.map((lang, ver) => (
              <MenuItem key={lang}>
                {Languages}
                &nbsp;
                {/* text desing */}
                <Text as="span" color="gray.600" fontSize="sm">
                  {ver}
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </div>
  );
};

export default LanguageSelectorBtn;
