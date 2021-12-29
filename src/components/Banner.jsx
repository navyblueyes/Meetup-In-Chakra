import {
  Heading,
  Box,
  Button,
  Container,
  Text,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import SVGimg from "../assets/brandlogo.jsx";
import Illustration from "../assets/illustration.jsx";
import Cat1 from "../assets/category1.webp";
import Cat2 from "../assets/category2.webp";
import Cat3 from "../assets/category3.webp";

function Banner() {
  return (
    <>
      {/* Banner */}
      <header>
        <Box
          d="flex"
          align-items="center"
          justifyContent="space-between"
          ml={6}
          mr={6}
          mt={10}
        >
          <Box w="10%">
            <SVGimg />
          </Box>
          <Box>
            <Button
              pr={3}
              w="5vw"
              colorScheme="gray.600"
              fontSize="sm"
              variant="link"
            >
              Login
            </Button>
            <Button colorScheme="gray.600" w="5vw" fontSize="sm" variant="link">
              Signup
            </Button>
          </Box>
        </Box>
      </header>

      {/* Main Punch Line */}
      <Box>
        <Container maxWidth="container.xl">
          <Box d="flex" alignItems="center" py="20" flexDirection="row">
            <Box>
              <Heading>
                <Box>Celebrating 20 years of real connections on Meetup</Box>
              </Heading>
              <Box mt="6" fontWeight="medium">
                <Text>
                  Whatever you’re looking to do this year, Meetup can help. For
                  20 years, people have turned to Meetup to meet people, make
                  friends, find support, grow a business, and explore their
                  interests. Thousands of events are happening every day—join
                  the fun.
                </Text>
              </Box>
            </Box>
            <Box w="100%">
              <Illustration />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Punch Line */}
      <Container maxW="container.x1" mt={10}>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <Box>
            Make new friends{" "}
            <Image w="100%" borderRadius="lg" src={Cat1} alt="category one" />
          </Box>
          <Box>
            Explore the outdoors{" "}
            <Image w="100%" borderRadius="lg" src={Cat2} alt="category two" />
          </Box>
          <Box>
            Connect over tech{" "}
            <Image w="100%" borderRadius="lg" src={Cat3} alt="category three" />
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Banner;
