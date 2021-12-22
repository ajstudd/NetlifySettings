import "./styles.css";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Banner from "../components/banner";
import Resource from "../components/Resource";
import Footer from "../components/footer";
export default function App() {
  return (
    <div className="App">
      <Box position="relative">
        <Box>
          <Header />
          <Menu />
        </Box>
        <Box p={{ base: 4, lg: 0 }} top={"60%"} position="absolute" w="full">
          <Box m="0 auto" maxW="7xl">
            <Banner />
          </Box>
        </Box>
        <Box p={{ base: 4, lg: 0 }} top={"175%"} position="absolute" w="full">
          <Resource />
        </Box>
        <Box p={{ base: 4, lg: 0 }} top={"285%"} position="absolute" w="full">
          <Footer />
        </Box>
      </Box>
    </div>
  );
}
