import { Box, Button } from "@chakra-ui/react";
import SVGimg from "../assets/brandlogo.jsx";

function Banner() {
  return (
    <>
      <header>
        <Box
          d="flex"
          align-items="center"
          justifyContent="space-between"
          ml={6}
          mr={6}
        >
          <Box boxSize="95px">
            <SVGimg />
          </Box>
          <Box>
            <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">
              Login
            </Button>
            <Button colorScheme="gray.600" fontSize="sm" variant="link">
              Signup
            </Button>
          </Box>
        </Box>
      </header>
    </>
  );
}

export default Banner;
